#!/bin/bash
if [[ -z "${QUERY_SERVICE_URI}" ]]; then
  echo "QUERY_SERVICE_URI not set."
else
  cp /app/packages/block-explorer/public/config.json /app/packages/block-explorer/public/config.bk.json
  jq \
    --arg QUERY_SERVICE_URI "$QUERY_SERVICE_URI" \
    '.hotshot_query_service_url = $QUERY_SERVICE_URI' \
    /app/packages/block-explorer/public/config.bk.json \
    > /app/packages/block-explorer/public/config.json
  rm /app/packages/block-explorer/public/config.bk.json
fi

if [[ -z "${NODE_VALIDATOR_URI}" ]]; then
  echo "NODE_VALIDATOR_URI not set."
else
  cp /app/packages/block-explorer/public/config.json /app/packages/block-explorer/public/config.bk.json
  jq \
    --arg NODE_VALIDATOR_URI "$NODE_VALIDATOR_URI" \
    '.node_validator_service_url = $NODE_VALIDATOR_URI' \
    /app/packages/block-explorer/public/config.bk.json \
    > /app/packages/block-explorer/public/config.json
  rm /app/packages/block-explorer/public/config.bk.json
fi

NODE_VALIDATOR_URI

cat /app/packages/block-explorer/public/config.json
# Actually start app
npm run start --workspace=packages/block-explorer
