import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import {
  TransactionDataContents,
  TransactionDataContentsPlaceholder,
  TransactionDetailsContent,
  TransactionDetailsContentPlaceholder,
  TransactionSubHeading,
} from '@/components/page_sections/transaction_detail_content/TransactionDetailContent';
import { TransactionDetailContentLoader } from '@/components/page_sections/transaction_detail_content/TransactionDetailLoader';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import { CardNoPadding } from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import Heading2 from '@/layout/heading/Heading2';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import Text from '@/text/Text';
import React from 'react';
import { ErrorContext } from '../components';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginHeading2 = WithEdgeMargin(Heading2);

interface GuardedTransactionDetailsContentProps {}

/**
 * GuardedTransactionDetailsContent is a component that guards rendering the
 * Transaction Details content so long as the component is not in a loading or
 * in an error state.
 */
const GuardedTransactionDetailsContent: React.FC<
  GuardedTransactionDetailsContentProps
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
        <TransactionDetailsContentPlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <TransactionDetailsContent />
    </EdgeMarginCard>
  );
};

interface GuardedTransactionDataContentsProps {}

/**
 * GuardedTransactionDataContents is a component that guards rendering the
 * Transaction Data content so long as the component is not in a loading or
 * in an error state.
 */
const GuardedTransactionDataContents: React.FC<
  GuardedTransactionDataContentsProps
> = (props) => {
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return (
      <EdgeMarginShimmerCard {...props}>
        <TransactionDataContentsPlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <TransactionDataContents />
    </EdgeMarginCard>
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
      <GuardedTransactionDetailsContent {...props} />

      {/* For Each Payload within the Transaction */}
      <EdgeMarginHeading2 className="heading--margin">
        <Text text="Data" />
      </EdgeMarginHeading2>

      <GuardedTransactionDataContents />
    </TransactionDetailContentLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionPage;
