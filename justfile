build-docker-delegation-ui-local:
  docker build --target delegation-ui -t espresso-delegation-ui .

build-docker-block-explorer-local:
  docker build --target block-explorer -t espresso-block-explorer .
