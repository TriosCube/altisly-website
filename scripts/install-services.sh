#!/usr/bin/env bash
# Installs the systemd units and Caddy config. Idempotent.
#
#   CADDY_EMAIL=hello@altisly.com ./scripts/install-services.sh
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/altisly-website}"
APP_USER="${APP_USER:-$(id -un)}"
EMAIL="${CADDY_EMAIL:-}"
DOMAIN="${DOMAIN:-altisly.com}"

[ -n "$EMAIL" ] || { echo "Set CADDY_EMAIL" >&2; exit 1; }

# process.cwd() must be APP_DIR, not the build output: postsDb and enquiriesDb
# resolve their storage as cwd/data, and that has to survive a redeploy.
sudo tee /etc/systemd/system/altisly.service >/dev/null <<UNIT
[Unit]
Description=altisly-website (Nuxt)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=${APP_USER}
WorkingDirectory=${APP_DIR}
EnvironmentFile=-${APP_DIR}/.env.prod
Environment=NODE_ENV=production
Environment=HOST=127.0.0.1
Environment=PORT=3300
Environment=NITRO_HOST=127.0.0.1
Environment=NITRO_PORT=3300
ExecStart=/opt/node/bin/node ${APP_DIR}/build-output/output/server/index.mjs
Restart=always
RestartSec=3
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
UNIT

sudo tee /etc/caddy/Caddyfile >/dev/null <<CADDYFILE
{
	email ${EMAIL}
}

${DOMAIN}, www.${DOMAIN} {
	encode gzip zstd
	reverse_proxy 127.0.0.1:3300
}
CADDYFILE

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

sudo systemctl daemon-reload
sudo systemctl enable altisly caddy >/dev/null 2>&1 || true
echo "services installed"
