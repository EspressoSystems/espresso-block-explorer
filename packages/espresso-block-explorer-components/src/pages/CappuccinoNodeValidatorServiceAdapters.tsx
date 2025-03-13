import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import { createSinkWithConverter } from '@/async/sink/converted_sink';
import { Sink } from '@/async/sink/sink';
import { sleep } from '@/async/sleep';
import { ErrorStreamContext } from '@/components/contexts/ErrorProvider';
import { WebSocketResponseStreamContext } from '@/components/contexts/WebSocketResponseProvider';
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
import { preferNullOverEmptyString } from '@/convert/codec/string';
import {
  Completer,
  createCompleter,
} from '@/data_structures/async/completer/Completer';
import {
  CircularBuffer,
  createCircularBuffer,
} from '@/data_structures/circular_buffer/CircularBuffer';
import { ErrorResponse } from '@/models/web_worker/error_response';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import { WebSocketResponse } from '@/models/web_worker/web_socket/web_socket_response';
import { webSocketCommandToWebWorkerProxyRequestConverter } from '@/models/web_worker/web_worker_proxy_request_codec';
import CappuccinoNodeIdentity from '@/service/node_validator/cappuccino/node_identity';
import CappuccinoNodeValidatorRequest, {
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeVoters,
} from '@/service/node_validator/cappuccino/requests/node_validator_request';
import { nodeValidatorRequestToWebWorkerProxyRequestConverter } from '@/service/node_validator/cappuccino/requests/node_validator_service_request';
import { CappuccinoBlocksSnapshot } from '@/service/node_validator/cappuccino/responses/blocks_snapshot';
import { CappuccinoHistogramSnapshot } from '@/service/node_validator/cappuccino/responses/histogram_snapshot';
import { CappuccinoLatestBlock } from '@/service/node_validator/cappuccino/responses/latest_block';
import { CappuccinoLatestNodeIdentity } from '@/service/node_validator/cappuccino/responses/latest_node_identity';
import { CappuccinoLatestVoters } from '@/service/node_validator/cappuccino/responses/latest_voters';
import { CappuccinoNodeIdentitySnapshot } from '@/service/node_validator/cappuccino/responses/node_identity_snapshot';
import CappuccinoNodeValidatorResponse from '@/service/node_validator/cappuccino/responses/node_validator_response';
import { NodeValidatorServiceResponse } from '@/service/node_validator/cappuccino/responses/node_validator_service_response';
import { CappuccinoVotersSnapshot } from '@/service/node_validator/cappuccino/responses/voters_snapshot';
import { WebWorkerNodeValidatorAPI } from '@/service/node_validator/cappuccino/web_worker_proxy_api';
import React from 'react';
import {
  compareArrayBuffer,
  firstWhereIterable,
  foldRIterator,
  mapAsyncIterable,
  mapIterable,
  zipWithIterable,
} from '../functional';
import { CappuccinoAPIBitVec, CappuccinoExplorerBlockDetail } from '../service';
import { CappuccinoNodeValidatorServiceAPIContext } from './CappuccinoNodeValidatorServiceAPIContext';

/**
 * publishHistogramUpdates is a helper function that will publish the updates
 * to the various histogram streams so that the consumers can update their
 * populated graphs.
 */
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
      blockSize: Array.from(blockSizeHistograms.immutableIterable()),
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

/**
 * convertCappuccinoNodeIdentity converts a CappuccinoNodeIdentity into a
 * NodeSummaryData object that can be used to populate the Node Summary Table.
 */
function convertCappuccinoNodeIdentity(
  node: CappuccinoNodeIdentity,
): NodeSummaryData {
  return {
    publicKey: node.publicKey,
    name: preferNullOverEmptyString(node.name),
    companyDetails: {
      name: preferNullOverEmptyString(node.company),
      website: node.companyWebsite?.toString() ?? null,
    },
    location: {
      coords: node.location?.coords
        ? [
            node.location.coords.lat.valueOf(),
            node.location.coords.lng.valueOf(),
          ]
        : null,
      country: preferNullOverEmptyString(node.location?.country ?? null),
    },
  };
}

