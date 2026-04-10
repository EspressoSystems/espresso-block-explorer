/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';
import circularDependency from 'vite-plugin-circular-dependency';

/**
 * Externalizes shared library imports from site-specific source files.
 *
 * When a module inside src/sites/block_explorer/ or src/sites/delegation_ui/
 * imports something that resolves to outside those folders (but still within
 * src/), the import is redirected to the shared library entry at runtime
 * instead of being bundled again. This keeps each site bundle lean and
 * ensures shared code lives only in espresso-block-explorer-components.es.js.
 */
function sharedExternalizer(): Plugin {
  return {
    name: 'shared-externalizer',
    enforce: 'pre',
    async resolveId(source, importer) {
      if (!importer) return null;
      if (source.startsWith('\0')) return null;

      const importerInSite =
        importer.includes('/src/sites/block_explorer/') ||
        importer.includes('/src/sites/delegation_ui/');
      if (!importerInSite) return null;

      const resolved = await this.resolve(source, importer, { skipSelf: true });
      if (!resolved || resolved.external) return null;

      const { id } = resolved;
      if (id.includes('/node_modules/')) return null;
      if (id.endsWith('.css')) return null;

      const resolvedInSite =
        id.includes('/src/sites/block_explorer/') ||
        id.includes('/src/sites/delegation_ui/');
      if (resolvedInSite) return null;

      if (id.includes('/src/')) {
        return { id: 'espresso-block-explorer-components', external: true };
      }

      return null;
    },
  };
}

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
      // Match peer deps, all their subpaths (e.g. viem/actions), and the
      // shared library virtual ID used by sharedExternalizer.
      external: (id) =>
        id === 'espresso-block-explorer-components' ||
        Object.keys(peerDependencies).some(
          (dep) => id === dep || id.startsWith(`${dep}/`),
        ),
      output: {
        // Customize asset filenames to ensure CSS files match their entry point names
        assetFileNames: ({ name }: { name?: string }) => {
          if (name && name.endsWith('.css')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // Map the virtual shared-library ID to the actual output file.
        paths: {
          'espresso-block-explorer-components':
            './espresso-block-explorer-components.es.js',
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
    sharedExternalizer(),
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
