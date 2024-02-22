import React from 'react';
import { ErrorContext } from '../components/contexts/ErrorProvider';
import { LoadingContext } from '../components/contexts/LoadingProvider';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import ErrorContextGuard from '../components/data/async_data/ErrorContextGuard';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import {
  TransactionSummaryDataLoader,
  TransactionsNavigation,
} from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
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

/**
 * GuardedTransactionsSummaryDataTable is a component that guards rendering the
 * Transactions Summary DataTable so long as the component is not in a loading
 * or in an error state.
 */
const GuardedTransactionsSummaryDataTable: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  if (loading) {
    return <TransactionsSummaryDataTablePlaceholder />;
  }
  return (
    <ErrorContextGuard>
      <TransactionsSummaryDataTable />
    </ErrorContextGuard>
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

      <EdgeMarginCard {...rest}>
        <GuardedTransactionsSummaryDataTable />
      </EdgeMarginCard>
    </TransactionSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionsPage;
