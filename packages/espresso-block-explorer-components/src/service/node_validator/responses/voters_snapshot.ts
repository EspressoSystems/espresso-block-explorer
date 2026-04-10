import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { BitVec, bitVecArrayCodec } from '@/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kVotersSnapshotType is the type string for the
 * VotersSnapshot class.
 */
export const kVotersSnapshotType = 'VotersSnapshot' as const;

/**
 * VotersSnapshot is a response from the node
 * validator that contains a snapshot of the voters in the network.
 */
export class VotersSnapshot extends NodeValidatorResponse {
  constructor(public readonly voters: BitVec[]) {
    super();
  }

  toJSON() {
    return votersSnapshotCodec.encode(this);
  }
}

class VotersSnapshotDecoder implements Converter<unknown, VotersSnapshot> {
  convert(input: unknown): VotersSnapshot {
    assertRecordWithKeys(input, kVotersSnapshotType);

    const list = input[kVotersSnapshotType];
    return new VotersSnapshot(bitVecArrayCodec.decode(list));
  }
}

class VotersSnapshotEncoder implements Converter<VotersSnapshot> {
  convert(input: VotersSnapshot) {
    return {
      [kVotersSnapshotType]: bitVecArrayCodec.encode(input.voters),
    };
  }
}

class VotersSnapshotCodec extends TypeCheckingCodec<
  VotersSnapshot,
  ReturnType<InstanceType<new () => VotersSnapshotEncoder>['convert']>
> {
  readonly encoder = new VotersSnapshotEncoder();
  readonly decoder = new VotersSnapshotDecoder();
}

export const votersSnapshotCodec = new VotersSnapshotCodec();
