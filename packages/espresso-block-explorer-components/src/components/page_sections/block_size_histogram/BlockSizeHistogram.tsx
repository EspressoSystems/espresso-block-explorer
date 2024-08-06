import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import Text from '@/text/Text';
import VariableByteSizeText from '@/text/VariableByteSizeText';
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
import { BlockSizeHistogramData } from './BlockSizeHistogramDataLoader';

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  return <VariableByteSizeText bytes={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  return <VariableByteSizeText bytes={props.value} />;
};

export const BlockSizeHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as BlockSizeHistogramData;

  if (loading || error) {
    return <></>;
  }

  // Compute the Average Block Time

  // Compute Graph Statistics
  // Need the x-Axis (Block Height), and the Y-Axis (Block Time)
  // Also need to compute the mean block time over this data set.
  //
  // Then we need general Range and Domain information for the Graph data.
  // This will be used to determine the Graph Scaling.
  //
  // We will also need to provide some general Formatters for the Y-Axis,
  // as well as the X-Axis.
  //
  // We also need to be able to provide overlay components for the graph
  // for mouse interactions.

  // const domainStatistics = computeDataStatistics(histogramData.blocks);

  // Domain scale is min to max
  // Range scale is min or override to max

  // Scale every value within the scale
  // compute bars for each one.

  // We need to figure out the scales.
  // Domain Scales versus Range Scales

  return (
    <>
      <HistogramRange.Provider value={histogramData.blockSize}>
        <HistogramDomain.Provider value={histogramData.blocks}>
          <HistogramYAxisLabelComponent.Provider value={LabelValue}>
            <ProvideDataStatistics>
              <HistogramSectionTitle>
                <Text text="Block size" />
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
