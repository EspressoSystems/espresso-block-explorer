import React from 'react';
import { useSVGSize } from '../../svg/hooks';
import {
  HistogramGraphHeight,
  HistogramGraphWidth,
  HistogramPlotHeight,
  HistogramPlotWidth,
} from './contexts';

export interface HistogramBaseProps {
  children: React.ReactNode | React.ReactNode[];
}

const horizontalInsets = 16;
const verticalInsets = 24;
const defaultHistogramWidth = 417;
const defaultHistogramHeight = 176;

/**
 * HistogramBase is a component that provides the base SVG element for a
 * histogram.
 */
export const HistogramBase: React.FC<HistogramBaseProps> = (props) => {
  // Size the element to get the actual histogram size.
  const [svgRef, svgRect] = useSVGSize();

  const width = Math.floor(svgRect?.width ?? defaultHistogramWidth);
  const height = Math.floor(
    width * (defaultHistogramHeight / defaultHistogramWidth),
  );

  return (
    <HistogramGraphWidth.Provider value={width}>
      <HistogramGraphHeight.Provider value={height}>
        <HistogramPlotWidth.Provider value={width - horizontalInsets}>
          <HistogramPlotHeight.Provider value={height - verticalInsets}>
            <svg
              ref={svgRef}
              role="graphics-datachart"
              viewBox={`0 0 ${width} ${height}`}
            >
              <g transform={`translate(0, ${verticalInsets / 2})`}>
                {props.children}
              </g>
            </svg>
          </HistogramPlotHeight.Provider>
        </HistogramPlotWidth.Provider>
      </HistogramGraphHeight.Provider>
    </HistogramGraphWidth.Provider>
  );
};
