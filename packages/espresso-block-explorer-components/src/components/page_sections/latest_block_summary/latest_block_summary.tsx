import { ErrorContext } from '@/components/contexts';
import { CardNoPadding } from '@/components/layout/card/card';
import DurationInSecondsText from '@/components/text/duration_in_seconds_text';
import { DataContext } from '@/contexts/data_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { PathResolverContext } from '@/contexts/path_resolver_provider';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/summary_table_labeled_value';
import SummaryValueLabeled from '@/layout/summary_value_labeled/summary_value_labeled';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import SkeletonContent from '@/loading/skeleton_content';
import { ExplorerSummaryEntry } from '@/models/block_explorer/explorer_summary';
import ByteSizeText from '@/text/byte_size_text';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { ExplorerSummaryProvider } from '../explorer_summary';
import './latest_block_summary.css';
import {
  LatestBlock,
  LatestBlockSummaryProvider,
} from './latest_block_summary_loader';

export const LatestBlockSummaryHeading: React.FC = () => {
  const block = React.useContext(LatestBlockSummaryProvider);
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <SummaryTableLabeledValue className="card--padding">
      <SummaryValueLabeled>
        <NumberText number={block.height} />
        <Text text="Latest Block" />
      </SummaryValueLabeled>
      <LabeledAnchorButton href={pathResolver.block(block.height)}>
        <Text text="Go to Block" />
      </LabeledAnchorButton>
    </SummaryTableLabeledValue>
  );
};

export const LatestBlockSummaryHeadingPlaceholder: React.FC = () => {
  return (
    <SummaryTableLabeledValue className="card--padding">
      <SummaryValueLabeled>
        <SkeletonContent />
        <SkeletonContent />
      </SummaryValueLabeled>
      <SkeletonContent />
    </SummaryTableLabeledValue>
  );
};

function determineTimeTakenBetweenBlocks(
  data: null | ExplorerSummaryEntry,
): null | number {
  if (data === null) {
    return null;
  }

  if (data.latestBlocks.length < 2) {
    return null;
  }

  return (
    data.latestBlocks[0].time.valueOf() - data.latestBlocks[1].time.valueOf()
  );
}

export const LatestBlockSummaryDetails: React.FC = () => {
  const explorerSummary = React.useContext(ExplorerSummaryProvider);
  const block = React.useContext(LatestBlockSummaryProvider);
  const timeToCreateBlock = determineTimeTakenBetweenBlocks(explorerSummary);

  return (
    <div className="card--padding">
      {timeToCreateBlock === null ? (
        <></>
      ) : (
        <SummaryTableLabeledValue>
          <Text text="Block time" />
          <>
            ~
            <DurationInSecondsText durationInMilliseconds={timeToCreateBlock} />
          </>
        </SummaryTableLabeledValue>
      )}
      <SummaryTableLabeledValue>
        <Text text="Size" />
        <ByteSizeText bytes={block.size} />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Transactions" />
        <NumberText number={block.transactions} />
      </SummaryTableLabeledValue>
    </div>
  );
};

export const LatestBlockSummaryDetailsPlaceholder: React.FC = () => {
  return (
    <div className="card--padding">
      <SummaryTableLabeledValue>
        <Text text="Block time" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Size" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
      <SummaryTableLabeledValue>
        <Text text="Transactions" />
        <SkeletonContent />
      </SummaryTableLabeledValue>
    </div>
  );
};

const CardNoPaddingWithShimmer = WithLoadingShimmer(CardNoPadding);
interface LatestBlockSummaryPlaceholderProps {
  className?: string;
}
export const LatestBlockSummaryPlaceholder: React.FC<
  LatestBlockSummaryPlaceholderProps
> = (props) => {
  return (
    <CardNoPaddingWithShimmer {...props}>
      <LatestBlockSummaryHeadingPlaceholder />
      <hr />
      <LatestBlockSummaryDetailsPlaceholder />
    </CardNoPaddingWithShimmer>
  );
};

interface LatestBlockSummaryContentProps {}
export const LatestBlockSummaryContent: React.FC<
  LatestBlockSummaryContentProps
> = (props) => {
  return (
    <CardNoPadding {...props}>
      <LatestBlockSummaryHeading />
      <hr />
      <LatestBlockSummaryDetails />
    </CardNoPadding>
  );
};

interface LatestBlockSummaryProps {
  className?: string;
}
export const LatestBlockSummaryAsyncHandler: React.FC<
  LatestBlockSummaryProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <LatestBlockSummaryPlaceholder {...props} />;
  }

  return (
    <LatestBlockSummaryProvider.Provider value={data as LatestBlock}>
      <LatestBlockSummaryContent {...props} />
    </LatestBlockSummaryProvider.Provider>
  );
};
