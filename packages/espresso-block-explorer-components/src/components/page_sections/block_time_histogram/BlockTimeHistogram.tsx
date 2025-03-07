import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { PrefixMoreInfoElement } from '@/components/hid/hover/more_info_element';
import { CardNoPadding } from '@/components/layout/card/Card';
import { WithLoadingShimmer } from '@/components/loading/LoadingShimmer';
import SkeletonContent from '@/components/loading/SkeletonContent';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import SecondsText from '@/text/SecondsText';
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
import { BlockTimeHistogramData } from './BlockTimeHistogramDataLoader';

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  if (Number.isNaN(rangeStatistics.mean)) {
    return <Text text="-" />;
  }

  return <SecondsText seconds={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  if (Number.isNaN(props.value)) {
    return <Text text="-" />;
  }

  return <SecondsText seconds={props.value} />;
};

export const BlockTimeHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as BlockTimeHistogramData;

  if (loading) {
    return (
      <CardNoPaddingWithShimmer className="block-time-histogram">
        <HistogramSectionTitle>
          <Text text="Block time" />
          <ValueLabeled>
            <SkeletonContent />
            <Text text="Average" />
          </ValueLabeled>
        </HistogramSectionTitle>
        <SimpleHistogramPlaceholder />
      </CardNoPaddingWithShimmer>
    );
  }

  if (error) {
    return <></>;
  }

  return (
    <CardNoPadding className="block-time-histogram">
      <HistogramRange.Provider value={histogramData.blockTime}>
        <HistogramDomain.Provider value={histogramData.blocks}>
          <HistogramYAxisLabelComponent.Provider value={LabelValue}>
            <ProvideDataStatistics>
              <HistogramSectionTitle>
                <Text text="Block time" />
                <ValueLabeled>
                  <PrefixMoreInfoElement className="sm-right" hoverWidth={320}>
                    <p>
                      <Text text="Espresso blocktimes are adaptive. Blocks currently average ~2s under load, and ~8s when idle for efficiency." />
                    </p>
                    <ValueText />
                  </PrefixMoreInfoElement>
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
