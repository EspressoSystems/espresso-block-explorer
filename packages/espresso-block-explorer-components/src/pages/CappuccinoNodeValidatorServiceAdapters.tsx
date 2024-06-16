import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import {
  BlockSizeHistogramData,
  BlockSizeHistogramStreamContext,
} from '@/components/page_sections/block_size_histogram/BlockSizeHistogramDataLoader';
import {
  BlockThroughputHistogramData,
  BlockThroughputHistogramStreamContext,
} from '@/components/page_sections/block_throughput_histogram/BlockThroughputHistogramDataLoader';
import {
  BlockTimeHistogramData,
  BlockTimeHistogramStreamContext,
} from '@/components/page_sections/block_time_histogram/BlockTimeHistogramDataLoader';
import { CountriesPieChartStreamContext } from '@/components/page_sections/countries_pie_chart/CountriesPieChartLoader';
import {
  LatestBlock,
  LatestBlockSummaryStreamContext,
} from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { NetworkTypesPieChartStreamContext } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChartLoader';
import { NodeTypesPieChartStreamContext } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChartLoader';
import {
  NodeSummaryData,
  NodeSummaryStreamContext,
} from '@/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import { OperatingSystemPieChartStreamContext } from '@/components/page_sections/operating_system_pie_chart/OperatingSystemPieChartLoader';
import { NodeIdentityInformationStreamContext } from '@/components/visual/geo_json/WorldMapDotsPopulationResolver';
import { PieChartEntry } from '@/components/visual/pie_chart/PieChart';
import {
  CircularBuffer,
  createCircularBuffer,
} from '@/data_structures/circular_buffer/CircularBuffer';
import CappuccinoNodeIdentity from '@/service/node_validator/cappuccino/node_identity';
import { CappuccinoNodeValidatorAPI } from '@/service/node_validator/cappuccino/node_validator_api';
import { CappuccinoHistogramSnapshot } from '@/service/node_validator/cappuccino/responses/histogram_snapshot';
import { CappuccinoLatestBlockSnapshot } from '@/service/node_validator/cappuccino/responses/latest_block';
import { CappuccinoNodeIdentitySnapshot } from '@/service/node_validator/cappuccino/responses/node_identity_snapshot';
import React from 'react';
import { zipWithIterable } from '../functional';
import { CappuccinoNodeValidatorServiceAPIContext } from './CappuccinoNodeValidatorServiceAPIContext';

async function publishHistogramUpdates(
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  blockHeightHistograms: CircularBuffer<number>,
  blockTimeHistograms: CircularBuffer<number>,
  blockSizeHistograms: CircularBuffer<number>,
  blockThroughputHistograms: CircularBuffer<number>,
) {
  await Promise.all([
    streams.blockSizeHistogramStream.publish({
      blocks: Array.from(blockHeightHistograms.immutableIterable()),
      blockSize: Array.from(blockSizeHistograms.immutableIterable()),
    }),
    streams.blockTimeHistogramStream.publish({
      blocks: Array.from(blockHeightHistograms.immutableIterable()),
      blockTime: Array.from(blockTimeHistograms.immutableIterable()),
    }),
    streams.blockThroughputHistogramStream.publish({
      blocks: Array.from(blockHeightHistograms.immutableIterable()),
      blockThroughput: Array.from(
        blockThroughputHistograms.immutableIterable(),
      ),
    }),
  ]);
}

function convertCappuccinoNodeIdentity(
  node: CappuccinoNodeIdentity,
): NodeSummaryData {
  return {
    name: node.name,
    address: node.address,
    companyDetails: {
      name: node.company.name,
      website: node.company.website,
    },
    location: {
      coords: [
        Number(node.location.coords.lat),
        Number(node.location.coords.lng),
      ],
      country: node.location.country,
    },
  };
}

function sortPieChartLabelPercentagePairs(
  a: PieChartEntry,
  b: PieChartEntry,
): number {
  return a.value - b.value;
}

function aggregateCountsForNodes(
  nodes: CappuccinoNodeIdentity[],
  keyExtractor: (node: CappuccinoNodeIdentity) => string,
): PieChartEntry[] {
  const counts = new Map<string, number>();
  for (const node of nodes) {
    const key = keyExtractor(node);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([key, count]) => ({
      label: key,
      value: count,
    }))
    .sort(sortPieChartLabelPercentagePairs);
}

function computeOperatingSystemsPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.operatingSystem);
}

function computeCountriesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.location.country);
}

function computeNetworkTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.networkType);
}

function computeNodeTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.nodeType);
}

