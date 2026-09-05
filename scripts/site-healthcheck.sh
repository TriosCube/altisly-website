#!/usr/bin/env bash
# Checks both sites, restarts a dead service, and emails on failure.
#
# Runs from a systemd timer. Two purposes: you hear about an outage the same
# hour rather than months later, and the outbound checks keep the instance's
# network counters off the floor, which is one of the two thresholds Oracle
# uses to decide an Always Free instance is idle.
#
# It is not a substitute for upgrading to Pay As You Go, which is the only
# documented exemption from reclamation.
set -uo pipefail

SITES="altisly:https://altisly.com isura:https://isura.altisly.com"
ENV_FILE=/etc/altisly/env
FAILED=""

for entry in $SITES; do
  name="${entry%%:*}"
  url="${entry#*:}"
  code=$(curl -s -o /dev/null -m 25 -w '%{http_code}' "$url" || echo 000)
  if [ "$code" = "200" ]; then
    logger -t site-healthcheck "$name OK ($code)"
  else
    logger -t site-healthcheck "$name FAILED ($code) - restarting"
    systemctl restart "$name" 2>/dev/null || true
    sleep 12
    recheck=$(curl -s -o /dev/null -m 25 -w '%{http_code}' "$url" || echo 000)
    if [ "$recheck" = "200" ]; then
      logger -t site-healthcheck "$name recovered after restart"
    else
      FAILED="$FAILED $name($recheck)"
    fi
  fi
done

[ -z "$FAILED" ] && exit 0

# Only alert when a restart did not fix it, so this stays quiet in normal use.
[ -r "$ENV_FILE" ] || { logger -t site-healthcheck "no env file; cannot alert"; exit 1; }
set -a; . "$ENV_FILE"; set +a
USER_ADDR="${ENQUIRY_SMTP_USER:-}"
PASS="${ENQUIRY_SMTP_PASS:-}"
[ -n "$USER_ADDR" ] && [ -n "$PASS" ] || { logger -t site-healthcheck "no smtp creds; cannot alert"; exit 1; }

TMP=$(mktemp)
{
  printf 'From: %s\n' "$USER_ADDR"
  printf 'To: %s\n' "$USER_ADDR"
  printf 'Subject: Site down:%s\n\n' "$FAILED"
  printf 'Host %s could not serve:%s\n\n' "$(hostname)" "$FAILED"
  printf 'A restart was attempted and did not recover it.\n'
  printf 'Checked at %s\n' "$(date -u +'%Y-%m-%d %H:%M:%SZ')"
} > "$TMP"

curl -s --url "smtps://smtp.hostinger.com:465" --ssl-reqd \
  --mail-from "$USER_ADDR" --mail-rcpt "$USER_ADDR" \
  --user "$USER_ADDR:$PASS" --upload-file "$TMP" \
  && logger -t site-healthcheck "alert sent" \
  || logger -t site-healthcheck "alert send failed"
rm -f "$TMP"
exit 1
