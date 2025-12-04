import { ErrorDisplay } from '@/components/error/error_display';
import { CardNoPadding } from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import Heading2 from '@/components/layout/heading/heading2';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import {
  TransactionDataContents,
  TransactionDataContentsPlaceholder,
  TransactionDetailsContent,
  TransactionDetailsContentPlaceholder,
  TransactionSubHeading,
} from '@/components/page_sections/transaction_detail_content/transaction_detail_content';
import { TransactionDetailContentLoader } from '@/components/page_sections/transaction_detail_content/transaction_detail_loader';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import Text from '@/text/text';
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
