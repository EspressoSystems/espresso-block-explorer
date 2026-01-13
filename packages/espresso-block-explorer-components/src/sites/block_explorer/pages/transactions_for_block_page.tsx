import Card from '@/block_explorer/components/layout/card/card';
import Heading1 from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { InternalLink } from '@/block_explorer/components/links/link/link';
import { WithLoadingShimmer } from '@/block_explorer/components/loading/loading_shimmer';
import {
  BlockDetailsLoader,
  BlockNumberContext,
} from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import Footer from '@/block_explorer/components/page_sections/footer/footer';
import Header from '@/block_explorer/components/page_sections/header/header';
import PageTitle from '@/block_explorer/components/page_sections/page_title/page_title';
import { TransactionSummaryDataLoader } from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/block_explorer/components/page_sections/transaction_summary_data_table/transaction_summary_data_table';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { BlockDetailEntry } from '@/models/block_explorer/block_detail';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

/**
 * GuardedEdgeMarginTransactionsNavigation is a component that guards the
 * rendering of the navigation area so long as the component is not in a loading
 * or error state.
 */
const GuardedEdgeMarginTransactionsForBlockNavigation: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  const block = React.useContext(BlockNumberContext);
  const data = React.useContext(DataContext) as BlockDetailEntry;
  if (loading || error || !data) {
    return (
      <>
        <Text text="For block #" />
        <InternalLink href={pathResolver.block(block)}>
          <NumberText number={block} />
        </InternalLink>
      </>
    );
  }

  return (
    <>
      <Text text="For block #" />
      <InternalLink href={pathResolver.block(block)}>
        <NumberText number={block} />
      </InternalLink>
      <Text text={` containing ${data.transactions} transactions`} />
    </>
  );
};

interface GuardedTransactionsSummaryDataTableProps {}

/**
 * GuardedTransactionsSummaryDataTable is a component that guards rendering the
 * Transactions Summary DataTable so long as the component is not in a loading
 * or in an error state.
 */
const GuardedTransactionsSummaryDataTable: React.FC<
  GuardedTransactionsSummaryDataTableProps
> = (props) => {
  const loading = React.useContext(LoadingContext);
  if (loading) {
    return (
      <EdgeMarginShimmerCard {...props}>
        <TransactionsSummaryDataTablePlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <TransactionsSummaryDataTable />
    </EdgeMarginCard>
  );
};

interface TransactionsPageProps {
  block: number;
  offset?: number;
}

/**
 * TransactionsForBlockPage is a component that renders the Transactions Page
 * but only filtered to the transactions for a specific block.
 */
const TransactionsForBlockPage: React.FC<TransactionsPageProps> = ({
  block,
  offset,
  ...rest
}) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transactions" />
      </Heading1>
      <BlockNumberContext.Provider value={block}>
        <BlockDetailsLoader>
          <GuardedEdgeMarginTransactionsForBlockNavigation />
        </BlockDetailsLoader>
      </BlockNumberContext.Provider>
    </EdgeMarginPageTitle>

    {/* For Block ${block} containing ${num_transactions} transactions */}

    <TransactionSummaryDataLoader startAtBlock={block} offset={offset}>
      <GuardedTransactionsSummaryDataTable {...rest} />
    </TransactionSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionsForBlockPage;