/**
 * sortPieChartLabelPercentagePairs is a helper function that will sort the
 * PieChartEntry objects by their value.
 */
function sortPieChartLabelPercentagePairs(
  a: PieChartEntry,
  b: PieChartEntry,
): number {
  return a.value - b.value;
}

/**
 * aggregateCountsForNodes is a helper function that will aggregate the counts
 * of the number of nodes based on teh unique values returned from the value
 * returned from teh keyExtractor function.
 */
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

/**
 * computeOperatingSystemsPieChartData is a helper function that will compute
 * the operating system pie chart data based on the nodes provided.
 */
function computeOperatingSystemsPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.operatingSystem);
}

/**
 * computeCountriesPieChartData is a helper function that will compute the
 * countries pie chart data based on the nodes provided.
 */
function computeCountriesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(
    nodes,
    (node) => node.location?.country ?? null,
  );
}

/**
 * computeNetworkTypesPieChartData is a helper function that will compute the
 * network types pie chart data based on the nodes provided.
 */
function computeNetworkTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.networkType);
}

/**
 * computeNodeTypesPieChartData is a helper function that will compute the
 * node types pie chart data based on the nodes provided.
 */
function computeNodeTypesPieChartData(nodes: CappuccinoNodeIdentity[]) {
  return aggregateCountsForNodes(nodes, (node) => node.nodeType);
}

/**
 * computeVoterParticipationStats is a helper function that will compute the
 * voter participation stats based on the nodes and the bit vectors provided.
 * This will return an array of NodeVoteParticipationStats objects that
 * represent the vote participation stats for each node.
 */
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

/**
 * computeLatestBuilders is a helper function that will compute the latest
 * builders based on the blocks provided.  This will return an array of
 * LatestBlockProducer objects that represent the latest block producers.
 */
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
      const keys = mapIterable(block.proposerID, (key) => {
        // ArrayBuffers cannot be directly compared with equality, so we must
        // compare the underlying sequencer to see if they are equal.  If they
        // are then we want to use the key that's already stored.

        return (
          firstWhereIterable(builderCounts.keys(), (existingKey) => {
            return compareArrayBuffer(existingKey, key) === 0;
          }) ?? key
        );
      });

      // Set the new count, incrementing the old count by 1.
      for (const key of keys) {
        builderCounts.set(key, (builderCounts.get(key) ?? 0) + 1);
      }

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

/**
 * kTrailingHistorySamples is the number of samples that we want to keep in
 * our history for the Node Validator Page.
 *
 * If we track too many, then the the histograms will have bars that are too
 * narrow to effectively read and utilize.
 */
const kTrailingHistorySamples = 50;

/**
 * createBridgeState creates a tracked state object for processing and
 * maintaining the state of history that we'd like to maintain for the
 * Node Validator Page.
 *
 * This represents the specific state that we are tracking, and displaying
 * to the end-user.
 *
 * The individual states themselves will be updated with other functions
 * based on incoming data updates from the node validator service.
 */
function createBridgeState() {
  const latestBlocks = createCircularBuffer<CappuccinoExplorerBlockDetail>(
    kTrailingHistorySamples + 1,
  );
  const blockHeightHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples + 1,
  );
  const blockTimeHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples + 1,
  );
  const blockSizeHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples + 1,
  );
  const blockThroughputHistograms = createCircularBuffer<number>(
    kTrailingHistorySamples + 1,
  );
  const votersBitVecs = createCircularBuffer<CappuccinoAPIBitVec>(
    kTrailingHistorySamples + 1,
  );
  const nodes: CappuccinoNodeIdentity[] = [];

  return {
    lastBlock: null as null | CappuccinoLatestBlock,
    latestBlocks,
    blockHeightHistograms,
    blockTimeHistograms,
    blockSizeHistograms,
    blockThroughputHistograms,
    votersBitVecs,
    nodes,
  };
}

