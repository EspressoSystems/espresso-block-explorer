import { ErrorStreamConsumer } from '@/components/contexts/ErrorStreamConsumer';
import { WebSocketResponseStreamConsumer } from '@/components/contexts/WebSocketResponseProvider';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import { addClassToClassName } from '@/components/higher_order';
import Card from '@/components/layout/card/Card';
import { BlockSizeHistogramStreamConsumer } from '@/components/page_sections/block_size_histogram/BlockSizeHistogramDataLoader';
import { BlockThroughputHistogramStreamConsumer } from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogramDataLoader';
import { BlockTimeHistogramStreamConsumer } from '@/components/page_sections/block_time_histogram/BlockTimeHistogramDataLoader';
import { CountriesPieChartStreamConsumer } from '@/components/page_sections/countries_pie_chart/CountriesPieChartLoader';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import { LatestBlockProducersStreamConsumer } from '@/components/page_sections/latest_block_producers/LatestBlockProducersLoader';
import { LatestBlockSummaryStreamConsumer } from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { NetworkTypesPieChartStreamConsumer } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChartLoader';
import { NodeTypesPieChartStreamConsumer } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChartLoader';
import {
  NodeSummaryStreamConsumer,
  VotersParticipationStatsConsumer,
} from '@/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import { OperatingSystemPieChartStreamConsumer } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChartLoader';
import { StakingModal } from '@/components/page_sections/staking_modal/staking_modal';
import {
  EspressoAccountDetails,
  StakingSummarySection,
} from '@/components/page_sections/staking_summary/staking_summary';
import { ValidatorListDataTable } from '@/components/page_sections/validator_list_data_table/validator_list_data_table';
import OnlyWalletHeading from '@/components/page_sections/wallet/only_wallet_heading';
import {
  RainbowKitMountedGuard,
  WalletConnectedGuard,
} from '@/components/rainbowkit/components/guard';
import { WebSocketStatus } from '@/components/visual/web_socket/WebSocketStatus';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import React from 'react';
import {
  RainbowKitAccountAddressContext,
  RainbowKitMountedContext,
} from '../components';
import './delegation.css';

/**
 * ConsumeUnusedBufferStreams is a React component that consumes various
 * data streams that are not currently being used in the DelegationPage.
 *
 * This is done for convenience, since the Delegation Page is currently using
 * the same mechanisms that the Nodes Page is to retrieve data, it results in
 * extra data being produced, that if not consumed, will result in the page no
 * longer updating its data.  The simplest way to handle this is to consume
 * the data streams, even if we don't use the data.
 */
const ConsumeUnusedBufferStreams: React.FC = () => {
  return (
    <>
      {/* Latest Block */}
      <LatestBlockSummaryStreamConsumer>
        <></>
      </LatestBlockSummaryStreamConsumer>

      {/* Latest Block Producers */}
      <LatestBlockProducersStreamConsumer>
        <></>
      </LatestBlockProducersStreamConsumer>

      {/* Block Time Histogram */}
      <BlockTimeHistogramStreamConsumer>
        <></>
      </BlockTimeHistogramStreamConsumer>

      {/* Block Size Histogram */}
      <BlockSizeHistogramStreamConsumer>
        <></>
      </BlockSizeHistogramStreamConsumer>

      {/* Throughput Histogram */}
      <BlockThroughputHistogramStreamConsumer>
        <></>
      </BlockThroughputHistogramStreamConsumer>

      {/* Node Countries Pie Chart */}
      <CountriesPieChartStreamConsumer>
        <></>
      </CountriesPieChartStreamConsumer>

      {/* Network Types Pie Chart */}
      <NetworkTypesPieChartStreamConsumer>
        <></>
      </NetworkTypesPieChartStreamConsumer>

      {/* Node Types Pie Chart */}
      <NodeTypesPieChartStreamConsumer>
        <></>
      </NodeTypesPieChartStreamConsumer>

      {/* Operating Systems Pie Chart */}
      <OperatingSystemPieChartStreamConsumer>
        <></>
      </OperatingSystemPieChartStreamConsumer>

      <VotersParticipationStatsConsumer>
        <></>
      </VotersParticipationStatsConsumer>
    </>
  );
};

interface NodeValidatorLayoutProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * NodeValidatorLayout is a component that helps to govern the layout of the
 * Nodes Page.
 *
 * We want the page's layout to be somewhat reactive.  In general, we would
 * like the user's page layout to be modified based on whether or not
 * he/she has his/her wallet connected.
 *
 * With a wallet, the user will have access to more sections of information
 * that will be relevant to him/her.
 */
const NodeValidatorLayout: React.FC<NodeValidatorLayoutProps> = (props) => {
  const mounted = React.useContext(RainbowKitMountedContext);
  const address = React.useContext(RainbowKitAccountAddressContext);

  // The user does not have a wallet connected, so we want to render the
  // layout without the user wallet section.  This is governed by guards
  // for the components, but we also need to consider layout differences
  // as a result.
  const className =
    !address || !mounted
      ? 'delegation-grid edge-margin'
      : 'delegation-grid with-wallet edge-margin';

  return (
    <div {...props} className={addClassToClassName(props.className, className)}>
      {props.children}
    </div>
  );
};

interface DelegationPageProps {
  className?: string;
}

/**
 * DelegationPage is a component that renders the Delegation page.
 */
const DelegationPage: React.FC<DelegationPageProps> = (props) => (
  <WebSocketResponseStreamConsumer>
    <ErrorStreamConsumer>
      <OverridePagePath page={PageType.delegation}>
        <EspressoAccountDetails>
          <Header />

          <RainbowKitMountedGuard>
            <OnlyWalletHeading />
          </RainbowKitMountedGuard>

          {/*
      We're going to have a continually updating Data source.  So we want that
      data source to transform these continual updates into snapshot updates
    */}

          {/*
        This component displays the current Lifecycle state of the page.  It
        reflects what's happening with the underlying Web Socket connection.
        */}
          <WebSocketStatus className="edge-margin" />

          {/*
          This component displays any errors that have occurred while attempting
          to retrieve the data.
          */}
          <ErrorDisplay className="edge-margin" />

          <StakingModal>
            <NodeValidatorLayout {...props}>
              <ConsumeUnusedBufferStreams />

              <WalletConnectedGuard>
                <div className="wallet-stake">
                  <StakingSummarySection />
                </div>
              </WalletConnectedGuard>

              {/* Recent Node Updates Data Table */}
              <Card className="nodes">
                <NodeSummaryStreamConsumer>
                  <ValidatorListDataTable />
                </NodeSummaryStreamConsumer>
              </Card>
            </NodeValidatorLayout>
          </StakingModal>

          <Footer />
        </EspressoAccountDetails>
      </OverridePagePath>
    </ErrorStreamConsumer>
  </WebSocketResponseStreamConsumer>
);

export default DelegationPage;
