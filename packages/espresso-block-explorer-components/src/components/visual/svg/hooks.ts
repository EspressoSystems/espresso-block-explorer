import React from 'react';

/**
 * useSVGSize is a helpful hook that can be used to setup the automatic
 * measuring of an SVG element by attaching the returned reference to
 * the SVG element you desire to measure.
 */
export function useSVGSize() {
  const ref = React.useRef<null | SVGSVGElement>(null);
  const [rect, setRect] = React.useState<null | DOMRect>(null);
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (typeof ResizeObserver === 'undefined') {
      // ResizeObserver is not supported.  Fallback to a single query.
      const rect = ref.current.getBoundingClientRect();
      setRect(rect);
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setRect(entry.contentRect);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, setRect]);

  return [ref, rect] as const;
}
