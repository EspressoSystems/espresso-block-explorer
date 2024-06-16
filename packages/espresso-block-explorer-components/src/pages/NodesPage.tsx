import { addClassToClassName } from '@/components/higher_order';
import Card, { CardNoPadding } from '@/components/layout/card/Card';
import { CountriesPieChart } from '@/components/page_sections/countries_pie_chart/CountriesPieChart';
import { CountriesPieChartStreamConsumer } from '@/components/page_sections/countries_pie_chart/CountriesPieChartLoader';
import Footer from '@/components/page_sections/footer/Footer';
import Header from '@/components/page_sections/header/Header';
import { LatestBlockSummaryStreamConsumer } from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { NetworkTypesPieChart } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChart';
import { NetworkTypesPieChartStreamConsumer } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChartLoader';
import { NodeTypesPieChart } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChart';
import { NodeTypesPieChartStreamConsumer } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChartLoader';
import { NodesSummaryDataTable } from '@/components/page_sections/nodes_summary_data_table/NodesSummaryDataTable';
import { NodeSummaryStreamConsumer } from '@/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import { OperatingSystemPieChart } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChart';
import { OperatingSystemPieChartStreamConsumer } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChartLoader';
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
import { OverridePagePath, PageType } from '@/contexts/PagePathProvider';
import React from 'react';
import {
  BlockSizeHistogram,
  BlockSizeHistogramStreamConsumer,
  BlockThroughputHistogram,
  BlockThroughputHistogramStreamConsumer,
  BlockTimeHistogram,
  BlockTimeHistogramStreamConsumer,
  LatestBlockSummaryAsyncHandler,
} from '../components';
import './node_validator.css';

interface NodesPageProps {
  className?: string;
}

/**
 * NodesPage is a component that renders the Nodes page.
 */
const NodesPage: React.FC<NodesPageProps> = (props) => (
  <OverridePagePath page={PageType.nodes}>
    <Header />

    {/*
      We're going to have a continually updating Data source.  So we want that
      data source to transform these continual updates into snapshot updates
    */}

    <div
      {...props}
      className={addClassToClassName(
        props.className,
        'node-validator-grid edge-margin',
      )}
    >
      {/* Latest Block */}
      <LatestBlockSummaryStreamConsumer>
        <LatestBlockSummaryAsyncHandler className="latest-block" />
      </LatestBlockSummaryStreamConsumer>

      {/* Latest Block Producers */}

      {/* Block Time Histogram */}
      <CardNoPadding className="block-time-histogram">
        <BlockTimeHistogramStreamConsumer>
          <BlockTimeHistogram />
        </BlockTimeHistogramStreamConsumer>
      </CardNoPadding>

      {/* Block Size Histogram */}
      <CardNoPadding className="block-size-histogram">
        <BlockSizeHistogramStreamConsumer>
          <BlockSizeHistogram />
        </BlockSizeHistogramStreamConsumer>
      </CardNoPadding>

      {/* Throughput Histogram */}
      <CardNoPadding className="throughput-histogram">
        <BlockThroughputHistogramStreamConsumer>
          <BlockThroughputHistogram />
        </BlockThroughputHistogramStreamConsumer>
      </CardNoPadding>

      {/* CDN Status */}
      <Card className="cdn">
        <HistogramSectionTitle>
          <div>
            <div>
              <Text text="CDN Status" />
            </div>
            <div>
              <Text text="Online" />
            </div>
          </div>
          <div></div>
        </HistogramSectionTitle>
      </Card>

      {/* Network Map */}
      <Card className="network-map">
        <HistogramSectionTitle>
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
      </Card>

      {/* Nodes Histogram (Not needed currently) */}

      {/* Node Countries Pie Chart */}
      <Card className="countries">
        <CountriesPieChartStreamConsumer>
          <CountriesPieChart />
        </CountriesPieChartStreamConsumer>
      </Card>

      {/* Network Types Pie Chart */}
      <Card className="network-types">
        <NetworkTypesPieChartStreamConsumer>
          <NetworkTypesPieChart />
        </NetworkTypesPieChartStreamConsumer>
      </Card>

      {/* Node Types Pie Chart */}
      <Card className="node-types">
        <NodeTypesPieChartStreamConsumer>
          <NodeTypesPieChart />
        </NodeTypesPieChartStreamConsumer>
      </Card>

      {/* Operating Systems Pie Chart */}
      <Card className="operating-systems">
        <OperatingSystemPieChartStreamConsumer>
          <OperatingSystemPieChart />
        </OperatingSystemPieChartStreamConsumer>
      </Card>

      {/* Recent Node Updates Data Table */}
      <CardNoPadding className="nodes">
        <NodeSummaryStreamConsumer>
          <NodesSummaryDataTable />
        </NodeSummaryStreamConsumer>
      </CardNoPadding>
    </div>

    <Footer />
  </OverridePagePath>
);

export default NodesPage;
