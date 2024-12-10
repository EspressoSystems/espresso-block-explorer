import { Channel, createChannelToSink } from '@/async/channel';
import { createSinkWithConverter } from '@/async/sink';
import { Sink } from '@/async/sink/sink';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import {
  GeneratedBlock,
  GeneratedNodeIdentityInformation,
  createGenesisBlock,
  generateAllBlocks,
  getStartingSeed,
  nodeList,
  streamNewBlocks,
} from '@/data_source/fake_data_source/generateFakeData';
import { createCircularBuffer } from '@/data_structures/circular_buffer';
import { Degrees, LatLng, Latitude, Longitude } from '@/models/geo';
import { WebSocketCommandClose } from '@/models/web_worker/web_socket/request/close';
import { WebSocketCommandConnect } from '@/models/web_worker/web_socket/request/connect';
import WebSocketCommand from '@/models/web_worker/web_socket/request/web_socket_command';
import { WebSocketStatusConnectionClosed } from '@/models/web_worker/web_socket/status/closed';
import { WebSocketStatusConnectionConnecting } from '@/models/web_worker/web_socket/status/connecting';
import { WebSocketStatusConnectionOpened } from '@/models/web_worker/web_socket/status/opened';
import WebSocketStatus from '@/models/web_worker/web_socket/status/web_socket_status';
import { WebSocketRequest } from '@/models/web_worker/web_socket/web_socket_request';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import { webSocketStatusToWebWorkerProxyResponseConverter } from '@/models/web_worker/web_worker_proxy_response_codec';
import {
  CappuccinoAPIBitVec,
  CappuccinoAPIBitVecHead,
  CappuccinoAPIBitVecOrder,
  CappuccinoExplorerBlockDetail,
  CappuccinoSummaryHistograms,
} from '@/service/hotshot_query_service';
import CappuccinoNodeIdentity from '../node_identity';
import CappuccinoLocationDetails from '../node_location_details';
import CappuccinoNodeValidatorRequest, {
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeVoters,
} from '../requests/node_validator_request';
import { NodeValidatorServiceRequest } from '../requests/node_validator_service_request';
import { CappuccinoBlocksSnapshot } from '../responses/blocks_snapshot';
import { CappuccinoHistogramSnapshot } from '../responses/histogram_snapshot';
import { CappuccinoLatestBlock } from '../responses/latest_block';
import { CappuccinoLatestVoters } from '../responses/latest_voters';
import { CappuccinoNodeIdentitySnapshot } from '../responses/node_identity_snapshot';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { nodeValidatorResponseToWebWorkerProxyResponseConverter } from '../responses/node_validator_service_response';
import { CappuccinoVotersSnapshot } from '../responses/voters_snapshot';
import { WebWorkerNodeValidatorAPI } from '../web_worker_proxy_api';

function createBlockDetailFromGeneratedBlock(
  block: GeneratedBlock,
): CappuccinoExplorerBlockDetail {
  return new CappuccinoExplorerBlockDetail(
    block.hash,
    block.height,
    block.time,
    block.numTransactions,
    block.proposer,
    block.proposer,
    block.size,
    block.fees,
  );
}

function convertGeneratedNodeIdentity(
  node: GeneratedNodeIdentityInformation,
): CappuccinoNodeIdentity {
  return new CappuccinoNodeIdentity(
    node.pubkey,
    node.name,
    null,
    node.company.name,
    new URL(node.company.website),
    new CappuccinoLocationDetails(
      new LatLng(
        new Latitude(new Degrees(node.location.coords[0])),
        new Longitude(new Degrees(node.location.coords[1])),
      ),
      node.location.country,
    ),
    node.operatingSystem,
    node.nodeType,
    node.networkType,
  );
}

