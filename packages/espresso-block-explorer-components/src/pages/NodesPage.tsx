import { ErrorStreamConsumer } from '@/components/contexts/ErrorStreamConsumer';
import { WebSocketResponseStreamConsumer } from '@/components/contexts/WebSocketResponseProvider';
import { ErrorDisplay } from '@/components/error/ErrorDisplay';
import { addClassToClassName } from '@/components/higher_order';
import Card, { CardNoPadding } from '@/components/layout/card/Card';
import { BlockSizeHistogram } from '@/components/page_sections/block_size_histogram/BlockSizeHistogram';
import { BlockSizeHistogramStreamConsumer } from '@/components/page_sections/block_size_histogram/BlockSizeHistogramDataLoader';
import { BlockThroughputHistogram } from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogram';
import { BlockThroughputHistogramStreamConsumer } from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogramDataLoader';
import { BlockTimeHistogram } from '@/components/page_sections/block_time_histogram/BlockTimeHistogram';
import { BlockTimeHistogramStreamConsumer } from '@/components/page_sections/block_time_histogram/BlockTimeHistogramDataLoader';
import { CDNStatus } from '@/components/page_sections/cdn_status/CDNStatus';
import { CountriesPieChart } from '@/components/page_sections/countries_pie_chart/CountriesPieChart';
import { CountriesPieChartStreamConsumer } from '@/components/page_sections/countries_pie_chart/CountriesPieChartLoader';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import { LatestBlockProducersAsyncHandler } from '@/components/page_sections/latest_block_producers/LatestBlockProducers';
import { LatestBlockProducersStreamConsumer } from '@/components/page_sections/latest_block_producers/LatestBlockProducersLoader';
import { LatestBlockSummaryAsyncHandler } from '@/components/page_sections/latest_block_summary/LatestBlockSummary';
import { LatestBlockSummaryStreamConsumer } from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { NetworkTypesPieChart } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChart';
import { NetworkTypesPieChartStreamConsumer } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChartLoader';
import { NodeTypesPieChart } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChart';
import { NodeTypesPieChartStreamConsumer } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChartLoader';
import { NodesSummaryDataTable } from '@/components/page_sections/nodes_summary_data_table/NodesSummaryDataTable';
import {
  NodeSummaryStreamConsumer,
  VotersParticipationStatsConsumer,
} from '@/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import { OperatingSystemPieChart } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChart';
import { OperatingSystemPieChartStreamConsumer } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChartLoader';
import { StakingModal } from '@/components/page_sections/staking_modal/staking_modal';
import { StakingSummarySection } from '@/components/page_sections/staking_summary/staking_summary';
import OnlyWalletHeading from '@/components/page_sections/wallet/only_wallet_heading';
import {
  RainbowKitMountedGuard,
  WalletConnectedGuard,
} from '@/components/rainbowkit/components/guard';
import Text from '@/components/text/Text';
import { ProjectionProvider } from '@/components/visual/geo_json/ProjectionProvider';
import WorldMapAutoSizer from '@/components/visual/geo_json/WorldMapAutoSizer';
import WorldMapDotsFullResolution from '@/components/visual/geo_json/WorldMapDotsFullResolution';
import WorldMapDotsPopulationFullResolution from '@/components/visual/geo_json/WorldMapDotsPopulationFullResolution';
import {
  DotPopulationStreamConsumer,
  NodeInformationToDotPopulation,
} from '@/components/visual/geo_json/WorldMapDotsPopulationResolver';
import { HistogramSectionTitle } from '@/components/visual/histogram/histogram_section_title/HistogramSectionTitle';
import { WebSocketStatus } from '@/components/visual/web_socket/WebSocketStatus';
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import React from 'react';
import {
  RainbowKitAccountAddressContext,
  RainbowKitMountedContext,
} from '../components';
import './node_validator.css';

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
      ? 'node-validator-grid edge-margin'
      : 'node-validator-grid with-wallet edge-margin';

  return (
    <div {...props} className={addClassToClassName(props.className, className)}>
      {props.children}
    </div>
  );
};

