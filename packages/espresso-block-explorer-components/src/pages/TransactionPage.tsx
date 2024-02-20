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
import {
  TransactionDataContents,
  TransactionDetailsContent,
  TransactionSubHeading,
} from '../components/page_sections/transaction_detail_content/TransactionDetailContent';
import { TransactionDetailContentLoader } from '../components/page_sections/transaction_detail_content/TransactionDetailLoader';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginHeading2 = WithEdgeMargin(Heading2);

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

    <TransactionDetailContentLoader>
      <BasicAsyncDataHandler>
        <EdgeMarginCard {...props}>
          <TransactionDetailsContent />
        </EdgeMarginCard>

        {/* For Each Payload within the Transaction */}
        <EdgeMarginHeading2>
          <Text text="Data" />
        </EdgeMarginHeading2>
        <EdgeMarginCard>
          <TransactionDataContents />
        </EdgeMarginCard>
      </BasicAsyncDataHandler>
    </TransactionDetailContentLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionPage;