/**
 * bridgeLatestBlock is a helper function that will bridge the latest block
 * event into the various streams that we have setup for the Node Validator
 * Page.
 */
async function bridgeLatestBlock(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoLatestBlock,
) {
  const previousBlock = state.lastBlock;
  state.lastBlock = event;
  state.latestBlocks.put(event.latestBlock);
  streams.latestBlockStream.publish({
    height: event.latestBlock.height,
    time: event.latestBlock.time,
    size: event.latestBlock.size,
    transactions: event.latestBlock.numTransactions,
    proposer: event.latestBlock.proposerID,
  });

  state.blockHeightHistograms.put(event.latestBlock.height);
  state.blockSizeHistograms.put(event.latestBlock.size);
  const time =
    (event.latestBlock.time.valueOf() -
      (previousBlock?.latestBlock.time.valueOf() ?? 0)) /
    1000;
  state.blockTimeHistograms.put(time);
  state.blockThroughputHistograms.put(
    event.latestBlock.size / Math.max(1, time),
  );

  await publishHistogramUpdates(
    streams,
    state.blockHeightHistograms,
    state.blockTimeHistograms,
    state.blockSizeHistograms,
    state.blockThroughputHistograms,
  );

  streams.latestBlockProducers.publish(
    computeLatestBuilders(state.latestBlocks.immutableIterable()),
  );
}

/**
 * bridgeBlocksSnapshot is a helper function that will bridge the block
 * snapshot event into the various streams that we have setup for the Node
 * Validator Page.
 */
async function bridgeBlocksSnapshot(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoBlocksSnapshot,
) {
  for (const block of event.blocks) {
    const previousBlock = state.lastBlock?.latestBlock ?? null;
    state.lastBlock = new CappuccinoLatestBlock(block);
    state.latestBlocks.put(block);
    state.blockHeightHistograms.put(block.height);
    state.blockSizeHistograms.put(block.size);

    const time =
      (block.time.valueOf() - (previousBlock?.time.valueOf() ?? 0)) / 1000;

    state.blockTimeHistograms.put(time);
    state.blockThroughputHistograms.put(block.size / Math.max(1, time));
  }

  await publishHistogramUpdates(
    streams,
    state.blockHeightHistograms,
    state.blockTimeHistograms,
    state.blockSizeHistograms,
    state.blockThroughputHistograms,
  );

  const latestBlock = state.lastBlock?.latestBlock ?? null;
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
    computeLatestBuilders(state.latestBlocks.immutableIterable()),
  );
}

/**
 * bridgeHistogramSnapshot is a helper function that will bridge the histogram
 * snapshot event into the various streams that we have setup for the Node
 * Validator Page.
 */
async function bridgeHistogramSnapshot(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoHistogramSnapshot,
) {
  for (const height of event.histograms.blockHeights) {
    state.blockHeightHistograms.put(height!);
  }

  for (const time of event.histograms.blockTime) {
    state.blockTimeHistograms.put(time!);
  }

  for (const size of event.histograms.blockSize) {
    state.blockSizeHistograms.put(size!);
  }

  for (const throughput of zipWithIterable(
    state.blockTimeHistograms.immutableIterable(),
    state.blockSizeHistograms.immutableIterable(),
    (time, size) => (size ?? 0) / Math.max(1, time ?? 1),
  )) {
    state.blockThroughputHistograms.put(throughput!);
  }

  await publishHistogramUpdates(
    streams,
    state.blockHeightHistograms,
    state.blockTimeHistograms,
    state.blockSizeHistograms,
    state.blockThroughputHistograms,
  );
}

/**
 * bridgeNodeIdentitySnapshot is a helper function that will bridge the node
 * identity snapshot event into the various streams that we have setup for the
 * Node Validator Page.
 */
