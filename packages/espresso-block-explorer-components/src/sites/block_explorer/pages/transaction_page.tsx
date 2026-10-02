import { isNotFoundError } from '@/async/fetch/auto_retry_fetch';
import { default as LabeledAnchorButton } from '@/block_explorer/components/hid/buttons/labeled_anchor_button/labeled_anchor_button';
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
} from '@/block_explorer/components/page_sections/transaction_detail_content/transaction_detail_content';
import { BlockNumberContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import {
  TransactionDetailContentLoader,
  TransactionOffsetContext,
} from '@/block_explorer/components/page_sections/transaction_detail_content/transaction_detail_loader';
import { default as BlobText } from '@/block_explorer/components/text/blob_text';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { NumberText, Text } from '@/components/text';
import { ErrorContext } from '@/contexts/error_provider';
import {
  ExplorerTransactionDetailDataContext,
  ExplorerTransactionDetailsContext,
} from '@/contexts/explorer_api_contexts';
import { LoadingContext } from '@/contexts/loading_provider';
import { default as React } from 'react';
import { MessageContent } from './message_page';

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

  return <AllTransactionDetaContent />;
};

const AllTransactionDetaContent: React.FC = () => {
  const data = React.useContext(ExplorerTransactionDetailsContext);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.data.map((data, index) => (
        <ExplorerTransactionDetailDataContext.Provider key={index} value={data}>
          <EdgeMarginCard>
            <TransactionDataContents />
          </EdgeMarginCard>
        </ExplorerTransactionDetailDataContext.Provider>
      ))}
    </>
  );
};

/** BlobNotFound takes the place of a blob that the service doesn't have. */
const BlobNotFound: React.FC = () => {
  const height = React.useContext(BlockNumberContext);
  const offset = React.useContext(TransactionOffsetContext);
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <MessageContent
      title={<Text text={`Blob ${height}-${offset} not found`} />}
      message={
        <>
          <Text text={`There's no blob at position ${offset} of block `} />#
          <NumberText number={height} />.
        </>
      }
    >
      <LabeledAnchorButton href={pathResolver.block(height)}>
        <Text text="View block" />
      </LabeledAnchorButton>
      <LabeledAnchorButton href={pathResolver.transactions()}>
        <Text text="View all blobs" />
      </LabeledAnchorButton>
    </MessageContent>
  );
};

interface BlobOrNotFoundProps {}

/**
 * BlobOrNotFound shows the blob once loaded. A blob that doesn't exist gets
 * BlobNotFound instead, and when loading fails its data section is left out.
 */
const BlobOrNotFound: React.FC<BlobOrNotFoundProps> = (props) => {
  const error = React.useContext(ErrorContext);

  if (isNotFoundError(error)) {
    return <BlobNotFound />;
  }

  return (
    <>
      <EdgeMarginPageTitle>
        <Heading1>
          <BlobText text="Blob Details" />
        </Heading1>
      </EdgeMarginPageTitle>

      <GuardedTransactionDetailsContent {...props} />

      {/* For Each Payload within the Transaction */}
      {!error && (
        <>
          <EdgeMarginHeading2 className="heading--margin">
            <Text text="Data" />
          </EdgeMarginHeading2>

          <GuardedTransactionDataContents />
        </>
      )}
    </>
  );
};

interface TransactionPageProps {}

/**
 * TransactionPage is a component that renders the Transaction Page.
 */
const TransactionPage: React.FC<TransactionPageProps> = (props) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <TransactionDetailContentLoader>
      <BlobOrNotFound {...props} />
    </TransactionDetailContentLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionPage;
