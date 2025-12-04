FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json /app/
COPY packages/espresso-block-explorer-components /app/packages/espresso-block-explorer-components
COPY packages/block-explorer /app/packages/block-explorer

RUN apk add --no-cache bash jq tini python3 make g++

RUN npm ci --no-audit --all-workspaces

# Build the Components Library
RUN npm run build --workspace=packages/espresso-block-explorer-components

# Copy over public, and asset files, then install again, for the block-explorer-components
RUN cp -r packages/espresso-block-explorer-components/public/* packages/block-explorer/public/. && \
    rm -rf packages/block-explorer/public/assets/* && \
    cp -r packages/espresso-block-explorer-components/dist/assets/*.js packages/block-explorer/public/assets/. && \
    rm packages/block-explorer/public/*.json
RUN npm install --no-audit --save --workspace=packages/block-explorer packages/espresso-block-explorer-components/

# Build the Next Application
RUN npm run build --workspace=packages/block-explorer

FROM node:22-alpine
RUN apk add --no-cache bash jq tini python3 make g++
WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/packages/block-explorer/package.json /app/packages/block-explorer/
RUN NODE_ENV=production npm ci --only=production
COPY --from=builder /app/packages/block-explorer/.next /app/packages/block-explorer/.next
COPY --from=builder /app/packages/block-explorer/public/ /app/packages/block-explorer/public/
COPY docker/block-explorer-init.sh /app/block-explorer-init.sh

# The configuration for the pre-built block-explorer is specified by
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
# block-explorer-init.sh file that will update the contents of the
# `hotshot_query_service_url` and the `node_validator_service_url` URLs
# with the contents of the environment variables `QUERY_SERVICE_URI` and
# `NODE_VALIDATOR_URI` respectively.  This allows for the configuration of
# the block explorer to be done at runtime.

EXPOSE 3000
ENV HOST=0.0.0.0
ENV QUERY_SERVICE_URI=""
ENV NODE_VALIDATOR_URI=""
ENV ENVIRONMENT_NAME="mainnet"

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["./block-explorer-init.sh"]
