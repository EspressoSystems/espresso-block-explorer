import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as SummaryTableLabeledValue } from '@/block_explorer/components/layout/summary_table_labeled_value/summary_table_labeled_value';
import { default as SummaryValueLabeled } from '@/block_explorer/components/layout/summary_value_labeled/summary_value_labeled';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { SkeletonContent } from '@/components/loading';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import {
  ByteSizeText,
  DurationInSecondsText,
  NumberText,
  Text,
} from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import {
  ExplorerBlockDetailContext,
  ExplorerSummaryContext,
} from '@/contexts/explorer_api_contexts';
import { LoadingContext } from '@/contexts/loading_provider';
import { ExplorerSummary } from '@/service/hotshot_query_service/explorer/explorer_summary';
import { default as React } from 'react';
import { default as LabeledAnchorButton } from '../../hid/buttons/labeled_anchor_button/labeled_anchor_button';
import './latest_block_summary.css';

export const LatestBlockSummaryHeading: React.FC = () => {
  const block = React.useContext(ExplorerBlockDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

  if (!block) {
    return null;
  }

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
  data: null | ExplorerSummary,
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
  const explorerSummary = React.useContext(ExplorerSummaryContext);
  const block = React.useContext(ExplorerBlockDetailContext);
  const timeToCreateBlock = determineTimeTakenBetweenBlocks(explorerSummary);

  if (!block) {
    return null;
  }

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
        <NumberText number={block.numTransactions} />
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

interface LatestBlockSummaryContentProps {
  className?: string;
}

export const LatestBlockSummaryContent: React.FC<
  LatestBlockSummaryContentProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <LatestBlockSummaryPlaceholder {...props} />;
  }

  return (
    <CardNoPadding {...props}>
      <LatestBlockSummaryHeading />
      <hr />
      <LatestBlockSummaryDetails />
    </CardNoPadding>
  );
};
