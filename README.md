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

To effectively build the project, a two-stage process is involved. For
convenience, the asset files are currently committed, but this may change in
the future.

First step is to build the `espresso-block-explorer-components` package:

```sh
npm run build --workspace=packages/espresso-block-explorer-components
```

After this, the `public` folder from this package, as well as the assets folder
from the `dist` directory need to be copied to the `block-explorer` package.
So first, we must remove anything present first:

```sh
rm -rf packages/block-explorer/public
cp -r packages/espresso-block-explorer-components/public packages/block-explorer/public
cp -r packages/espresso-block-explorer-components/dist/assets packages/block-explorer/public/assets
```

Now you should be able to build the `block-explorer` package properly.

```sh
npm run build --workspace=packages/block-explorer
```

#### Docker

In order to build a `Docker` image, you should only need to run the
`docker build` and target the included `Dockerfile`. It will build the project
step-by-step and should result in a runnable image with whatever tag you'd
like to give it.

```sh
docker build -f block-explorer.Dockerfile .
```

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

**(c) 2025 Espresso Systems** `espresso-block-explorer` was developed by
Espresso Systems. While we plan to adopt an open source license, we have not
yet selected one. As such, all rights are reserved for the time being. Please
reach out to us if you have thoughts on licensing.

# Disclaimer

**DISCLAIMER:** This software is provided "as is" and its security has not
been externally audited. Use at your own risk.
