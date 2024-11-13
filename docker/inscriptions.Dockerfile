FROM node:20-alpine AS builder
ARG BLOCK_EXPLORER_BASE_URL=https://explorer.decaf.testnet.espresso.network/
ARG TWEET_URL=https://x.com/EspressoSys/status/1855973751982309624

WORKDIR /app
COPY package.json package-lock.json /app/
COPY packages/espresso-block-explorer-components /app/packages/espresso-block-explorer-components
COPY packages/inscriptions /app/packages/inscriptions

RUN apk add --no-cache python3 make g++

RUN npm ci --no-audit --workspace=packages/espresso-block-explorer-components

# Build the Components Library
RUN npm run build --workspace=packages/espresso-block-explorer-components

# Copy over public, and asset files, then install again, for the block-explorer-components
RUN cp -r packages/espresso-block-explorer-components/public/* packages/inscriptions/public/. && \
    rm packages/inscriptions/public/assets/* && \
    cp -r packages/espresso-block-explorer-components/dist/assets/*.js packages/inscriptions/public/assets/.
RUN npm install --no-audit --save --workspace=packages/inscriptions

# Build the Next Application
RUN NEXT_PUBLIC_BLOCK_EXPLORER_BASE_URL=${BLOCK_EXPLORER_BASE_URL} \
    NEXT_PUBLIC_TWEET_URL=${TWEET_URL} \
    npm run build --workspace=packages/inscriptions

FROM node:20-alpine
RUN apk add --no-cache bash jq tini python3 make g++
WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/packages/inscriptions/package.json /app/packages/inscriptions/
RUN NODE_ENV=production npm ci --only=production
RUN apk del python3 make g++
COPY --from=builder /app/packages/inscriptions/.next /app/packages/inscriptions/.next
COPY --from=builder /app/packages/inscriptions/public/ /app/packages/inscriptions/public/
COPY docker/inscriptions-init.sh /app/inscriptions-init.sh

# The configuration for the pre-built inscription is specified by
# a file named config.json contained within the public folder of the
# docker image.  By default the value `hotshot_query_service_url` is
# stored as `null` which will indicate to use the fake generated data.
# To use the real data, the `hotshot_query_service_url` should be set
# to a valid URL of the hotshot query service.
#
# Example:
#   "https://query.gibraltar.aws.espresso.network/v0/"
#
# This config file has also been expanded to support the Node Validator
# service.  The Node Validator Service is expected to be a URL that
# points to WebSocket address for the Node Validator API. By default the
# value `node_validator_service_url` is stored as `null` which will indicate
# to use the fake generated data.  To use the real data source it should be
# replaced with a URL that points to the base of a compatible Node Validator
# API service.
#
# Example:
#   "wss://node-validator.gibraltar.aws.espresso.network/v0/"
#
# Alternatively this URL can be set to indicate the contents of an HAR
# file that is accessbile via the end browser.  This can be useful
# for troubleshooting and debugging purposes.
#
# Example:
#  "replay:https://example.com/replay-file.har"
#
# In both of these cases, primarily for convenience we have introduced an
# inscriptions-init.sh file that will update the contents of the `hotshot_query_service_url`
# and the `node_validator_service_url` URLs with the contents of the
# environment variables `QUERY_SERVICE_URI` and `NODE_VALIDATOR_URI`
# respectively.  This allows for the configuration of the block explorer
# to be done at runtime.

EXPOSE 3000
ENV HOST=0.0.0.0
ENV INSCRIPTION_SERVICE_WEBSOCKET_URI=""
ENV INSCRIPTION_SERVICE_URI=""

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["./inscriptions-init.sh"]
