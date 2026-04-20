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
