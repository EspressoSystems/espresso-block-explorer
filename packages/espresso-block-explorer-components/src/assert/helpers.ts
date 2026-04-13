export function isProduction(): boolean {
  return !isDevelopment();
}

export function isDevelopment(): boolean {
  return Boolean(import.meta.env.DEV);
}
