import { ErrorContext } from '@/components/contexts';
import DurationInSecondsText from '@/components/text/DurationInSecondsText';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import { CardNoPadding } from '@/layout/card/Card';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/SummaryTableLabeledValue';
import SummaryValueLabeled from '@/layout/summary_value_labeled/SummaryValueLabeled';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import SkeletonContent from '@/loading/SkeletonContent';
import { ExplorerSummaryEntry } from '@/models/block_explorer/explorer_summary';
import ByteSizeText from '@/text/ByteSizeText';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import React from 'react';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import { ExplorerSummaryProvider } from '../explorer_summary';
import {
  LatestBlock,
  LatestBlockSummaryProvider,
} from './LatestBlockSummaryLoader';
import './latest_block_summary.css';

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
