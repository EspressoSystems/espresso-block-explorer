#!/bin/bash
if [[ -z "${INSCRIPTION_SERVICE_URI}" ]]; then
  echo "INSCRIPTION_SERVICE_URI not set."
else
  cp /app/packages/inscriptions/public/config.json /app/packages/inscriptions/public/config.bk.json
  jq \
    --arg INSCRIPTION_SERVICE_URI "$INSCRIPTION_SERVICE_URI" \
    '.inscription_service_url = $INSCRIPTION_SERVICE_URI' \
    /app/packages/inscriptions/public/config.bk.json \
    > /app/packages/inscriptions/public/config.json
  rm /app/packages/inscriptions/public/config.bk.json
fi


if [[ -z "${INSCRIPTION_SERVICE_WEBSOCKET_URI}" ]]; then
  echo "INSCRIPTION_SERVICE_WEBSOCKET_URI not set."
else
  cp /app/packages/inscriptions/public/config.json /app/packages/inscriptions/public/config.bk.json
  jq \
    --arg INSCRIPTION_SERVICE_WEBSOCKET_URI "$INSCRIPTION_SERVICE_WEBSOCKET_URI" \
    '.inscription_service_websocket_url = $INSCRIPTION_SERVICE_WEBSOCKET_URI' \
    /app/packages/inscriptions/public/config.bk.json \
    > /app/packages/inscriptions/public/config.json
  rm /app/packages/inscriptions/public/config.bk.json
fi

cat /app/packages/inscriptions/public/config.json
# Actually start app
npm run start --workspace=packages/inscriptions
