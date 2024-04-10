import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import ValueLabeled from '../../layout/value_labeled/ValueLabeled';
import SecondsText from '../../text/SecondsText';
import Text from '../../text/Text';
import { HistogramLabelProps } from '../../visual/histogram/histogram_base/HistogramDefaultLabel';
import {
  ProvideDataStatistics,
  SimpleHistogram,
} from '../../visual/histogram/histogram_base/SimpleHistogram';
import {
  HistogramDomain,
  HistogramRange,
  HistogramRangeStatistics,
  HistogramYAxisLabelComponent,
} from '../../visual/histogram/histogram_base/contexts';
import { HistogramSectionTitle } from '../../visual/histogram/histogram_section_title/HistogramSectionTitle';
import { BlockTimeHistogramData } from './BlockTimeHistogramDataLoader';

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  return <SecondsText seconds={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  return <SecondsText seconds={props.value} />;
};

export const BlockTimeHistogram: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as BlockTimeHistogramData;

  if (loading) {
    return <></>;
  }

  return (
    <>
      <HistogramRange.Provider value={histogramData.blockTime}>
        <HistogramDomain.Provider value={histogramData.blocks}>
          <HistogramYAxisLabelComponent.Provider value={LabelValue}>
            <ProvideDataStatistics>
              <HistogramSectionTitle>
                <Text text="Block time" />
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