async function bridgeNodeIdentitySnapshot(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoNodeIdentitySnapshot,
) {
  state.nodes = event.nodes;

  const operatingSystems = computeOperatingSystemsPieChartData(state.nodes);
  const countries = computeCountriesPieChartData(state.nodes);
  const networkTypes = computeNetworkTypesPieChartData(state.nodes);
  const nodeTypes = computeNodeTypesPieChartData(state.nodes);
  const convertedNodes = state.nodes.map(convertCappuccinoNodeIdentity);

  await Promise.all([
    streams.nodesSummary.publish(convertedNodes),
    streams.nodeCoordinates.publish(convertedNodes),
    streams.pieChartCountries.publish(countries),
    streams.pieChartNetworkTypes.publish(networkTypes),
    streams.pieChartNodeTypes.publish(nodeTypes),
    streams.pieChartOperatingSystems.publish(operatingSystems),
  ]);
}

/**
 * bridgeLatestNodeIdentity is a helper function that will bridge the latest
 * node identity event into the various streams that we have setup for the
 * Node Validator Page.
 */
async function bridgeLatestNodeIdentity(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoLatestNodeIdentity,
) {
  // Check to see if the incoming node already exists.
  const existingNodeIndex = state.nodes.findIndex(
    (node) =>
      node.publicKey.toString() === event.nodeIdentity.publicKey.toString(),
  );

  if (existingNodeIndex < 0) {
    // Node does **not exist** in the list, let's add it.
    state.nodes.push(event.nodeIdentity);
  } else {
    // Node **does exist** in the list, let's replace it.
    state.nodes[existingNodeIndex] = event.nodeIdentity;
  }

  const operatingSystems = computeOperatingSystemsPieChartData(state.nodes);
  const countries = computeCountriesPieChartData(state.nodes);
  const networkTypes = computeNetworkTypesPieChartData(state.nodes);
  const nodeTypes = computeNodeTypesPieChartData(state.nodes);
  const convertedNodes = state.nodes.map(convertCappuccinoNodeIdentity);

  await Promise.all([
    streams.nodesSummary.publish(convertedNodes),
    streams.nodeCoordinates.publish(convertedNodes),
    streams.pieChartCountries.publish(countries),
    streams.pieChartNetworkTypes.publish(networkTypes),
    streams.pieChartNodeTypes.publish(nodeTypes),
    streams.pieChartOperatingSystems.publish(operatingSystems),
  ]);
}

/**
 * bridgeVotersSnapshot is a helper function that will bridge the voters
 * snapshot event into the various streams that we have setup for the Node
 * Validator Page.
 */
async function bridgeVotersSnapshot(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoVotersSnapshot,
) {
  for (const voter of event.voters) {
    state.votersBitVecs.put(voter);
  }

  const voteStats = computeVoterParticipationStats(
    state.nodes,
    state.votersBitVecs.immutableIterable(),
  );

  await streams.voters.publish(voteStats);
}

/**
 * bridgeLatestVoters is a helper function that will bridge the latest voters
 * event into the various streams that we have setup for the Node Validator
 * Page.
 */
async function bridgeLatestVoters(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoLatestVoters,
) {
  state.votersBitVecs.put(event.latestVoter);

  const voteStats = computeVoterParticipationStats(
    state.nodes,
    state.votersBitVecs.immutableIterable(),
  );

  await streams.voters.publish(voteStats);
}

/**
 * bridgeNodeValidatorResponse is a helper function that will bridge the
 * various node validator responses into the various streams that we have
 * setup for the Node Validator Page.
 */
async function bridgeNodeValidatorResponse(
  state: ReturnType<typeof createBridgeState>,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  event: CappuccinoNodeValidatorResponse,
) {
  if (event instanceof CappuccinoLatestBlock) {
    return bridgeLatestBlock(state, streams, event);
  }

  if (event instanceof CappuccinoBlocksSnapshot) {
    return bridgeBlocksSnapshot(state, streams, event);
  }

  if (event instanceof CappuccinoHistogramSnapshot) {
    return bridgeHistogramSnapshot(state, streams, event);
  }

  if (event instanceof CappuccinoNodeIdentitySnapshot) {
    return bridgeNodeIdentitySnapshot(state, streams, event);
  }

  if (event instanceof CappuccinoLatestNodeIdentity) {
    return bridgeLatestNodeIdentity(state, streams, event);
  }

  if (event instanceof CappuccinoVotersSnapshot) {
    return bridgeVotersSnapshot(state, streams, event);
  }

  if (event instanceof CappuccinoLatestVoters) {
    return bridgeLatestVoters(state, streams, event);
  }
}

