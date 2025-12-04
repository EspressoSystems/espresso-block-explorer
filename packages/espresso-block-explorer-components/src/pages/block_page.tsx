import { ErrorDisplay } from '@/components/error/error_display';
import { CardNoPadding } from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import {
  BlockDetailsContent,
  BlockDetailsContentPlaceholder,
  BlockNavigation,
  ProvideBlockDetails,
} from '@/components/page_sections/block_detail_content/block_detail_content';
import { BlockDetailsLoader } from '@/components/page_sections/block_detail_content/block_detail_content_loader';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import Text from '@/text/text';
import React from 'react';
import { ErrorContext } from '../components';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);
const GuardBlockDetailsProps = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface GuardBlockDetailsProps {}

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

interface BlockPageProps {}

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
