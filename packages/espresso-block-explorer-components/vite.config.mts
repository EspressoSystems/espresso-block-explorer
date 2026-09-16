/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';
import circularDependency from 'vite-plugin-circular-dependency';


export default defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: {
        'espresso-block-explorer-components':
          './src/espresso-block-explorer-components.ts',
        'block-explorer': './src/block-explorer.ts',
        'delegation-ui': './src/delegation-ui.ts',
      },
      name: 'espresso-block-explorer-components',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: (id) =>
        Object.keys(peerDependencies).some(
          (dep) => id === dep || id.startsWith(`${dep}/`),
        ),
      output: {
        // Remap each chunk's emitted CSS to the predictable file names expected by
        // package.json exports. Chunk names deliberately differ from entry names to
        // avoid circular-chunk references (which break SSR evaluation order and cause
        // TDZ errors at runtime).
        assetFileNames: ({ name }: { name?: string }) => {
          if (name === 'shared-lib.css') return 'espresso-block-explorer-components.css';
          if (name === 'block-explorer-site.css') return 'block-explorer.css';
          if (name === 'delegation-ui-site.css') return 'delegation-ui.css';
          if (name && name.endsWith('.css')) return '[name].[ext]';
          return 'assets/[name]-[hash][extname]';
        },
        // Rolldown (Vite 8) replaced Rollup's `manualChunks` with `codeSplitting.groups`;
        // the old `manualChunks` function is silently ignored, which is why the shared
        // CSS bundle stopped being emitted after the Vite 8 upgrade.
        //
        // `shared-lib` is given a higher priority so it captures the shared modules
        // FIRST. Otherwise a site group (with the default `includeDependenciesRecursively`)
        // pulls the shared modules into itself as transitive deps, leaving no shared
        // chunk and folding the shared styles into a single site's CSS. Sites depend on
        // shared code (not vice versa), so shared-lib importing nothing site-specific
        // keeps the chunk graph acyclic.
        codeSplitting: {
          groups: [
            {
              name: 'shared-lib',
              priority: 2,
              test: (id: string) =>
                !id.includes('/sites/') &&
                !id.endsWith('/src/block-explorer.ts') &&
                !id.endsWith('/src/delegation-ui.ts') &&
                !id.endsWith('/src/espresso-block-explorer-components.ts'),
            },
            {
              name: 'delegation-ui-site',
              priority: 1,
              test: (id: string) => id.includes('/sites/delegation_ui/'),
            },
            {
              name: 'block-explorer-site',
              priority: 1,
              test: (id: string) => id.includes('/sites/block_explorer/'),
            },
          ],
        },
      },
    },
    // Disabling source maps due to memory issues in CI/CD pipelines.
    // See:
    // https://github.com/storybookjs/builder-vite/issues/409#issuecomment-1295495352
    sourcemap: false,
    emptyOutDir: true,
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
    circularDependency(),
  ],
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
