import { ErrorContext } from '@/components/contexts';
import { CardNoPadding } from '@/components/layout/card/card';
import FullHexText from '@/components/text/full_hex_text';
import { HistogramSectionTitle } from '@/components/visual/histogram/histogram_section_title/histogram_section_title';
import { DataContext } from '@/contexts/data_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/summary_table_labeled_value';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import SkeletonContent from '@/loading/skeleton_content';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';
import './latest_block_producers.css';
import {
  LatestBlockProducer,
  LatestBlockProducersProvider,
} from './latest_block_producers_loader';

export const LatestBlockProducersHeading: React.FC = () => {
  return (
    <HistogramSectionTitle className="card--padding">
      <Text text="Latest Block Producers" />
      <></>
    </HistogramSectionTitle>
  );
};

export const LatestBlockProducersHeadingPlaceholder: React.FC = () => {
  return (
    <SummaryTableLabeledValue className="card--padding">
      <Text text="Latest Block Producers" />
      <></>
    </SummaryTableLabeledValue>
  );
};

export const LatestBlockProducersDetails: React.FC = () => {
  const blockProducers = React.useContext(LatestBlockProducersProvider);

  // We only wan the first 4 entries

  const slicedProducers = blockProducers.slice(0, 6);

  return (
    <div className="card--padding">
      {slicedProducers.map((producer, index) => (
        <SummaryTableLabeledValue key={index}>
          <FullHexText value={producer.proposer} />
          <NumberText number={producer.count} />
        </SummaryTableLabeledValue>
      ))}
    </div>
  );
};

export const LatestBlockProducersDetailsPlaceholder: React.FC = () => {
  return (
    <div className="card--padding">
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
      <SkeletonContent />
    </div>
  );
};

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);
interface LatestBlockProducersPlaceholderProps {
  className?: string;
}
export const LatestBlockProducersPlaceholder: React.FC<
  LatestBlockProducersPlaceholderProps
> = (props) => {
  return (
    <CardNoPaddingWithShimmer {...props}>
      <LatestBlockProducersHeadingPlaceholder />
      <hr />
      <LatestBlockProducersDetailsPlaceholder />
    </CardNoPaddingWithShimmer>
  );
};

interface LatestBlockProducersContentProps {}
export const LatestBlockProducersContent: React.FC<
  LatestBlockProducersContentProps
> = (props) => {
  return (
    <CardNoPadding {...props}>
      <LatestBlockProducersHeading />
      <hr />
      <LatestBlockProducersDetails />
    </CardNoPadding>
  );
};

interface LatestBlockProducersProps {
  className?: string;
}
export const LatestBlockProducersAsyncHandler: React.FC<
  LatestBlockProducersProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <LatestBlockProducersPlaceholder {...props} />;
  }

  return (
    <LatestBlockProducersProvider.Provider
      value={data as LatestBlockProducer[]}
    >
      <LatestBlockProducersContent {...props} />
    </LatestBlockProducersProvider.Provider>
  );
};
