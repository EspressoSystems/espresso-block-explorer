/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: {
        'espresso-block-explorer-components':
          './src/espresso-block-explorer-components.ts', // Specifies the entry point for building the library.
        'block-explorer': './src/block-explorer.ts',
        'delegation-ui': './src/delegation-ui.ts',
      },
      name: 'espresso-block-explorer-components', // Sets the name of the generated library.
      fileName: (format, entryName) => `${entryName}.${format}.js`, // Generates the output file name based on the format.
      formats: ['es', 'cjs'], // Specifies the output formats (CommonJS and ES modules).
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    // Disabling source maps due to memory issues in CI/CD pipelines.
    // See:
    // https://github.com/storybookjs/builder-vite/issues/409#issuecomment-1295495352
    sourcemap: false, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  output: {
    // Customize asset filesnames to esnures CSS files match their entry
    // point names
    assetFileNames: ({ name }: { name: string }) => {
      if (name.endsWith('.css')) {
        return '[name].[ext]';
      }

      return 'assets/[name]-[hash][extname]';
    },
  },
  resolve: {
    alias: [
      { find: '@/assert', replacement: '/src/assert' },
      { find: '@/async', replacement: '/src/async' },
      { find: '@/block_explorer', replacement: '/src/sites/block_explorer/' },
      { find: '@/components', replacement: '/src/components/' },
      { find: '@/contexts', replacement: '/src/contexts' },
      { find: '@/convert', replacement: '/src/convert' },
      { find: '@/crypto', replacement: '/src/crypto' },
      { find: '@/data_source', replacement: '/src/data_source' },
      { find: '@/data_structures', replacement: '/src/data_structures' },
      { find: '@/delegation_ui', replacement: '/src/sites/delegation_ui/' },
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
