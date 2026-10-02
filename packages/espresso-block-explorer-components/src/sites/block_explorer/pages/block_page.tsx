import { isNotFoundError } from '@/async/fetch/auto_retry_fetch';
import { default as LabeledAnchorButton } from '@/block_explorer/components/hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { InternalLink } from '@/block_explorer/components/links/link/link';
import {
  BlockDetailsContent,
  BlockDetailsContentPlaceholder,
  BlockNavigation,
} from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content';
import {
  BlockDetailsLoader,
  BlockNumberContext,
} from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import { TransactionSummaryDataLoader } from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import {
  BlockTransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_table';
import { default as BlobText } from '@/block_explorer/components/text/blob_text';
import { WithUiText300 } from '@/block_explorer/components/typography/typography';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { NumberText, Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { LoadingContext } from '@/contexts/loading_provider';
import { ExplorerGetBlockSummariesRequest } from '@/service/hotshot_query_service/explorer/get_block_summaries_request';
import { default as React } from 'react';
import './block_page.css';
import { MessageContent } from './message_page';
import './page_table_card.css';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginBlockNavigation = WithEdgeMargin(BlockNavigation);
const Text300H2 = WithUiText300('h2');

interface GuardBlockDetailsProps {}

/**
 * GuardBlockDetails is a component that guards rendering the Block Details
 * content so long as the component is not in a loading or error state.
 */
const GuardBlockDetails: React.FC<GuardBlockDetailsProps> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return (
      <EdgeMarginCard>
        <ErrorDisplay />
      </EdgeMarginCard>
    );
  }

  if (loading) {
    return (
      <EdgeMarginShimmerCard {...props}>
        <BlockDetailsContentPlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <BlockDetailsContent />
    </EdgeMarginCard>
  );
};

/**
 * BlockTransactionsCard renders the transactions contained within the block,
 * titled and wrapped in a card of its own so it reads as a section beneath
 * the block's details.
 */
const BlockTransactionsCard: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <EdgeMarginCard className="block-transactions page-table-card page-table-card--block">
    <div className="block-transactions--header">
      <Text300H2>
        <BlobText text="Blobs" />
      </Text300H2>
    </div>
    <div className="card--padding">{children}</div>
  </EdgeMarginCard>
);

/**
 * GuardBlockTransactions guards rendering the block's transactions so long as
 * the component is not in a loading or error state.
 */
const GuardBlockTransactions: React.FC = () => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return (
      <EdgeMarginCard className="block-transactions">
        <ErrorDisplay />
      </EdgeMarginCard>
    );
  }

  if (loading) {
    return (
      <EdgeMarginShimmerCard className="block-transactions page-table-card page-table-card--block">
        <div className="card--padding">
          <TransactionsSummaryDataTablePlaceholder
            numElements={5}
            withPosition
          />
        </div>
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <BlockTransactionsCard>
      <BlockTransactionsSummaryDataTable />
    </BlockTransactionsCard>
  );
};

/**
 * BlockTransactions loads the transactions belonging to the block currently
 * being displayed.
 */
const BlockTransactions: React.FC = () => {
  const blockID = React.useContext(BlockNumberContext);

  return (
    <TransactionSummaryDataLoader startAtBlock={blockID}>
      <GuardBlockTransactions />
    </TransactionSummaryDataLoader>
  );
};

/**
 * BlockHeading titles the page with the block it shows -- "Block #16,055,206",
 * as the browser tab does -- rather than as a label beside the navigation.
 */
const BlockHeading: React.FC = () => {
  const blockID = React.useContext(BlockNumberContext);
  return (
    <Heading1>
      <Text text="Block" /> #<NumberText number={blockID} />
    </Heading1>
  );
};

/** The height of the chain's latest block, once it's known. */
function useLatestBlockHeight(): null | number {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const [height, setHeight] = React.useState<null | number>(null);

  React.useEffect(() => {
    service.explorer
      .getBlockSummaries(ExplorerGetBlockSummariesRequest.latest(1))
      .then(
        (response) => setHeight(response.blockSummaries[0]?.height ?? null),
        () => setHeight(null),
      );
  }, [service]);

  return height;
}

/** BlockNotFound takes the place of a block that the service doesn't have. */
const BlockNotFound: React.FC = () => {
  const blockID = React.useContext(BlockNumberContext);
  const pathResolver = React.useContext(PathResolverContext);
  const latest = useLatestBlockHeight();

  let message: React.ReactNode = (
    <Text text="This block doesn't exist or isn't available from this query service." />
  );
  if (latest !== null && blockID > latest) {
    message = (
      <>
        <Text text="This block doesn't exist yet. The latest block is " />
        <InternalLink href={pathResolver.block(latest)}>
          #<NumberText number={latest} />
        </InternalLink>
        .
      </>
    );
  } else if (latest !== null) {
    message = (
      <Text text="This block isn't available from this query service." />
    );
  }

  return (
    <MessageContent
      title={
        <>
          <Text text="Block" /> #<NumberText number={blockID} />{' '}
          <Text text="not found" />
        </>
      }
      message={message}
    >
      <LabeledAnchorButton href={pathResolver.blocks()}>
        <Text text="View all blocks" />
      </LabeledAnchorButton>
    </MessageContent>
  );
};

interface BlockOrNotFoundProps {}

/**
 * BlockOrNotFound shows the block once loaded. A block that doesn't exist gets
 * BlockNotFound instead, and when loading fails its transactions are left out,
 * so only one error shows.
 */
const BlockOrNotFound: React.FC<BlockOrNotFoundProps> = (props) => {
  const error = React.useContext(ErrorContext);

  if (isNotFoundError(error)) {
    return <BlockNotFound />;
  }

  return (
    <>
      <EdgeMarginPageTitle>
        <BlockHeading />
      </EdgeMarginPageTitle>
      <EdgeMarginBlockNavigation />
      <GuardBlockDetails {...props} />
      {!error && <BlockTransactions />}
    </>
  );
};

interface BlockPageProps {}

/**
 * BlockPage is a component that renders the Block Page.
 */
const BlockPage: React.FC<BlockPageProps> = (props) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    {/* Inside the loader, so the title and controls stay with the block shown. */}
    <BlockDetailsLoader>
      <BlockOrNotFound {...props} />
    </BlockDetailsLoader>

    <Footer />
  </OverridePagePath>
);

export default BlockPage;
