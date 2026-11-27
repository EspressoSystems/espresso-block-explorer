/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude pino and related packages from Turbopack bundling.
  // Pino uses dynamic module loading that Turbopack cannot trace.
  // Pino is a transitive dependency via @rainbow-me/rainbowkit -> @walletconnect/universal-provider.
  // https://github.com/vercel/next.js/issues/86099
  serverExternalPackages: ['pino', 'pino-pretty', 'thread-stream'],

  // Don't write an AGENTS.md here on `next dev`: the root AGENTS.md already
  // points agents at the bundled Next.js docs.
  agentRules: false,

  // Export as fully static files served by nginx.
  // Runtime configuration is injected via /config.json at container startup.
  output: 'export',
};

export default nextConfig;
