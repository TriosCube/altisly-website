#!/usr/bin/env bash
# Prepares a fresh Oracle instance to run altisly-website.
# Run this once, on the new box, before the first deploy.
#
#   curl -fsSL https://raw.githubusercontent.com/TriosCube/altisly-website/main/scripts/bootstrap-host.sh | bash
#
# Works on Ubuntu 22.04/24.04 and Oracle Linux 8/9.
set -euo pipefail

echo ">>> Detecting distribution..."
. /etc/os-release
echo "    $PRETTY_NAME"

if command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y ca-certificates curl gnupg rsync
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
    | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $VERSION_CODENAME stable" \
    | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update -y
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
else
  sudo dnf install -y dnf-utils rsync
  sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
fi

echo ">>> Enabling Docker..."
sudo systemctl enable --now docker

echo ">>> Opening ports 80 and 443 on the host firewall..."
# Oracle images ship with the instance firewall closed to everything but 22.
# The VCN security list must ALSO be opened in the console; this is only the host side.
if command -v firewall-cmd >/dev/null 2>&1; then
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --permanent --add-service=https
  sudo firewall-cmd --reload
else
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80  -j ACCEPT
  sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
  command -v netfilter-persistent >/dev/null 2>&1 && sudo netfilter-persistent save || \
    sudo sh -c 'iptables-save > /etc/iptables/rules.v4' 2>/dev/null || true
fi

echo ">>> Creating the app directory..."
mkdir -p "$HOME/altisly-website"

echo
echo "== READY =="
echo "  docker:  $(sudo docker --version)"
echo "  compose: $(sudo docker compose version --short 2>/dev/null || echo 'plugin installed')"
echo "  app dir: $HOME/altisly-website"
echo
echo "Next: re-run the Deploy Oracle workflow, then scripts/init-cert.sh"
