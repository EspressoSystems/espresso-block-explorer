# Architecture

How this repository is built, configured, tested and shipped. It started as a read-only inspection of the code on 2026-11-20. Agents keep it current: a change that makes something here wrong updates it in the same PR (see `AGENTS.md`).

**How to read this document**

- Every claim cites `file:line`. Paths use these abbreviations:
  - `LIB/` = `packages/espresso-block-explorer-components/src/`
  - `EXP/` = `packages/block-explorer/`
  - `DUI/` = `packages/delegation-ui/`
- **Verified** means it was read in this repo's code.
- **Inferred** means it was reasoned from the code or from a dependency's source, but not observed running. Inferred claims are tagged *(inferred)*.
- Nothing in this document was executed against a live network.
- Open questions are collected in [Unresolved questions](#unresolved-questions) at the end.

---

## 1. Stack

Major versions only. The root `package.json`, each package's `package.json` and `package-lock.json` hold the exact versions.

| Area | What | Configured in |
|---|---|---|
| Languages | TypeScript (`.ts`/`.tsx`), plain CSS, Bash (container scripts), nginx config | — |
| Package manager | npm 10 with workspaces | root `package.json` (`packageManager`, `workspaces`) |
| Task runner | Turborepo 2 | `turbo.json` |
| Library build | Vite 8 | `packages/espresso-block-explorer-components/vite.config.mts` |
| Apps | Next.js 16, App Router, static export (`output: 'export'`) | `EXP/next.config.mjs`, `DUI/next.config.mjs` |
| UI | React 19 | — |
| Wallet / chain | wagmi 3 (pinned by `overrides` in the root `package.json`), viem 2, RainbowKit 2, TanStack Query 5 | `LIB/models/config/environment/wagmi.ts` |
| Component workbench | Storybook 10 | library `.storybook/` |
| Tests | Vitest 5, jsdom, Testing Library | each package's `vitest.config.ts` or `vite.config.mts` |
| Lint / format | ESLint 9, Prettier 3 | each package's `eslint.config.mjs` and `.prettierrc` |
| TypeScript | 6 in each package; an older TypeScript 5 is hoisted to the root `node_modules` by ESLint's dependencies | each package's `tsconfig.json` |
| Runtime | nginx serving the static exports | `Dockerfile`, `docker/*-nginx.conf` |
| Node version | Not pinned: no `engines` field or `.nvmrc`. CI uses Node 24, Docker builds on Node 22. | `.github/workflows/build.yml`, `Dockerfile` |

## 2. Directory structure and key components

```
packages/
  espresso-block-explorer-components/   React library: nearly all logic and UI
    src/
      espresso-block-explorer-components.ts   entry "."              (shared code)
      block-explorer.ts                       entry "./block-explorer" → src/sites/block_explorer
      delegation-ui.ts                        entry "./delegation-ui"  → src/sites/delegation_ui
      service/      API clients: hotshot_query_service, espresso_staking_api_service, node_validator, ethereum, …
      contracts/    hand-maintained ABIs + typed read/write wrappers (stake_table[_v2], esp_token, reward_claim, light_client[_v2])
      contexts/     React context providers (services, contracts, formatters, environment)
      convert/      codecs: tagged base64, bincode, hex, RLP, protobuf varints, JSON field codecs
      async/        fetch wrappers, retry/backoff, channels, async iterators
      errors/       typed errors + an error codec registry (errors cross the web-worker boundary)
      models/       domain models, rollup registry, storybook config
      data_source/fake_data_source/   seeded fake data (Storybook, tests, and the runtime fallback, see §8)
      components/   shared UI
      sites/block_explorer/   explorer pages, sections, theme
      sites/delegation_ui/    staking dashboard UI, staking modal, mocks
  block-explorer/    Next app: routes only (src/app) + thin client components (src/client_components)
  delegation-ui/     Next app: one page, wagmi setup (src/helpers/wagmi.ts), config loading
docker/              container init scripts + nginx configs
Dockerfile           multi-stage; final targets `block-explorer` and `delegation-ui`
.github/workflows/   build.yml (build/lint/test/storybook), docker.yml (images)
```

**Verified structural facts**

- Both apps depend on the library as `"espresso-block-explorer-components": "*"` and import its **built `dist/`** through the package `exports` (library `package.json:54-69`). An app sees a library change only after `npm run build` in the library.
- The library build puts all shared code (everything outside `src/sites/`) in its own chunk via Rolldown `codeSplitting.groups` (`vite.config.mts`). If shared code imported from `src/sites/`, the chunk graph would become circular; the config comment says that produces TDZ errors at runtime.
- `@/` aliases are defined twice, in `tsconfig.base.json` paths and in `vite.config.mts` `resolve.alias`. The two lists differ: vite has `@/loading` and `@/typography`, tsconfig has `@/sites/*`.
- Worker bundles are emitted by Vite into `dist/assets/*worker*.js` and copied into each app's `public/assets/` by the `copy-assets` script (library `package.json`). `cp` never cleans the folder, so old hashed copies accumulate.

## 3. Block explorer: obtaining, transforming and displaying data

### 3.1 Sources (verified)

- **The HotShot query service is the explorer's only backend.** Prefixes are appended to the base URL in `LIB/service/hotshot_query_service/implementations/remote_api.ts:24-40`: `availability/`, `status/`, `explorer/`, `reward-state-v2/`, `node/`.
- Calls the explorer actually makes:
  - `explorer/block/{height|latest}`
  - `explorer/blocks/{from|latest}/{limit}`
  - `explorer/transaction/hash/{hash}` and `explorer/transaction/{height}/{offset}`
  - `explorer/transactions/...` (optionally filtered by `/block/{n}` or `/namespace/{ns}`)
  - `explorer/explorer-summary`
  - `explorer/search/{q}`
  - `status/block-height`
  - `node/stake-table/{epoch}`
  
  Sources: `explorer/implementations/remote_api.ts:78-148`, `get_transaction_summaries_target.ts`, `status/implementations/remote_api.ts:15`, `node/implementations/remote_api.ts:20-30`.
- The explorer uses no L1 RPC and no node-validator WebSocket.
- **Rollup names and logos are static data compiled into the bundle:** `LIB/models/block_explorer/rollup_entry/data.ts`, `data_images.ts`.

### 3.2 How the base URL is resolved (verified)

1. At container start, `docker/block-explorer-generate-files.sh:12-55` writes `/config.json` with `ENVIRONMENT_NAME` and `hotshot_query_service_url`. The URL defaults per environment to `https://cache.{main.net|decaf.testnet|water.devnet|milk.devnet}.espresso.network/v0/`.
2. The **web worker** fetches `/config.json` itself and builds a fetch-based service from `hotshot_query_service_url` (`LIB/service/hotshot_query_service/hotshot_query_service_web_worker_proxy.ts:30-48`).
3. The main thread fetches `/config.json` separately to learn `ENVIRONMENT_NAME` (`EXP/src/client_components/layout.tsx:28-37`). Unknown or missing values become `mainnet` (`EXP/src/helpers/read_from_env.ts:8-27`).
4. In `next dev`, `EXP/public/config.json` (tracked in git) points at the Decaf query service.

### 3.3 The web-worker pipeline (verified)

- `ProvideHotShotQueryServiceAPIContext` uses a module-level singleton worker-backed service when `Worker` exists. Otherwise it uses `FakeDataHotShotQueryService` (`LIB/contexts/hot_shot_query_service_api_context.tsx:13-24,59-70`).
- The main thread posts `{requestID, api, method, param}` with codec-encoded params. Responses are matched by ID and decoded with the response codec (`LIB/service/espresso_staking_api_service/web_worker_types.ts:336-414`).
- The worker queues requests in a buffered channel (size 10) and processes them **one at a time** (`hotshot_query_service_web_worker_proxy.ts:72,99-147`).
- **Fetch stack:** `createAutoRetryFetch(createExtendedFetch())`.
  - Retries only on network `FetchError`.
  - At most 3 attempts.
  - Linear back-off of 250 ms × attempt, capped at 2 s, plus up to 250 ms of jitter.
  - HTTP error statuses are not retried.
  - No timeout and no `AbortSignal`.
  
  Sources: `LIB/async/fetch/auto_retry_fetch.ts:100-127`, `LIB/async/retry/*`.
- **Error mapping** (`LIB/async/fetch/extended_fetch.ts:13-62`):
  - 4xx becomes `BadResponseClientError`.
  - 5xx becomes `BadResponseServerError`, except that a 5xx whose body says "does not exist or is not known" becomes a client 404.
  - Errors are serialized across the worker boundary through `LIB/errors/registry.ts`.

### 3.4 Transformation (verified)

- Each response type has a decoder that asserts required keys and decodes field by field. For example, `ExplorerBlockDetail` decodes tagged-base64 hashes, RFC 3339 times, hex addresses and monetary values (`explorer/block_detail.ts:41-63`).
- Codecs live in `LIB/convert/`. Tagged base64 is in `LIB/models/espresso/tagged_base64/tagged_base64.ts`.
- **Rollup payloads are decoded at display time:**
  - Arbitrum Nitro batches have per-message `try/catch` (`nitro_batch_display.tsx:54-71`).
  - Optimism uses RLP (`optimism_batch_display.tsx:65-90`) with **no `try/catch`** around the call at `:147`.
  - Infinite Garden uses bincode.
- **Namespace → rollup lookup** merges the mainnet list, the Decaf list and the fake entries into one map (`data.ts:314-362`), so a lookup ignores the current environment. Ligero's mainnet and Decaf entries share namespace 100042 (`data.ts:138,145`); the later entry wins.

### 3.5 Display (verified)

| Route | Client component (`EXP/src/client_components/`) | Library page (`LIB/sites/block_explorer/pages/`) |
|---|---|---|
| `/` | `explorer.tsx` | `ExplorerPage` |
| `/blocks?height=` | `blocks.tsx` | `BlocksPage` (20 per page) |
| `/transactions?height=&offset=` | `transactions.tsx` (`?block=` redirects to `/block/{n}`) | `TransactionsPage` |
| `/block/{n}` | `block.tsx`, rendered from `app/block/layout.tsx` so it stays mounted across IDs | `BlockPage` |
| `/transaction/{height}-{offset}` | `transaction.tsx` | `TransactionPage` |

- **Static shells for dynamic routes.** Each dynamic route is exported as one static shell (`generateStaticParams` returns `'0'`). The client component reads the real ID from the pathname, and nginx `sub_filter` fills the title placeholders `__BLOCK_ID__` and `__TX_SLUG__` (`docker/block-explorer-nginx.conf:31-61`).
- **Loading.** Loaders build the request promise during render and hand it to `PromiseResolver` (`LIB/components/data/async_data/promise_resolver.tsx`).
- **Live updates:**
  - `explorer-summary` is polled every 1 s, forever (`hot_shot_query_service_adapters.tsx:227,242-287`).
  - `status/block-height` is polled every 5 s (`page_sections/newest_block_height.ts`).
- **Errors and not-found:**
  - An invalid ID in the URL leads to `notFound()`.
  - An API 404 shows an in-page `BlockNotFound` or `BlobNotFound`.
  - Other API errors show `ErrorDisplay`, which offers a reload.
  - Exceptions thrown during render go to `app/error.tsx` or `global-error.tsx`.
- **Unrouted pages.** `rollup.tsx` and `rollups.tsx` exist, but no route uses them, and the nav link is commented out (`main_nav_links.tsx:35-39`).
- **API data is not rendered as raw HTML.** No `dangerouslySetInnerHTML`, `innerHTML` or `eval` appears in non-test code (verified with grep). External links come only from the static rollup map.

## 4. Staking and delegation (`delegation-ui`)

### 4.1 Wallet integration (verified unless tagged)

- **wagmi config** (`DUI/src/helpers/wagmi.ts`). Each environment gets **exactly one chain**:

  | Environment | Chain |
  |---|---|
  | mainnet | Ethereum mainnet |
  | decaf | Sepolia |
  | water, milk | custom chain id **1337** (both) |
  | fakeData, localDevNet | 31337 on `localhost:8545` |

  `localDevNet` can't be selected through config (`read_from_env.ts:8-27`).
- **Connectors** (`DUI/src/client_components/provide_contexts_from_env.tsx:79-95`):
  - With a WalletConnect project ID, RainbowKit's `getDefaultConfig` is used.
  - Without one, plain `createConfig` is used with no explicit connectors. *(inferred)* That leaves only EIP-6963 injected-wallet discovery.
- **RPC.** `RPC_URLS` (comma-separated and validated as URLs) overrides the transport for the single chain. Otherwise viem's default public RPC for that chain is used. Reads and receipt polling go through this RPC; writes go through the wallet (`LIB/contracts/l1/l1_remote.ts:109-116`).
- **Wrong network.**
  - `LIB/sites/delegation_ui/wrong_network_check.tsx:16-45` shows a banner and a switch button, but does **not** disable the action buttons.
  - Every write passes `chainId: config.chains[0].id`. *(inferred from the wagmi and viem source)* wagmi then makes viem assert the current chain, so a write on the wrong chain throws before the wallet signs.

### 4.2 Network configuration and contract addresses (verified)

- **The environment name selects only the wagmi chain and the environment banner.** Contract addresses and service URLs come solely from `/config.json`.
- **Contract addresses**: `CONTRACT_ADDRESS_STAKE_TABLE`, `_ESP_TOKEN`, `_REWARD_CLAIM` and `_LIGHT_CLIENT`.
  - They are validated **only for a `0x` prefix**, with no length or checksum check (`DUI/src/helpers/read_from_env.ts:29-41`).
  - If one is missing, that contract's context is `null` and its buttons are disabled.
  - The production image has **no default addresses**. The Docker defaults are empty (`docker/delegation-ui-init.sh:15-18`, `Dockerfile:166-169`).
  - Per-environment address sets exist only for Storybook (`LIB/models/config/storybook/controls.ts:97-190`). The Decaf set is also written out in `docker/README.md:42-45`.
- **Service URLs** are read by the workers from the lowercase keys `hotshot_query_service_url`, `staking_api_service_url` and `node_validator_service_url`. Their Docker defaults are **mainnet URLs whatever `ENVIRONMENT_NAME` is** (`docker/delegation-ui-init.sh:12-14`).
- **Dev config.** In `next dev`, `DUI/src/instrumentation.ts:10-32` **rewrites the tracked `DUI/public/config.json`** from `process.env`. It writes only the uppercase keys and **drops the three service-URL keys**.

### 4.3 Contracts and ABIs (verified)

The ABIs are hand-maintained TypeScript files (Foundry JSON exported `as const`) in `LIB/contracts/*/…_abi.ts`. No codegen script exists. Each contract has typed wrappers: `*_interface.ts`, `*_remote.ts`, `*_gas_estimator_remote.ts`.

| Contract | Reads used | Writes used by UI |
|---|---|---|
| StakeTable (v1 ABI for writes; the v2 provider exposes the same instance as both) | `validators`, `delegations`, `undelegations`, `validatorExits`, `exitEscrowPeriod`, `getVersion`; v2 adds `minDelegateAmount`, `activeStake`, commission reads, … | `delegate`, `undelegate`, `claimWithdrawal`, `claimValidatorExit` |
| ESP token (ERC-20) | `balanceOf`, `allowance`, `decimals`, … | `approve` |
| RewardClaim | `claimedRewards`, `totalClaimed`, `getVersion` | `claimRewards(lifetimeRewards, authData)` |
| LightClient v1/v2 | `finalizedState`, `blocksPerEpoch`, `currentEpoch`, … | none |

The gas-estimator classes are placed into context but never read. The wallet estimates all gas.

### 4.4 Transaction creation and signing (verified unless tagged)

- **Only the connected wallet signs.** No private key, mnemonic, `signMessage` or `signTypedData` appears in the code. There is no server-side signer.
- **Shared write pipeline** (`LIB/sites/delegation_ui/staking_modal/contexts/perform_write_states.ts:150-204`):
  1. wagmi `writeContract` with the ABI, address and chainId. There is **no `simulateContract`** and no gas, fee or nonce override.
  2. `waitForTransactionReceipt` with 1 confirmation and a 180 s timeout.
  3. A reverted receipt throws.
  4. A 2 s pause for indexer lag.
- **Amounts.** `ESPInput.parseESPValue` turns a locale-aware string into a bigint with **18 decimals, hardcoded** (`LIB/components/input/esp/esp_input.tsx:44-101`, `currency_code.ts:58`).
- **Per-action guards:**

  | Action | Guard / behavior | Source |
  |---|---|---|
  | Approve | Approves `max(stakingAmount, wholeBalance)`, so the **whole ESP balance**, but never an unlimited amount (no `maxUint256` anywhere). Shown only when the staking amount exceeds the current allowance. | `approve_button.tsx:41-44,94-96` |
  | Delegate | Enabled when 0 < amount ≤ balance, amount ≤ allowance, and amount ≥ `minDelegateAmount` (read on-chain; defaults to 1 ESP before it loads). The validator address comes from the staking-API table row. | `delegate_button.tsx:118-130` |
  | Undelegate | 0 < amount ≤ current stake. Current stake is read on-chain, falling back to the API snapshot while that read is pending. | `current_stake_to_validator_context.tsx:25-67` |
  | Claim withdrawal / exit | Checks only that the amount is > 0. There is no unlock-time check; the contract reverts early claims (`PrematureWithdrawal`). | `withdraw_claim_content.tsx`, `withdraw_exit_content.tsx` |
  | Claim rewards | `lifetimeRewards` and `authData` come from the query service: `reward-state-v2/reward-claim-input/{height}/{address}`, with the height taken from LightClient `finalizedState()`. Gated by `PROOF_OF_STAKE_RELEASED`. | `perform_claim_rewards_context.tsx:84-129`, `reward_claim_input_context.tsx:28-50` |
  | Claim-and-stake (`?intent=claim-and-stake&address=&amount=`) | Checks the account and chain. **Picks a validator at random** (weighted toward commission ≤ 5%), then **automatically prompts approve and then delegate**. A code comment records this as a design request. | `claim_and_stake_content.tsx:199-371,651-860` |

- **Revert decoding.** Revert reasons are decoded only in the claim-rewards flow (`LIB/contracts/error_helpers.ts:59-92`, `reward_claim/error_helpers.ts`). The other flows show a generic retry.

### 4.5 Staking API (verified)

- **Base URL:** `staking_api_service_url`. Routes are defined in `LIB/service/espresso_staking_api_service/implementations/fetch_based.ts:26-36`.
- **Endpoints:**
  - `l1/block/latest` and `l1/block/{n}`
  - `nodes/all/{l1hash}` (+`/updates`)
  - `nodes/active` and `active/{height}` (+updates)
  - `wallet/{addr}/{l1hash}` (+updates)
- **Built-in validator names.** Mainnet operator metadata is hardcoded in `curated_validators_map_context.tsx:10-240` and is used for every environment.
- **Node-validator WebSocket.** It is provided at `DUI/src/client_components/provide_contexts.tsx:38`. *(inferred from grep)* No delegation-UI component consumes it.

## 5. Environment variables and external services

None of these are compiled into the bundle. Container init scripts write `/config.json` at startup and the browser fetches it. **Values are not reproduced here.** Defaults are listed only where they are non-secret public URLs.

| Variable | Used by | Written into | Default |
|---|---|---|---|
| `ENVIRONMENT_NAME` | both | `config.json` | `mainnet`. Valid values: `mainnet`, `main`, `decaf`, `water`, `milk`, `fakeData`; anything else is treated as mainnet. |
| `QUERY_SERVICE_URI` | both | `hotshot_query_service_url` | Explorer: per environment. Delegation: always the mainnet URL. |
| `NODE_VALIDATOR_URI` | delegation | `node_validator_service_url` | mainnet `wss://nv.main.net…/v0/` |
| `STAKING_UI_SERVICE_URI` | delegation | `staking_api_service_url` | mainnet `…/v0/staking/` |
| `CONTRACT_ADDRESS_STAKE_TABLE`, `_ESP_TOKEN`, `_REWARD_CLAIM`, `_LIGHT_CLIENT` | delegation | `config.json` | empty, which disables the related actions |
| `WALLETCONNECT_PROJECT_ID` | delegation | `config.json` | empty, which falls back to injected wallets only |
| `RPC_URLS` | delegation | `config.json` | empty, which uses viem's public RPC |
| `PROOF_OF_STAKE_RELEASED` | delegation | `config.json` | empty, which counts as false. **No `ENV` line in the Dockerfile.** |
| `BASE_URL`, `BASE_PATH` | delegation | `config.json` + `sed` over the HTML | `config.json` gets `https://claim.espresso.foundation` and `/stake/`; the `sed` defaults differ (`delegation-ui-init.sh:22-37`) |
| `BASE_URL`, `STAKING_SITE_URL`, `BLOCK_EXPLORER_SITE_PREFIX`, `_NETWORK_SITE_NAME`, `_NETWORK_NAME` | explorer | `sed` over the exported HTML/JS + the nginx conf | per environment (`docker/block-explorer-generate-files.sh:12-45`) |
| `NODE_ENV` | explorer build | — | static export only when `production` (`EXP/next.config.mjs:11`) |

**Other variable facts**

- `turbo.json` `build.env` lists 10 of these variables. *(inferred)* They now only affect Turbo cache keys, because nothing reads them at build time.
- There are no `NEXT_PUBLIC_*` variables and no Dockerfile `ARG`s.
- No `.env` file is tracked.

**External services and hosts** (all public endpoints):

- **Espresso services:**
  - HotShot query service (`cache.*` and `query.*.espresso.network`)
  - staking API (`…/v0/staking/`)
  - node-validator WebSocket (`nv.*`)
- **Ethereum RPC:** viem defaults for mainnet and Sepolia; `reth`/`wsreth`/`wsgeth` hosts for the Water and Milk devnets (`DUI/src/helpers/wagmi.ts:32-54`).
- **WalletConnect / RainbowKit relays** (when a project ID is configured).
- **Google Fonts**, imported from CSS in the delegation UI (`LIB/sites/delegation_ui/delegation_ui.css:1`).
- **Not found:** analytics, error reporting (Sentry etc.), feature flags.

## 6. Developer commands

These are taken from `package.json` scripts, `turbo.json`, `justfile` and `README.md`.

| Purpose | Command |
|---|---|
| First install | `npm ci --workspaces && npm run build --workspace=packages/espresso-block-explorer-components && npm ci --workspaces` |
| Build all | `npm run build` (`turbo build`) |
| Lint | `npm run lint`. Every package runs **`eslint src --fix`**, so it rewrites files. |
| Format | `npm run format --workspace=packages/espresso-block-explorer-components`. The library is the only package with a `format` script. The library's ESLint also enforces Prettier; the apps' ESLint does not. |
| Typecheck | **No dedicated script.** `next build` typechecks the apps. *(inferred)* `vite build` does not fail on type errors, so library type errors only surface when an app is built. |
| Unit / component tests | `npm run test` (Vitest + jsdom). About 269 test files: the library's in `__test__/`, the apps' in `src/__tests__/`. |
| Single test file | `cd packages/<pkg> && npx vitest run <path>` |
| Coverage | `npm run coverage`. Uses istanbul, has **no thresholds**, and is commented out in CI. |
| Storybook | `npm run storybook --workspace=packages/espresso-block-explorer-components` (port 6006) |
| Storybook test-runner | `test-storybook` is defined, but `@storybook/test-runner` and `axe-playwright` are **not in the lockfile**, so it can't run. |
| Integration / E2E | **None.** No Playwright or Cypress. The app-level tests render pages in jsdom against fake data. |
| Docker | `docker build --target block-explorer .` / `--target delegation-ui .` |

## 7. CI/CD and deployment

**`build.yml`**
- Runs on push to `main` and `release-*`, on PRs, and by manual dispatch. In-progress runs are cancelled.
- Steps:
  1. `npm ci`
  2. `npm ci --workspaces`
  3. Build the library
  4. `npm ci --workspaces` again
  5. `turbo build`
  6. `turbo lint` (with `--fix`)
  7. `turbo test`
  8. `build-storybook`
- On `main` only, `peaceiris/actions-gh-pages` publishes Storybook to GitHub Pages.

**`docker.yml`**
- Builds the `block-explorer` and `delegation-ui` targets as a matrix, for one platform (the multi-arch jobs are commented out).
- Pushes to `ghcr.io/espressosystems/espresso-block-explorer` and `ghcr.io/espressosystems/espresso-delegation-ui` on every event except pull requests. Tags come from `docker/metadata-action` defaults.

**Repository automation**
- Dependabot updates GitHub Actions daily. Its npm entry points at `/espresso-block-explorer-components`, which doesn't exist (the package is under `packages/`), so npm updates **never run** *(inferred)*.
- `CODEOWNERS`: `fkrell` is the default owner. `fkrell`, `jbearer` and `Ancient123` own the staking paths: contracts, wallet flows, staking and reward services, the staking app, `docker/` and `Dockerfile`. Owners are only required reviewers if branch protection has "Require review from Code Owners" on.

**Deployment**
- **No deploy step exists in this repo.** Images are published to GHCR; how they reach running environments is outside the repo.

**Runtime container**
- nginx serves the static `out/` directory on port 3000, behind tini and the init script.
- No security headers are set: no CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` or HSTS, and `server_tokens` is not turned off.
- `/_next/static/` is cached as immutable.
- The explorer serves `/config.json` with `max-age=86400`, while the comment above that line says 10 minutes (`docker/block-explorer-nginx.conf:25-28`). The delegation UI uses 600 s.

## 8. Conventions and risks

### Conventions (verified)

- **Files.** snake_case `.ts`/`.tsx`, with one exception, `useDocumentTitle.ts`.
- **Tests and stories.** Tests live in `__test__/` next to the code; stories in `__docs__/`.
- **Barrels.** About 190 `index.ts` files re-export with `export *`.
- **CSS.** Plain CSS files next to components. Custom properties use `--group--sub-name` naming, and every palette colour has a matching `--on-color--*`.
- **Comments.** JSDoc blocks that open with "funcName does X".
- **Commits.** Sentence-case imperative subjects with no conventional-commit prefix. Branches use `feat/`, `fix/`, `design/`, `chore/` or `docs/`, and PRs merge with GitHub merge commits.
- **Next.js 16 guidance.** `packages/block-explorer/AGENTS.md` (written by `next dev`, untracked) says to read the bundled Next docs before writing Next-specific code.

### Risks

Severity is my judgement. Each item cites its evidence.

**High**

1. **Silent fallback to fake data in production.**
   - What happens: if a worker can't fetch or parse `/config.json`, or the URL key is missing, it uses `FakeData*` services with no log and no banner. Affected files: `hotshot_query_service_web_worker_proxy.ts:42-47`, `staking_api_service_web_worker_proxy.ts:55-59`, `node_validator_web_worker_proxy.ts:136`.
   - Consequences: the explorer would show fabricated blocks. The staking UI would list fake validators, and real `delegate` transactions could target their addresses. *(inferred)* Those would revert or fail at a cost of gas, or, if the fake address happened to be a valid validator, succeed against the wrong one.
   - It also happens routinely in `next dev` for the delegation UI, because of the config writer in §4.2.
2. **Mainnet defaults behind non-mainnet labels.**
   - The delegation container's service URLs default to mainnet whatever `ENVIRONMENT_NAME` is.
   - Any unknown `ENVIRONMENT_NAME` is treated as mainnet.
   - Together these can pair mainnet API data with Sepolia contracts in a misconfigured deployment.
3. **Requests can hang forever.**
   - The worker processes requests one at a time, with no fetch timeout and no request deadline.
   - An error the codec registry can't encode or decode leaves the waiting promise unresolved (`registry.ts:186-190,296`; `web_worker_types.ts:365-414`).
   - Effect: one stuck request stalls every later request on that worker, including the polls.

**Medium**

4. **Approving the whole balance.** Approve covers the user's entire ESP balance, not just the stake amount. The claim-and-stake link then auto-prompts approve and delegate to a randomly chosen validator.
5. **No pre-flight checks.** There is no transaction simulation, and the validator address used for `delegate` comes from the staking API without an on-chain check.
6. **Weak config validation.** Contract addresses are checked only for a `0x` prefix. Water and Milk share chain id 1337.
7. **Hot loop in the summary poll.** The explorer-summary poll re-fetches immediately, with no sleep, when the transaction count goes backwards (`hot_shot_query_service_adapters.tsx:257-265`, re-read during this review).
8. **Unguarded Optimism decoder.** A malformed blob in an Optimism-integration namespace crashes the transaction page (`optimism_batch_display.tsx:147`).
9. **Swallowed errors.** Several `catch` blocks discard errors without logging: `EXP/src/client_components/layout.tsx:36`, `newest_block_height.ts:26`, `block_page.tsx:173`.
10. **No security headers** on either nginx site.

**Low / hygiene**

11. **Tracked dev config.**
    - `DUI/public/config.json` is tracked and includes a WalletConnect project ID and a non-empty `PROOF_OF_STAKE_RELEASED`. A WalletConnect project ID is a client-side identifier served to every browser in production, so this is drift rather than a leaked credential.
    - `next dev` rewrites that file, which dirties the working tree.
12. **`.dockerignore` ignores nothing.** Line 3 is `-` where `*` was intended, so local Docker builds send `node_modules`, `dist`, `.next` and similar into the build context.
13. **Stale worker bundles** are tracked in both apps' `public/assets/`, even though that path is gitignored.
14. **Title strings disagree.**
    - `getSiteTitleConfig()` says "… Block **Network**" (`EXP/src/helpers/read_from_env.ts:44-56`); the Docker script says "… Block **Explorer**".
    - The TS comment points at the wrong script.
15. **Tooling drift:**
    - Node 22 in Docker vs 24 in CI, with no `engines` field.
    - TypeScript 5.9 at the root vs 6.0 in the packages.
    - A dead `test-storybook` script.
    - Dependabot's npm entry points at the wrong directory.
    - CI's `lint --fix` hides fixable lint failures.
16. **`.claude/settings.json`** (untracked) has about 100 accumulated allow-rules. Some are broad: `git push *`, `gh repo *`, `gh auth *`, `security find-generic-password *`, `env`, and reading `~/.config/**`.

---

## Unresolved questions

1. **Deployment.** Where do the GHCR images get deployed, and by what (Kubernetes, ECS, another repo)? Who sets the production env vars, especially the contract addresses and `RPC_URLS`?
2. **Base path.** Is the delegation UI served under `/stake/` (the `BASE_PATH` default) or at the domain root? Workers fetch `/config.json` by absolute path, and if that hits the SPA fallback it returns HTML, which would trigger the fake-data fallback.
3. **Fake-data fallback.** Is it intentional for production, or only meant for Storybook and tests?
4. **Approval amount.** Is approving the whole balance (rather than the stake amount) a product decision?
5. **Random validator.** Is the random, commission-weighted choice in claim-and-stake approved by product or legal?
6. **ABI source.** Which contracts repo and commit are the ABIs copied from, and how is drift against deployed contracts detected?
7. **Staking API trust.** Is the staking API run by Espresso and considered trusted? Should validator addresses be checked on-chain before `delegate`?
8. **Water and Milk.** Are these still live, and is sharing chain id 1337 intended?
9. **WalletConnect project.** Is the project ID in the tracked dev config the production project? Is it domain-restricted in the WalletConnect dashboard?
10. **Storybook on GitHub Pages.** Storybook is published from `main`. Is that intended to stay public?
11. **Node version.** Which Node version is canonical, 22 (Docker) or 24 (CI)?
12. **Unrouted pages.** Is the hidden Rollups section planned, or dead code to remove?
13. **Who owns the staking UI?** *Answered:* `fkrell`, `jbearer` and `Ancient123` (see `CODEOWNERS`).
