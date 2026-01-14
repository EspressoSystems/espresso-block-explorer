FROM node:22-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json /app/
COPY packages/espresso-block-explorer-components /app/packages/espresso-block-explorer-components
COPY packages/block-explorer /app/packages/block-explorer
COPY packages/delegation-ui /app/packages/delegation-ui

RUN apk add --no-cache bash jq tini python3 make g++

RUN npm ci --no-audit

# Build the Components Library
RUN npm run build --workspace=packages/espresso-block-explorer-components

# Copy over public, and asset files, then install again, for the block-explorer-components
RUN cp -r packages/espresso-block-explorer-components/public/* packages/delegation-ui/public/. && \
    rm -rf packages/delegation-ui/public/assets/* && \
    cp -r packages/espresso-block-explorer-components/dist/assets/*.js packages/delegation-ui/public/assets/. && \
    rm packages/delegation-ui/public/*.json
RUN npm install --no-audit --save --workspace=packages/delegation-ui packages/espresso-block-explorer-components/

# Build the Next Application
RUN npm run build --workspace=packages/delegation-ui

FROM node:22-alpine
RUN apk add --no-cache bash jq tini python3 make g++
WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/packages/delegation-ui/package.json /app/packages/delegation-ui/
RUN NODE_ENV=production npm ci --only=production
COPY --from=builder /app/packages/delegation-ui/.next /app/packages/delegation-ui/.next
COPY --from=builder /app/packages/delegation-ui/public/ /app/packages/delegation-ui/public/
COPY docker/delegation-ui-init.sh /app/delegation-ui-init.sh

# The configuration for the pre-built delegation-ui is provideded via
# several environment variables that are processed and made available
# to the client as needed.
#
# These environment variables ultimately configure the Delegation UI to
# run in the relevant environment / setup. This allows for a reasonable
# amount of flexibility while also allowing for the NextJS project to be
# pre-compiled.
#
# Interactions with Services can be quite costly, and as a result these
# interactions and traffic calls are performed via Web Worker threads,
# which act as a go-between these services, and allow for these
# requests to be made with minimal impact on the main UI thread.
# Since these Web Workers are pre-compiled, the ultimate URLs are unable
# to be delivered and pre-baked into the built image.  Instead, we opt to
# retrieve them via a hosted `config.json` file.  This file itself is
# actually a "virtual" file that is handled by `NextJS` as a means of
# passing the relevant ENVIRONMENT variables to the client via a predefined
# structure to hold all of the relevant fields.  The environment variables
# that are delivered in this manner are the following:
# - QUERY_SERVICE_URI=""
# - NODE_VALIDATOR_URI=""
# - STAKING_UI_SERVICE_URI=""
#
# The reset of the Environment variables are delivered from the NextJS
# Server components to the client itself.  These should be static for the
# lifetime of the program, and as a result, the entirey of the NextJS's
# requests should be cachable.
#
# Populating all eight Environment Variables is expected by the hosting
# service.  These will configure the service and ensure that the relevant
# Services, and Contract addresses are supplied.
#
# Service Based URLs are expected to be given with the `version` URL suffixed.
# This is true in general, and there's a slight deviation for the Staking UI
# service based on its specific construction.  This means that the URLs should
# all have a trailing `/` at the end of them in order for them to work.
#
# Example Decaf Environment Variable population:
#  ENVIRONMENT_NAME=decaf
#  CONTRACT_ADDRESS_STAKE_TABLE=0x40304fbe94d5e7d1492dd90c53a2d63e8506a037
#  CONTRACT_ADDRESS_ESP_TOKEN=0xb3e655a030e2e34a18b72757b40be086a8f43f3b
#  CONTRACT_ADDRESS_REWARD_CLAIM=0xe81908E34dBb4BA01f27F8769264199727Be50c8
#  CONTRACT_ADDRESS_LIGHT_CLIENT=0x303872bb82a191771321d4828888920100d0b3e4
#  QUERY_SERVICE_URI=https://query.decaf.testnet.espresso.network/v0/
#  NODE_VALIDATOR_URI=wss://nv.decaf.testnet.espresso.network/v0/
#  STAKING_UI_SERVICE_URI=https://staking.decaf.testnet.espresso.network/v0/staking/

EXPOSE 3000
ENV HOST=0.0.0.0
ENV QUERY_SERVICE_URI=""
ENV NODE_VALIDATOR_URI=""
ENV STAKING_UI_SERVICE_URI=""
ENV ENVIRONMENT_NAME="mainnet"
ENV CONTRACT_ADDRESS_STAKE_TABLE=""
ENV CONTRACT_ADDRESS_ESP_TOKEN=""
ENV CONTRACT_ADDRESS_REWARD_CLAIM=""
ENV CONTRACT_ADDRESS_LIGHT_CLIENT=""

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["./delegation-ui-init.sh"]
