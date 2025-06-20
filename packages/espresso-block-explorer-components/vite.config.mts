/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'espresso-block-explorer-components', // Sets the name of the generated library.
      fileName: (format, entryName) => `${entryName}.${format}.js`, // Generates the output file name based on the format.
      formats: ['es', 'cjs'], // Specifies the output formats (CommonJS and ES modules).
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  resolve: {
    alias: [
      { find: '@/assert', replacement: '/src/assert' },
      { find: '@/async', replacement: '/src/async' },
      { find: '@/components', replacement: '/src/components/' },
      { find: '@/contexts', replacement: '/src/components/contexts' },
      { find: '@/convert', replacement: '/src/convert' },
      { find: '@/crypto', replacement: '/src/crypto' },
      { find: '@/data_source', replacement: '/src/data_source' },
      { find: '@/data_structures', replacement: '/src/data_structures' },
      { find: '@/errors', replacement: '/src/errors' },
      { find: '@/functional', replacement: '/src/functional' },
      { find: '@/higher_order', replacement: '/src/components/higher_order' },
      { find: '@/layout', replacement: '/src/components/layout' },
      { find: '@/loading', replacement: '/src/components/loading' },
      { find: '@/models', replacement: '/src/models' },
      { find: '@/service', replacement: '/src/service' },
      { find: '@/text', replacement: '/src/components/text' },
      { find: '@/typography', replacement: '/src/components/typography' },
      { find: '@/visual', replacement: '/src/components/visual' },
    ],
  },
  plugins: [
    dts({
      tsconfigPath: 'tsconfig.build.json',
    }),
    tsconfigPaths(),
  ], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  test: {
    globals: true,
    globalSetup: './vitest.global-setup.ts',
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'lcov'],
      reportOnFailure: true,
      exclude: [
        '**/__docs__/**',
        '**/__test__/**',
        '**/__shared__/**',
        '**/.storybook/**',
        '**/storybook-static/**',
        '**/index.ts',
        '**/*.d.ts',
        'vitest.global-setup.ts',
        'vite.config.mts',
        'eslint.config.mjs',
        'node_modules/**',
        'dist/**',
        'src/models/config/storybook/**/*',
      ],
    },
  },
});
