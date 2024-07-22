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
  LatestBlockProducer,
  LatestBlockProducersStreamContext,
} from '@/components/page_sections/latest_block_producers/LatestBlockProducersLoader';
import {
  LatestBlock,
  LatestBlockSummaryStreamContext,
} from '@/components/page_sections/latest_block_summary/LatestBlockSummaryLoader';
import { NetworkTypesPieChartStreamContext } from '@/components/page_sections/network_types_pie_chart/NetworkTypesPieChartLoader';
import { NodeTypesPieChartStreamContext } from '@/components/page_sections/node_types_pie_chart/NodeTypesPieChartLoader';
import {
  NodeSummaryData,
  NodeSummaryStreamContext,
  NodeVoteParticipationStats,
  VoterParticipationStreamContext,
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
import {
  Close,
  Connect,
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeVoters,
} from '@/service/node_validator/cappuccino/requests/node_validator_request';
import { CappuccinoBlocksSnapshot } from '@/service/node_validator/cappuccino/responses/blocks_snapshot';
import { CappuccinoHistogramSnapshot } from '@/service/node_validator/cappuccino/responses/histogram_snapshot';
import { CappuccinoLatestBlock } from '@/service/node_validator/cappuccino/responses/latest_block';
import { CappuccinoLatestNodeIdentity } from '@/service/node_validator/cappuccino/responses/latest_node_identity';
import { CappuccinoLatestVoters } from '@/service/node_validator/cappuccino/responses/latest_voters';
import { CappuccinoNodeIdentitySnapshot } from '@/service/node_validator/cappuccino/responses/node_identity_snapshot';
import { CappuccinoVotersSnapshot } from '@/service/node_validator/cappuccino/responses/voters_snapshot';
import React from 'react';
import {
  compareArrayBuffer,
  firstWhereIterable,
  foldRIterator,
  mapIterable,
  zipWithIterable,
} from '../functional';
import { CappuccinoAPIBitVec, CappuccinoExplorerBlockDetail } from '../service';
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
    publicKey: node.publicKey,
    name: node.name,
    address: node.walletAddress,
    companyDetails: {
      name: node.company,
      website: null,
    },
    location: {
      coords: node.location?.coords
        ? [
            node.location.coords.lat.valueOf(),
            node.location.coords.lng.valueOf(),
          ]
        : null,
      country: node.location?.country ?? null,
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
  keyExtractor: (node: CappuccinoNodeIdentity) => null | string,
): PieChartEntry[] {
  const counts = new Map<string, number>();
  for (const node of nodes) {
    const key = keyExtractor(node);
    if (key === null) {
      continue;
    }
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
  return aggregateCountsForNodes(
    nodes,
    (node) => node.location?.country ?? null,
  );
}

function computeNetworkTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.networkType);
}

function computeNodeTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.nodeType);
}

function computeVoterParticipationStats(
  nodes: CappuccinoNodeIdentity[],
  bitVecs: Iterable<CappuccinoAPIBitVec>,
): NodeVoteParticipationStats[] {
  // Each BitVec should be the same number of entries as the nodes.
  const participantStats = Array.from(
    mapIterable(bitVecs, (bitVec) => Array.from(mapIterable(bitVec, Number))),
  );

  const results = nodes.map((_, index): NodeVoteParticipationStats => {
    // We don't care about the actual node, we just care about the stats
    const roundStats = mapIterable(participantStats, (round) => round[index]);
    const it = roundStats[Symbol.iterator]();

    const [totalVotes, voteParticipation] = foldRIterator(
      ([total, voteParticipation]: [number, number], value: number) => [
        total + 1,
        voteParticipation + value,
      ],
      [0, 0],
      it,
    );

    return { voteParticipation, totalVotes };
  });

  return results;
}

function computeLatestBuilders(
  blocks: Iterable<CappuccinoExplorerBlockDetail>,
): LatestBlockProducer[] {
  const it = blocks[Symbol.iterator]();
  const results = foldRIterator(
    (builderCounts, block) => {
      // Does our ArrayBuffer already exist in the map?
      // We cannot compare ArrayBuffers directly, which is sad, so we must look
      // the array within the keys of the map.
      // This makes this operation n^2, but only at the scale of
      // kTrailingHistorySamples in the worst case.

      // Find our existing key, or if we cannot find one, use the current
      // block's key
      const keys =
        firstWhereIterable(builderCounts.keys(), (key) => {
          // Compare the ArrayBuffers
          return compareArrayBuffer(key, block.proposerID) === 0;
        }) ?? block.proposerID;

      // Set the new count, incrementing the old count by 1.
      builderCounts.set(keys, (builderCounts.get(keys) ?? 0) + 1);

      return builderCounts;
    },
    new Map<ArrayBuffer, number>(),
    it,
  );

  // We want to sort the results by the number of blocks built.

  const sorted = Array.from(results.entries()).sort((a, b) => b[1] - a[1]);

  return Array.from(
    mapIterable(sorted, ([address, count]) => ({ proposer: address, count })),
  );
}

const kTrailingHistorySamples = 50;

