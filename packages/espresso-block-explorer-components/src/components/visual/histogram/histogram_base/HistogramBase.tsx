import React from 'react';
import { HistogramPlotHeight, HistogramPlotWidth } from './contexts';

export interface HistogramBaseProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * HistogramBase is a component that provides the base SVG element for a
 * histogram.
 */
export const HistogramBase: React.FC<HistogramBaseProps> = (props) => {
  return (
    <HistogramPlotWidth.Provider value={360}>
      <HistogramPlotHeight.Provider value={152}>
        <svg viewBox="0 0 417 176">
          <g transform="translate(0, 12)">{props.children}</g>
        </svg>
      </HistogramPlotHeight.Provider>
    </HistogramPlotWidth.Provider>
  );
};
