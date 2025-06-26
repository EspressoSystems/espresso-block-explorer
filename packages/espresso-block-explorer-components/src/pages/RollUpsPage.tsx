import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import { Label } from '@/components/layout/label/label';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import {
  RollUpsSummaryDataTable,
  RollUpsSummaryDataTablePlaceholder,
} from '@/components/page_sections/rollups_summary_data_table/RollUpsSummaryDataTable';
import { RollUpsSummaryLoader } from '@/components/page_sections/rollups_summary_data_table/RollUpsSummaryLoader';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import Card from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import { WithEdgeMargin } from '@/layout/margin/margins';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
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
