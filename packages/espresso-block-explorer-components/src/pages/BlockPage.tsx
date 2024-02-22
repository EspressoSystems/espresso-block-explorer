import React from 'react';
import { LoadingContext } from '../components/contexts/LoadingProvider';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import ErrorContextGuard from '../components/data/async_data/ErrorContextGuard';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import {
  BlockDetailsContent,
  BlockDetailsContentPlaceholder,
  BlockNavigation,
  ProvideBlockDetails,
} from '../components/page_sections/block_detail_content/BlockDetailContent';
import { BlockDetailsLoader } from '../components/page_sections/block_detail_content/BlockDetailContentLoader';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

/**
 * GuardBlockDetails is a component that guards rendering the Block Details
 * content so long as the component is not in a loading or error state.
 */
const GuardBlockDetails: React.FC = () => {
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return <BlockDetailsContentPlaceholder />;
  }

  return (
    <ErrorContextGuard>
      <ProvideBlockDetails>
        <BlockDetailsContent />
      </ProvideBlockDetails>
    </ErrorContextGuard>
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
      <EdgeMarginCard {...props}>
        <GuardBlockDetails />
      </EdgeMarginCard>
    </BlockDetailsLoader>

    <Footer />
  </OverridePagePath>
);

export default BlockPage;
