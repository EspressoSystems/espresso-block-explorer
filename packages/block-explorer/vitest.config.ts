/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    globals: true,
    globalSetup: './vitest.global-setup.ts',
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'lcov'],
      reportOnFailure: true,
      exclude: [
        '**/.storybook/*.ts',
        '**/*.config.js',
        '**/*.config.ts',
        '**/__test__/**',
        '**/__docs__/**',
        '**/__docs__/**/*.stories.tsx',
        '**/index.ts',
        '**/.next/**',
        '**/*.d.ts',
        '**/vitest.global-setup.ts',
      ],
    },
  },
});