async function bridgeStreamIntoIndividualStreams(
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  nodeValidatorService: CappuccinoNodeValidatorAPI,
) {
  let lastBlock: null | CappuccinoLatestBlockSnapshot = null;
  const blockHeightHistograms = createCircularBuffer<number>(50);
  const blockTimeHistograms = createCircularBuffer<number>(50);
  const blockSizeHistograms = createCircularBuffer<number>(50);
  const blockThroughputHistograms = createCircularBuffer<number>(50);
  let nodes: CappuccinoNodeIdentity[] = [];

  for await (const event of nodeValidatorService.stream) {
    if (event instanceof CappuccinoLatestBlockSnapshot) {
      const previousBlock = lastBlock;
      lastBlock = event;
      streams.latestBlockStream.publish({
        height: event.latestBlock.height,
        time: event.latestBlock.time,
        size: event.latestBlock.size,
        transactions: event.latestBlock.numTransactions,
        proposer: event.latestBlock.proposerID,
      });

      blockHeightHistograms.put(event.latestBlock.height);
      blockSizeHistograms.put(event.latestBlock.size);
      const time =
        (event.latestBlock.time.valueOf() -
          (previousBlock?.latestBlock.time.valueOf() ?? 0)) /
        1000;
      blockTimeHistograms.put(time);
      blockThroughputHistograms.put(event.latestBlock.size / Math.max(1, time));

      await publishHistogramUpdates(
        streams,
        blockHeightHistograms,
        blockTimeHistograms,
        blockSizeHistograms,
        blockThroughputHistograms,
      );

      continue;
    }

    if (event instanceof CappuccinoHistogramSnapshot) {
      for (const height of event.histograms.blockHeights) {
        blockHeightHistograms.put(height!);
      }

      for (const time of event.histograms.blockTime) {
        blockTimeHistograms.put(time!);
      }

      for (const size of event.histograms.blockSize) {
        blockSizeHistograms.put(size!);
      }

      for (const throughput of zipWithIterable(
        blockTimeHistograms.immutableIterable(),
        blockSizeHistograms.immutableIterable(),
        (time, size) => (size ?? 0) / Math.max(1, time ?? 1),
      )) {
        blockThroughputHistograms.put(throughput!);
      }

      await publishHistogramUpdates(
        streams,
        blockHeightHistograms,
        blockTimeHistograms,
        blockSizeHistograms,
        blockThroughputHistograms,
      );

      continue;
    }

    if (event instanceof CappuccinoNodeIdentitySnapshot) {
      nodes = event.nodes;

      const operatingSystems = computeOperatingSystemsPieChartData(nodes);
      const countries = computeCountriesPieChartData(nodes);
      const networkTypes = computeNetworkTypesPieChartData(nodes);
      const nodeTypes = computeNodeTypesPieChartData(nodes);
      const convertedNodes = nodes.map(convertCappuccinoNodeIdentity);

      await Promise.all([
        streams.nodesSummary.publish(convertedNodes),
        streams.nodeCoordinates.publish(convertedNodes),
        streams.pieChartCountries.publish(countries),
        streams.pieChartNetworkTypes.publish(networkTypes),
        streams.pieChartNodeTypes.publish(nodeTypes),
        streams.pieChartOperatingSystems.publish(operatingSystems),
      ]);
      continue;
    }
  }
}

function createNodeValidatorSplitStreams() {
  return {
    latestBlockStream: createBufferedChannel<LatestBlock>(4),
    blockTimeHistogramStream: createBufferedChannel<BlockTimeHistogramData>(4),
    blockSizeHistogramStream: createBufferedChannel<BlockSizeHistogramData>(4),
    blockThroughputHistogramStream:
      createBufferedChannel<BlockThroughputHistogramData>(4),
    nodesSummary: createBufferedChannel<NodeSummaryData[]>(4),
    nodeCoordinates: createBufferedChannel<NodeSummaryData[]>(4),

    // Pie Chart Data
    pieChartCountries: createBufferedChannel<PieChartEntry[]>(4),
    pieChartNetworkTypes: createBufferedChannel<PieChartEntry[]>(4),
    pieChartNodeTypes: createBufferedChannel<PieChartEntry[]>(4),
    pieChartOperatingSystems: createBufferedChannel<PieChartEntry[]>(4),
  };
}

interface ProvideCappuccinoNodeValidatorStreamsProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideCappuccinoNodeValidatorStreams: React.FC<
  ProvideCappuccinoNodeValidatorStreamsProps
> = (props) => {
  const nodeValidatorService = React.useContext(
    CappuccinoNodeValidatorServiceAPIContext,
  );
  const streams = createNodeValidatorSplitStreams();

  // Bridge these streams
  bridgeStreamIntoIndividualStreams(streams, nodeValidatorService);

  return (
    <LatestBlockSummaryStreamContext.Provider value={streams.latestBlockStream}>
      <BlockTimeHistogramStreamContext.Provider
        value={streams.blockTimeHistogramStream}
      >
        <BlockSizeHistogramStreamContext.Provider
          value={streams.blockSizeHistogramStream}
        >
          <BlockThroughputHistogramStreamContext.Provider
            value={streams.blockThroughputHistogramStream}
          >
            <NodeSummaryStreamContext.Provider value={streams.nodesSummary}>
              <OperatingSystemPieChartStreamContext.Provider
                value={streams.pieChartOperatingSystems}
              >
                <NetworkTypesPieChartStreamContext.Provider
                  value={streams.pieChartNetworkTypes}
                >
                  <NodeTypesPieChartStreamContext.Provider
                    value={streams.pieChartNodeTypes}
                  >
                    <CountriesPieChartStreamContext.Provider
                      value={streams.pieChartCountries}
                    >
                      <NodeIdentityInformationStreamContext.Provider
                        value={streams.nodeCoordinates}
                      >
                        {props.children}
                      </NodeIdentityInformationStreamContext.Provider>
                    </CountriesPieChartStreamContext.Provider>
                  </NodeTypesPieChartStreamContext.Provider>
                </NetworkTypesPieChartStreamContext.Provider>
              </OperatingSystemPieChartStreamContext.Provider>
            </NodeSummaryStreamContext.Provider>
          </BlockThroughputHistogramStreamContext.Provider>
        </BlockSizeHistogramStreamContext.Provider>
      </BlockTimeHistogramStreamContext.Provider>
    </LatestBlockSummaryStreamContext.Provider>
  );
};
