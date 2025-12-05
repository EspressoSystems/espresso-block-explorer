import { ErrorDisplay } from '@/components/error/error_display';
import Card from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import {
  BlockSummaryDataLoader,
  BlocksNavigation,
} from '@/components/page_sections/block_summary_data_table/block_summary_data_loader';
import {
  BlockSummaryDataTable,
  BlockSummaryDataTablePlaceholder,
} from '@/components/page_sections/block_summary_data_table/block_summary_data_table';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import Text from '@/text/text';
import React from 'react';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginBlocksNavigation = WithEdgeMargin(BlocksNavigation);

/**
 * GuardEdgeMarginBlocksNavigation is a component that guards the rendering
 * of the navigation area so long as the component is not in a loading or
 * error state.
 */
const GuardEdgeMarginBlocksNavigation: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);

  if (loading || error) {
    return <></>;
  }

  return <EdgeMarginBlocksNavigation />;
};

interface GuardedBlocksSummaryDataTableProps {}

const GuardedBlocksSummaryDataTable: React.FC<
  GuardedBlocksSummaryDataTableProps
> = (props) => {
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
      <EdgeMarginShimmerCard {...props}>
        <BlockSummaryDataTablePlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <BlockSummaryDataTable />
    </EdgeMarginCard>
  );
};

interface BlocksPageProps {
  startAtBlock?: number;
}

/**
 * BlocksPage is a component that renders the Blocks page.
 */
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
      {/* Navigation Area */}
      <GuardEdgeMarginBlocksNavigation />

      <GuardedBlocksSummaryDataTable {...rest} />
    </BlockSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default BlocksPage;
