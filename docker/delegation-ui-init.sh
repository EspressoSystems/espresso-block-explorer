#!/bin/bash
set -e

STATIC_DIR="/usr/share/nginx/html"

# Write config.json from environment variables so the client can fetch it.
# All values are written as strings; the client applies type coercion via
# parseConfigFromJSON in src/helpers/read_from_env.ts.
cat >"${STATIC_DIR}/config.json" <<ENDOFCONFIG
{
  "ENVIRONMENT_NAME": "${ENVIRONMENT_NAME:-mainnet}",
  "hotshot_query_service_url": "${QUERY_SERVICE_URI:-https://cache.main.net.espresso.network/v0/}",
  "node_validator_service_url": "${NODE_VALIDATOR_URI:-wss://nv.main.net.espresso.network/v0/}",
  "staking_api_service_url": "${STAKING_UI_SERVICE_URI:-https://cache.main.net.espresso.network/v0/staking/}",
  "CONTRACT_ADDRESS_STAKE_TABLE": "${CONTRACT_ADDRESS_STAKE_TABLE:-}",
  "CONTRACT_ADDRESS_ESP_TOKEN": "${CONTRACT_ADDRESS_ESP_TOKEN:-}",
  "CONTRACT_ADDRESS_REWARD_CLAIM": "${CONTRACT_ADDRESS_REWARD_CLAIM:-}",
  "CONTRACT_ADDRESS_LIGHT_CLIENT": "${CONTRACT_ADDRESS_LIGHT_CLIENT:-}",
  "WALLETCONNECT_PROJECT_ID": "${WALLETCONNECT_PROJECT_ID:-}",
  "RPC_URLS": "${RPC_URLS:-}",
  "PROOF_OF_STAKE_RELEASED": "${PROOF_OF_STAKE_RELEASED:-}",
  "BASE_URL": "${BASE_URL:-https://claim.espresso.foundation}",
  "BASE_PATH": "${BASE_PATH:-/stake/}"
}
ENDOFCONFIG

# Replace the BASE_URL placeholder embedded in HTML meta tags at build time.
# The placeholder https://placeholder.espresso.foundation is set in
# generateMetadata() in src/app/page.tsx.
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|https://placeholder.espresso.foundation|${BASE_URL:-https://placeholder.espresso.foundation}|g" \
  {} \;

# Replace the BASE_PATH placeholder embedded in HTML meta tags at build time.
# The placeholder /ESPRESSO_BASE_PATH_PLACEHOLDER/ is set in generateMetadata().
find "${STATIC_DIR}" -name "*.html" -exec sed -i \
  "s|/ESPRESSO_BASE_PATH_PLACEHOLDER/|${BASE_PATH:-/}|g" \
  {} \;

# Start nginx in the foreground.
exec nginx -g 'daemon off;'
