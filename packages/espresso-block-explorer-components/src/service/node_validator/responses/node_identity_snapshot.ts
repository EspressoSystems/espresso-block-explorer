import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import CappuccinoNodeIdentity, {
  listCappuccinoNodeIdentityCodec,
} from '../node_identity';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoNodeIdentitySnapshotType is the type string for the
 * CappuccinoNodeIdentitySnapshot class.
 */
export const kCappuccinoNodeIdentitySnapshotType =
  'NodeIdentitySnapshot' as const;

/**
 * CappuccinoNodeIdentitySnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the identities of all current known
 * nodes in the network.
 */
export class CappuccinoNodeIdentitySnapshot extends CappuccinoNodeValidatorResponse {
  readonly nodes: CappuccinoNodeIdentity[];

  constructor(nodes: CappuccinoNodeIdentity[]) {
    super();
    this.nodes = nodes;
  }

  toJSON() {
    return cappuccinoNodeIdentitySnapshotCodec.encode(this);
  }
}

class CappuccinoNodeIdentitySnapshotDecoder implements Converter<
  unknown,
  CappuccinoNodeIdentitySnapshot
> {
  convert(input: unknown): CappuccinoNodeIdentitySnapshot {
    assertRecordWithKeys(input, kCappuccinoNodeIdentitySnapshotType);

    const list = input[kCappuccinoNodeIdentitySnapshotType];
    return new CappuccinoNodeIdentitySnapshot(
      listCappuccinoNodeIdentityCodec.decode(list),
    );
  }
}

class CappuccinoNodeIdentitySnapshotEncoder implements Converter<CappuccinoNodeIdentitySnapshot> {
  convert(input: CappuccinoNodeIdentitySnapshot) {
    return {
      [kCappuccinoNodeIdentitySnapshotType]:
        listCappuccinoNodeIdentityCodec.encode(input.nodes),
    };
  }
}

class CappuccinoNodeIdentitySnapshotCodec extends TypeCheckingCodec<
  CappuccinoNodeIdentitySnapshot,
  ReturnType<
    InstanceType<new () => CappuccinoNodeIdentitySnapshotEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoNodeIdentitySnapshotEncoder();
  readonly decoder = new CappuccinoNodeIdentitySnapshotDecoder();
}

export const cappuccinoNodeIdentitySnapshotCodec =
  new CappuccinoNodeIdentitySnapshotCodec();
