'use client';

import 'espresso-block-explorer-components/block-explorer.css';
import 'espresso-block-explorer-components/espresso-block-explorer-components.css';
import { ErrorPage } from 'espresso-block-explorer-components/block-explorer';
import './globals.css';

/**
 * GlobalError replaces the whole document when the root layout itself fails,
 * so it brings its own html, body and styles.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <ErrorPage onRetry={reset} />
      </body>
    </html>
  );
}
