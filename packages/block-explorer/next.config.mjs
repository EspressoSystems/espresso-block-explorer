/**
 * The @x402/{core,evm,svm,extensions} dependencies in package.json are not
 * imported by any first-party file. @coinbase/cdp-sdk declares them as optional
 * peers and reaches them through lazy import(); Turbopack resolves those eagerly
 * and fails the build without them. The chain is
 * @rainbow-me/rainbowkit -> @wagmi/connectors -> @base-org/account -> @coinbase/cdp-sdk,
 * so their version range needs re-checking whenever cdp-sdk moves.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude pino and related packages from Turbopack bundling.
  // Pino uses dynamic module loading that Turbopack cannot trace.
  // Pino is a transitive dependency via @rainbow-me/rainbowkit -> @walletconnect/universal-provider.
  // https://github.com/vercel/next.js/issues/86099
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],

  // Export as fully static files served by nginx.
  // Runtime configuration is injected via /config.json at container startup.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
};

export default nextConfig;
