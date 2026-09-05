#!/usr/bin/env bash
# First-time TLS issuance for altisly.com.
#
# nginx will not start without a certificate, and certbot's webroot challenge
# needs nginx serving. This breaks the cycle with a throwaway self-signed cert,
# then replaces it with the real one.
#
# Requires: altisly.com and www.altisly.com already resolving to this host,
# and ports 80/443 open in the Oracle security list.
set -euo pipefail

DOMAIN="altisly.com"
EMAIL="${CERTBOT_EMAIL:-}"
COMPOSE="sudo podman-compose -f docker-compose.prod.yml"

[ -n "$EMAIL" ] || { echo "Set CERTBOT_EMAIL first: export CERTBOT_EMAIL=you@example.com" >&2; exit 1; }

echo ">>> Creating throwaway self-signed cert so nginx can boot..."
$COMPOSE run --rm --entrypoint sh certbot -c "
  mkdir -p /etc/letsencrypt/live/$DOMAIN
  openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout /etc/letsencrypt/live/$DOMAIN/privkey.pem \
    -out    /etc/letsencrypt/live/$DOMAIN/fullchain.pem \
    -subj '/CN=$DOMAIN'
"

echo ">>> Starting the stack..."
$COMPOSE up -d altisly-website nginx

echo ">>> Waiting for nginx to answer on :80..."
for _ in $(seq 1 30); do
  curl -sf -o /dev/null "http://127.0.0.1/.well-known/acme-challenge/" && break || sleep 2
done

echo ">>> Requesting the real certificate..."
$COMPOSE run --rm --entrypoint sh certbot -c "
  rm -rf /etc/letsencrypt/live/$DOMAIN /etc/letsencrypt/archive/$DOMAIN /etc/letsencrypt/renewal/$DOMAIN.conf
  certbot certonly --webroot --webroot-path=/var/www/certbot \
    --email '$EMAIL' --agree-tos --no-eff-email \
    -d '$DOMAIN' -d 'www.$DOMAIN'
"

echo ">>> Reloading nginx with the real cert..."
sudo podman exec altisly-nginx nginx -s reload

echo ">>> Bringing up the renewal loop..."
$COMPOSE up -d certbot

echo "== DONE == https://$DOMAIN should now serve a valid certificate."
