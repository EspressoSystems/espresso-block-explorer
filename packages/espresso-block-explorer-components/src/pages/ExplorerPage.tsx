import { ErrorContext } from '@/components/contexts/ErrorProvider';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import LabeledAnchorButton from '@/components/hid/buttons/labeled_anchor_button/LabeledAnchorButton';
import { addClassToClassName } from '@/components/higher_order';
import { SearchInput } from '@/components/input/search/SearchInput';
import { BlockSizeHistogram } from '@/components/page_sections/block_size_histogram/BlockSizeHistogram';
import { BlockSizeHistogramLoader } from '@/components/page_sections/block_size_histogram/BlockSizeHistogramDataLoader';
import { BlockSummaryDataLoader } from '@/components/page_sections/block_summary_data_table/BlockSummaryDataLoader';
import {
  BlockSummaryDataTable,
  BlockSummaryDataTablePlaceholder,
} from '@/components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import { BlockThroughputHistogram } from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogram';
import { BlockThroughputHistogramLoader } from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogramDataLoader';
import { BlockTimeHistogram } from '@/components/page_sections/block_time_histogram/BlockTimeHistogram';
import { BlockTimeHistogramLoader } from '@/components/page_sections/block_time_histogram/BlockTimeHistogramDataLoader';
import { ExplorerOverviewAsyncHandler } from '@/components/page_sections/explorer_overview/ExplorerOverview';
import { ExplorerOverviewLoader } from '@/components/page_sections/explorer_overview/ExplorerOverviewLoader';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import { LatestBlockSummaryAsyncHandler } from '@/components/page_sections/latest_block_summary/LatestBlockSummary';
import { LatestBlockSummaryDataLoader } from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import PageTitle from '@/components/page_sections/page_title/PageTitle';
import {
  RollUpsSummaryDataTable,
  RollUpsSummaryDataTablePlaceholder,
} from '@/components/page_sections/rollups_summary_data_table/RollUpsSummaryDataTable';
import { RollUpsSummaryLoader } from '@/components/page_sections/rollups_summary_data_table/RollUpsSummaryLoader';
import { TransactionSummaryDataLoader } from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataLoader';
import {
  TransactionsSummaryDataTable,
  TransactionsSummaryDataTablePlaceholder,
} from '@/components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import Card, { CardNoPadding } from '@/layout/card/Card';
import Heading1 from '@/layout/heading/Heading1';
import { WithEdgeMargin } from '@/layout/margin/margins';
import SummaryTabledLabeledValue from '@/layout/summary_table_labeled_value/SummaryTabledLabeledValue';
import { WithLoadingShimmer } from '@/loading/LoadingShimmer';
import Text from '@/text/Text';
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

interface GuardedRollUpsSummaryDataTableProps {}

const GuardedRollUpsSummaryDataTable: React.FC<
  GuardedRollUpsSummaryDataTableProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);

  if (error) {
    return <ErrorDisplay />;
  }

  if (loading) {
    return (
      <EdgeShimmerDiv {...props}>
        <RollUpsSummaryDataTablePlaceholder numElements={10} />
      </EdgeShimmerDiv>
    );
  }

  return <RollUpsSummaryDataTable />;
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

        <CardNoPadding className="block-time-histogram">
          <BlockTimeHistogramLoader>
            <BlockTimeHistogram />
          </BlockTimeHistogramLoader>
        </CardNoPadding>

        <CardNoPadding className="block-size-histogram">
          <BlockSizeHistogramLoader>
            <BlockSizeHistogram />
          </BlockSizeHistogramLoader>
        </CardNoPadding>

        <CardNoPadding className="throughput-histogram">
          <BlockThroughputHistogramLoader>
            <BlockThroughputHistogram />
          </BlockThroughputHistogramLoader>
        </CardNoPadding>

        <Card className="latest-blocks-summary">
          <SummaryTabledLabeledValue>
            <Text300H2>
              <Text text="Latest Blocks" />
            </Text300H2>
            <LabeledAnchorButton href={pathResolver.blocks()}>
              <Text text="View all" />
            </LabeledAnchorButton>
          </SummaryTabledLabeledValue>
          <br />

          <BlockSummaryDataLoader>
            <GuardedBlocksSummaryDataTable />
          </BlockSummaryDataLoader>
        </Card>

        <Card className="latest-transactions-summary">
          <SummaryTabledLabeledValue>
            <Text300H2>
              <Text text="Latest Transactions" />
            </Text300H2>
            <LabeledAnchorButton href={pathResolver.transactions()}>
              <Text text="View all" />
            </LabeledAnchorButton>
          </SummaryTabledLabeledValue>
          <br />

          <TransactionSummaryDataLoader>
            <GuardedTransactionsSummaryDataTable />
          </TransactionSummaryDataLoader>
        </Card>

        <Card className="latest-rollups-summary">
          <SummaryTabledLabeledValue>
            <Text300H2>
              <Text text="Most active rollups" />
            </Text300H2>
            <LabeledAnchorButton href={pathResolver.rollUps()}>
              <Text text="View all" />
            </LabeledAnchorButton>
          </SummaryTabledLabeledValue>
          <br />

          <RollUpsSummaryLoader>
            <GuardedRollUpsSummaryDataTable />
          </RollUpsSummaryLoader>
        </Card>
      </div>

      <Footer />
    </OverridePagePath>
  );
};

export default ExplorerPage;
