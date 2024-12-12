import { ErrorContext } from '@/components/contexts';
import { CardNoPadding } from '@/components/layout/card/Card';
import { WithLoadingShimmer } from '@/components/loading/LoadingShimmer';
import SkeletonContent from '@/components/loading/SkeletonContent';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import BytesPerSecondText from '@/text/BytesPerSecondText';
import Text from '@/text/Text';
import { HistogramLabelProps } from '@/visual/histogram/histogram_base/HistogramDefaultLabel';
import {
  ProvideDataStatistics,
  SimpleHistogram,
  SimpleHistogramPlaceholder,
} from '@/visual/histogram/histogram_base/SimpleHistogram';
import {
  HistogramDomain,
  HistogramRange,
  HistogramRangeStatistics,
  HistogramYAxisLabelComponent,
} from '@/visual/histogram/histogram_base/contexts';
import { HistogramSectionTitle } from '@/visual/histogram/histogram_section_title/HistogramSectionTitle';
import React from 'react';
import { BlockThroughputHistogramData } from './BlockThroughputHistogramDataLoader';

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  if (Number.isNaN(rangeStatistics.mean)) {
    return <Text text="-" />;
  }

  return <BytesPerSecondText bytesPerSecond={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  if (Number.isNaN(props.value)) {
    return <Text text="-" />;
  }

  return <BytesPerSecondText bytesPerSecond={props.value} />;
};

export const BlockThroughputHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(
    DataContext,
  ) as BlockThroughputHistogramData;

  if (loading) {
    return (
      <CardNoPaddingWithShimmer className="throughput-histogram">
        <HistogramSectionTitle>
          <Text text="Blockspace Used" />
          <ValueLabeled>
            <SkeletonContent />
            <Text text="Average" />
          </ValueLabeled>
        </HistogramSectionTitle>
        <SimpleHistogramPlaceholder />
      </CardNoPaddingWithShimmer>
    );
  }

  if (loading || error) {
    return <></>;
  }

  return (
    <CardNoPadding className="throughput-histogram">
      <HistogramRange.Provider value={histogramData.blockThroughput}>
        <HistogramDomain.Provider value={histogramData.blocks}>
          <HistogramYAxisLabelComponent.Provider value={LabelValue}>
            <ProvideDataStatistics>
              <HistogramSectionTitle>
                <Text text="Blockspace Used" />
                <ValueLabeled>
                  <ValueText />
                  <Text text="Average" />
                </ValueLabeled>
              </HistogramSectionTitle>

              <SimpleHistogram />
            </ProvideDataStatistics>
          </HistogramYAxisLabelComponent.Provider>
        </HistogramDomain.Provider>
      </HistogramRange.Provider>
    </CardNoPadding>
  );
};
