import { test as base, expect } from '@playwright/test';

// Each block and transaction ID is served the same static shell, prerendered
// for ID 0, so React reports a hydration mismatch (#418/#419) and re-renders on
// the client. Ignored until that's fixed; any other uncaught error fails.
const knownHydrationError = /Minified React error #41[89]/;

// Fails every test whose page throws an uncaught error.
export const test = base.extend<{ pageErrors: string[] }>({
  pageErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => {
        if (!knownHydrationError.test(String(error))) {
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
