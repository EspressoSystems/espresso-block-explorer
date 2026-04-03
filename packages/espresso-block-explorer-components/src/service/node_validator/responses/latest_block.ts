import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerBlockDetail,
  explorerBlockDetailCodec,
} from '@/service/hotshot_query_service';
import NodeValidatorResponse from './node_validator_response';

export const kLatestBlockType = 'LatestBlock' as const;

/**
 * LatestBlock is a response from the node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export class LatestBlock extends NodeValidatorResponse {
  readonly latestBlock: ExplorerBlockDetail;

  constructor(latestBlock: ExplorerBlockDetail) {
    super();
    this.latestBlock = latestBlock;
  }

  toJSON() {
    return latestBlockCodec.encode(this);
  }
}

class LatestBlockDecoder implements Converter<unknown, LatestBlock> {
  convert(input: unknown): LatestBlock {
    assertRecordWithKeys(input, kLatestBlockType);

    return new LatestBlock(
      explorerBlockDetailCodec.decode(input[kLatestBlockType]),
    );
  }
}

class LatestBlockEncoder implements Converter<LatestBlock> {
  convert(input: LatestBlock) {
    return {
      [kLatestBlockType]: explorerBlockDetailCodec.encode(input.latestBlock),
    };
  }
}

class LatestBlockCodec extends TypeCheckingCodec<
  LatestBlock,
  ReturnType<InstanceType<new () => LatestBlockEncoder>['convert']>
> {
  readonly encoder = new LatestBlockEncoder();
  readonly decoder = new LatestBlockDecoder();
}

export const latestBlockCodec = new LatestBlockCodec();
