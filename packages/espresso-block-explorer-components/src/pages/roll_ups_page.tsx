import { ErrorDisplay } from '@/components/error/error_display';
import Card from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import { Label } from '@/components/layout/label/label';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import PageTitle from '@/components/page_sections/page_title/page_title';
import {
  RollUpsSummaryDataTable,
  RollUpsSummaryDataTablePlaceholder,
} from '@/components/page_sections/rollups_summary_data_table/roll_ups_summary_data_table';
import { RollUpsSummaryLoader } from '@/components/page_sections/rollups_summary_data_table/roll_ups_summary_loader';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';
import { ErrorContext } from '../components';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginShimmerCard = WithLoadingShimmer(EdgeMarginCard);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface GuardedRollUpsSummaryDataTableProps {}

/**
 * GuardedRollUpsSummaryDataTable is a component that guards rendering the
 * RollUps Summary DataTable so long as the component is not in a loading or
 * in an error state.
 */
const GuardedRollUpsSummaryDataTable: React.FC<
  GuardedRollUpsSummaryDataTableProps
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
        <RollUpsSummaryDataTablePlaceholder />
      </EdgeMarginShimmerCard>
    );
  }

  return (
    <EdgeMarginCard {...props}>
      <RollUpsSummaryDataTable />
    </EdgeMarginCard>
  );
};

interface RollUpsPageProps {}

/**
 * RollUpsPage is a component that renders the RollUps Page.
 */
const RollUpsPage: React.FC<RollUpsPageProps> = (props) => (
  <OverridePagePath page={PageType.rollups}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Rollups" />
      </Heading1>
      <Label>
        <NumberText number={curatedRollupMap.size} />{' '}
        <Text text="Participating Rollups" />
      </Label>
    </EdgeMarginPageTitle>

    <RollUpsSummaryLoader>
      <GuardedRollUpsSummaryDataTable {...props} />
    </RollUpsSummaryLoader>

    <Footer />
  </OverridePagePath>
);

export default RollUpsPage;
