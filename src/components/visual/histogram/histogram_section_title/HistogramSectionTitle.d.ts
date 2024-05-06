import { default as React } from 'react';

export interface HistogramSectionTitleProps {
    children: [React.ReactNode, React.ReactNode];
}
/**
 * HistogramSectionTitle is a title element that is displayed above a histogram.
 * It is expected to label the histogram itself with a title, and have some data
 * next to it that shows some metric aggregation of the data from the histogram
 * itself.
 *
 * Example:
 * +----------------------------------+
 * | Block time                 10.5s |
 * |                          Average |
 * +----------------------------------+
 */
export declare const HistogramSectionTitle: React.FC<HistogramSectionTitleProps>;
