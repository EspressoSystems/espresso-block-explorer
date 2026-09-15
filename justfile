build-docker-delegation-ui-local:
  docker build --target delegation-ui -t espresso-delegation-ui .

build-docker-block-explorer-local:
  docker build --target block-explorer -t espresso-block-explorer .

build-and-test:
  npm install
  npm install --workspaces
  npm run build --workspace=packages/espresso-block-explorer-components
  npm install --workspaces
  npm run test --workspaces

build-and-test-ci:
  npm ci --workspaces
  npm run build --workspace=packages/espresso-block-explorer-components
  npm ci --workspaces
  npm run test --workspaces