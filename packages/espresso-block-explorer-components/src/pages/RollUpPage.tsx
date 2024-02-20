import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import { BasicAsyncDataHandler } from '../components/data/async_data/BasicAsyncDataHandler';
import Card from '../components/layout/card/Card';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import RollUpInfo from '../components/page_sections/roll_up/roll_up_info/RollUpInfo';
import RollUpTitle from '../components/page_sections/roll_up/roll_up_title/RollUpTitle';
import { RollUpDetailDataTable } from '../components/page_sections/rollup_detail_data_table/RollUpDetailDataTable';
import {
  NamespaceContext,
  RollUpDetailsDataLoader,
} from '../components/page_sections/rollup_detail_data_table/RollUpDetailLoader';

const EdgeMarginRollUpDetailDataTable = WithEdgeMargin(RollUpDetailDataTable);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginRollUpInfo = WithEdgeMargin(RollUpInfo);
const EdgeMarginCard = WithEdgeMargin(Card);

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
      <BasicAsyncDataHandler>
        <EdgeMarginCard {...rest}>
          <EdgeMarginRollUpDetailDataTable />
        </EdgeMarginCard>
      </BasicAsyncDataHandler>
    </RollUpDetailsDataLoader>

    <Footer />
  </OverridePagePath>
);

export default RollUpPage;
