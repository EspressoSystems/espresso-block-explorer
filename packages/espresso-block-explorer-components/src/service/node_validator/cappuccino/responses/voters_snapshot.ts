import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoAPIBitVec,
  cappuccinoAPIBitVecArrayCodec,
} from '@/service/hotshot_query_service';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoVotersSnapshotType is the type string for the
 * CappuccinoVotersSnapshot class.
 */
export const kCappuccinoVotersSnapshotType = 'VotersSnapshot' as const;

/**
 * CappuccinoVotersSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export class CappuccinoVotersSnapshot extends CappuccinoNodeValidatorResponse {
  readonly voters: CappuccinoAPIBitVec[];

  constructor(voters: CappuccinoAPIBitVec[]) {
    super();
    this.voters = voters;
  }

  toJSON() {
    return cappuccinoVotersSnapshotCodec.encode(this);
  }
}

class CappuccinoVotersSnapshotDecoder
  implements Converter<unknown, CappuccinoVotersSnapshot>
{
  convert(input: unknown): CappuccinoVotersSnapshot {
    assertRecordWithKeys(input, kCappuccinoVotersSnapshotType);

    const list = input[kCappuccinoVotersSnapshotType];
    return new CappuccinoVotersSnapshot(
      cappuccinoAPIBitVecArrayCodec.decode(list),
    );
  }
}

class CappuccinoVotersSnapshotEncoder
  implements Converter<CappuccinoVotersSnapshot>
{
  convert(input: CappuccinoVotersSnapshot) {
    return {
      [kCappuccinoVotersSnapshotType]: cappuccinoAPIBitVecArrayCodec.encode(
        input.voters,
      ),
    };
  }
}

class CappuccinoVotersSnapshotCodec extends TypeCheckingCodec<
  CappuccinoVotersSnapshot,
  ReturnType<InstanceType<new () => CappuccinoVotersSnapshotEncoder>['convert']>
> {
  readonly encoder = new CappuccinoVotersSnapshotEncoder();
  readonly decoder = new CappuccinoVotersSnapshotDecoder();
}

export const cappuccinoVotersSnapshotCodec =
  new CappuccinoVotersSnapshotCodec();
