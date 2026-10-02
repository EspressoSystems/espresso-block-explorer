'use client';

import { ErrorPage } from 'espresso-block-explorer-components/block-explorer';

/** PageError is shown, inside the site's layout, when a page fails to render. */
export default function PageError({ reset }: { reset: () => void }) {
  return <ErrorPage onRetry={reset} />;
}
