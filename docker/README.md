# Docker Support Files

This directory contains runtime initialization scripts for the Docker containers.

## Overview

The main `Dockerfile` is located at the **repository root** and uses a multi-stage build approach with shared base layers for optimal caching.

## Build Commands

```bash
# Build from repository root
docker build --target block-explorer .
docker build --target delegation-ui .
```

## Running Containers

### Block Explorer

```bash
docker run -p 3000:3000 \
  -e ENVIRONMENT_NAME="decaf" \
  -e QUERY_SERVICE_URI="https://query.decaf.testnet.espresso.network/v0/" \
  -e NODE_VALIDATOR_URI="wss://nv.decaf.testnet.espresso.network/v0/" \
  espresso-block-explorer
```

**Environment Variables:**
- `ENVIRONMENT_NAME`: Environment identifier (e.g., `mainnet`, `decaf`)
- `QUERY_SERVICE_URI`: HotShot query service URL
- `NODE_VALIDATOR_URI`: Node validator WebSocket URL

### Delegation UI

```bash
docker run -p 3000:3000 \
  -e ENVIRONMENT_NAME="decaf" \
  -e QUERY_SERVICE_URI="https://query.decaf.testnet.espresso.network/v0/" \
  -e NODE_VALIDATOR_URI="wss://nv.decaf.testnet.espresso.network/v0/" \
  -e STAKING_UI_SERVICE_URI="https://staking-api.decaf.testnet.espresso.network/v0/staking/" \
  -e CONTRACT_ADDRESS_STAKE_TABLE="0x40304fbe94d5e7d1492dd90c53a2d63e8506a037" \
  -e CONTRACT_ADDRESS_ESP_TOKEN="0xb3e655a030e2e34a18b72757b40be086a8f43f3b" \
  -e CONTRACT_ADDRESS_REWARD_CLAIM="0xe81908E34dBb4BA01f27F8769264199727Be50c8" \
  -e CONTRACT_ADDRESS_LIGHT_CLIENT="0x303872bb82a191771321d4828888920100d0b3e4" \
  espresso-delegation-ui
```

**Environment Variables:**
- `ENVIRONMENT_NAME`: Environment identifier
- `QUERY_SERVICE_URI`: HotShot query service URL
- `NODE_VALIDATOR_URI`: Node validator WebSocket URL
- `STAKING_UI_SERVICE_URI`: Staking API service URL
- `CONTRACT_ADDRESS_STAKE_TABLE`: Stake table contract address
- `CONTRACT_ADDRESS_ESP_TOKEN`: ESP token contract address
- `CONTRACT_ADDRESS_REWARD_CLAIM`: Reward claim contract address
- `CONTRACT_ADDRESS_LIGHT_CLIENT`: Light client contract address
- `RPC_URLS` (optional, production only): RPC endpoint URLs
- `WALLETCONNECT_PROJECT_ID` (optional, production only): WalletConnect project ID

## Architecture

### Multi-Stage Structure
- **base-builder**: Common build environment for all apps
- **app-builder**: App-specific build stages (block-explorer-builder, delegation-ui-builder)
- **base-production**: Common runtime environment
- **final targets**: Production images (block-explorer, delegation-ui)

### Benefits
- Shared layers reduce build time and image size
- Package installation cached separately from source code
- Turborepo handles build orchestration and asset copying

## Init Scripts

### block-explorer-init.sh
Initializes the block-explorer container at runtime by configuring the service from environment variables and starting the Next.js server.

### delegation-ui-init.sh
Initializes the delegation-ui container at runtime by configuring the service from environment variables and starting the Next.js server.

These scripts are executed automatically when containers start via the `CMD` directive in the Dockerfile.

## Development

For local development, use npm scripts instead of Docker:
```bash
npm run dev
```
