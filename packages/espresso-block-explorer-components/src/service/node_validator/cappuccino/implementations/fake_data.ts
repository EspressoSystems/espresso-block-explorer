import { Channel } from '@/async/channel';
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
import {
  CappuccinoExplorerBlockDetail,
  CappuccinoSummaryHistograms,
} from '@/service/hotshot_query_service';
import CappuccinoCompanyIdentity from '../company_identity';
import CappuccinoNodeIdentity from '../node_identity';
import CappuccinoLocationDetails from '../node_location_details';
import { CappuccinoNodeValidatorAPI } from '../node_validator_api';
import CappuccinoNodeValidatorRequest from '../requests/node_validator_request';
import { CappuccinoNodeIdentityRoleCall } from '../requests/role_call';
import { CappuccinoHistogramSnapshot } from '../responses/histogram_snapshot';
import { CappuccinoLatestBlockSnapshot } from '../responses/latest_block';
import { CappuccinoNodeIdentitySnapshot } from '../responses/node_identity_snapshot';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';

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
    node.address,
    new CappuccinoCompanyIdentity(node.company.name, node.company.website),
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
  implements CappuccinoNodeValidatorAPI
{
  readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;
  readonly requestStream: Channel<CappuccinoNodeValidatorRequest>;

  constructor(
    requestStream: Channel<CappuccinoNodeValidatorRequest>,
    responseStream: Channel<CappuccinoNodeValidatorResponse>,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
  }

  get stream(): AsyncIterable<CappuccinoNodeValidatorResponse> {
    return this.responseStream;
  }

  async send(request: CappuccinoNodeValidatorRequest): Promise<void> {
    await this.requestStream.publish(request);
  }

  private prng: PseudoRandomNumberGenerator = new PseudoRandomNumberGenerator(
    getStartingSeed(),
  );
  private latestBlock: CappuccinoExplorerBlockDetail =
    createBlockDetailFromGeneratedBlock(createGenesisBlock());
  private histogramBlockTimeData = createCircularBuffer<number>(64);
  private histogramBlockSizeData = createCircularBuffer<number>(64);
  private histogramBlockTransactionData = createCircularBuffer<number>(64);
  private histogramBlockHeightData = createCircularBuffer<number>(64);

  private updateBlockDetails(blockDetail: CappuccinoExplorerBlockDetail): void {
    const previousBlock = this.latestBlock;
    this.latestBlock = blockDetail;
    this.histogramBlockTimeData.put(
      (blockDetail.time.valueOf() - previousBlock.time.valueOf()) / 1000,
    );
    this.histogramBlockSizeData.put(blockDetail.size);
    this.histogramBlockTransactionData.put(blockDetail.numTransactions);
    this.histogramBlockHeightData.put(blockDetail.height);
  }

  async initializeState() {
    // Compute the current histogram for the network
    // Store the latest block

    for await (const block of generateAllBlocks(this.prng)) {
      this.updateBlockDetails(createBlockDetailFromGeneratedBlock(block));
    }

    this.responseStream.publish(
      new CappuccinoLatestBlockSnapshot(this.latestBlock),
    );
    this.responseStream.publish(
      new CappuccinoHistogramSnapshot(
        new CappuccinoSummaryHistograms(
          Array.from(this.histogramBlockTimeData.immutableIterable()),
          Array.from(this.histogramBlockSizeData.immutableIterable()),
          Array.from(this.histogramBlockTransactionData.immutableIterable()),
          Array.from(this.histogramBlockHeightData.immutableIterable()),
        ),
      ),
    );
    this.responseStream.publish(
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
      this.handleRequest(request);
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

      // Publish the new block to the response stream.
      this.responseStream.publish(
        new CappuccinoLatestBlockSnapshot(blockDetail),
      );
    }
  }

  private handleRequest(request: CappuccinoNodeValidatorRequest) {
    if (request instanceof CappuccinoNodeIdentityRoleCall) {
      this.handleRoleCall();
      return;
    }
  }

  private handleRoleCall() {
    this.responseStream.publish(
      new CappuccinoNodeIdentitySnapshot(
        nodeList.map(convertGeneratedNodeIdentity),
      ),
    );
  }
}
