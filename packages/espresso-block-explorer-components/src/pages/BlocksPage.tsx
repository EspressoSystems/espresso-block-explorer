import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import {
  BlockSummaryDataLoader,
  BlocksNavigation,
} from '@/components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import {
  BlockSummaryDataTable,
  BlockSummaryDataTablePlaceholder,
} from '@/components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import { ErrorContext } from '@/contexts/ErrorProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import Card from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import Text from '@/text/Text';
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
