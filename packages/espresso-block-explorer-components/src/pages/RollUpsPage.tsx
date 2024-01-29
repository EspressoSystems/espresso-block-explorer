import React from 'react';
import { NumberText } from '..';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import RollUpsSummaryDataTable from '../components/page_sections/rollups_summary_data_table/RollUpsSummaryDataTable';
import Text from '../components/text/Text';
import { curatedRollupMap } from '../types/data_source/rollup_entry/data';

const EdgeMarginRollUpsSummary = WithEdgeMargin(RollUpsSummaryDataTable);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface RollUpsPageProps {}

const RollUpsPage: React.FC<RollUpsPageProps> = (props) => (
  <OverridePagePath page={PageType.rollups}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Rollups" />
      </Heading1>
      <label>
        <NumberText number={curatedRollupMap.size} />{' '}
        <Text text="Participating Rollups" />
      </label>
    </EdgeMarginPageTitle>

    {React.createElement(EdgeMarginRollUpsSummary, props)}

    <Footer />
  </OverridePagePath>
);

export default RollUpsPage;
