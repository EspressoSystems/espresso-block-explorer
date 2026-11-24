build-dockers:
  docker build --target delegation-ui -t espresso-delegation-ui .
  docker build --target block-explorer -t espresso-block-explorer .

build-and-test:
  npm install
  npm install --workspaces
  npm run build --workspace=packages/espresso-block-explorer-components
  npm install --workspaces
  npm run build
  npm run lint
  npm run test --workspaces

build-and-test-ci:
  npm ci --workspaces
  npm run build --workspace=packages/espresso-block-explorer-components
  npm ci --workspaces
  npm run test --workspaces

run-dockers:
  docker run -d --rm \
    -p 3000:3000 \
    -e ENVIRONMENT_NAME="decaf" \
    -e QUERY_SERVICE_URI="https://query.decaf.testnet.espresso.network/v0/" \
    -e NODE_VALIDATOR_URI="wss://nv.decaf.testnet.espresso.network/v0/" \
    -e STAKING_UI_SERVICE_URI="https://staking-api.decaf.testnet.espresso.network/v0/staking/" \
    -e CONTRACT_ADDRESS_STAKE_TABLE="0x40304fbe94d5e7d1492dd90c53a2d63e8506a037" \
    -e CONTRACT_ADDRESS_ESP_TOKEN="0xb3e655a030e2e34a18b72757b40be086a8f43f3b" \
    -e CONTRACT_ADDRESS_REWARD_CLAIM="0xe81908E34dBb4BA01f27F8769264199727Be50c8" \
    -e CONTRACT_ADDRESS_LIGHT_CLIENT="0x303872bb82a191771321d4828888920100d0b3e4" \
    --name delegation-ui \
    espresso-delegation-ui
  docker run -d --rm \
    -p 3001:3000 \
    -e ENVIRONMENT_NAME="decaf" \
    --name block-explorer \
    espresso-block-explorer
  open http://127.0.0.1:3000
  open http://127.0.0.1:3001

stop-dockers:
  docker stop delegation-ui
  docker stop block-explorer