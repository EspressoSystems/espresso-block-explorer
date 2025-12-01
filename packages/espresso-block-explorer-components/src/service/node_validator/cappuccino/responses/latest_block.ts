import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerBlockDetail,
  cappuccinoExplorerBlockDetailCodec,
} from '@/service/hotshot_query_service';
import CappuccinoNodeValidatorResponse from './node_validator_response';

export const kCappuccinoLatestBlockType = 'LatestBlock' as const;

/**
 * CappuccinoLatestBlock is a response from the Cappuccino node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export class CappuccinoLatestBlock extends CappuccinoNodeValidatorResponse {
  readonly latestBlock: CappuccinoExplorerBlockDetail;

  constructor(latestBlock: CappuccinoExplorerBlockDetail) {
    super();
    this.latestBlock = latestBlock;
  }

  toJSON() {
    return cappuccinoLatestBlockCodec.encode(this);
  }
}

class CappuccinoLatestBlockDecoder implements Converter<
  unknown,
  CappuccinoLatestBlock
> {
  convert(input: unknown): CappuccinoLatestBlock {
    assertRecordWithKeys(input, kCappuccinoLatestBlockType);

    return new CappuccinoLatestBlock(
      cappuccinoExplorerBlockDetailCodec.decode(
        input[kCappuccinoLatestBlockType],
      ),
    );
  }
}

class CappuccinoLatestBlockEncoder implements Converter<CappuccinoLatestBlock> {
  convert(input: CappuccinoLatestBlock) {
    return {
      [kCappuccinoLatestBlockType]: cappuccinoExplorerBlockDetailCodec.encode(
        input.latestBlock,
      ),
    };
  }
}

class CappuccinoLatestBlockCodec extends TypeCheckingCodec<
  CappuccinoLatestBlock,
  ReturnType<InstanceType<new () => CappuccinoLatestBlockEncoder>['convert']>
> {
  readonly encoder = new CappuccinoLatestBlockEncoder();
  readonly decoder = new CappuccinoLatestBlockDecoder();
}

export const cappuccinoLatestBlockCodec = new CappuccinoLatestBlockCodec();
