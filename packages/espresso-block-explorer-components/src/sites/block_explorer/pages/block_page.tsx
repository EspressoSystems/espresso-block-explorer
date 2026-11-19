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
import {
  BlockTransactionsPage,
  blockTransactionsPage,
} from '@/block_explorer/components/page_sections/transaction_summary_data_table/block_transactions_page';
import {
  TransactionSummaryDataLoader,
  TransactionSummaryDataTableState,
} from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
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
import { DataTableStateContext } from '@/components/data/data_table/data_table';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { NumberText, Text } from '@/components/text';
import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import { ExplorerBlockDetailContext } from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { LoadingContext } from '@/contexts/loading_provider';
import { ExplorerGetBlockSummariesRequest } from '@/service/hotshot_query_service/explorer/get_block_summaries_request';
import { ExplorerTransactionSummary } from '@/service/hotshot_query_service/explorer/transaction_summary';
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
 * useShownBlockTransactionsPage is the page whose rows are on screen. While
 * the next page loads, the loader keeps showing the current rows along with
 * the request they came from, so the pager follows them, not the URL.
 */
function useShownBlockTransactionsPage(): BlockTransactionsPage {
  const rows = React.useContext(DataContext) as
    null | undefined | ExplorerTransactionSummary[];
  const { offset = 0, limit = 0 } = React.useContext(
    DataTableStateContext,
  ) as TransactionSummaryDataTableState;

  // Every row carries its block's number of transactions. The request
  // skipped `offset` of them from the newest and took `limit`, so its first
  // position is what remains below those.
  const total = rows?.[0]?.numTransactions ?? 0;
  return blockTransactionsPage(total, total - offset - limit);
}

/**
 * BlockTransactionsPager steps through a block's transactions a page at a
 * time, and says which positions the page holds.
 */
const BlockTransactionsPager: React.FC<{
  page: BlockTransactionsPage;
  /** Tells the pagers above and below the table apart to screen readers. */
  label: string;
}> = ({ page, label }) => {
  const blockID = React.useContext(BlockNumberContext);
  const pathResolver = React.useContext(PathResolverContext);
  const href = (position: null | number) =>
    position === null ? undefined : pathResolver.block(blockID, position);

  return (
    <nav className="block-transactions-pager" aria-label={label}>
      <span className="block-transactions-pager--range">
        {page.first === page.last ? (
          <>
            <Text text="Blob " />
            <NumberText number={page.first} />
          </>
        ) : (
          <>
            <Text text="Blobs " />
            <NumberText number={page.first} />
            –<NumberText number={page.last} />
          </>
        )}
        <Text text=" of " />
        <NumberText number={page.total} />
      </span>
      <LabeledAnchorButton
        href={href(page.previous)}
        disabled={page.previous === null}
      >
        <Text text="Previous" />
      </LabeledAnchorButton>
      <LabeledAnchorButton href={href(page.next)} disabled={page.next === null}>
        <Text text="Next" />
      </LabeledAnchorButton>
    </nav>
  );
};

/**
 * BlockTransactionsCard renders the transactions contained within the block,
 * titled and wrapped in a card of its own so it reads as a section beneath
 * the block's details. A block with more than one page of transactions gets
 * a pager beside the title and another beneath the table.
 */
const BlockTransactionsCard: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const page = useShownBlockTransactionsPage();
  const paged = page.previous !== null || page.next !== null;

  return (
    <EdgeMarginCard className="block-transactions page-table-card page-table-card--block">
      <div className="block-transactions--header">
        <Text300H2>
          <BlobText text="Blobs" />
        </Text300H2>
        {paged && <BlockTransactionsPager page={page} label="Blob pages" />}
      </div>
      <div className="card--padding">{children}</div>
      {paged && (
        <div className="block-transactions--footer">
          <BlockTransactionsPager page={page} label="Blob pages, bottom" />
        </div>
      )}
    </EdgeMarginCard>
  );
};

/** BlockTransactionsPlaceholder stands in for the transactions while they load. */
const BlockTransactionsPlaceholder: React.FC = () => (
  <EdgeMarginShimmerCard className="block-transactions page-table-card page-table-card--block">
    <div className="card--padding">
      <TransactionsSummaryDataTablePlaceholder numElements={5} withPosition />
    </div>
  </EdgeMarginShimmerCard>
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
    return <BlockTransactionsPlaceholder />;
  }

  return (
    <BlockTransactionsCard>
      <BlockTransactionsSummaryDataTable />
    </BlockTransactionsCard>
  );
};

/**
 * BlockTransactions loads the page of the block's transactions that holds
 * `position`. The block's details give its number of transactions, which
 * the request needs: the service counts from the block's newest transaction.
 */
const BlockTransactions: React.FC<{ position: number }> = ({ position }) => {
  const blockID = React.useContext(BlockNumberContext);
  const details = React.useContext(ExplorerBlockDetailContext);

  if (!details) {
    return <BlockTransactionsPlaceholder />;
  }

  const page = blockTransactionsPage(details.numTransactions, position);
  return (
    <TransactionSummaryDataLoader
      startAtBlock={blockID}
      offset={page.skip}
      limit={page.limit}
    >
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

interface BlockOrNotFoundProps {
  transactionsPosition?: number;
}

/**
 * BlockOrNotFound shows the block once loaded. A block that doesn't exist gets
 * BlockNotFound instead, and when loading fails its transactions are left out,
 * so only one error shows.
 */
const BlockOrNotFound: React.FC<BlockOrNotFoundProps> = ({
  transactionsPosition = 0,
  ...props
}) => {
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
      {!error && <BlockTransactions position={transactionsPosition} />}
    </>
  );
};

interface BlockPageProps {
  /** A position in the block; its page of transactions is shown. */
  transactionsPosition?: number;
}

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
