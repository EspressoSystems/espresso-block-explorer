import React from 'react';
import {
  HistogramGraphHeight,
  HistogramGraphWidth,
  HistogramPlotHeight,
  HistogramPlotWidth,
} from './contexts';

export interface HistogramBaseProps {
  children: React.ReactNode | React.ReactNode[];
}

const horizontalInsets = 57;
const verticalInsets = 24;
const defaultHistogramWidth = 417;
const defaultHistogramHeight = 176;
const defaultHistogramStartInset = horizontalInsets / defaultHistogramWidth;

function useSVGSize() {
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

/**
 * HistogramBase is a component that provides the base SVG element for a
 * histogram.
 */
export const HistogramBase: React.FC<HistogramBaseProps> = (props) => {
  // Size the element to get the actual histogram size.
  const [svgRef, svgRect] = useSVGSize();

  const width = svgRect?.width ?? defaultHistogramWidth;
  const height = svgRect?.height ?? defaultHistogramHeight;
  const histogramStartInset = Math.floor(defaultHistogramStartInset * width);

  return (
    <HistogramGraphWidth.Provider value={width}>
      <HistogramGraphHeight.Provider value={height}>
        <HistogramPlotWidth.Provider value={width - histogramStartInset - 8}>
          <HistogramPlotHeight.Provider value={height - verticalInsets}>
            <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`}>
              <g transform="translate(0, 12)">{props.children}</g>
            </svg>
          </HistogramPlotHeight.Provider>
        </HistogramPlotWidth.Provider>
      </HistogramGraphHeight.Provider>
    </HistogramGraphWidth.Provider>
  );
};
