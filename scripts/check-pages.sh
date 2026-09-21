#!/usr/bin/env bash
# Guard GitHub Pages: live site is github.io until custom-domain DNS exists.
set -euo pipefail
cd "$(dirname "$0")/.."

fail() { echo "check-pages: $*" >&2; exit 1; }

# A root CNAME 301s github.io to that host. portfolio.sunkaraops.com DNS is not
# available from this repo — do not enforce a custom domain until it resolves.
if [[ -e CNAME ]]; then
  fail "root CNAME present; remove it until portfolio.sunkaraops.com DNS resolves (it 301s github.io to a dead host)"
fi
if [[ -e public/CNAME ]]; then
  fail "public/CNAME present; Vite would copy it to dist/ and Pages would 301 github.io to a dead host"
fi
test -f docs/CNAME.example || fail "missing docs/CNAME.example (copy to /CNAME and public/CNAME only after DNS)"
grep -qx 'portfolio.sunkaraops.com' docs/CNAME.example || fail "docs/CNAME.example must contain only portfolio.sunkaraops.com"

grep -q 'canonical" href="https://sunkara1111.github.io/portfolio/' index.html || fail "canonical must be the live github.io URL"
grep -q 'https://sunkara1111.github.io/portfolio/' public/sitemap.xml || fail "sitemap must list github.io"
if grep -q 'https://portfolio.sunkaraops.com/' public/sitemap.xml index.html public/robots.txt public/projects.html public/404.html src/data/site.js; then
  fail "canonical/sitemap/robots must not list portfolio.sunkaraops.com until DNS resolves"
fi
grep -q 'sunkara1111.github.io/portfolio' public/robots.txt || fail "robots.txt must mention github.io"
grep -qi 're-add' README.md || fail "README must say to re-add CNAME only after DNS exists"
grep -q 'https://sunkara1111.github.io/portfolio/' README.md || fail "README must document the github.io live URL"

if [[ -d dist && -e dist/CNAME ]]; then
  fail "dist/CNAME present; do not publish a CNAME until DNS exists"
fi

echo "check-pages: ok"
