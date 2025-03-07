import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { PrefixMoreInfoElement } from '@/components/hid/hover/more_info_element';
import { CardNoPadding } from '@/components/layout/card/Card';
import { WithLoadingShimmer } from '@/components/loading/LoadingShimmer';
import SkeletonContent from '@/components/loading/SkeletonContent';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import ValueLabeled from '@/layout/value_labeled/ValueLabeled';
import { HistogramEntry } from '@/models/block_explorer/explorer_summary';
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

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);

interface SecondsOrUnknownTextProps {
  value: unknown;
}

const SecondsOrUnknownText: React.FC<SecondsOrUnknownTextProps> = (props) => {
  if (typeof props.value !== 'number' || Number.isNaN(props.value)) {
    return <Text text="-" />;
  }

  return <SecondsText seconds={props.value} />;
};

const ValueText: React.FC = () => {
  const rangeStatistics = React.useContext(HistogramRangeStatistics);
  return <SecondsOrUnknownText value={rangeStatistics.mean} />;
};

const LabelValue: React.FC<HistogramLabelProps> = (props) => {
  return <SecondsOrUnknownText value={props.value} />;
};

export const BlockTimeHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(DataContext) as HistogramEntry;

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

  const nonEmptyBlockTimes = histogramData.blockTime.filter(
    (_, idx) =>
      histogramData.blockSize[idx] !== null && histogramData.blockSize[idx] > 0,
  ) as number[];

  const nonEmptyBlockTimeSumOrNull: null | number = nonEmptyBlockTimes.reduce(
    (acc: null | number, val) => (acc === null ? val : acc + val),
    null,
  );

  const nonEmptyBlockTimeAverageOrNull =
    nonEmptyBlockTimeSumOrNull === null
      ? null
      : nonEmptyBlockTimeSumOrNull / nonEmptyBlockTimes.length;

  const emptyBlockTimes = histogramData.blockTime.filter(
    (_, idx) =>
      histogramData.blockSize[idx] !== null &&
      histogramData.blockSize[idx] === 0,
  ) as number[];

  const emptyBlockTimeSumOrNull: null | number = emptyBlockTimes.reduce(
    (acc: null | number, val) => (acc === null ? val : acc + val),
    null,
  );

  const emptyBlockTimeAverageOrNull =
    emptyBlockTimeSumOrNull === null
      ? null
      : emptyBlockTimeSumOrNull / emptyBlockTimes.length;

  return (
    <CardNoPadding className="block-time-histogram">
      <HistogramRange.Provider value={histogramData.blockTime}>
        <HistogramDomain.Provider value={histogramData.blocks}>
          <HistogramYAxisLabelComponent.Provider value={LabelValue}>
            <ProvideDataStatistics>
              <HistogramSectionTitle>
                <Text text="Block time" />
                <ValueLabeled>
                  <PrefixMoreInfoElement hoverWidth={320}>
                    <p>
                      <Text text="Espresso block times are adaptive. Blocks currently average ~2s under load, and ~8s when empty for efficiency." />
                    </p>
                    <div>
                      <div>
                        <label>
                          <Text text="Non-Empty" />
                        </label>
                        &nbsp;
                        <SecondsOrUnknownText
                          value={nonEmptyBlockTimeAverageOrNull}
                        />
                      </div>
                      <div>
                        <label>
                          <Text text="Empty" />
                        </label>
                        &nbsp;
                        <SecondsOrUnknownText
                          value={emptyBlockTimeAverageOrNull}
                        />
                      </div>
                      <ValueText />
                    </div>
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
