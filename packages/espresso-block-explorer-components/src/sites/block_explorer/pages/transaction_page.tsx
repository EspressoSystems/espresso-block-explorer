import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { default as Heading2 } from '@/block_explorer/components/layout/heading/heading2';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import {
  TransactionDataContents,
  TransactionDataContentsPlaceholder,
  TransactionDetailsContent,
  TransactionDetailsContentPlaceholder,
  TransactionSubHeading,
} from '@/block_explorer/components/page_sections/transaction_detail_content/transaction_detail_content';
import { TransactionDetailContentLoader } from '@/block_explorer/components/page_sections/transaction_detail_content/transaction_detail_loader';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { Text } from '@/components/text';
import { default as React } from 'react';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginHeading2 = WithEdgeMargin(Heading2);

interface GuardedTransactionDetailsContentProps { }

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

interface GuardedTransactionDataContentsProps { }

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

interface TransactionPageProps { }

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
