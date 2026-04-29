#!/bin/bash

STATIC_DIR="/usr/share/nginx/html"

# Write config.json from environment variables so the client can fetch it.
# All values are written as strings; the client applies type coercion as needed.
cat >"${STATIC_DIR}/config.json" <<ENDOFCONFIG
{
  "ENVIRONMENT_NAME": "${ENVIRONMENT_NAME:-mainnet}",
  "hotshot_query_service_url": "${QUERY_SERVICE_URI:-}"
}
ENDOFCONFIG

# Map ENVIRONMENT_NAME to the page-title placeholders embedded in the static
# HTML at build time.  Keep this mapping in sync with getSiteTitleConfig() in
# packages/block-explorer/src/helpers/read_from_env.ts.
case "${ENVIRONMENT_NAME:-mainnet}" in
decaf)
  BLOCK_EXPLORER_SITE_PREFIX="TESTNET"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="Espresso Decaf Block Explorer"
  BLOCK_EXPLORER_NETWORK_NAME="Decaf"
  ;;
water)
  BLOCK_EXPLORER_SITE_PREFIX="DEVNET"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="Espresso Water Block Explorer"
  BLOCK_EXPLORER_NETWORK_NAME="Water"
  ;;
milk)
  BLOCK_EXPLORER_SITE_PREFIX="DEVNET"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="Espresso Milk Block Explorer"
  BLOCK_EXPLORER_NETWORK_NAME="Milk"
  ;;
*)
  BLOCK_EXPLORER_SITE_PREFIX="MAINNET"
  BLOCK_EXPLORER_NETWORK_SITE_NAME="Espresso Block Explorer"
  BLOCK_EXPLORER_NETWORK_NAME="Espresso"
  ;;
esac
export BLOCK_EXPLORER_SITE_PREFIX BLOCK_EXPLORER_NETWORK_SITE_NAME

# Replace the BASE_URL placeholder embedded in HTML meta tags at build time.
# The placeholder https://placeholder.espresso.foundation is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL:-https://placeholder.espresso.foundation}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL:-https://placeholder.espresso.foundation}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL:-https://placeholder.espresso.foundation}|g" \
  {} \;

# Replace the __SITE_PREFIX__ placeholder embedded in HTML meta
# tags at build time, with the environment variable we've determined in this
# script.
#
# The placeholder __SITE_PREFIX__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX:-}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX:-}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__SITE_PREFIX__|${BLOCK_EXPLORER_SITE_PREFIX:-}|g" \
  {} \;

# Replace the __NETWORK_SITE_NAME__ placeholder embedded in HTML
# meta tags at build time, with the environment variable we've determeined
# here.
#
# The placeholder __NETWORK_SITE_NAME__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Block Explorer}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Block Explorer}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__NETWORK_SITE_NAME__|${BLOCK_EXPLORER_NETWORK_SITE_NAME:-Espresso Block Explorer}|g" \
  {} \;

# Replace the __NETWORK_NAME__ placeholder embedded in HTML meta
# tags at build time, with the environment variable we've determined in this
# script.
#
# The placeholder __NETWORK_NAME__ is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME:-Espresso}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.txt" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME:-Espresso}|g" \
  {} \;
find "${STATIC_DIR}" -name "*.js" -exec sed -i \
  "s|__NETWORK_NAME__|${BLOCK_EXPLORER_NETWORK_NAME:-Espresso}|g" \
  {} \;
