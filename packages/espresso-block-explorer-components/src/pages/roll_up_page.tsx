import { ErrorDisplay } from '@/components/error/error_display';
import Card from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import RollUpInfo from '@/components/page_sections/roll_up/roll_up_info/roll_up_info';
import RollUpTitle from '@/components/page_sections/roll_up/roll_up_title/roll_up_title';
import {
  RollUpDetailDataTable,
  RollUpDetailDataTablePlaceholder,
} from '@/components/page_sections/rollup_detail_data_table/roll_up_detail_data_table';
import {
  NamespaceContext,
  RollUpDetailsDataLoader,
} from '@/components/page_sections/rollup_detail_data_table/roll_up_detail_loader';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import React from 'react';
import { ErrorContext } from '../components';

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

const RolUpSection: React.FC = () => {
  const namespace = React.useContext(NamespaceContext);
  return <EdgeMarginRollUpInfo namespace={namespace} />;
};

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
