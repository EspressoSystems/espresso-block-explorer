/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    globalSetup: './vitest.global-setup.ts',
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      reporter: ['text', 'json-summary', 'json', 'lcov'],
      reportOnFailure: true,
      exclude: [
        '**/*.config.js',
        '**/*.config.ts',
        '**/__test__/**',
        '**/index.ts',
        '**/.next/**',
        '**/*.d.ts',
        '**/vitest.global-setup.ts',
      ],
    },
  },
});
