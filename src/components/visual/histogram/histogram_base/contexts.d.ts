import { HistogramLabelProps } from './HistogramDefaultLabel';
import { DataStatistics } from './DataStatistics';
import { AffineTransform } from './AffineTransform';
import { default as React } from 'react';

export declare const HistogramGraphWidth: React.Context<number>;
export declare const HistogramGraphHeight: React.Context<number>;
export declare const HistogramPlotWidth: React.Context<number>;
export declare const HistogramPlotHeight: React.Context<number>;
export declare const HistogramRange: React.Context<number[]>;
export declare const HistogramDomain: React.Context<number[]>;
export declare const HistogramRangeStatistics: React.Context<DataStatistics>;
export declare const HistogramDomainStatistics: React.Context<DataStatistics>;
export declare const HistogramYAxisGuideLines: React.Context<number[]>;
export declare const HistogramRangeAffineTransform: React.Context<AffineTransform>;
export declare const HistogramDomainAffineTransform: React.Context<AffineTransform>;
export declare const HistogramYAxisLabelComponent: React.Context<HistogramLabel>;
export type HistogramLabel = React.FC<HistogramLabelProps>;
