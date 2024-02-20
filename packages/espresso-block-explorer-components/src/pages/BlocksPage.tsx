import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import { BasicAsyncDataHandler } from '../components/data/async_data/BasicAsyncDataHandler';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import {
  BlockSummaryDataLoader,
  BlocksNavigation,
} from '../components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import { BlockSummaryDataTable } from '../components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginBlocksNavigation = WithEdgeMargin(BlocksNavigation);

interface BlocksPageProps {
  startAtBlock?: number;
}

const BlocksPage: React.FC<BlocksPageProps> = ({ startAtBlock, ...rest }) => (
  <OverridePagePath page={PageType.blocks}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Blocks" />
      </Heading1>
    </EdgeMarginPageTitle>

    <BlockSummaryDataLoader startAtBlock={startAtBlock}>
      {/* Handle the Non Standard Async States */}
      <BasicAsyncDataHandler>
        {/* Navigation Area */}
        <EdgeMarginBlocksNavigation />

        <EdgeMarginCard {...rest}>
          <BlockSummaryDataTable />
        </EdgeMarginCard>
      </BasicAsyncDataHandler>
    </BlockSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default BlocksPage;
