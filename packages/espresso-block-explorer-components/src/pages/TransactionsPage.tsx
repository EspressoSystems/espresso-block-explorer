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
import TransactionsSummary from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import Text from '../components/text/Text';

const EdgeMarginTransactionsSummary = WithEdgeMargin(TransactionsSummary);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface BlocksPageProps {}

const BlocksPage: React.FC<BlocksPageProps> = (props) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transactions" />
      </Heading1>
    </EdgeMarginPageTitle>

    {React.createElement(EdgeMarginTransactionsSummary, props)}

    <Footer />
  </OverridePagePath>
);

export default BlocksPage;
