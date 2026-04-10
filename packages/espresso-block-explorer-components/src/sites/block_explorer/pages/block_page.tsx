import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import {
  BlockDetailsContent,
  BlockDetailsContentPlaceholder,
  BlockNavigation,
  ProvideBlockDetails,
} from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content';
import { BlockDetailsLoader } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { default as Text } from '@/text/text';
import { default as React } from 'react';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const GuardBlockDetailsProps = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface GuardBlockDetailsProps { }

/**
 * GuardBlockDetails is a component that guards rendering the Block Details
 * content so long as the component is not in a loading or error state.
 */
const GuardBlockDetails: React.FC<GuardBlockDetailsProps> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return (
      <EdgeMarginCard>
        <ErrorDisplay />
      </EdgeMarginCard>
    );
  }

  if (loading) {
    return (
      <GuardBlockDetailsProps {...props}>
        <BlockDetailsContentPlaceholder />
      </GuardBlockDetailsProps>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <ProvideBlockDetails>
        <BlockDetailsContent />
      </ProvideBlockDetails>
    </EdgeMarginCard>
  );
};

interface BlockPageProps { }

/**
 * BlockPage is a component that renders the Block Page.
 */
const BlockPage: React.FC<BlockPageProps> = (props) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Block" />
      </Heading1>
      <BlockNavigation />
    </EdgeMarginPageTitle>
    <BlockDetailsLoader>
      <GuardBlockDetails {...props} />
    </BlockDetailsLoader>

    <Footer />
  </OverridePagePath>
);

export default BlockPage;
