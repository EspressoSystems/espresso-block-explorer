import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerBlockDetail,
  cappuccinoExplorerBlockDetailCodec,
} from '@/service/hotshot_query_service/cappuccino/explorer/block_detail';
import CappuccinoNodeValidatorResponse from './node_validator_response';

export const kCappuccinoLatestBlockSnapshotType =
  'LatestBlockSnapshot' as const;

/**
 * CappuccinoLatestBlockSnapshot is a response from the Cappuccino node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export class CappuccinoLatestBlockSnapshot extends CappuccinoNodeValidatorResponse {
  readonly latestBlock: CappuccinoExplorerBlockDetail;
  get type() {
    return kCappuccinoLatestBlockSnapshotType;
  }

  constructor(latestBlock: CappuccinoExplorerBlockDetail) {
    super();
    this.latestBlock = latestBlock;
  }

  toJSON() {
    return cappuccinoLatestBlockSnapshotCodec.encode(this);
  }
}

class CappuccinoLatestBlockSnapshotDecoder
  implements Converter<unknown, CappuccinoLatestBlockSnapshot>
{
  convert(input: unknown): CappuccinoLatestBlockSnapshot {
    assertRecordWithKeys(input, 'latestBlock', 'type');
    assertTypeCode(input, kCappuccinoLatestBlockSnapshotType);

    return new CappuccinoLatestBlockSnapshot(
      cappuccinoExplorerBlockDetailCodec.decode(input.latestBlock),
    );
  }
}

class CappuccinoLatestBlockSnapshotEncoder
  implements Converter<CappuccinoLatestBlockSnapshot>
{
  convert(input: CappuccinoLatestBlockSnapshot) {
    return {
      latestBlock: cappuccinoExplorerBlockDetailCodec.encode(input.latestBlock),
      type: kCappuccinoLatestBlockSnapshotType,
    };
  }
}

class CappuccinoLatestBlockSnapshotCodec extends TypeCheckingCodec<
  CappuccinoLatestBlockSnapshot,
  ReturnType<
    InstanceType<new () => CappuccinoLatestBlockSnapshotEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoLatestBlockSnapshotEncoder();
  readonly decoder = new CappuccinoLatestBlockSnapshotDecoder();
}

export const cappuccinoLatestBlockSnapshotCodec =
  new CappuccinoLatestBlockSnapshotCodec();
