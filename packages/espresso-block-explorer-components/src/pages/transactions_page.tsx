import { ErrorDisplay } from '@/components/error/error_display';
import Card from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import {
  TransactionSummaryDataLoader,
  TransactionsNavigation,
} from '@/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/components/page_sections/transaction_summary_data_table/transaction_summary_data_table';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import Text from '@/text/text';
import React from 'react';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginTransactionsNavigation = WithEdgeMargin(TransactionsNavigation);

/**
 * GuardedEdgeMarginTransactionsNavigation is a component that guards the
 * rendering of the navigation area so long as the component is not in a loading
 * or error state.
 */
const GuardedEdgeMarginTransactionsNavigation: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  if (loading || error) {
    return <></>;
  }

  return <EdgeMarginTransactionsNavigation />;
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
  const error = React.useContext(ErrorContext);
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
  startAtBlock?: number;
  offset?: number;
}

/**
 * TransactionsPage is a component that renders the Transactions Page.
 */
const TransactionsPage: React.FC<TransactionsPageProps> = ({
  startAtBlock,
  offset,
  ...rest
}) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transactions" />
      </Heading1>
    </EdgeMarginPageTitle>

    <TransactionSummaryDataLoader startAtBlock={startAtBlock} offset={offset}>
      <GuardedEdgeMarginTransactionsNavigation />

      <GuardedTransactionsSummaryDataTable {...rest} />
    </TransactionSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionsPage;
