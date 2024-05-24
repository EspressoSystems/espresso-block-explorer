import { WithUiSmall } from '@/typography/typography';
import React from 'react';
import {
  HistogramGraphWidth,
  HistogramLabelsBBox,
  HistogramPlotHeight,
  HistogramRangeAffineTransform,
  HistogramRangeStatistics,
  HistogramYAxisGuideLines,
  HistogramYAxisLabelComponent,
} from './contexts';
import './histogram_guide_lines.css';

const UiTextSmallText = WithUiSmall('text') as React.FC<
  React.SVGTextElementAttributes<SVGTextElement>
>;

export interface ProvideGuideLinesProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideGuideLines is a component that calculates the y axis data spacing for
 * the histogram and provides.
 *
 * It provides the following contexts:
 * - HistogramYAxisGuideLines
 *
 * While consuming the following contexts:
 * - HistogramRangeStatistics
 * - HistogramRangeAffineTransform
 */
export const ProvideGuideLines: React.FC<ProvideGuideLinesProps> = ({
  children,
}) => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  const rangeAffineTransform = React.useContext(HistogramRangeAffineTransform);

  const desiredGuideLineCount = 4;

  const lines: number[] = [];
  const step =
    (rangeStatistics.max - rangeStatistics.min) / desiredGuideLineCount;
  for (let i = 0; i <= rangeAffineTransform.inputMax && step > 0; i += step) {
    lines.push(i);
  }

  return (
    <HistogramYAxisGuideLines.Provider value={lines}>
      {children}
    </HistogramYAxisGuideLines.Provider>
  );
};

// the y-axis labels need an offset so that the lines don't overlap with the
// labels as much as possible.  This number was chosen based on visual
// inspection.  In an ideal circumstance the width of the labels would be
// known and could be referenced.  For now this will suffice.
const yAxisLabelOffset = 60;

/**
 * HistogramGuidLines is a component that displays the guide lines for the y-axis
 * based on the sampling provided for the histogram.
 *
 * It is expected to have the following contexts set and provided for it:
 * - HistogramGraphWidth
 * - HistogramPlotHeight
 * - HistogramRangeAffineTransform
 * - HistogramYAxisGuideLines
 */
export const HistogramGuideLines: React.FC = () => {
  const graphWidth = React.useContext(HistogramGraphWidth);
  const plotHeight = React.useContext(HistogramPlotHeight);
  const rangeAffineTransform = React.useContext(HistogramRangeAffineTransform);
  const lines = React.useContext(HistogramYAxisGuideLines);
  const labelsBBox = React.useContext(HistogramLabelsBBox);

  return (
    <g className="histogram-y-guide-lines">
      {lines.map((line, i) => (
        <line
          key={i}
          x1={labelsBBox?.width ?? yAxisLabelOffset}
          y1={plotHeight - rangeAffineTransform.transform(line)}
          x2={graphWidth}
          y2={plotHeight - rangeAffineTransform.transform(line)}
        />
      ))}
    </g>
  );
};

export interface HistogramYAxisLabelsProps {
  labelsRef: undefined | React.RefObject<SVGGElement>;
}

/**
 * HistogramYAxisLabels is a component that displays the labels for the y-axis
 * based on the sampling provided for the histogram.
 *
 * It is expected to have the following contexts set and provided for it:
 * - HistogramPlotHeight
 * - HistogramYAxisGuideLines
 * - HistogramRangeAffineTransform
 * - HistogramYAxisLabelComponent
 */
export const HistogramYAxisLabels: React.FC<HistogramYAxisLabelsProps> = (
  props,
) => {
  const plotHeight = React.useContext(HistogramPlotHeight);
  const lines = React.useContext(HistogramYAxisGuideLines);
  const rangeAffineTransform = React.useContext(HistogramRangeAffineTransform);
  const comp = React.useContext(HistogramYAxisLabelComponent);

  return (
    <g ref={props.labelsRef} className="histogram-y-axis-labels">
      {lines.map((line, i) => (
        <UiTextSmallText
          key={i}
          x={0}
          y={plotHeight - rangeAffineTransform.transform(line)}
          dominantBaseline={'middle'}
          className="histogram-y-axis-label"
        >
          {React.createElement(comp, { value: line })}
        </UiTextSmallText>
      ))}
    </g>
  );
};
