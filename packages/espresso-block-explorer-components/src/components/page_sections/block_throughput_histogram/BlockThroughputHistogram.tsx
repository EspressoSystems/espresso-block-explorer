import { ErrorContext } from '@/components/contexts';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import BytesPerSecondText from '@/text/BytesPerSecondText';
import Text from '@/text/Text';
import { HistogramLabelProps } from '@/visual/histogram/histogram_base/HistogramDefaultLabel';
import {
  ProvideDataStatistics,
  SimpleHistogram,
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

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  return <BytesPerSecondText bytesPerSecond={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  return <BytesPerSecondText bytesPerSecond={props.value} />;
};

export const BlockThroughputHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(
    DataContext,
  ) as BlockThroughputHistogramData;

  if (loading || error) {
    return <></>;
  }

  return (
    <>
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
    </>
  );
};
