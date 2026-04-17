import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as ValueLabeled } from '@/block_explorer/components/layout/value_labeled/value_labeled';
import { SkeletonContent } from '@/components/loading';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { SecondsText, Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import { ExplorerSummaryHistogramsContext } from '@/contexts/explorer_api_contexts';
import { LoadingContext } from '@/contexts/loading_provider';
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
  const histogramData = React.useContext(ExplorerSummaryHistogramsContext);

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

  if (error || !histogramData) {
    return <></>;
  }

  return (
    <CardNoPadding className="block-time-histogram">
      <HistogramRange.Provider value={histogramData.blockTime}>
        <HistogramDomain.Provider value={histogramData.blockHeights}>
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
    </CardNoPadding>
  );
};