interface NodesPageProps {
  className?: string;
}

/**
 * NodesPage is a component that renders the Nodes page.
 */
const NodesPage: React.FC<NodesPageProps> = (props) => (
  <WebSocketResponseStreamConsumer>
    <ErrorStreamConsumer>
      <OverridePagePath page={PageType.nodes}>
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
            {/* Latest Block */}
            <LatestBlockSummaryStreamConsumer>
              <LatestBlockSummaryAsyncHandler className="latest-block" />
            </LatestBlockSummaryStreamConsumer>

            {/* Latest Block Producers */}
            <LatestBlockProducersStreamConsumer>
              <LatestBlockProducersAsyncHandler className="latest-block-producers" />
            </LatestBlockProducersStreamConsumer>

            {/* Block Time Histogram */}
            <BlockTimeHistogramStreamConsumer>
              <BlockTimeHistogram />
            </BlockTimeHistogramStreamConsumer>

            {/* Block Size Histogram */}
            <BlockSizeHistogramStreamConsumer>
              <BlockSizeHistogram />
            </BlockSizeHistogramStreamConsumer>

            {/* Throughput Histogram */}
            <BlockThroughputHistogramStreamConsumer>
              <BlockThroughputHistogram />
            </BlockThroughputHistogramStreamConsumer>

            {/* CDN Status */}
            <CardNoPadding className="cdn">
              <CDNStatus className="card-padding" />
            </CardNoPadding>

            {/* Network Map */}
            <CardNoPadding className="network-map">
              <HistogramSectionTitle className="card--padding heading--margin">
                <Text text="Network Map" />
                <div></div>
              </HistogramSectionTitle>
              <NodeInformationToDotPopulation>
                <WorldMapAutoSizer>
                  <ProjectionProvider>
                    <WorldMapDotsFullResolution />
                    <DotPopulationStreamConsumer>
                      <WorldMapDotsPopulationFullResolution />
                    </DotPopulationStreamConsumer>
                  </ProjectionProvider>
                </WorldMapAutoSizer>
              </NodeInformationToDotPopulation>
            </CardNoPadding>

            {/* Nodes Histogram (Not needed currently) */}

            {/* Node Countries Pie Chart */}
            <CardNoPadding className="countries">
              <CountriesPieChartStreamConsumer>
                <CountriesPieChart />
              </CountriesPieChartStreamConsumer>
            </CardNoPadding>

            {/* Network Types Pie Chart */}
            <CardNoPadding className="network-types">
              <NetworkTypesPieChartStreamConsumer>
                <NetworkTypesPieChart />
              </NetworkTypesPieChartStreamConsumer>
            </CardNoPadding>

            {/* Node Types Pie Chart */}
            <CardNoPadding className="node-types">
              <NodeTypesPieChartStreamConsumer>
                <NodeTypesPieChart />
              </NodeTypesPieChartStreamConsumer>
            </CardNoPadding>

            {/* Operating Systems Pie Chart */}
            <CardNoPadding className="operating-systems">
              <OperatingSystemPieChartStreamConsumer>
                <OperatingSystemPieChart />
              </OperatingSystemPieChartStreamConsumer>
            </CardNoPadding>

            <WalletConnectedGuard>
              <div className="wallet-stake">
                <StakingSummarySection />
              </div>
            </WalletConnectedGuard>

            {/* Recent Node Updates Data Table */}
            <Card className="nodes">
              <VotersParticipationStatsConsumer>
                <NodeSummaryStreamConsumer>
                  <NodesSummaryDataTable />
                </NodeSummaryStreamConsumer>
              </VotersParticipationStatsConsumer>
            </Card>
          </NodeValidatorLayout>
        </StakingModal>

        <Footer />
      </OverridePagePath>
    </ErrorStreamConsumer>
  </WebSocketResponseStreamConsumer>
);

export default NodesPage;
