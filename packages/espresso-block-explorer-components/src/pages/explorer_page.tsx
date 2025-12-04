import { ErrorContext } from '@/components/contexts/error_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import LabeledAnchorButton from '@/components/hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { addClassToClassName } from '@/components/higher_order';
import { SearchInput } from '@/components/input/search/search_input';
import Card from '@/components/layout/card/card';
import Heading1 from '@/components/layout/heading/heading1';
import { BlockSizeHistogram } from '@/components/page_sections/block_size_histogram/block_size_histogram';
import { BlockSummaryDataFromStreamLoader } from '@/components/page_sections/block_summary_data_table/block_summary_data_loader';
import {
  BlockSummaryDataTable,
  BlockSummaryDataTablePlaceholder,
} from '@/components/page_sections/block_summary_data_table/block_summary_data_table';
import { BlockThroughputHistogram } from '@/components/page_sections/block_throughput_histogram/block_throughput_histogram';
import { BlockTimeHistogram } from '@/components/page_sections/block_time_histogram/block_time_histogram';
import { HistogramDataLoader } from '@/components/page_sections/block_time_histogram/block_time_histogram_data_loader';
import { ExplorerOverviewAsyncHandler } from '@/components/page_sections/explorer_overview/explorer_overview';
import { ExplorerOverviewLoader } from '@/components/page_sections/explorer_overview/explorer_overview_loader';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import { LatestBlockSummaryAsyncHandler } from '@/components/page_sections/latest_block_summary/latest_block_summary';
import { LatestBlockSummaryDataLoader } from '@/components/page_sections/latest_block_summary/latest_block_summary_loader';
import PageTitle from '@/components/page_sections/page_title/page_title';
import { TransactionSummaryDataFromStreamLoader } from '@/components/page_sections/transaction_summary_data_table/transaction_summary_data_loader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/components/page_sections/transaction_summary_data_table/transaction_summary_data_table';
import { LoadingContext } from '@/contexts/loading_provider';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
import { PathResolverContext } from '@/contexts/path_resolver_provider';
import { WithEdgeMargin } from '@/layout/margin/margins';
import SummaryTableLabeledValue from '@/layout/summary_table_labeled_value/summary_table_labeled_value';
import { WithLoadingShimmer } from '@/loading/loading_shimmer';
import Text from '@/text/text';
import { WithUiText300 } from '@/typography/typography';
import React from 'react';
import './explorer_page.css';

const Text300H2 = WithUiText300('h2');
const EdgeShimmerDiv = WithLoadingShimmer('div');

interface GuardedBlocksSummaryDataTableProps {}

const GuardedBlocksSummaryDataTable: React.FC<
  GuardedBlocksSummaryDataTableProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return <ErrorDisplay />;
  }

  if (loading) {
    return (
      <EdgeShimmerDiv {...props}>
        <BlockSummaryDataTablePlaceholder numElements={10} />
      </EdgeShimmerDiv>
    );
  }

  return <BlockSummaryDataTable />;
};

interface GuardedTransactionsSummaryDataTableProps {
  className?: string;
}
const GuardedTransactionsSummaryDataTable: React.FC<
  GuardedTransactionsSummaryDataTableProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return <ErrorDisplay />;
  }

  if (loading) {
    return (
      <EdgeShimmerDiv {...props}>
        <TransactionsSummaryDataTablePlaceholder numElements={10} />
      </EdgeShimmerDiv>
    );
  }

  return <TransactionsSummaryDataTable />;
};

const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);
interface ExplorerPageProps {
  className?: string;
}

/**
 * Explorer is a component that renders the Explorer page.
 */
const ExplorerPage: React.FC<ExplorerPageProps> = (props) => {
  const pathResolver = React.useContext(PathResolverContext);
  return (
    <OverridePagePath page={PageType.explorer}>
      <Header />

      <EdgeMarginPageTitle className="center">
        <Heading1>
          <Text text="Espresso Explorer" />
        </Heading1>

        {/* <ExplorerSearchBar /> */}
        <SearchInput />
      </EdgeMarginPageTitle>

      <div
        {...props}
        className={addClassToClassName(
          props.className,
          'explorer-grid edge-margin',
        )}
      >
        <LatestBlockSummaryDataLoader>
          <LatestBlockSummaryAsyncHandler className="latest-block" />
        </LatestBlockSummaryDataLoader>

        <ExplorerOverviewLoader>
          <ExplorerOverviewAsyncHandler className="overview" />
        </ExplorerOverviewLoader>

        <HistogramDataLoader>
          <BlockTimeHistogram />

          <BlockSizeHistogram />

          <BlockThroughputHistogram />
        </HistogramDataLoader>

        <Card className="latest-blocks-summary">
          <SummaryTableLabeledValue>
            <Text300H2>
              <Text text="Latest Blocks" />
            </Text300H2>
            <LabeledAnchorButton href={pathResolver.blocks()}>
              <Text text="View all" />
            </LabeledAnchorButton>
          </SummaryTableLabeledValue>

          <div className="card--padding">
            <BlockSummaryDataFromStreamLoader>
              <GuardedBlocksSummaryDataTable />
            </BlockSummaryDataFromStreamLoader>
          </div>
        </Card>

        <Card className="latest-transactions-summary">
          <SummaryTableLabeledValue>
            <Text300H2>
              <Text text="Latest Transactions" />
            </Text300H2>
            <LabeledAnchorButton href={pathResolver.transactions()}>
              <Text text="View all" />
            </LabeledAnchorButton>
          </SummaryTableLabeledValue>

          <div className="card--padding">
            <TransactionSummaryDataFromStreamLoader>
              <GuardedTransactionsSummaryDataTable />
            </TransactionSummaryDataFromStreamLoader>
          </div>
        </Card>
      </div>

      <Footer />
    </OverridePagePath>
  );
};

export default ExplorerPage;
