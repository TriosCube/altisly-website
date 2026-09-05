#!/usr/bin/env bash
# Prepares a host to serve altisly-website using self-contained binaries.
#
#   curl -fsSL https://raw.githubusercontent.com/TriosCube/altisly-website/main/scripts/bootstrap-host.sh | bash
#
# Deliberately avoids the system package manager. On the free-tier shapes this
# runs on, dnf's dependency solver needs more resident memory than the box has
# and stalls indefinitely. Node and Caddy both ship as static binaries, so curl
# and tar are the only tools required.
#
# Caddy also terminates TLS and obtains its own certificates, which removes
# nginx, certbot and the certificate bootstrap dance entirely.
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/altisly-website}"
NODE_MAJOR=22

case "$(uname -m)" in
  x86_64)  ARCH=x64;   CADDY_ARCH=amd64 ;;
  aarch64) ARCH=arm64; CADDY_ARCH=arm64 ;;
  *) echo "unsupported architecture: $(uname -m)" >&2; exit 1 ;;
esac

echo ">>> Ensuring swap..."
if [ ! -f /swapfile ]; then
  sudo fallocate -l 2G /swapfile || sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
  sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab >/dev/null
fi

echo ">>> Installing Node ${NODE_MAJOR} (static tarball)..."
if ! /opt/node/bin/node --version 2>/dev/null | grep -q "^v${NODE_MAJOR}\."; then
  NODE_FILE="$(curl -fsSL "https://nodejs.org/dist/latest-v${NODE_MAJOR}.x/" \
    | grep -o "node-v${NODE_MAJOR}\.[0-9.]*-linux-${ARCH}\.tar\.gz" | head -1)"
  [ -n "$NODE_FILE" ] || { echo "could not resolve a Node tarball" >&2; exit 1; }
  echo "    $NODE_FILE"
  curl -fsSL "https://nodejs.org/dist/latest-v${NODE_MAJOR}.x/${NODE_FILE}" -o /tmp/node.tar.gz
  sudo rm -rf /opt/node && sudo mkdir -p /opt/node
  sudo tar -xzf /tmp/node.tar.gz -C /opt/node --strip-components=1
  rm -f /tmp/node.tar.gz
  sudo ln -sf /opt/node/bin/node /usr/local/bin/node
fi
echo "    node $(/opt/node/bin/node --version)"

echo ">>> Installing Caddy (static binary)..."
if ! command -v caddy >/dev/null 2>&1; then
  curl -fsSL "https://caddyserver.com/api/download?os=linux&arch=${CADDY_ARCH}" -o /tmp/caddy
  sudo install -m 0755 /tmp/caddy /usr/local/bin/caddy
  rm -f /tmp/caddy
  sudo useradd --system --home /var/lib/caddy --create-home --shell /usr/sbin/nologin caddy 2>/dev/null || true
  # Lets the unprivileged caddy user bind 80/443 without running as root.
  sudo setcap cap_net_bind_service=+ep /usr/local/bin/caddy 2>/dev/null || true
fi
echo "    $(caddy version 2>/dev/null | head -1)"

echo ">>> Opening ports 80 and 443 on the host firewall..."
if command -v firewall-cmd >/dev/null 2>&1 && sudo firewall-cmd --state >/dev/null 2>&1; then
  sudo firewall-cmd --permanent --add-service=http  >/dev/null
  sudo firewall-cmd --permanent --add-service=https >/dev/null
  sudo firewall-cmd --reload >/dev/null
fi

mkdir -p "$APP_DIR/data" "$APP_DIR/build-output/output"
sudo mkdir -p /etc/caddy

echo
echo "== READY =="
echo "  node:  $(/opt/node/bin/node --version)"
echo "  caddy: $(caddy version 2>/dev/null | head -1)"
echo "  app:   $APP_DIR"
