import { test as base, expect } from '@playwright/test';

// Each block and transaction ID is served the same static shell, prerendered
// for ID 0, so React reports a hydration mismatch (#418/#419) and re-renders on
// the client. Ignored on those routes until that's fixed; any other uncaught
// error, or this one on another route, fails.
const knownHydrationError = /Minified React error #41[89]/;
const sharedShellRoute = /^\/(block|transaction)\//;

// isKnownError reports whether error is the hydration mismatch above, thrown
// on a route that serves the shared shell.
function isKnownError(error: Error, url: string): boolean {
  return (
    sharedShellRoute.test(new URL(url).pathname) &&
    knownHydrationError.test(String(error))
  );
}

// Fails every test whose page throws an uncaught error.
export const test = base.extend<{ pageErrors: string[] }>({
  pageErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => {
        if (!isKnownError(error, page.url())) {
          errors.push(String(error));
        }
      });
      await use(errors);
      expect(errors, 'uncaught page errors').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
