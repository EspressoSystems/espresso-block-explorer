# AGENTS.md

Guidance for coding agents (Claude Code, Codex and others) working in this repository. `CLAUDE.md` imports this file. For the full, cited architecture, see [docs/architecture.md](docs/architecture.md).

## Rules

- **Staking code needs human review.** Changes under the paths below decide where users' tokens go, so they are owned by the staking reviewers in `CODEOWNERS`. Change them only when the task asks for it, keep those PRs focused, and say in the PR description what was verified and how.
  - `packages/espresso-block-explorer-components/src/contracts/`
  - `packages/espresso-block-explorer-components/src/sites/delegation_ui/`
  - `packages/espresso-block-explorer-components/src/service/espresso_staking_api_service/`
  - `packages/espresso-block-explorer-components/src/service/hotshot_query_service/reward_state/`
  - `packages/delegation-ui/`
  - `docker/`
- **Never invent or edit chain data.** Contract ABIs (`src/contracts/*/*_abi.ts`), contract addresses, chain IDs and RPC or service URLs change only with a cited source, such as a contracts-repo commit or a deployment record.
- **No secrets in git.** Never commit a real WalletConnect project ID, RPC key or `.env` file. The staking app's dev server rewrites `packages/delegation-ui/public/config.json` from environment variables when it starts, so don't commit the change that leaves behind.
- **Don't push or open PRs unless a human asks.** Commit only when asked.
- **Keep `docs/architecture.md` current.** It is the human-facing reference for this repo. If a change makes anything in it wrong (a command, path, flow, config, version or risk), update it in the same PR.
- **Leave `package-lock.json` alone** unless the task is a dependency change. Check that the diff contains only the intended packages: newer npm versions silently drop the `libc` fields that pick the right native binaries on Alpine.

## Before saying a change is done

Run from the repo root and report the results:

```sh
npm run build        # also typechecks the apps (next build)
npm run lint         # runs eslint --fix: review any files it changed
npm run test
```

UI changes also need before/after screenshots in light and dark mode. Check that `docs/architecture.md` still matches the change.

## Repository layout

An npm-workspaces monorepo driven by Turborepo, with three packages:

- `packages/espresso-block-explorer-components`: a React library (Vite, Storybook) holding nearly all UI, data fetching, codecs and contract bindings. **Most work happens here.**
- `packages/block-explorer`: a thin Next.js app for explorer.espresso.network. It only routes and wires library pages into contexts.
- `packages/delegation-ui`: a thin Next.js app for the staking dashboard (stake.espresso.network), also built from the library.

Both apps consume the library through its **built `dist/`**, not its source. After editing the library, rebuild it before an app sees the change.

## Commands

First setup:

```sh
npm ci
npm run build --workspace=packages/espresso-block-explorer-components   # copies the workers into the apps
npm run build
```

- Use plain `npm ci`: `--workspaces` skips the root's own dev tools, including turbo.
- The middle step builds the library without Turbo. On a Turbo cache hit (CI, or a new git worktree, which shares the cache), Turbo restores the library's `dist/` but skips copying its workers into the apps ([#470](https://github.com/EspressoSystems/espresso-block-explorer/issues/470)).
- The apps reach the library through a workspace symlink, so no reinstall is needed after building it.

| Command | Notes |
|---|---|
| `npm run lint` | Runs `eslint src --fix`, so it rewrites files. CI runs the same command, so fixable lint errors never fail CI. |
| `npx turbo build --force` | Bypasses Turbo's cache when a stale library build is suspected. |
| `npm run dev --workspace=packages/block-explorer` | Next dev server on :3000. |
| `npm run storybook --workspace=packages/espresso-block-explorer-components` | Storybook on port 6006. |

Use `--workspace=packages/<name>` to run any script in a single package.

To run a single test file or a named test, run Vitest from the package directory:

```sh
cd packages/espresso-block-explorer-components
npx vitest run src/sites/block_explorer/pages/__test__/block_page.test.tsx
npx vitest run -t "name of test"
```

