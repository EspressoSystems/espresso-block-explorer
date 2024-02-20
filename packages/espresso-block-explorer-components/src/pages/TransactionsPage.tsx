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
import {
  TransactionSummaryDataLoader,
  TransactionsNavigation,
} from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import { TransactionsSummaryDataTable } from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import Text from '../components/text/Text';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
const EdgeMarginTransactionsNavigation = WithEdgeMargin(TransactionsNavigation);

interface TransactionsPageProps {
  startAtBlock?: number;
  offset?: number;
}

const TransactionsPage: React.FC<TransactionsPageProps> = ({
  startAtBlock,
  offset,
  ...rest
}) => (
  <OverridePagePath page={PageType.transactions}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text="Transactions" />
      </Heading1>
    </EdgeMarginPageTitle>

    <TransactionSummaryDataLoader startAtBlock={startAtBlock} offset={offset}>
      <BasicAsyncDataHandler>
        <EdgeMarginTransactionsNavigation />

        <EdgeMarginCard {...rest}>
          <TransactionsSummaryDataTable />
        </EdgeMarginCard>
      </BasicAsyncDataHandler>
    </TransactionSummaryDataLoader>

    <Footer />
  </OverridePagePath>
);

export default TransactionsPage;
