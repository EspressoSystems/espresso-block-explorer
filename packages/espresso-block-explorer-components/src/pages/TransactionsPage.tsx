import ErrorContextGuard from '@/components/data/async_data/ErrorContextGuard';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import {
  TransactionSummaryDataLoader,
  TransactionsNavigation,
} from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import { ErrorContext } from '@/contexts/ErrorProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import Card from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import Text from '@/text/Text';
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
