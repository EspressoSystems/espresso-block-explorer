import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import BlocksSummary from '../components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import Text from '../components/text/Text';

const EdgeMarginBlocksSummary = WithEdgeMargin(BlocksSummary);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface BlocksPageProps {}

const BlocksPage: React.FC<BlocksPageProps> = (props) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Blocks" />
      </Heading1>
    </EdgeMarginPageTitle>

    {React.createElement(EdgeMarginBlocksSummary, props)}

    <Footer />
  </OverridePagePath>
);

export default BlocksPage;
