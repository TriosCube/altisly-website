#!/usr/bin/env bash
# Traffic report from Caddy's own access logs.
#
#   ssh opc@<host> 'bash -s' < scripts/traffic.sh          # last 7 days
#   ssh opc@<host> 'bash -s' < scripts/traffic.sh -- 1     # last 24 hours
#
# No third party, no cookie, no consent banner: the server already sees every
# request, so this is the same data a tracker would collect minus the tracking.
set -uo pipefail
DAYS="${1:-7}"
SINCE=$(date -u -d "-${DAYS} days" +%s 2>/dev/null || date -u -v-"${DAYS}"d +%s)

BOTS='bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|curl|wget|python-requests|monitor|uptime|healthcheck'

for LOG in /var/log/caddy/*.log; do
  [ -f "$LOG" ] || continue
  SITE=$(basename "$LOG" .log)
  echo "=============================================="
  echo " $SITE — last $DAYS day(s)"
  echo "=============================================="

  DATA=$(sudo cat "$LOG" 2>/dev/null | python3 -c "
import sys, json, re, time
since = $SINCE
bots = re.compile(r'$BOTS', re.I)
rows = []
for line in sys.stdin:
    try: e = json.loads(line)
    except Exception: continue
    if e.get('ts', 0) < since: continue
    req = e.get('request', {})
    ua = ' '.join(req.get('headers', {}).get('User-Agent', []))
    if bots.search(ua): continue
    uri = req.get('uri', '')
    if uri.startswith(('/_nuxt/', '/images/', '/favicon', '/og.png', '/robots', '/sitemap')): continue
    if e.get('status', 0) >= 400: continue
    ref = ' '.join(req.get('headers', {}).get('Referer', ['']))
    rows.append((uri, req.get('client_ip') or e.get('request', {}).get('remote_ip', ''), ref))
print(json.dumps(rows))
" 2>/dev/null)

  python3 - "$DATA" <<'PY'
import sys, json
from collections import Counter
try: rows = json.loads(sys.argv[1] or '[]')
except Exception: rows = []
if not rows:
    print("  no human traffic recorded yet\n"); raise SystemExit
print(f"  views          {len(rows)}")
print(f"  unique callers {len(set(r[1] for r in rows))}\n")
print("  top pages")
for p, n in Counter(r[0] for r in rows).most_common(8):
    print(f"    {n:>5}  {p}")
refs = Counter(r[2].split('/')[2] for r in rows if r[2].startswith('http') and 'altisly' not in r[2])
if refs:
    print("\n  referrers")
    for d, n in refs.most_common(5):
        print(f"    {n:>5}  {d}")
print()
PY
done
