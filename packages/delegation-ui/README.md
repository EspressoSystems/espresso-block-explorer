This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Local configuration

The app reads its network, service URLs and contract addresses from `/config.json`. In development, `npm run dev` writes `public/config.json` on every start:

1. It starts from your saved settings in `config.local.json`. The first start creates that file from `public/config.example.json` (Decaf). Edit it to change your setup; the dev server never writes to it again. `config.local.json` and `public/config.json` are gitignored: don't commit them.
2. Environment variables, from the shell or a `.env.local` file, override your saved settings **for that run only**. The next start without them returns to your saved setup. The variable names are listed in the environment table in [docs/architecture.md](../../docs/architecture.md).
3. An empty variable, such as a blank `ENVIRONMENT_NAME=` line, counts as unset and keeps your saved value.
4. Setting `ENVIRONMENT_NAME` to a different network than the saved one doesn't reuse the saved network's service URLs, contract addresses, `RPC_URLS`, `PROOF_OF_STAKE_RELEASED` or `BASE_URL`. Set the ones you need for that network too: any left out stay empty, so that data falls back to fake data and those actions are disabled.

At startup the dev server logs a `config.json:` line saying which network it used and which variables it applied.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
