#!/usr/bin/env bash
# Installs the systemd unit and Caddy vhost for one site. Idempotent.
#
#   SITE=altisly DOMAIN=altisly.com PORT=3300 CADDY_EMAIL=you@example.com \
#     ./scripts/install-services.sh
#
# Several sites share this host, so the Caddy config is split: one file per
# site under conf.d, and deploying one never rewrites another's vhost.
set -euo pipefail

SITE="${SITE:-altisly}"
DOMAIN="${DOMAIN:-altisly.com}"
PORT="${PORT:-3300}"
APP_DIR="${APP_DIR:-$HOME/$SITE-website}"
APP_USER="${APP_USER:-$(id -un)}"
EMAIL="${CADDY_EMAIL:-}"
WWW="${WWW:-yes}"

[ -n "$EMAIL" ] || { echo "Set CADDY_EMAIL" >&2; exit 1; }

# WorkingDirectory is the app root, not the build output: postsDb and
# enquiriesDb resolve storage as cwd/data, which must survive a redeploy.
sudo tee "/etc/systemd/system/${SITE}.service" >/dev/null <<UNIT
[Unit]
Description=${SITE} (Nuxt)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=${APP_USER}
WorkingDirectory=${APP_DIR}
EnvironmentFile=-${APP_DIR}/.env.prod
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=${PORT}
Environment=NITRO_HOST=127.0.0.1
Environment=NITRO_PORT=${PORT}
ExecStart=/opt/node/bin/node ${APP_DIR}/build-output/output/server/index.mjs
Restart=always
RestartSec=3
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
UNIT

sudo mkdir -p /etc/caddy/conf.d
sudo tee /etc/caddy/Caddyfile >/dev/null <<CADDYFILE
{
	email ${EMAIL}
}

import /etc/caddy/conf.d/*.caddy
CADDYFILE

if [ "$WWW" = "yes" ]; then HOSTS="${DOMAIN}, www.${DOMAIN}"; else HOSTS="${DOMAIN}"; fi
sudo tee "/etc/caddy/conf.d/${SITE}.caddy" >/dev/null <<VHOST
${HOSTS} {
	encode gzip zstd
	reverse_proxy 127.0.0.1:${PORT}
}
VHOST

sudo tee /etc/systemd/system/caddy.service >/dev/null <<UNIT
[Unit]
Description=Caddy
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
User=caddy
Group=caddy
ExecStart=/usr/local/bin/caddy run --environ --config /etc/caddy/Caddyfile
ExecReload=/usr/local/bin/caddy reload --config /etc/caddy/Caddyfile --force
TimeoutStopSec=5s
LimitNOFILE=1048576
PrivateTmp=true
ProtectSystem=full
AmbientCapabilities=CAP_NET_BIND_SERVICE

[Install]
WantedBy=multi-user.target
UNIT

# The deploy step runs under umask 077 so the env file lands private; Caddy
# runs unprivileged and must still be able to read its own config.
sudo chmod 0755 /etc/caddy /etc/caddy/conf.d
sudo chmod 0644 /etc/caddy/Caddyfile
sudo chmod 0644 /etc/caddy/conf.d/*.caddy
sudo chown -R caddy:caddy /var/lib/caddy

sudo systemctl daemon-reload
sudo systemctl enable "${SITE}" caddy >/dev/null 2>&1 || true
echo "services installed for ${SITE} (${DOMAIN} -> 127.0.0.1:${PORT})"
