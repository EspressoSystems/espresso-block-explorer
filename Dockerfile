# Multi-stage Dockerfile for espresso-block-explorer monorepo
#
# Usage:
#   docker build --target block-explorer -t espresso-block-explorer .
#   docker build --target delegation-ui -t espresso-delegation-ui .

# ============================================================================
# Base builder stage - Common setup for all apps
# ============================================================================
FROM node:22-alpine AS base-builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache bash jq tini python3 make g++

# Copy root package files for dependency installation
COPY package.json package-lock.json turbo.json ./

# Copy all package.json files for better layer caching
COPY packages/espresso-block-explorer-components/package.json ./packages/espresso-block-explorer-components/
COPY packages/block-explorer/package.json ./packages/block-explorer/
COPY packages/delegation-ui/package.json ./packages/delegation-ui/

# Install all dependencies (this layer is cached if package.json files don't change)
RUN npm ci --workspaces --no-audit && \
  npm cache clean --force

# Copy shared components source (needed by both apps)
COPY packages/espresso-block-explorer-components ./packages/espresso-block-explorer-components


# ============================================================================
# Block Explorer Builder
# ============================================================================
FROM base-builder AS block-explorer-builder

# Copy block-explorer source
COPY packages/block-explorer ./packages/block-explorer

# Build using Turborepo (builds components first, then block-explorer)
RUN npx turbo build --filter=block-explorer...


# ============================================================================
# Delegation UI Builder
# ============================================================================
FROM base-builder AS delegation-ui-builder

# Copy delegation-ui source
COPY packages/delegation-ui ./packages/delegation-ui

# Build using Turborepo (builds components first, then delegation-ui)
RUN npx turbo build --filter=delegation-ui...


# ============================================================================
# Base production image - Common runtime setup
# ============================================================================
FROM node:22-alpine AS base-production

WORKDIR /app

# Only install runtime dependencies (bash, jq, tini - no build tools)
RUN apk add --no-cache bash jq tini

EXPOSE 3000
ENV HOST=0.0.0.0
ENV QUERY_SERVICE_URI=""
ENV NODE_VALIDATOR_URI=""
ENV ENVIRONMENT_NAME="mainnet"
ENV NODE_ENV=production

ENTRYPOINT ["/sbin/tini", "--"]


# ============================================================================
# Block Explorer Production Image
# ============================================================================
# Uses nginx to serve the fully static export — no Node.js at runtime.
# Runtime configuration is injected by the entrypoint before nginx starts.
FROM nginx:1-alpine AS block-explorer

# Install bash (for the init script) and tini (for proper signal handling).
RUN apk add --no-cache bash tini

# Block-Explorer specific environment variables

# Defaults to mainnet, if not set. Valid options are as follows:
# - mainnet
# - main (alias for mainnet)
# - decaf
# - water
# - milk
#
# Any unrecognized value, will be treated as if they are "mainnet"
ENV ENVIRONMENT_NAME="" 

# Defaults to a value based on the ENVIRONMENT_NAME, if not set.
# Expected to be pointed to a a value after the version.  Currently
# expected to work with the /v0/ endpoints of the Hot Shot Query Service.
# Example Value:
#   https://cache.main.net.espresso.network/v0/
ENV QUERY_SERVICE_URI=""

# The following environment variables can be ovwritten to customize their
# values.  They affect the contents SEO Contents of the page. If they are
# omitted, then they will have their values set to a value based on the
# ENVIORNMENT_NAME value.
ENV BASE_URL=""
ENV STAKING_SITE_URL=""

# These values govern some prefixes and strings that appear as common
# components in the page title.
#

# Current expected value if not set:
# - TESTNET
# - MAINNET
# - DEVNET
ENV BLOCK_EXPLORER_SITE_PREFIX=""

# Current Expected Values if not set:
# - Espresso Decaf Block Explorer
# - Espresso Water Block Explorer
# - Espresso Milk Block Explorer
# - Espresso Block Explorer
ENV BLOCK_EXPLORER_NETWORK_SITE_NAME=""

# Current Expected Values if not set:
# - Decaf
# - Water
# - Milk
# - Espresso
ENV BLOCK_EXPLORER_NETWORK_NAME=""

# Copy the static export into the nginx web root.
COPY --from=block-explorer-builder /app/packages/block-explorer/out /usr/share/nginx/html

# Replace the default nginx config with one that serves on port 3000.
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/block-explorer-nginx.conf /etc/nginx/conf.d/block-explorer-nginx.conf

# Copy and setup init script
COPY docker/block-explorer-init.sh docker/block-explorer-generate-files.sh /
RUN chmod +x /block-explorer-init.sh /block-explorer-generate-files.sh

EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/block-explorer-init.sh"]


# ============================================================================
# Delegation UI Production Image
# ============================================================================
# Uses nginx to serve the fully static export — no Node.js at runtime.
# Runtime configuration is injected by the entrypoint before nginx starts.
FROM nginx:1-alpine AS delegation-ui

# Install bash (for the init script) and tini (for proper signal handling).
RUN apk add --no-cache bash tini

# Delegation-UI specific environment variables
ENV ENVIRONMENT_NAME="mainnet"
ENV STAKING_UI_SERVICE_URI=""
ENV CONTRACT_ADDRESS_STAKE_TABLE=""
ENV CONTRACT_ADDRESS_ESP_TOKEN=""
ENV CONTRACT_ADDRESS_REWARD_CLAIM=""
ENV CONTRACT_ADDRESS_LIGHT_CLIENT=""
ENV WALLETCONNECT_PROJECT_ID=""
ENV RPC_URLS=""
ENV BASE_URL=""
ENV BASE_PATH=""

# Copy the static export into the nginx web root.
COPY --from=delegation-ui-builder /app/packages/delegation-ui/out /usr/share/nginx/html

# Replace the default nginx config with one that serves on port 3000.
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/delegation-ui-nginx.conf /etc/nginx/conf.d/default.conf

# Copy and setup init script
COPY docker/delegation-ui-init.sh /delegation-ui-init.sh
RUN chmod +x /delegation-ui-init.sh

EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/delegation-ui-init.sh"]