Unit tests use Vitest + jsdom + Testing Library, with `TZ=UTC`. They live in `__test__/` next to the code; the apps keep theirs in `src/__tests__/`. Stories live in `__docs__/`.

There is no typecheck script and there are no end-to-end tests. `next build` typechecks the apps, but the library build does not fail on type errors.

**Docker:** `docker build --target block-explorer .` (or `--target delegation-ui`). The network is chosen at runtime with `-e ENVIRONMENT_NAME=mainnet|decaf|water|milk`.

## Architecture

### Library entry points and chunking

The library exports three entry points, each with a CSS file:

- `.`: shared code
- `./block-explorer`: `src/sites/block_explorer`
- `./delegation-ui`: `src/sites/delegation_ui`

`vite.config.mts` keeps shared code (everything outside `src/sites/`) in its own chunk. **Shared code must never import from `src/sites/`.** That would make the chunk graph cyclic and cause TDZ errors at runtime. Inside the library, `@/` resolves to `src/`.

### Data flow: contexts plus web workers

- Pages read data from React contexts, not from props.
- The service contexts (HotShot query service, staking API, node validator) run their requests in **web workers**.
- Each worker fetches `/config.json` itself to learn its service URL. **If that fails or the URL is missing, the worker silently falls back to fake data.** A page showing fake data usually means a config problem.
- The library build copies the worker bundles into each app's `public/assets/` (the `copy-assets` script). That copy happens only when the library really builds, so a Turbo cache hit skips it (#470). If an app has missing or stale workers, run `npm run build --workspace=packages/espresso-block-explorer-components`, then `npx turbo build --force`.
- `EnvironmentContext` (`mainnet`, `decaf`, `water`, `milk`, `fakeData`) selects network-specific behavior.

### Apps are static exports configured at runtime

- **Static export.** Both apps use `output: 'export'`, and nginx serves the files (`docker/*-nginx.conf`).
- **Runtime config.** Nothing is baked in at build time. The container's init scripts write `/config.json` and replace placeholders such as `__SITE_PREFIX__` in the exported HTML.
- **Local config.** Each app's committed `public/config.json` points at Decaf. The staking app's dev server overwrites its copy without the service URLs, so local staking dev shows fake data. To use fake data in the explorer, remove the service URLs from its copy and don't commit that.
- **Dynamic routes.** `/block/[id]` and `/transaction/[slug]` export one static shell each, and the client reads the real ID from the URL.
- **Title strings kept in sync.** `getSiteTitleConfig()` (`packages/block-explorer/src/helpers/read_from_env.ts`) and the bash `case` statement in `docker/block-explorer-generate-files.sh` hold the same per-environment title strings. Keep the two in sync.
- **Check error handling against a production build.** The dev server shows error overlays that production doesn't.

### Next.js 16

These Next.js versions may differ from what you know. Before writing Next-specific code, read the bundled docs in `packages/<app>/node_modules/next/dist/docs/`.

## Conventions

- **Files.** snake_case `.ts`/`.tsx` files. Plain CSS sits next to each component.
- **CSS variables.** Word groups use one hyphen and categories use two: `--color--slate-950`, `--card--background-color`, `type--paragraph--text-100`. Every palette color `--color--X` has a contrasting `--on-color--X`.
- **Comments.** JSDoc blocks that open with "funcName does X". Keep comments short and only where they add something.
- **Dependency versions.** wagmi is pinned by `overrides` in the root `package.json`: change it there, not in a package. Each package uses TypeScript 6, but `npx tsc` from the root runs an older TypeScript 5, so run TypeScript through a package's scripts or from its folder.
- **Commits.** Sentence-case imperative subjects with no conventional-commit prefix. Branches are named `feat/`, `fix/`, `design/`, `chore/` or `docs/`, and PRs merge with merge commits.

## CI

`.github/workflows/build.yml` runs these steps, and a PR must pass all of them:

1. Install
2. Build the library
3. `turbo build`
4. `turbo lint` (with `--fix`)
5. `turbo test`
6. Storybook build

`docker.yml` builds both images and pushes them to GHCR on non-PR events.
