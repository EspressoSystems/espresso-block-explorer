import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { BlockNavigation } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { Text } from '@/components/text';
import { default as React } from 'react';
import {
  AvailabilityBlockContent,
  AvailabilityBlockLoader,
} from '../components/page_sections/block_detail_content/availability_block_content';

const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

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

    <AvailabilityBlockLoader>
      <AvailabilityBlockContent />
    </AvailabilityBlockLoader>
    <Footer />
  </OverridePagePath>
);

export default BlockPage;
