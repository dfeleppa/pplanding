#!/usr/bin/env bash
# Planet Pooch SEO migration — pre-launch QA
#
# Runs against staging to catch the launch-day-disaster class of bugs:
# missing titles, leaking noindex tags, 404s on URLs that should redirect,
# and a missing/incomplete sitemap. Run this BEFORE cutting DNS.
#
# Usage:
#   STAGING_URL=https://your-staging-host ./seo/pre-launch-qa.sh
#
# Requires: bash, curl, awk, grep. (No Python or Node needed.)

set -uo pipefail

STAGING_URL="${STAGING_URL:-https://staging.planet-pooch.com}"
INVENTORY="${INVENTORY:-seo/url-inventory.csv}"
PASS_COUNT=0
FAIL_COUNT=0
LOG_FILE="seo/pre-launch-qa.log"
> "$LOG_FILE"

log() {
  echo "$@" | tee -a "$LOG_FILE"
}

pass() {
  PASS_COUNT=$((PASS_COUNT + 1))
  log "  PASS: $1"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  log "  FAIL: $1"
}

heading() {
  log ""
  log "=== $1 ==="
}

# ----- 1. robots.txt -----
heading "robots.txt"
ROBOTS=$(curl -sS "$STAGING_URL/robots.txt")
if [ -z "$ROBOTS" ]; then
  fail "robots.txt is empty or unreachable"
elif echo "$ROBOTS" | grep -qi "Disallow: /\s*$"; then
  fail "robots.txt blocks all crawlers (likely staging leak): $ROBOTS"
elif echo "$ROBOTS" | grep -qi "sitemap"; then
  pass "robots.txt allows crawling and references a sitemap"
else
  fail "robots.txt is missing the Sitemap directive"
fi

# ----- 2. sitemap.xml -----
heading "sitemap.xml"
SITEMAP=$(curl -sS "$STAGING_URL/sitemap.xml")
URL_COUNT=$(echo "$SITEMAP" | grep -c "<url>")
if [ "$URL_COUNT" -lt 100 ]; then
  fail "sitemap.xml has only $URL_COUNT <url> entries (expected 150+)"
else
  pass "sitemap.xml has $URL_COUNT <url> entries"
fi

# ----- 3. noindex leak check -----
heading "noindex tag leaks"
NOINDEX_PAGES=()
for path in "/" "/mobile-grooming" "/dog-daycare" "/dog-boarding" "/dog-training" "/grooming-pricing" "/services-pricing" "/about-us" "/faqs"; do
  body=$(curl -sS "$STAGING_URL$path")
  if echo "$body" | grep -qi 'name="robots"[^>]*content="[^"]*noindex'; then
    NOINDEX_PAGES+=("$path")
  fi
done
if [ "${#NOINDEX_PAGES[@]}" -eq 0 ]; then
  pass "No noindex tags found on critical pages"
else
  for p in "${NOINDEX_PAGES[@]}"; do
    fail "noindex tag found on $p"
  done
fi

# ----- 4. URL inventory: 200 or 301, no 404 -----
heading "URL inventory health"
if [ -f "$INVENTORY" ]; then
  INVENTORY_FAILS=0
  while IFS=, read -r path rest; do
    [ "$path" = "old_url" ] && continue                    # header
    [ -z "$path" ] && continue
    path="${path//\"/}"                                     # strip quotes
    [ "${path:0:1}" != "/" ] && continue                   # only paths
    code=$(curl -sS -o /dev/null -w "%{http_code}" -L "$STAGING_URL$path")
    if [ "$code" != "200" ] && [ "$code" != "301" ] && [ "$code" != "308" ]; then
      fail "$path returned $code"
      INVENTORY_FAILS=$((INVENTORY_FAILS + 1))
    fi
  done < "$INVENTORY"
  if [ "$INVENTORY_FAILS" -eq 0 ]; then
    pass "All URLs in inventory return 200 or 301"
  fi
else
  fail "URL inventory not found at $INVENTORY"
fi

# ----- 5. Title tag presence on critical pages -----
heading "Critical pages have <title>"
for path in "/" "/mobile-grooming" "/dog-daycare" "/dog-boarding" "/dog-training" "/services-pricing" "/grooming-pricing" "/about-us"; do
  title=$(curl -sS "$STAGING_URL$path" | grep -oE '<title>[^<]+</title>' | head -1)
  if [ -z "$title" ]; then
    fail "$path has no <title> tag"
  else
    pass "$path has title: $title"
  fi
done

# ----- 6. Homepage title contains the primary keyword -----
heading "Homepage primary keyword"
HOME_TITLE=$(curl -sS "$STAGING_URL/" | grep -oE '<title>[^<]+</title>' | head -1)
if echo "$HOME_TITLE" | grep -qi "Mobile Pet Grooming Long Island"; then
  pass "Homepage title contains 'Mobile Pet Grooming Long Island'"
else
  fail "Homepage title is missing the primary keyword: $HOME_TITLE"
fi

# ----- 7. LocalBusiness schema on homepage -----
heading "LocalBusiness JSON-LD"
HOME_BODY=$(curl -sS "$STAGING_URL/")
if echo "$HOME_BODY" | grep -q '"@type":"LocalBusiness"' || echo "$HOME_BODY" | grep -q '"@type": *"LocalBusiness"'; then
  pass "Homepage has LocalBusiness JSON-LD"
else
  fail "Homepage is missing LocalBusiness JSON-LD"
fi
if echo "$HOME_BODY" | grep -q '"telephone":"+15169933603"' || echo "$HOME_BODY" | grep -q '"telephone": *"+15169933603"'; then
  pass "LocalBusiness telephone matches (516) 993-3603"
else
  fail "LocalBusiness telephone does not match +15169933603"
fi

# ----- 8. Canonical tag presence -----
heading "Canonical tags"
for path in "/" "/mobile-grooming" "/dog-daycare" "/services-pricing" "/grooming-packages"; do
  canonical=$(curl -sS "$STAGING_URL$path" | grep -oE '<link rel="canonical" href="[^"]+"' | head -1)
  if [ -z "$canonical" ]; then
    fail "$path has no canonical link"
  else
    pass "$path canonical: $canonical"
  fi
done

# ----- 9. Image domain check (no broken WP wp-content URLs) -----
heading "Old WP image URLs"
WP_REFS=$(curl -sS "$STAGING_URL/" | grep -oE 'planet-pooch\.com/wp-content/[^"]+' | head -3)
if [ -n "$WP_REFS" ]; then
  fail "Homepage still references WP wp-content URLs (verify image redirects):"
  echo "$WP_REFS" | tee -a "$LOG_FILE"
else
  pass "Homepage has no /wp-content/ references"
fi

# ----- 10. Redirect map sanity check -----
heading "Junk URL redirects"
for junk in "/test" "/inquiry2" "/login" "/booking" "/spa-services-2"; do
  code=$(curl -sS -o /dev/null -w "%{http_code}" "$STAGING_URL$junk")
  if [ "$code" = "301" ] || [ "$code" = "308" ]; then
    pass "$junk -> 301/308 (redirect map OK)"
  else
    fail "$junk returned $code (expected 301/308)"
  fi
done

# ----- Summary -----
heading "Summary"
log "PASS: $PASS_COUNT"
log "FAIL: $FAIL_COUNT"

if [ "$FAIL_COUNT" -gt 0 ]; then
  log ""
  log "FIX FAILURES BEFORE LAUNCHING. Full log: $LOG_FILE"
  exit 1
fi

log ""
log "All checks passed. Safe to launch."
exit 0
