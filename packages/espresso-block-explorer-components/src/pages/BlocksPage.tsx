import React from 'react';
import { ErrorContext } from '../components/contexts/ErrorProvider';
import { LoadingContext } from '../components/contexts/LoadingProvider';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import ErrorContextGuard from '../components/data/async_data/ErrorContextGuard';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import { WithLoadingShimmer } from '../components/loading/LoadingShimmer';
import {
  BlockSummaryDataLoader,
  BlocksNavigation,
} from '../components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import {
  BlockSummaryDataTable,
  BlockSummaryDataTablePlaceholder,
} from '../components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import Text from '../components/text/Text';

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
  const loading = React.useContext(LoadingContext);

  if (loading) {
    return (
      <EdgeMarginShimmerCard {...props}>
        <BlockSummaryDataTablePlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <ErrorContextGuard>
        <BlockSummaryDataTable />
      </ErrorContextGuard>
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
