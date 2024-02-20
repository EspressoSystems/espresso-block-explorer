import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import { BasicAsyncDataHandler } from '../components/data/async_data/BasicAsyncDataHandler';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import Heading2 from '../components/layout/heading/Heading2';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import { RollUpsSummaryDataTable } from '../components/page_sections/rollups_summary_data_table/RollUpsSummaryDataTable';
import { RollUpsSummaryLoader } from '../components/page_sections/rollups_summary_data_table/RollUpsSummaryLoader';
import NumberText from '../components/text/NumberText';
import Text from '../components/text/Text';
import { curatedRollupMap } from '../types/data_source/rollup_entry/data';
import { kNumberOfSampleBlocks } from './GibraltarHotShotQueryServiceAdapters';

// const EdgeMarginRollUpsSummary = WithEdgeMargin(RollUpsSummaryDataTable);
const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginHeading2 = WithEdgeMargin(Heading2);

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

    <RollUpsSummaryLoader>
      <BasicAsyncDataHandler>
        <EdgeMarginHeading2>
          <Text text={`Over the latest ${kNumberOfSampleBlocks} Blocks`} />
        </EdgeMarginHeading2>
        <EdgeMarginCard {...props}>
          <RollUpsSummaryDataTable />
        </EdgeMarginCard>
      </BasicAsyncDataHandler>
    </RollUpsSummaryLoader>

    <Footer />
  </OverridePagePath>
);

export default RollUpsPage;
