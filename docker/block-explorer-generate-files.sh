#!/bin/bash

STATIC_DIR="/usr/share/nginx/html"

# Automatically populate the ENIVORNMENT_NAME with "mainnet" if it is not
# set.
ENVIRONMENT_NAME="${ENVIRONMENT_NAME:-mainnet}"

# Map ENVIRONMENT_NAME to the page-title placeholders embedded in the static
# HTML at build time.  Keep this mapping in sync with getSiteTitleConfig() in
# packages/block-explorer/src/helpers/read_from_env.ts.
case $ENVIRONMENT_NAME in
decaf)
  BASE_URL="${BASE_URL:-https://explorer.decaf.espresso.network/}"
  BLOCK_EXPLORER_SITE_PREFIX="${BLOCK_EXPLORER_SITE_PREFIX:-TESTNET}"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Decaf Block Explorer}"
  BLOCK_EXPLORER_NETWORK_NAME="${BLOCK_EXPLORER_NETWORK_NAME:-Decaf}"
  STAKING_SITE_URL="${STAKING_SITE_URL:-https://stake.decaf.espresso.network/}"
  QUERY_SERVICE_URI="${QUERY_SERVICE_URI:-https://cache.decaf.testnet.espresso.network/v0/}"
  ;;
water)
  BASE_URL="${BASE_URL:-https://explorer.water.devnet.espresso.network/}"
  BLOCK_EXPLORER_SITE_PREFIX="${BLOCK_EXPLORER_SITE_PREFIX:-DEVNET}"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Water Block Explorer}"
  BLOCK_EXPLORER_NETWORK_NAME="${BLOCK_EXPLORER_NETWORK_NAME:-Water}"
  STAKING_SITE_URL="${STAKING_SITE_URL:-https://stake.water.devnet.espresso.network/}"
  QUERY_SERVICE_URI="${QUERY_SERVICE_URI:-https://cache.water.devnet.espresso.network/v0/}"
  ;;
milk)
  BASE_URL="${BASE_URL:-https://explorer.milk.devnet.espresso.network/}"
  BLOCK_EXPLORER_SITE_PREFIX="${BLOCK_EXPLORER_SITE_PREFIX:-DEVNET}"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Milk Block Explorer}"
  BLOCK_EXPLORER_NETWORK_NAME="${BLOCK_EXPLORER_NETWORK_NAME:-Milk}"
  STAKING_SITE_URL="${STAKING_SITE_URL:-https://stake.milk.devnet.espresso.network/}"
  QUERY_SERVICE_URI="${QUERY_SERVICE_URI:-https://cache.milk.devnet.espresso.network/v0/}"
  ;;
*)
  BASE_URL="${BASE_URL:-https://explorer.espresso.network/}"
  BLOCK_EXPLORER_SITE_PREFIX="${BLOCK_EXPLORER_SITE_PREFIX:-MAINNET}"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Block Explorer}"
  BLOCK_EXPLORER_NETWORK_NAME="${BLOCK_EXPLORER_NETWORK_NAME:-Espresso}"
  STAKING_SITE_URL="${STAKING_SITE_URL:-https://stake.espresso.network/}"
  QUERY_SERVICE_URI="${QUERY_SERVICE_URI:-https://cache.main.net.espresso.network/v0/}"
  ;;
esac
export BLOCK_EXPLORER_SITE_PREFIX BLOCK_EXPLORER_NETWORK_SITE_NAME

# Write config.json from environment variables so the client can fetch it.
# All values are written as strings; the client applies type coercion as needed.
cat >"${STATIC_DIR}/config.json" <<ENDOFCONFIG
{
  "ENVIRONMENT_NAME": "${ENVIRONMENT_NAME}",
  "hotshot_query_service_url": "${QUERY_SERVICE_URI}"
}
ENDOFCONFIG

# Replace the BASE_URL placeholder embedded in HTML meta tags at build time.
# The placeholder https://placeholder.espresso.foundation is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL}|g" \
  {} \;

# Replace the __SITE_PREFIX__ placeholder embedded in HTML meta
# tags at build time, with the environment variable we've determined in this
# script.
#
# The placeholder __SITE_PREFIX__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX}|g" \
  {} \;

# Replace the __NETWORK_SITE_NAME__ placeholder embedded in HTML
# meta tags at build time, with the environment variable we've determeined
# here.
#
# The placeholder __NETWORK_SITE_NAME__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME}|g" \
  {} \;

# Replace the __NETWORK_NAME__ placeholder embedded in HTML meta
# tags at build time, with the environment variable we've determined in this
# script.
#
# The placeholder __NETWORK_NAME__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME}|g" \
  {} \;

# Replace the https://stake.espresso.network/ placeholder embedded in HTML
# documents, and NGINX config at build time, with the environment variable
# we've determined in this script.
#
# The placeholder https://stake.espresso.network/ is referenced in the
# following locations:
# - src/sites/block_explorer/components/links/main_nav_links/main_nav_links.tsx
# - block-explorer-nginx.conf
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|https://stake.espresso.network/|${STAKING_SITE_URL}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|https://stake.espresso.network/|${STAKING_SITE_URL}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|https://stake.espresso.network/|${STAKING_SITE_URL}|g" \
  {} \;
find "/etc/nginx/conf.d/" -name "*.conf" -exec sed -i \
  "s|https://stake.espresso.network/|${STAKING_SITE_URL}|g" \
  {} \;
