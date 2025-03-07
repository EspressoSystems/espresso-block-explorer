import { default as React } from '../../../../../../../node_modules/react';

interface ProvideAffineTransformsProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideAffineTransforms is a component that calculates the affineTransforms for
 * the domain and range of the histogram and provides them to its children.
 *
 * It provides the following contexts:
 * - HistogramDomainAffineTransform
 * - HistogramRangeAffineTransform
 *
 * It consumes the following contexts:
 * - HistogramPlotWidth
 * - HistogramPlotHeight
 * - HistogramDomainStatistics
 *  - HistogramRangeStatistics
 */
export declare const ProvideAffineTransforms: React.FC<ProvideAffineTransformsProps>;
interface ProvideDataStatisticsProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideDataStatistics is a component that calculates the statistics for the
 * domain and range of the histogram and provides them to its children.
 *
 * It provides the following contexts:
 * - HistogramDomainStatistics
 * - HistogramRangeStatistics
 */
export declare const ProvideDataStatistics: React.FC<ProvideDataStatisticsProps>;
export declare const SimpleHistogram: React.FC;
/**
 * SimpleHistogramPlaceholder is a placeholder component that is displayed when
 * the histogram is loading.
 */
export declare const SimpleHistogramPlaceholder: React.FC;
export {};
