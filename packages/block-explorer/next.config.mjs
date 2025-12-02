/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude pino and related packages from Turbopack bundling.
  // Pino uses dynamic module loading that Turbopack cannot trace.
  // Pino is a transitive dependency via @rainbow-me/rainbowkit -> @walletconnect/universal-provider.
  // https://github.com/vercel/next.js/issues/86099
  serverExternalPackages: ["pino", "pino-pretty", "thread-stream"],
};

export default nextConfig;
