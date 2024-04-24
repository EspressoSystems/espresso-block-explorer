import ErrorContextGuard from '@/components/data/async_data/ErrorContextGuard';
import Link from '@/components/links/link/Link';
import {
  BlockDetailsLoader,
  BlockNumberContext,
} from '@/components/page_sections/block_detail_content/BlockDetailContentLoader';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import { TransactionSummaryDataLoader } from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import { DataContext } from '@/contexts/DataProvider';
import { ErrorContext } from '@/contexts/ErrorProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import Card from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import { BlockDetailEntry } from '@/models/block_explorer/block_detail';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
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
        <Link href={pathResolver.block(block)} />
      </>
    );
  }

  return (
    <>
      <Text text="For block #" />
      <Link href={pathResolver.block(block)}>
        <NumberText number={block} />
      </Link>
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
      <ErrorContextGuard>
        <TransactionsSummaryDataTable />
      </ErrorContextGuard>
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