async function bridgeStreamIntoIndividualStreams(
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  nodeValidatorService: CappuccinoNodeValidatorAPI,
) {
  let lastBlock: null | CappuccinoLatestBlock = null;
  const latestBlocks = createCircularBuffer<CappuccinoExplorerBlockDetail>(
    kTrailingHistorySamples,
  );
  const blockHeightHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples,
  );
  const blockTimeHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples,
  );
  const blockSizeHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples,
  );
  const blockThroughputHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples,
  );
  const votersBitVecs = createCircularBuffer<CappuccinoAPIBitVec>(
    kTrailingHistorySamples,
  );
  let nodes: CappuccinoNodeIdentity[] = [];

  for await (const event of nodeValidatorService.stream) {
    if (event instanceof CappuccinoLatestBlock) {
      const previousBlock = lastBlock;
      lastBlock = event;
      latestBlocks.put(event.latestBlock);
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

      streams.latestBlockProducers.publish(
        computeLatestBuilders(latestBlocks.immutableIterable()),
      );

      continue;
    }

    if (event instanceof CappuccinoBlocksSnapshot) {
      for (const block of event.blocks) {
        const previousBlock = lastBlock?.latestBlock ?? null;
        lastBlock = new CappuccinoLatestBlock(block);
        latestBlocks.put(block);
        blockHeightHistograms.put(block.height);
        blockSizeHistograms.put(block.size);

        const time =
          (block.time.valueOf() - (previousBlock?.time.valueOf() ?? 0)) / 1000;

        blockTimeHistograms.put(time);
        blockThroughputHistograms.put(block.size / Math.max(1, time));
      }

      await publishHistogramUpdates(
        streams,
        blockHeightHistograms,
        blockTimeHistograms,
        blockSizeHistograms,
        blockThroughputHistograms,
      );

      const latestBlock = lastBlock?.latestBlock ?? null;
      if (latestBlock !== null) {
        streams.latestBlockStream.publish({
          height: latestBlock.height,
          time: latestBlock.time,
          size: latestBlock.size,
          transactions: latestBlock.numTransactions,
          proposer: latestBlock.proposerID,
        });
      }

      streams.latestBlockProducers.publish(
        computeLatestBuilders(latestBlocks.immutableIterable()),
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

    if (event instanceof CappuccinoLatestNodeIdentity) {
      // Check to see if the incoming node already exists.
      const existingNodeIndex = nodes.findIndex(
        (node) =>
          node.publicKey.toString() === event.nodeIdentity.publicKey.toString(),
      );

      if (existingNodeIndex < 0) {
        // Node does **not exist** in the list, let's add it.
        nodes.push(event.nodeIdentity);
      } else {
        // Node **does exist** in the list, let's replace it.
        nodes[existingNodeIndex] = event.nodeIdentity;
      }

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

    if (event instanceof CappuccinoVotersSnapshot) {
      for (const voter of event.voters) {
        votersBitVecs.put(voter);
      }

      const voteStats = computeVoterParticipationStats(
        nodes,
        votersBitVecs.immutableIterable(),
      );

      await streams.voters.publish(voteStats);
    }

    if (event instanceof CappuccinoLatestVoters) {
      votersBitVecs.put(event.latestVoter);

      const voteStats = computeVoterParticipationStats(
        nodes,
        votersBitVecs.immutableIterable(),
      );

      await streams.voters.publish(voteStats);
    }
  }
}

async function startValidatorService(
  nodeValidatorService: CappuccinoNodeValidatorAPI,
) {
  // We need to "connect" to the service.
  await nodeValidatorService.send(new Connect());

  // Setup our subscriptions.
  await nodeValidatorService.send(new SubscribeLatestBlock());
  await nodeValidatorService.send(new SubscribeNodeIdentity());
  await nodeValidatorService.send(new SubscribeVoters());

  // Request the latest information
  await nodeValidatorService.send(new RequestNodeIdentitySnapshot());
  await nodeValidatorService.send(new RequestBlocksSnapshot());
  await nodeValidatorService.send(new RequestHistogramSnapshot());
  await nodeValidatorService.send(new RequestVotersSnapshot());
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

    // Voter Participation Data
    voters: createBufferedChannel<NodeVoteParticipationStats[]>(4),

    // Latest Builders
    latestBlockProducers: createBufferedChannel<LatestBlockProducer[]>(4),
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

  React.useEffect(() => {
    // Bridge these streams
    bridgeStreamIntoIndividualStreams(streams, nodeValidatorService);
    startValidatorService(nodeValidatorService);

    return () => {
      // Tear Down
      // Tell the service to Close the connection.
      nodeValidatorService.send(new Close());
    };
  });

  return (
    <LatestBlockSummaryStreamContext.Provider value={streams.latestBlockStream}>
      <LatestBlockProducersStreamContext.Provider
        value={streams.latestBlockProducers}
      >
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
                          <VoterParticipationStreamContext.Provider
                            value={streams.voters}
                          >
                            {props.children}
                          </VoterParticipationStreamContext.Provider>
                        </NodeIdentityInformationStreamContext.Provider>
                      </CountriesPieChartStreamContext.Provider>
                    </NodeTypesPieChartStreamContext.Provider>
                  </NetworkTypesPieChartStreamContext.Provider>
                </OperatingSystemPieChartStreamContext.Provider>
              </NodeSummaryStreamContext.Provider>
            </BlockThroughputHistogramStreamContext.Provider>
          </BlockSizeHistogramStreamContext.Provider>
        </BlockTimeHistogramStreamContext.Provider>
      </LatestBlockProducersStreamContext.Provider>
    </LatestBlockSummaryStreamContext.Provider>
  );
};
