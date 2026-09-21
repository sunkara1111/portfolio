#!/usr/bin/env bash
# Clear GitHub Pages custom domain so github.io/portfolio stops 301ing.
# Requires a repo *admin* token (the Cursor GitHub App token returns 403).
#
# Usage (as repo owner / admin):
#   gh auth login
#   bash scripts/clear-pages-custom-domain.sh
set -euo pipefail

REPO="${REPO:-sunkara1111/portfolio}"

echo "Current Pages config:"
gh api "repos/${REPO}/pages" --jq '{cname,html_url,https_enforced,build_type}'

cname="$(gh api "repos/${REPO}/pages" --jq '.cname // empty')"
if [[ -z "${cname}" ]]; then
  echo "No custom domain is set. Nothing to clear."
  exit 0
fi

echo "Removing custom domain: ${cname}"
gh api --method PUT "repos/${REPO}/pages" --input - <<'EOF'
{"cname":null}
EOF

echo "Updated Pages config:"
gh api "repos/${REPO}/pages" --jq '{cname,html_url,https_enforced,build_type}'

echo
echo "Verify (allow a minute for CDN):"
echo "  curl -sI https://sunkara1111.github.io/portfolio/ | grep -Ei 'HTTP/|location'"
echo "Expect HTTP 200 and no Location to portfolio.sunkaraops.com"
