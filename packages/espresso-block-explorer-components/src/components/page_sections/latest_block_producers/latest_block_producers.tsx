import { ErrorContext } from '@/components/contexts';
import FullHexText from '@/components/text/FullHexText';
import { HistogramSectionTitle } from '@/components/visual/histogram/histogram_section_title/HistogramSectionTitle';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { CardNoPadding } from '@/layout/card/Card';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/SummaryTableLabeledValue';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import SkeletonContent from '@/loading/SkeletonContent';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import './latest_block_producers.css';
import {
  LatestBlockProducer,
  LatestBlockProducersProvider,
} from './LatestBlockProducersLoader';

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