/**
 * handleWebSocketEvents is a helper function that will handle the various
 * WebSocket events that are emitted from the WebSocketResponse stream.
 *
 * This will handle the connection opened and closed events, and will attempt
 * to reconnect to the WebSocket if the connection is closed.
 */
async function handleWebSocketEvents(
  event: WebSocketResponse,
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  webSocketCommandSink: Sink<WebSocketCommand>,
  nodeValidatorRequestSink: Sink<CappuccinoNodeValidatorRequest>,
) {
  const status = event.status;
  if (status instanceof WebSocketStatusConnectionOpened) {
    streams.reconnectAttempt = 0;
    streams.errors.publish(null);

    // Setup our subscriptions.
    await nodeValidatorRequestSink.send(new SubscribeLatestBlock());
    await nodeValidatorRequestSink.send(new SubscribeNodeIdentity());
    await nodeValidatorRequestSink.send(new SubscribeVoters());

    // Request the latest information
    await nodeValidatorRequestSink.send(new RequestNodeIdentitySnapshot());
    await nodeValidatorRequestSink.send(new RequestBlocksSnapshot());
    await nodeValidatorRequestSink.send(new RequestHistogramSnapshot());
    await nodeValidatorRequestSink.send(new RequestVotersSnapshot());
    return;
  }

  if (!(status instanceof WebSocketStatusConnectionClosed)) {
    // We don't care about non-closed events.
    return;
  }

  if (!streams.mounted) {
    // The component has been unmounted, we do not need to reconnect.
    return;
  }

  // Alright, we want to try to reconnect.  We want to perform exponential
  // backoff as well, so we don't overwhelm the server.

  streams.reconnectAttempt += 1;

  const reconnectDelay =
    Math.min(4 ** streams.reconnectAttempt, 4000) * (Math.random() + 1);
  console.info(
    'disconnected from inscriptions web socket, attempting to reconnect',
    'attempting reconnect, attempt',
    streams.reconnectAttempt,
    'sleeping for',
    reconnectDelay,
  );

  await sleep(reconnectDelay);

  // Try to reconnect
  webSocketCommandSink.send(new WebSocketCommandConnect());
}

const kCancelStream = 1;

/**
 * bridgeStreamIntoIndividualStreams is a helper function that will bridge the
 * incoming stream of events from the Node Validator Service into the various
 * streams that we have setup for the Node Validator Page.
 */
async function bridgeStreamIntoIndividualStreams(
  streams: ReturnType<typeof createNodeValidatorSplitStreams>,
  cancelCompleter: Completer<typeof kCancelStream>,
  nodeValidatorService: WebWorkerNodeValidatorAPI,
  webSocketCommandSink: Sink<WebSocketCommand>,
  nodeValidatorRequestSink: Sink<CappuccinoNodeValidatorRequest>,
) {
  const state = createBridgeState();
  const it = nodeValidatorService.stream[Symbol.asyncIterator]();

  // We will be racing each iteration of the stream with the cancelCompleter
  // promise. We don't want to lose an event from the stream if we end up
  // receiving the cancel signal, so we initialize it outside of the loop,
  // so that we can refer to the next event when we drain the stream until
  // we close.
  let next = it.next();

  for (
    let signal = await Promise.race([cancelCompleter.promise, next]);
    signal !== kCancelStream && !signal.done;
    next = it.next(),
      signal = await Promise.race([cancelCompleter.promise, next])
  ) {
    // We now have an event.
    const event = signal.value;

    if (event instanceof NodeValidatorServiceResponse) {
      await bridgeNodeValidatorResponse(state, streams, event.response);
      await streams.errors.publish(null);
      continue;
    }

    if (event instanceof WebSocketResponse) {
      await streams.lifecycle.publish(event);
      handleWebSocketEvents(
        event,
        streams,
        webSocketCommandSink,
        nodeValidatorRequestSink,
      );
      continue;
    }

    if (event instanceof ErrorResponse) {
      await streams.errors.publish(event);
      continue;
    }
  }

  // Drain the stream until we receive the Closed Signal
  for (let signal = await next; !signal.done; signal = await it.next()) {
    const event = signal.value;

    if (!(event instanceof WebSocketResponse)) {
      // Ignore all non WebSocketResponses
      continue;
    }

    if (event.status instanceof WebSocketStatusConnectionClosed) {
      // Break out when we receive the closed signal.
      break;
    }
  }
}

