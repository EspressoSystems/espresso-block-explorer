import React from 'react';
import { LoadingContext } from '../components/contexts/LoadingProvider';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import ErrorContextGuard from '../components/data/async_data/ErrorContextGuard';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import Heading2 from '../components/layout/heading/Heading2';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import {
  TransactionDataContents,
  TransactionDataContentsPlaceholder,
  TransactionDetailsContent,
  TransactionDetailsContentPlaceholder,
  TransactionSubHeading,
} from '../components/page_sections/transaction_detail_content/TransactionDetailContent';
import { TransactionDetailContentLoader } from '../components/page_sections/transaction_detail_content/TransactionDetailLoader';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginHeading2 = WithEdgeMargin(Heading2);

/**
 * GuardedTransactionDetailsContent is a component that guards rendering the
 * Transaction Details content so long as the component is not in a loading or
 * in an error state.
 */
const GuardedTransactionDetailsContent: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  if (loading) {
    return <TransactionDetailsContentPlaceholder />;
  }

  return (
    <ErrorContextGuard>
      <TransactionDetailsContent />
    </ErrorContextGuard>
  );
};

/**
 * GuardedTransactionDataContents is a component that guards rendering the
 * Transaction Data content so long as the component is not in a loading or
 * in an error state.
 */
const GuardedTransactionDataContents: React.FC = () => {
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return <TransactionDataContentsPlaceholder />;
  }

  return (
    <ErrorContextGuard>
      <TransactionDataContents />
    </ErrorContextGuard>
  );
};

interface TransactionPageProps {}

/**
 * TransactionPage is a component that renders the Transaction Page.
 */
const TransactionPage: React.FC<TransactionPageProps> = (props) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transaction Details" />
      </Heading1>
      <TransactionSubHeading />
    </EdgeMarginPageTitle>

    <TransactionDetailContentLoader>
      <EdgeMarginCard {...props}>
        <GuardedTransactionDetailsContent />
      </EdgeMarginCard>

      {/* For Each Payload within the Transaction */}
      <EdgeMarginHeading2>
        <Text text="Data" />
      </EdgeMarginHeading2>
      <EdgeMarginCard>
        <GuardedTransactionDataContents />
      </EdgeMarginCard>
    </TransactionDetailContentLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionPage;
