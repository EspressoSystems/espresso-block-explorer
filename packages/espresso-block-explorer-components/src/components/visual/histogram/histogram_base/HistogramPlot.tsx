import React from 'react';
import {
  HistogramGraphWidth,
  HistogramPlotHeight,
  HistogramPlotWidth,
  HistogramRange,
  HistogramRangeAffineTransform,
  HistogramRangeStatistics,
} from './contexts';
import './histogram_plot.css';

export interface HistogramPlotProps {}

/**
 * HistogramPlot is a component that takes the given data and creates
 * rectangles for it in relation to the statistics that it requires.
 * It is expected to have the following contexts set and provided for
 * it:
 *
 * - HistogramGraphWidth
 * - HistogramPlotWidth
 * - HistogramPlotHeight
 * - HistogramRange
 * - HistogramRangeStatistics
 * - HistogramRangeAffineTransform
 */
export const HistogramPlot: React.FC<HistogramPlotProps> = () => {
  const graphWidth = React.useContext(HistogramGraphWidth);
  const plotWidth = React.useContext(HistogramPlotWidth);
  const plotHeight = React.useContext(HistogramPlotHeight);
  const values = React.useContext(HistogramRange);
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  const affineTransform = React.useContext(HistogramRangeAffineTransform);

  const rectangleWidthRaw = plotWidth / rangeStatistics.count;
  const rectangleWidth = Math.floor(rectangleWidthRaw);

  const rectangleHeights = values.map((blockTime) =>
    affineTransform.transform(blockTime),
  );

  return (
    <g
      className="histogram-plot"
      transform={`translate(${graphWidth - plotWidth + Math.round((rectangleWidthRaw - rectangleWidth) * rangeStatistics.count)},0)`}
    >
      {values.map((_, i) => (
        <rect
          key={i}
          x={i * rectangleWidth}
          y={plotHeight - rectangleHeights[i]}
          width={rectangleWidth - 1}
          height={rectangleHeights[i]}
        />
      ))}
    </g>
  );
};
