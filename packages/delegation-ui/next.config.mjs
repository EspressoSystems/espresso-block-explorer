/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude pino and related packages from Turbopack bundling.
  // Pino uses dynamic module loading that Turbopack cannot trace.
  // Pino is a transitive dependency via @rainbow-me/rainbowkit -> @walletconnect/universal-provider.
  // https://github.com/vercel/next.js/issues/86099
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],

  // Enable standalone output for smaller Docker images
  output: 'standalone',

  cacheComponents: true,
};

export default nextConfig;
