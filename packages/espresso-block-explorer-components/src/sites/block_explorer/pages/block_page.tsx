import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
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
import { WithUiText300 } from '@/block_explorer/components/typography/typography';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { default as React } from 'react';
import './block_page.css';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
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
  <EdgeMarginCard className="block-transactions">
    <div className="card--padding">
      <Text300H2>
        <Text text="Transactions" />
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
      <EdgeMarginShimmerCard className="block-transactions">
        <div className="card--padding">
          <TransactionsSummaryDataTablePlaceholder numElements={5} />
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

interface BlockPageProps {}

/**
 * BlockPage is a component that renders the Block Page.
 */
const BlockPage: React.FC<BlockPageProps> = (props) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Block" />
      </Heading1>
      <BlockNavigation />
    </EdgeMarginPageTitle>
    <BlockDetailsLoader>
      <GuardBlockDetails {...props} />
    </BlockDetailsLoader>

    <BlockTransactions />

    <Footer />
  </OverridePagePath>
);

export default BlockPage;
