# Espresso Block Explorer

This repository contains code and resources for the `Espresso Block Explorer`.
The repository itself is meant to be a mono repository that separates concerns
of the deployable project from the supporting components and libraries that
help to realize the end product.

## Developing

In order to get started with development on this project it is important to note
that it is all currently developed using `npm` with `workspaces` in a linux /
unix based environment. Environments that do not match that expectation may
to adjust the referenced shell commands accordingly as all instructions for
setup and development will be referenced with this Environment in mind.

Unless otherwise noted, all commands are expected to be run from the root of the
project directory.

There are currently two packages in this project:

- [Espresso Block Explorer Components](packages/espresso-block-explorer-components/README.md)
- [Block Explorer](packages/block-explorer/README.md)

The [Block Explorer](packages/block-explorer/README.md) is dependant on the
[Espresso Block Explorer Components](packages/espresso-block-explorer-components/README.md)
repository, which is referenced as a local file based dependency, which makes
the project a little difficult to setup initially.

### Setup

For the initial setup the easiest thing to do in order to get going is to
run the following commands:

```sh
npm ci --workspaces
npm run build --workspace=packages/espresso-block-explorer-components
npm ci --workspaces
```

In order to test that everything installed successfully and works without issue
simply run the tests of the project:

```sh
npm run test --workspaces
```

### Testing

In order to run the test of the project, simple run the following command:

```sh
npm run test --workspaces
```

To run with coverage as well, simply run `coverage` instead of `test`:

```sh
npm run coverage --workspaces
```

### Building

Build the `espresso-block-explorer-components` package first, then the
`block-explorer` package, which uses it:

```sh
npm run build --workspace=packages/espresso-block-explorer-components
npm run build --workspace=packages/block-explorer
```

#### Docker

To build the `Docker` image for the Block Explorer, target the `block-explorer`
stage of the included `Dockerfile`:

```sh
docker build --target block-explorer -t espresso-block-explorer .
```

The same image runs against any network, chosen with `ENVIRONMENT_NAME` when
the container starts. The site listens on port 3000 inside the container, and
`-p <local port>:3000` picks the port on your machine:

```sh
# Mainnet (also the default when ENVIRONMENT_NAME is not set)
docker run --rm -p 3000:3000 -e ENVIRONMENT_NAME=mainnet espresso-block-explorer

# Decaf testnet
docker run --rm -p 3000:3000 -e ENVIRONMENT_NAME=decaf espresso-block-explorer

# Milk devnet
docker run --rm -p 3000:3000 -e ENVIRONMENT_NAME=milk espresso-block-explorer
```

Then open [http://localhost:3000](http://localhost:3000). To run more than one
at a time, give each its own local port, e.g. `-p 3001:3000`. See
[docker/README.md](docker/README.md) for the other environment variables.

#### Running against your own network

Point the explorer at your network's HotShot query service. The URL must end
in `/v0/`, including the trailing slash:

```sh
QUERY_SERVICE_URI="https://query.my-network.example/v0/"

docker run --rm -p 3000:3000 \
  -e QUERY_SERVICE_URI="$QUERY_SERVICE_URI" \
  espresso-block-explorer
```

The browser calls the query service directly, so it must be reachable by your
visitors, allow requests from the explorer's origin (CORS), and serve the
`explorer`, `status` and `availability` APIs.

Optional variables:

| Variable                           | Sets                                  | Default                              |
| ---------------------------------- | ------------------------------------- | ------------------------------------ |
| `STAKING_SITE_URL`                 | Where the header's Stake link goes    | `https://stake.espresso.network/`    |
| `BASE_URL`                         | The site's address in page metadata   | `https://explorer.espresso.network/` |
| `BLOCK_EXPLORER_SITE_PREFIX`       | The prefix in the page title          | `MAINNET`                            |
| `BLOCK_EXPLORER_NETWORK_SITE_NAME` | The site name in the page title       | `Espresso Block Explorer`            |
| `BLOCK_EXPLORER_NETWORK_NAME`      | The network name in page descriptions | `Espresso`                           |

- An `ENVIRONMENT_NAME` other than `mainnet`, `decaf`, `water` or `milk` is
  treated as `mainnet`. The home page's rollup count and the rollup names and
  logos then come from the explorer's built-in Mainnet list.

### Developing

In order to develop for the project, it is easiest to follow the `Storybook`
development flow, and develop everything within the
`espresso-block-explorer-components` package. Simply run the `storybook`
command:

```sh
npm run storybook --workspace=packages/espresso-block-explorer-components
```

Then modify or add files, with accompanying `stories` and `tests` as needed.

### Targeting individual Workspaces

You can target individual workspaces instead of all of the workspaces at once
with the `--workspace` flag.

Examples:

Testing:

```sh
npm run test --workspace=packages/espresso-block-explorer-components
npm run test --workspace=packages/block-explorer
```

Coverage:

```sh
npm run coverage --workspace=packages/espresso-block-explorer-components
npm run coverage --workspace=packages/block-explorer
```

Build:

```sh
npm run build --workspace=packages/espresso-block-explorer-components
npm run build --workspace=packages/block-explorer
```

## Espresso Block Explorer Components

This is library that contains `components` for the
[Espresso Block Explorer Components](packages/espresso-block-explorer-components/README.md).
This is where all of the separate elements that make up the `Block Explorer` are
contained. It is built with [React](https://react.dev/) and prototyped with
[Storybook](https://storybook.js.org/).

This package is ultimately consumed by the [Block Explorer](packages/block-explorer/README.md)
for rendering with a server-side handler. There are some potential plans to
avoid using [NextJS](https://nextjs.org/) in the future, but those plans are to
come.

## Block Explorer

The [Block Explorer](packages/block-explorer/README.md) is a
[NextJS](https://nextjs.org/) library that simply handles requests and routing
for the `Block Explorer`. It is built using the
[Espresso Block Explorer Components](packages/espresso-block-explorer-components/README.md).
library with very little logic, beyond handling routing paths.

## Copyright

**(c) 2024 Espresso Systems** `espresso-block-explorer` was developed by
Espresso Systems. While we plan to adopt an open source license, we have not
yet selected one. As such, all rights are reserved for the time being. Please
reach out to us if you have thoughts on licensing.

# Disclaimer

**DISCLAIMER:** This software is provided "as is" and its security has not
been externally audited. Use at your own risk.
