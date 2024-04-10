import React from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import LabeledAnchorButton from '../../hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import { CardNoPadding } from '../../layout/card/Card';
import SummaryTabledLabeledValue from '../../layout/summary_table_labeled_value/SummaryTabledLabeledValue';
import SummaryValueLabeled from '../../layout/summary_value_labeled/SummaryValueLabeled';
import { WithLoadingShimmer } from '../../loading/LoadingShimmer';
import SkeletonContent from '../../loading/SkeletonContent';
import ByteSizeText from '../../text/ByteSizeText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
import RelativeTimeText from '../../text/RelativeTimeText';
import Text from '../../text/Text';
import {
  LatestBlock,
  LatestBlockSummaryProvider,
} from './LatestBlockSummaryLoader';
import './latest_block_summary.css';

export const LatestBlockSummaryHeading: React.FC = () => {
  const block = React.useContext(LatestBlockSummaryProvider);
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <SummaryTabledLabeledValue className="card--padding">
      <SummaryValueLabeled>
        <NumberText number={block.height} />
        <Text text="Latest Block" />
      </SummaryValueLabeled>
      <LabeledAnchorButton href={pathResolver.block(block.height)}>
        <Text text="Go to Block" />
      </LabeledAnchorButton>
    </SummaryTabledLabeledValue>
  );
};

export const LatestBlockSummaryHeadingPlaceholder: React.FC = () => {
  return (
    <SummaryTabledLabeledValue className="card--padding">
      <SummaryValueLabeled>
        <SkeletonContent />
        <SkeletonContent />
      </SummaryValueLabeled>
      <SkeletonContent />
    </SummaryTabledLabeledValue>
  );
};

export const LatestBlockSummaryDetails: React.FC = () => {
  const block = React.useContext(LatestBlockSummaryProvider);

  return (
    <div className="card--padding">
      <SummaryTabledLabeledValue>
        <Text text="Time" />
        <RelativeTimeText date={block.time} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Size" />
        <ByteSizeText bytes={block.size} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Transactions" />
        <NumberText number={block.transactions} />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Proposer" />
        <HexText value={block.proposer} />
      </SummaryTabledLabeledValue>
    </div>
  );
};

export const LatestBlockSummaryDetailsPlaceholder: React.FC = () => {
  return (
    <div className="card--padding">
      <SummaryTabledLabeledValue>
        <Text text="Time" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Size" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Transactions" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
      <SummaryTabledLabeledValue>
        <Text text="Proposer" />
        <SkeletonContent />
      </SummaryTabledLabeledValue>
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
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (loading) {
    return <LatestBlockSummaryPlaceholder {...props} />;
  }

  return (
    <LatestBlockSummaryProvider.Provider value={data as LatestBlock}>
      <LatestBlockSummaryContent {...props} />
    </LatestBlockSummaryProvider.Provider>
  );
};
