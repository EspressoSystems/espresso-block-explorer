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
RUN npm ci --workspaces --no-audit

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

RUN apk add --no-cache bash jq tini python3 make g++

# Copy root package files
COPY package.json package-lock.json ./

EXPOSE 3000
ENV HOST=0.0.0.0
ENV QUERY_SERVICE_URI=""
ENV NODE_VALIDATOR_URI=""
ENV ENVIRONMENT_NAME="mainnet"

ENTRYPOINT ["/sbin/tini", "--"]


# ============================================================================
# Block Explorer Production Image
# ============================================================================
FROM base-production AS block-explorer

# Copy block-explorer package.json
COPY packages/block-explorer/package.json ./packages/block-explorer/

# Install production dependencies
RUN NODE_ENV=production npm ci --workspaces --only=production --no-audit

# Copy built application from builder
COPY --from=block-explorer-builder /app/packages/block-explorer/.next ./packages/block-explorer/.next
COPY --from=block-explorer-builder /app/packages/block-explorer/public ./packages/block-explorer/public

# Copy and setup init script
COPY docker/block-explorer-init.sh ./block-explorer-init.sh
RUN chmod +x ./block-explorer-init.sh

CMD ["./block-explorer-init.sh"]


# ============================================================================
# Delegation UI Production Image
# ============================================================================
FROM base-production AS delegation-ui

# Delegation-UI specific environment variables
ENV STAKING_UI_SERVICE_URI=""
ENV CONTRACT_ADDRESS_STAKE_TABLE=""
ENV CONTRACT_ADDRESS_ESP_TOKEN=""
ENV CONTRACT_ADDRESS_REWARD_CLAIM=""
ENV CONTRACT_ADDRESS_LIGHT_CLIENT=""
ENV WALLETCONNECT_PROJECT_ID=""
ENV RPC_URLS=""

# Copy delegation-ui package.json
COPY packages/delegation-ui/package.json ./packages/delegation-ui/

# Install production dependencies
RUN NODE_ENV=production npm ci --workspaces --only=production --no-audit

# Copy built application from builder
COPY --from=delegation-ui-builder /app/packages/delegation-ui/.next ./packages/delegation-ui/.next
COPY --from=delegation-ui-builder /app/packages/delegation-ui/public ./packages/delegation-ui/public

# Copy and setup init script
COPY docker/delegation-ui-init.sh ./delegation-ui-init.sh
RUN chmod +x ./delegation-ui-init.sh

CMD ["./delegation-ui-init.sh"]