export default class FakeDataCappuccinoNodeValidatorAPI
  implements WebWorkerNodeValidatorAPI
{
  readonly responseStream: Channel<WebWorkerProxyResponse>;
  readonly requestStream: Channel<WebWorkerProxyRequest>;

  readonly lifecycleResponseSink: Sink<WebSocketStatus>;
  readonly nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>;

  constructor(
    requestStream: Channel<WebWorkerProxyRequest>,
    responseStream: Channel<WebWorkerProxyResponse>,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;

    this.lifecycleResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      webSocketStatusToWebWorkerProxyResponseConverter,
    );
    this.nodeValidatorResponseSink = createSinkWithConverter(
      createChannelToSink(responseStream),
      nodeValidatorResponseToWebWorkerProxyResponseConverter,
    );
  }

  get stream(): AsyncIterable<WebWorkerProxyResponse> {
    return this.responseStream;
  }

  async send(request: WebWorkerProxyRequest): Promise<void> {
    await this.requestStream.publish(request);
  }

  private prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(
    getStartingSeed(),
  );
  private latestBlock: CappuccinoExplorerBlockDetail =
    createBlockDetailFromGeneratedBlock(createGenesisBlock());
  private latestBlocks =
    createCircularBuffer<CappuccinoExplorerBlockDetail>(50);
  private latestVoters = createCircularBuffer<CappuccinoAPIBitVec>(50);
  private histogramBlockTimeData = createCircularBuffer<number>(50);
  private histogramBlockSizeData = createCircularBuffer<number>(50);
  private histogramBlockTransactionData = createCircularBuffer<number>(50);

  private generateVotersFromBlockDetail(
    blockDetail: CappuccinoExplorerBlockDetail,
  ): CappuccinoAPIBitVec {
    const prng = new PseudoRandomNumberGenerator(blockDetail.time.valueOf());

    // We want 2/3 + 1 voters to have voted. But we can just settle on
    // a random number of voters for our fake data.
    const numberNodes = nodeList.length;
    const numberVoteBitVec = Math.ceil(numberNodes / 16);

    const votesVector = new Uint16Array(prng.fillBytes(numberVoteBitVec * 2));

    const nextVoters = new CappuccinoAPIBitVec(
      CappuccinoAPIBitVecOrder.lsb0,
      new CappuccinoAPIBitVecHead(16, 0),
      numberNodes,
      Array.from(votesVector),
    );

    return nextVoters;
  }

  private histogramBlockHeightData = createCircularBuffer<number>(50);

  private async updateBlockDetails(
    blockDetail: CappuccinoExplorerBlockDetail,
  ): Promise<void> {
    const previousBlock = this.latestBlock;
    const nextBlockTime =
      (blockDetail.time.valueOf() - previousBlock.time.valueOf()) / 1000;

    const nextVoters = this.generateVotersFromBlockDetail(blockDetail);

    this.latestBlock = blockDetail;
    this.latestBlocks.put(blockDetail);
    this.latestVoters.put(nextVoters);
    this.histogramBlockTimeData.put(nextBlockTime);
    this.histogramBlockSizeData.put(blockDetail.size);
    this.histogramBlockTransactionData.put(blockDetail.numTransactions);
    this.histogramBlockHeightData.put(blockDetail.height);

    // Let's relay the updates to the subscriptions
    if (!this.isConnected) {
      // No need to do anything as we're not "connected" at the moment.
      return;
    }

    // Publish the new block to the response stream.
    if (this.isSubscribedToLatestBlock) {
      await this.nodeValidatorResponseSink.send(
        new CappuccinoLatestBlock(blockDetail),
      );
    }

    // Publish thew new Voters to the response stream.
    if (this.isSubscribedToVoters) {
      this.nodeValidatorResponseSink.send(
        new CappuccinoLatestVoters(nextVoters),
      );
    }
  }

  async initializeState() {
    // Compute the current histogram for the network
    // Store the latest block

    for await (const block of generateAllBlocks(this.prng)) {
      this.updateBlockDetails(createBlockDetailFromGeneratedBlock(block));
    }

    await this.nodeValidatorResponseSink.send(
      new CappuccinoLatestBlock(this.latestBlock),
    );
    await this.nodeValidatorResponseSink.send(
      new CappuccinoHistogramSnapshot(
        new CappuccinoSummaryHistograms(
          Array.from(this.histogramBlockTimeData.immutableIterable()),
          Array.from(this.histogramBlockSizeData.immutableIterable()),
          Array.from(this.histogramBlockTransactionData.immutableIterable()),
          Array.from(this.histogramBlockHeightData.immutableIterable()),
        ),
      ),
    );
    this.nodeValidatorResponseSink.send(
      new CappuccinoNodeIdentitySnapshot(
        nodeList.map(convertGeneratedNodeIdentity),
      ),
    );
  }

  async startProcessing() {
    await this.initializeState();
    this.handleRequests();
    this.streamBlocks();
  }

  async handleRequests() {
    for await (const request of this.requestStream) {
      await this.handleRequest(request);
    }
  }

  async streamBlocks() {
    const startingBlock = this.latestBlock;
    for await (const block of streamNewBlocks(
      this.prng,
      startingBlock.time.valueOf(),
      startingBlock.height,
    )) {
      const blockDetail = createBlockDetailFromGeneratedBlock(block);
      this.updateBlockDetails(blockDetail);
    }
  }

  private async handleRequest(request: WebWorkerProxyRequest) {
    if (request instanceof WebSocketRequest) {
      try {
        await this.handleWebSocketCommand(request.command);
      } catch (err) {
        console.error('failed to handle life cycle request', request, err);
      }
      return;
    }

    if (request instanceof NodeValidatorServiceRequest) {
      try {
        await this.handleNodeValidatorRequest(request.request);
      } catch (err) {
        console.error('failed to handle node validator request', request, err);
      }
      return;
    }

    console.error('unrecognized request type', request);
  }

  private async handleWebSocketCommand(command: WebSocketCommand) {
    if (command instanceof WebSocketCommandConnect) {
      await this.handleConnect();
      return;
    }

    if (command instanceof WebSocketCommandClose) {
      await this.handleClose();
      return;
    }
  }

  private async handleNodeValidatorRequest(
    request: CappuccinoNodeValidatorRequest,
  ) {
    if (request instanceof SubscribeLatestBlock) {
      await this.handleSubscribeLatestBlock();
      return;
    }

    if (request instanceof SubscribeNodeIdentity) {
      await this.handleSubscribeNodeIdentity();
      return;
    }

    if (request instanceof SubscribeVoters) {
      await this.handleSubscribeVoters();
      return;
    }

    if (request instanceof RequestBlocksSnapshot) {
      await this.handleRequestBlocksSnapshot();
      return;
    }

    if (request instanceof RequestHistogramSnapshot) {
      await this.handleRequestHistogramSnapshot();
      return;
    }

    if (request instanceof RequestNodeIdentitySnapshot) {
      await this.handleRequestNodeIdentitySnapshot();
      return;
    }

    if (request instanceof RequestVotersSnapshot) {
      await this.handleRequestVotersSnapshot();
      return;
    }
  }

  private isConnected: boolean = false;
  private isSubscribedToLatestBlock: boolean = false;
  // private isSubscribedToNodeIdentity: boolean = false;
  private isSubscribedToVoters: boolean = false;
  private async handleConnect() {
    if (this.isConnected) {
      throw new Error('already connected to WebSocket');
    }

    this.isConnected = true;

    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionConnecting(),
    );
    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionOpened(),
    );
  }

  private async handleClose() {
    if (!this.isConnected) {
      throw new Error('not connected to WebSocket');
    }

    this.isConnected = false;
    this.isSubscribedToLatestBlock = false;
    this.isSubscribedToVoters = false;
    await this.lifecycleResponseSink.send(
      new WebSocketStatusConnectionClosed(),
    );
  }

  private async assertIsConnected() {
    if (this.isConnected) {
      return;
    }
    throw new Error('not connected to WebSocket');
  }

  private async handleSubscribeLatestBlock() {
    await this.assertIsConnected();
    this.isSubscribedToLatestBlock = true;
  }

  private async handleSubscribeNodeIdentity() {
    await this.assertIsConnected();
    // TODO: We don't currently have any nodes being created dynamically, so
    //       there isn't anything for us to subscribe to.  We **should**
    //       provide this in the future maybe?  How often do we expect to be
    //       encountering new nodes?
  }

  private async handleSubscribeVoters() {
    await this.assertIsConnected();
    this.isSubscribedToVoters = true;
  }

  private async handleRequestBlocksSnapshot() {
    await this.assertIsConnected();

    await this.nodeValidatorResponseSink.send(
      new CappuccinoBlocksSnapshot(
        Array.from(this.latestBlocks.immutableIterable()),
      ),
    );
  }

  private async handleRequestHistogramSnapshot() {
    await this.assertIsConnected();

    await this.nodeValidatorResponseSink.send(
      new CappuccinoHistogramSnapshot(
        new CappuccinoSummaryHistograms(
          Array.from(this.histogramBlockTimeData.immutableIterable()),
          Array.from(this.histogramBlockSizeData.immutableIterable()),
          Array.from(this.histogramBlockTransactionData.immutableIterable()),
          Array.from(this.histogramBlockHeightData.immutableIterable()),
        ),
      ),
    );
  }

  private async handleRequestNodeIdentitySnapshot() {
    await this.assertIsConnected();

    await this.nodeValidatorResponseSink.send(
      new CappuccinoNodeIdentitySnapshot(
        nodeList.map(convertGeneratedNodeIdentity),
      ),
    );
  }

  private async handleRequestVotersSnapshot() {
    await this.assertIsConnected();

    await this.nodeValidatorResponseSink.send(
      new CappuccinoVotersSnapshot(
        Array.from(this.latestVoters.immutableIterable()),
      ),
    );
  }
}
