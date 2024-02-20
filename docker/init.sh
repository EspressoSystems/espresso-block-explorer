#!/bin/bash
if [[ -z "${QUERY_SERVICE_URI}" ]]; then
  echo "QUERY_SERVICE_URI not set."
else
  jq --null-input \
    --arg QUERY_SERVICE_URI "$QUERY_SERVICE_URI" \
    '{"hotshot_query_service_url": $QUERY_SERVICE_URI}' \
    > /app/packages/block-explorer/public/config.json
fi
cat /app/packages/block-explorer/public/config.json
# Actually start app
npm run start --workspace=packages/block-explorer
