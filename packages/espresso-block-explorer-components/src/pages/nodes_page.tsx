import { ErrorStreamConsumer } from '@/components/contexts/error_stream_consumer';
import { WebSocketResponseStreamConsumer } from '@/components/contexts/web_socket_response_provider';
import { ErrorDisplay } from '@/components/error/error_display';
import { addClassToClassName } from '@/components/higher_order';
import Card, { CardNoPadding } from '@/components/layout/card/card';
import { BlockSizeHistogram } from '@/components/page_sections/block_size_histogram/block_size_histogram';
import { BlockSizeHistogramStreamConsumer } from '@/components/page_sections/block_size_histogram/block_size_histogram_data_loader';
import { BlockThroughputHistogram } from '@/components/page_sections/block_throughput_histogram/block_throughput_histogram';
import { BlockThroughputHistogramStreamConsumer } from '@/components/page_sections/block_throughput_histogram/block_throughput_histogram_data_loader';
import { BlockTimeHistogram } from '@/components/page_sections/block_time_histogram/block_time_histogram';
import { BlockTimeHistogramStreamConsumer } from '@/components/page_sections/block_time_histogram/block_time_histogram_data_loader';
import { CDNStatus } from '@/components/page_sections/cdn_status/cdn_status';
import { CountriesPieChart } from '@/components/page_sections/countries_pie_chart/countries_pie_chart';
import { CountriesPieChartStreamConsumer } from '@/components/page_sections/countries_pie_chart/countries_pie_chart_loader';
import Footer from '@/components/page_sections/footer/footer';
import Header from '@/components/page_sections/header/header';
import { LatestBlockProducersAsyncHandler } from '@/components/page_sections/latest_block_producers/latest_block_producers';
import { LatestBlockProducersStreamConsumer } from '@/components/page_sections/latest_block_producers/latest_block_producers_loader';
import { LatestBlockSummaryAsyncHandler } from '@/components/page_sections/latest_block_summary/latest_block_summary';
import { LatestBlockSummaryStreamConsumer } from '@/components/page_sections/latest_block_summary/latest_block_summary_loader';
import { NetworkTypesPieChart } from '@/components/page_sections/network_types_pie_chart/network_types_pie_chart';
import { NetworkTypesPieChartStreamConsumer } from '@/components/page_sections/network_types_pie_chart/network_types_pie_chart_loader';
import { NodeTypesPieChart } from '@/components/page_sections/node_types_pie_chart/node_types_pie_chart';
import { NodeTypesPieChartStreamConsumer } from '@/components/page_sections/node_types_pie_chart/node_types_pie_chart_loader';
import { NodesSummaryDataTable } from '@/components/page_sections/nodes_summary_data_table/nodes_summary_data_table';
import {
  NodeSummaryStreamConsumer,
  VotersParticipationStatsConsumer,
} from '@/components/page_sections/nodes_summary_data_table/nodes_summary_loader';
import { OperatingSystemPieChart } from '@/components/page_sections/operating_system_pie_chart/operating_system_pie_chart';
import { OperatingSystemPieChartStreamConsumer } from '@/components/page_sections/operating_system_pie_chart/operating_system_pie_chart_loader';
import Text from '@/components/text/text';
import { ProjectionProvider } from '@/components/visual/geo_json/projection_provider';
import WorldMapAutoSizer from '@/components/visual/geo_json/world_map_auto_sizer';
import WorldMapDotsFullResolution from '@/components/visual/geo_json/world_map_dots_full_resolution';
import WorldMapDotsPopulationFullResolution from '@/components/visual/geo_json/world_map_dots_population_full_resolution';
import {
  DotPopulationStreamConsumer,
  NodeInformationToDotPopulation,
} from '@/components/visual/geo_json/world_map_dots_population_resolver';
import { HistogramSectionTitle } from '@/components/visual/histogram/histogram_section_title/histogram_section_title';
import { WebSocketStatus } from '@/components/visual/web_socket/web_socket_status';
import { OverridePagePath, PageType } from '@/contexts/page_path_provider';
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

          {/* Recent Node Updates Data Table */}
          <Card className="nodes">
            <VotersParticipationStatsConsumer>
              <NodeSummaryStreamConsumer>
                <NodesSummaryDataTable />
              </NodeSummaryStreamConsumer>
            </VotersParticipationStatsConsumer>
          </Card>
        </NodeValidatorLayout>

        <Footer />
      </OverridePagePath>
    </ErrorStreamConsumer>
  </WebSocketResponseStreamConsumer>
);

export default NodesPage;
