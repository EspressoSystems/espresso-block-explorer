import { SkeletonContent } from '@/components/loading';
import React from 'react';
import { useSVGSize } from '../../svg/hooks';
import { AffineTransform } from './AffineTransform';
import { DataStatistics } from './DataStatistics';
import { HistogramBase } from './HistogramBase';
import {
  HistogramGuideLines,
  HistogramYAxisLabels,
  ProvideGuideLines,
} from './HistogramGuideLines';
import { HistogramPlot } from './HistogramPlot';
import {
  HistogramDomain,
  HistogramDomainAffineTransform,
  HistogramDomainStatistics,
  HistogramLabelsBBox,
  HistogramPlotHeight,
  HistogramPlotWidth,
  HistogramRange,
  HistogramRangeAffineTransform,
  HistogramRangeStatistics,
} from './contexts';

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
export const ProvideAffineTransforms: React.FC<
  ProvideAffineTransformsProps
> = ({ children }) => {
  const plotWidth = React.useContext(HistogramPlotWidth);
  const plotHeight = React.useContext(HistogramPlotHeight);
  const domainStatistics = React.useContext(HistogramDomainStatistics);
  const rangeStatistics = React.useContext(HistogramRangeStatistics);

  const domainAffineTransform = new AffineTransform(
    domainStatistics.min,
    domainStatistics.max,
    0,
    plotWidth,
  );

  const rangeAffineTransform = new AffineTransform(
    0,
    rangeStatistics.max,
    0,
    plotHeight,
  );

  return (
    <HistogramDomainAffineTransform.Provider value={domainAffineTransform}>
      <HistogramRangeAffineTransform.Provider value={rangeAffineTransform}>
        {children}
      </HistogramRangeAffineTransform.Provider>
    </HistogramDomainAffineTransform.Provider>
  );
};

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
export const ProvideDataStatistics: React.FC<ProvideDataStatisticsProps> = ({
  children,
}) => {
  const domain = React.useContext(HistogramDomain);
  const range = React.useContext(HistogramRange);

  const domainStatistics = DataStatistics.compute(domain);
  const rangeStatistics = DataStatistics.compute(range);

  return (
    <HistogramDomainStatistics.Provider value={domainStatistics}>
      <HistogramRangeStatistics.Provider value={rangeStatistics}>
        {children}
      </HistogramRangeStatistics.Provider>
    </HistogramDomainStatistics.Provider>
  );
};

export const SimpleHistogram: React.FC = () => {
  const [labelsRef, labelsSize] = useSVGSize();

  return (
    <HistogramBase>
      <HistogramLabelsBBox.Provider value={labelsSize}>
        <RecalculatePlotWidth>
          <ProvideAffineTransforms>
            <ProvideGuideLines>
              <g role="graphics-axis">
                <HistogramGuideLines />
                <HistogramYAxisLabels labelsRef={labelsRef} />
              </g>
              <HistogramPlot />
            </ProvideGuideLines>
          </ProvideAffineTransforms>
        </RecalculatePlotWidth>
      </HistogramLabelsBBox.Provider>
    </HistogramBase>
  );
};

interface RecalculatePlotWidthProps {
  children: React.ReactNode | React.ReactNode[];
}

const RecalculatePlotWidth: React.FC<RecalculatePlotWidthProps> = (props) => {
  const plotWidth = React.useContext(HistogramPlotWidth);
  const labelsBBox = React.useContext(HistogramLabelsBBox);

  return (
    <HistogramPlotWidth.Provider
      value={Math.floor(plotWidth - (labelsBBox?.width ?? 0))}
    >
      {props.children}
    </HistogramPlotWidth.Provider>
  );
};

/**
 * SimpleHistogramPlaceholder is a placeholder component that is displayed when
 * the histogram is loading.
 */
export const SimpleHistogramPlaceholder: React.FC = () => {
  const plotWidth = React.useContext(HistogramPlotWidth);
  const plotHeight = React.useContext(HistogramPlotHeight);
  const aspectRatio = plotWidth / plotHeight;

  return (
    <div
      className="histogram--placeholder"
      style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
    >
      <SkeletonContent />
    </div>
  );
};
