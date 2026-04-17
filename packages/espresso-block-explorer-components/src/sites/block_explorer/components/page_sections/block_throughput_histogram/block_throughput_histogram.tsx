import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as ValueLabeled } from '@/block_explorer/components/layout/value_labeled/value_labeled';
import { SkeletonContent } from '@/components/loading';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { BytesPerSecondText, Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { LoadingContext } from '@/contexts/loading_provider';
import { zipWithIterable } from '@/functional/functional';
import {
  HistogramDomain,
  HistogramRange,
  HistogramRangeStatistics,
  HistogramYAxisLabelComponent,
} from '@/visual/histogram/histogram_base/contexts';
import { HistogramLabelProps } from '@/visual/histogram/histogram_base/histogram_default_label';
import {
  ProvideDataStatistics,
  SimpleHistogram,
  SimpleHistogramPlaceholder,
} from '@/visual/histogram/histogram_base/simple_histogram';
import { HistogramSectionTitle } from '@/visual/histogram/histogram_section_title/histogram_section_title';
import { default as React } from 'react';

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

function calculateThroughput(
  size: null | number,
  time: null | number,
): null | number {
  if (size === null || time === null) {
    return null;
  }

  if (time === 0) {
    return size;
  }

  return size / time;
}

export const BlockThroughputHistogram: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const histogramData = React.useContext(ExplorerSummaryHistogramsContext);

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

  if (loading || error || !histogramData) {
    return <></>;
  }

  const blockThroughput = Array.from(
    zipWithIterable(
      histogramData.blockSize,
      histogramData.blockTime,
      calculateThroughput,
    ),
  );

  return (
    <CardNoPadding className="throughput-histogram">
      <HistogramRange.Provider value={blockThroughput}>
        <HistogramDomain.Provider value={histogramData.blockHeights}>
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
