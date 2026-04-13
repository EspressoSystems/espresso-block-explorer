import { default as Card } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import { default as RollUpInfo } from '@/block_explorer/components/page_sections/roll_up/roll_up_info/roll_up_info';
import { default as RollUpTitle } from '@/block_explorer/components/page_sections/roll_up/roll_up_title/roll_up_title';
import {
  RollUpDetailDataTable,
  RollUpDetailDataTablePlaceholder,
} from '@/block_explorer/components/page_sections/rollup_detail_data_table/roll_up_detail_data_table';
import { RollUpDetailsDataLoader } from '@/block_explorer/components/page_sections/rollup_detail_data_table/roll_up_detail_loader';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { WithLoadingShimmer } from '@/components/loading/loading_shimmer';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import { NamespaceContext } from '@/models/block_explorer/rollup_entry/contexts';
import { default as React } from 'react';

const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginRollUpInfo = WithEdgeMargin(RollUpInfo);
const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);

interface GuardRollUpPageDetailDataTableProps {}

/**
 * GuardRollUpPageDetailDataTable is a component that guards the rendering
 * of the RollUp Detail Data Table so long as the component is not in a loading
 * state.
 */
const GuardRollUpPageDetailDataTable: React.FC<
  GuardRollUpPageDetailDataTableProps
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
        <RollUpDetailDataTablePlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <RollUpDetailDataTable />
    </EdgeMarginCard>
  );
};

const RolUpSection = EdgeMarginRollUpInfo;

interface RollUpPageProps {
  startAtBlock?: number;
  offset?: number;
}

const RollUpHeading: React.FC = () => {
  const namespace = React.useContext(NamespaceContext);
  return <RollUpTitle namespace={namespace} />;
};

/**
 * RollUpPage is a component that renders the RollUpPage.
 */
const RollUpPage: React.FC<RollUpPageProps> = ({
  startAtBlock,
  offset,
  ...rest
}) => (
  <OverridePagePath page={PageType.rollups}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <RollUpHeading />
      </Heading1>
    </EdgeMarginPageTitle>

    <RolUpSection />

    <RollUpDetailsDataLoader startAtBlock={startAtBlock} offset={offset}>
      <GuardRollUpPageDetailDataTable {...rest} />
    </RollUpDetailsDataLoader>

    <Footer />
  </OverridePagePath>
);

export default RollUpPage;
