import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { PrefixMoreInfoElement } from '@/components/hid/hover/more_info_element';
import { CardNoPadding } from '@/components/layout/card/Card';
import { WithLoadingShimmer } from '@/components/loading/LoadingShimmer';
import SkeletonContent from '@/components/loading/SkeletonContent';
import { DataStatistics } from '@/components/visual/histogram/histogram_base/DataStatistics';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import {
  dropIterable,
  filterIterable,
  firstIterable,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
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

/**
 * pairSizeAndTime pairs the blocks size and the block times together by
 * zipping them into a single array.
 */
function pairSizeAndTime(
  histogramData: HistogramEntry,
): [HistogramEntry['blockTime'][0], HistogramEntry['blockSize'][0]][] {
  return Array.from(
    zipWithIterable(
      dropIterable(histogramData.blockTime, 1),
      histogramData.blockSize,
      (time, size) => [time, size],
    ),
  );
}

/**
 * resamplePairs resamples the given pair array based on the given
 * filter condition parameter fn. For convenience it will also return an
 * array comprised of the first elements of the pair, as it is assumed that
 * the first element will be the value that is being resampled.
 */
function resamplePairs(
  sizeAndTimePairs: [number | null, number | null][],
  fn: (value: [number | null, number | null]) => boolean,
) {
  return Array.from(
    mapIterable(filterIterable(sizeAndTimePairs, fn), firstIterable),
  );
}

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

  const sizeAndTimePairs = pairSizeAndTime(histogramData);
  const nonEmptyBlockTimesStatistics = DataStatistics.compute(
    resamplePairs(sizeAndTimePairs, ([, size]) => (size ?? 0) > 0),
  );
  const emptyBlockStatistics = DataStatistics.compute(
    resamplePairs(sizeAndTimePairs, ([, size]) => (size ?? 0) === 0),
  );

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
                          value={nonEmptyBlockTimesStatistics.nullableMean}
                        />
                      </div>
                      <div>
                        <label>
                          <Text text="Empty" />
                        </label>
                        &nbsp;
                        <SecondsOrUnknownText
                          value={emptyBlockStatistics.nullableMean}
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
