import React from 'react';
import { AffineTransform } from './AffineTransform';
import { DataStatistics } from './DataStatistics';
import {
  HistogramDefaultLabel,
  HistogramLabelProps,
} from './HistogramDefaultLabel';

export const HistogramGraphWidth = React.createContext<number>(417);
export const HistogramGraphHeight = React.createContext<number>(152);
export const HistogramPlotWidth = React.createContext<number>(360);
export const HistogramPlotHeight = React.createContext<number>(152);
export const HistogramRange = React.createContext<number[]>([]);
export const HistogramDomain = React.createContext<number[]>([]);
export const HistogramRangeStatistics = React.createContext<DataStatistics>(
  DataStatistics.empty,
);
export const HistogramDomainStatistics = React.createContext<DataStatistics>(
  DataStatistics.empty,
);
export const HistogramYAxisGuideLines = React.createContext<number[]>([]);

export const HistogramRangeAffineTransform =
  React.createContext<AffineTransform>(AffineTransform.identity);
export const HistogramDomainAffineTransform =
  React.createContext<AffineTransform>(AffineTransform.identity);
export const HistogramYAxisLabelComponent = React.createContext<HistogramLabel>(
  HistogramDefaultLabel,
);

export type HistogramLabel = React.FC<HistogramLabelProps>;
