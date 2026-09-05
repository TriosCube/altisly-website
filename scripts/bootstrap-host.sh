#!/usr/bin/env bash
# Prepares a fresh Oracle instance to run altisly-website.
#
#   curl -fsSL https://raw.githubusercontent.com/TriosCube/altisly-website/main/scripts/bootstrap-host.sh | bash
#
# Uses podman rather than docker: it is the native runtime on Oracle Linux,
# needs no daemon, and matters on a shape with under 512 MB of usable RAM.
set -euo pipefail

echo ">>> Detecting distribution..."
. /etc/os-release
echo "    $PRETTY_NAME"

# Swap must exist before any package work. dnf gets OOM-killed parsing repo
# metadata on this shape otherwise.
echo ">>> Ensuring 2G swap..."
if [ ! -f /swapfile ]; then
  sudo fallocate -l 2G /swapfile || sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab > /dev/null
fi
free -h | awk '/Swap/{print "    swap: "$2}'

if command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y podman podman-docker rsync curl
  PIP=python3-pip
  sudo apt-get install -y "$PIP"
else
  # Ksplice and the OCI repos carry ~200MB of metadata this box cannot afford.
  DNF="sudo dnf --disablerepo=ol9_ksplice --setopt=keepcache=0"
  # docker-ce and podman cannot coexist; drop it if a previous run installed it.
  if rpm -q docker-ce >/dev/null 2>&1; then
    echo ">>> Removing docker-ce in favour of podman..."
    $DNF remove -y docker-ce docker-ce-cli containerd.io docker-compose-plugin || true
  fi
  $DNF install -y podman podman-docker rsync python3-pip
fi

echo ">>> Installing a compose provider..."
if ! command -v podman-compose >/dev/null 2>&1; then
  sudo python3 -m pip install --quiet podman-compose || {
    echo "pip install failed; trying the distro package" >&2
    sudo dnf install -y podman-compose || true
  }
fi

echo ">>> Enabling the podman socket (docker-compatible API)..."
sudo systemctl enable --now podman.socket 2>/dev/null || true

echo ">>> Opening ports 80 and 443 on the host firewall..."
# The VCN security list must ALSO allow these; this is only the host side.
if command -v firewall-cmd >/dev/null 2>&1 && sudo firewall-cmd --state >/dev/null 2>&1; then
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https
  sudo firewall-cmd --reload
else
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80  -j ACCEPT
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
  command -v netfilter-persistent >/dev/null 2>&1 && sudo netfilter-persistent save || \
    sudo sh -c 'iptables-save > /etc/iptables/rules.v4' 2>/dev/null || true
fi

# Rootful podman binds 80/443 directly, so no unprivileged-port tuning needed.
mkdir -p "$HOME/altisly-website"

echo
echo "== READY =="
echo "  podman:  $(sudo podman --version 2>/dev/null || echo MISSING)"
echo "  compose: $(podman-compose --version 2>/dev/null | head -1 || echo MISSING)"
echo "  swap:    $(free -h | awk '/Swap/{print $2}')"
echo "  ports:   $(sudo firewall-cmd --list-services 2>/dev/null || echo 'iptables')"
