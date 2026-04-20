import { useEffect } from 'react';

/**
 * useDocumentTitle updates document.title on the client after hydration.
 * Using useEffect (rather than a React 19 JSX <title> element) intentionally
 * avoids producing a second <title> tag in the static shell HTML during SSG,
 * which would conflict with the placeholder emitted by generateMetadata and
 * processed by nginx sub_filter at request time.
 */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