/**
 * startValidatorService is a simple function that will start the validator
 * service by sending a connect command to the WebSocketCommand sink.
 */
async function startValidatorService(
  webSocketCommandSink: Sink<WebSocketCommand>,
) {
  // We need to "connect" to the service.
  await webSocketCommandSink.send(new WebSocketCommandConnect());
}

/**
 * createNodeValidatorSplitStreams is a helper function that will create the
 * various streams that we have setup for the Node Validator Page.
 *
 * These streams are useful as they get consumed from for the various
 * components separately.
 */
function createNodeValidatorSplitStreams() {
  return {
    latestBlockStream: createBufferedChannel<LatestBlock>(4),
    blockTimeHistogramStream: createBufferedChannel<
      BlockTimeHistogramData & BlockSizeHistogramData
    >(4),
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

    // Errors Stream
    errors: createBufferedChannel<null | ErrorResponse>(4),
    // LifeCycle Event Stream
    lifecycle: createBufferedChannel<WebSocketResponse>(4),

    reconnectAttempt: 0,
    mounted: true,
  };
}

interface ProvideCappuccinoNodeValidatorStreamsProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideCappuccinoNodeValidatorStream is a React Context Provider that will
 * setup the node validator state, and provide React Contexts to distribute
 * the underlying node validator data to the components on the Node Validator
 * Page.
 */
export const ProvideCappuccinoNodeValidatorStreams: React.FC<
  ProvideCappuccinoNodeValidatorStreamsProps
> = (props) => {
  const nodeValidatorService = React.useContext(
    CappuccinoNodeValidatorServiceAPIContext,
  );
  const streams = createNodeValidatorSplitStreams();

  React.useEffect(() => {
    const cancelCompleter = createCompleter<typeof kCancelStream>();
    // Bridge these streams

    const nodeValidatorRequestSink = createSinkWithConverter(
      nodeValidatorService,
      nodeValidatorRequestToWebWorkerProxyRequestConverter,
    );
    const lifeCycleRequestSink = createSinkWithConverter(
      nodeValidatorService,
      webSocketCommandToWebWorkerProxyRequestConverter,
    );
    bridgeStreamIntoIndividualStreams(
      streams,
      cancelCompleter,
      nodeValidatorService,
      lifeCycleRequestSink,
      nodeValidatorRequestSink,
    );
    startValidatorService(lifeCycleRequestSink);

    return () => {
      // Tear Down
      // Tell the service to Close the connection.
      lifeCycleRequestSink.send(new WebSocketCommandClose());
      streams.mounted = false;
      cancelCompleter.complete(kCancelStream);
    };
  }, [streams, nodeValidatorService]);

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
                            <WebSocketResponseStreamContext.Provider
                              value={streams.lifecycle}
                            >
                              <ErrorStreamContext.Provider
                                value={mapAsyncIterable(
                                  streams.errors,
                                  async (response) => response?.error ?? null,
                                )}
                              >
                                {props.children}
                              </ErrorStreamContext.Provider>
                            </WebSocketResponseStreamContext.Provider>
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
