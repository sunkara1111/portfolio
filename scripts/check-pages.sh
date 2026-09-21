#!/usr/bin/env bash
# Fail the build if a Pages CNAME would 301 github.io to a custom domain.
# Live site must stay https://sunkara1111.github.io/portfolio/ until DNS exists.
set -euo pipefail
cd "$(dirname "$0")/.."

fail() { echo "check-pages: $*" >&2; exit 1; }

if [[ -e CNAME ]]; then
  fail "root CNAME present — GitHub Pages would 301 github.io to that host"
fi
if [[ -e public/CNAME ]]; then
  fail "public/CNAME present — Vite copies it to dist/ and Pages 301s github.io away"
fi
if [[ -d dist && -e dist/CNAME ]]; then
  fail "dist/CNAME present — do not publish a CNAME until DNS exists"
fi

# Template only. Never a live hostname-only CNAME file.
test -f CNAME.example || fail "missing CNAME.example (template; do not copy until DNS resolves)"
if grep -qvE '^#|^$' CNAME.example; then
  fail "CNAME.example must be comments only — a real hostname here is too easy to copy into public/CNAME"
fi
grep -q 'CNAME' CNAME.example || fail "CNAME.example must document the registrar CNAME record"
grep -q 'sunkara1111.github.io' CNAME.example || fail "CNAME.example target must be sunkara1111.github.io"

grep -q 'canonical" href="https://sunkara1111.github.io/portfolio/' index.html \
  || fail "canonical must be the live github.io URL"
grep -q 'https://sunkara1111.github.io/portfolio/' public/sitemap.xml \
  || fail "sitemap must list github.io"
grep -q 'sunkara1111.github.io/portfolio' public/robots.txt \
  || fail "robots.txt must mention github.io"
grep -q 'https://sunkara1111.github.io/portfolio/' README.md \
  || fail "README must document the github.io live URL"
grep -q 'sunkara1111.github.io' README.md \
  || fail "README must document CNAME target sunkara1111.github.io"

# README may mention the dead hostname as the thing not to use. Live origin files must not.
if grep -nE 'https?://portfolio\.sunkaraops\.com' \
    index.html public/sitemap.xml public/robots.txt public/projects.html src/data/site.js; then
  fail "do not point canonical/sitemap/robots/siteUrl at portfolio.sunkaraops.com until DNS resolves"
fi

echo "check-pages: ok (no CNAME; live origin is github.io/portfolio)"
