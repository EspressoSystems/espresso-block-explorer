import { defineConfig } from '@playwright/test';

// Smoke tests run against the production static exports, so build first:
//   npm run build && npm run e2e
// Locally they use the system Chrome; CI installs Playwright's Chromium.
export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    channel: process.env.CI ? undefined : 'chrome',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'explorer',
      testMatch: 'explorer.spec.ts',
      use: { baseURL: 'http://127.0.0.1:4310' },
    },
    {
      name: 'staking',
      testMatch: 'staking.spec.ts',
      use: { baseURL: 'http://127.0.0.1:4311' },
    },
  ],
  webServer: [
    {
      command: 'node serve.mjs explorer 4310',
      url: 'http://127.0.0.1:4310/config.json',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'node serve.mjs staking 4311',
      url: 'http://127.0.0.1:4311/config.json',
      reuseExistingServer: !process.env.CI,
    },
  ],
});
