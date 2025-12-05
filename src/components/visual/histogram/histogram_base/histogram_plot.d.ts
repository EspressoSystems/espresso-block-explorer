import { default as React } from 'react';
export interface HistogramPlotProps {
}
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
export declare const HistogramPlot: React.FC<HistogramPlotProps>;
