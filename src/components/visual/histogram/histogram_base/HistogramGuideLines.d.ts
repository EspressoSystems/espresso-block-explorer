import { default as React } from 'react';

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
export declare const ProvideGuideLines: React.FC<ProvideGuideLinesProps>;
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
export declare const HistogramGuideLines: React.FC;
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
export declare const HistogramYAxisLabels: React.FC<HistogramYAxisLabelsProps>;
