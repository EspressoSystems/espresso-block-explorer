import React from 'react';
import {
  OverridePagePath,
  PageType,
} from '../components/contexts/PagePathProvider';
import Heading1 from '../components/layout/heading/Heading1';
import { WithEdgeMargin } from '../components/layout/margin/margins';
import Footer from '../components/page_sections/footer/Footer';
import Header from '../components/page_sections/header/Header';
import PageTitle from '../components/page_sections/page_title/PageTitle';
import RollUpInfo from '../components/page_sections/roll_up/roll_up_info/RollUpInfo';
import RollUpTitle from '../components/page_sections/roll_up/roll_up_title/RollUpTitle';
import RollUpDetailDataTable, {
  NamespaceContext,
} from '../components/page_sections/rollup_detail_data_table/RollUpDetailDataTable';

const EdgeMarginRollUpDetailDataTable = WithEdgeMargin(RollUpDetailDataTable);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginRollUpInfo = WithEdgeMargin(RollUpInfo);

const RolUpSection: React.FC = () => {
  const namespace = React.useContext(NamespaceContext);
  return <EdgeMarginRollUpInfo namespace={namespace} />;
};

interface RollUpPageProps {}

const RollUpHeading: React.FC = () => {
  const namespace = React.useContext(NamespaceContext);
  return <RollUpTitle namespace={namespace} />;
};

const RollUpPage: React.FC<RollUpPageProps> = (props) => (
  <OverridePagePath page={PageType.rollups}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <RollUpHeading />
      </Heading1>
    </EdgeMarginPageTitle>

    <RolUpSection />

    {React.createElement(EdgeMarginRollUpDetailDataTable, props)}

    <Footer />
  </OverridePagePath>
);

export default RollUpPage;
