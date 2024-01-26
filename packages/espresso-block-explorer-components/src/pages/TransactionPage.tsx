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
import TransactionDetailContent, {
  TransactionSubHeading,
} from '../components/page_sections/transaction_detail_content/TransactionDetailContent';
import Text from '../components/text/Text';

const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface TransactionPageProps {}

const TransactionPage: React.FC<TransactionPageProps> = (props) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transaction Details" />
      </Heading1>
      <TransactionSubHeading />
    </EdgeMarginPageTitle>

    {React.createElement(TransactionDetailContent, props)}

    <Footer />
  </OverridePagePath>
);

export default TransactionPage;
