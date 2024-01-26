import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import BlockDetails, {
  BlockNavigation,
} from '../components/page_sections/block_detail_content/BlockDetailContent';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import Text from '../components/text/Text';

const EdgeMarginBlockDetails = WithEdgeMargin(BlockDetails);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface BlockPageProps {}

const BlocksPage: React.FC<BlockPageProps> = (props) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Block" />
      </Heading1>
      <BlockNavigation />
    </EdgeMarginPageTitle>

    {React.createElement(EdgeMarginBlockDetails, props)}

    <Footer />
  </OverridePagePath>
);

export default BlocksPage;
