import React from 'react';
import { HistogramTooltip } from './HistogramTooltip';
import {
  HistogramGraphValue,
  HistogramGraphValueIndex,
  HistogramGraphValueRect,
  HistogramGraphWidth,
  HistogramPlotHeight,
  HistogramPlotWidth,
  HistogramRange,
  HistogramRangeAffineTransform,
  HistogramRangeStatistics,
} from './contexts';
import './histogram_plot.css';

export interface HistogramPlotProps {}
const graphInsets = 16.0;

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
    <>
      <g
        className="histogram-plot"
        transform={`translate(${graphWidth - graphInsets - plotWidth + Math.round((rectangleWidthRaw - rectangleWidth) * rangeStatistics.count)},0)`}
        key="data"
      >
        {values.map((_, i) => (
          <>
            {/* This is the bar of the histogram */}
            <rect
              key={i}
              className="bar"
              x={i * rectangleWidth}
              y={plotHeight - rectangleHeights[i]}
              width={rectangleWidth - 1}
              height={rectangleHeights[i]}
            ></rect>
          </>
        ))}
      </g>

      {/*
        This is an additional invisible histogram plot that acts as a vertical
        line hitbox to govern which tooltip is shown, if any.  It should be noted
        that **every** tooltip is generated, and all will be hidden by default.
        It is easier to pre-compute these instead of attempting to generate them
        dynamically, as the javascript interaction with SVGs isn't the easiest
        thing to do.  Additionally, redrawing an SVG with mouse changes could
        be expensive.
      */}
      <g
        className="histogram-plot"
        transform={`translate(${graphWidth - graphInsets - plotWidth + Math.round((rectangleWidthRaw - rectangleWidth) * rangeStatistics.count)},0)`}
        key="tooltips"
      >
        {values.map((value, i) => (
          <g key={i}>
            {/* We need a bounding box for a hit area to detect mouse events */}
            <rect
              className="bbox"
              x={i * rectangleWidth}
              y={0}
              height={plotHeight}
              width={rectangleWidth}
            ></rect>

            {/*This is meant to be the hover element */}

            <HistogramGraphValue.Provider value={value}>
              <HistogramGraphValueIndex.Provider value={i}>
                <HistogramGraphValueRect.Provider
                  value={{
                    x: i * rectangleWidth,
                    y: plotHeight - rectangleHeights[i],
                    width: rectangleWidth,
                    height: rectangleHeights[i],
                  }}
                >
                  <HistogramTooltip />
                </HistogramGraphValueRect.Provider>
              </HistogramGraphValueIndex.Provider>
            </HistogramGraphValue.Provider>
          </g>
        ))}
      </g>
    </>
  );
};
