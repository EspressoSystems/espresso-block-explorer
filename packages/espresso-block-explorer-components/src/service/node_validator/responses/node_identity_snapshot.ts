import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  default as NodeIdentity,
  listNodeIdentityCodec,
} from '../node_identity';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kNodeIdentitySnapshotType is the type string for the
 * NodeIdentitySnapshot class.
 */
export const kNodeIdentitySnapshotType = 'NodeIdentitySnapshot' as const;

/**
 * NodeIdentitySnapshot is a response from the node
 * validator that contains a snapshot of the identities of all current known
 * nodes in the network.
 */
export class NodeIdentitySnapshot extends NodeValidatorResponse {
  constructor(public readonly nodes: NodeIdentity[]) {
    super();
  }

  toJSON() {
    return nodeIdentitySnapshotCodec.encode(this);
  }
}

class NodeIdentitySnapshotDecoder implements Converter<
  unknown,
  NodeIdentitySnapshot
> {
  convert(input: unknown): NodeIdentitySnapshot {
    assertRecordWithKeys(input, kNodeIdentitySnapshotType);

    const list = input[kNodeIdentitySnapshotType];
    return new NodeIdentitySnapshot(listNodeIdentityCodec.decode(list));
  }
}

class NodeIdentitySnapshotEncoder implements Converter<NodeIdentitySnapshot> {
  convert(input: NodeIdentitySnapshot) {
    return {
      [kNodeIdentitySnapshotType]: listNodeIdentityCodec.encode(input.nodes),
    };
  }
}

class NodeIdentitySnapshotCodec extends TypeCheckingCodec<
  NodeIdentitySnapshot,
  ReturnType<InstanceType<new () => NodeIdentitySnapshotEncoder>['convert']>
> {
  readonly encoder = new NodeIdentitySnapshotEncoder();
  readonly decoder = new NodeIdentitySnapshotDecoder();
}

export const nodeIdentitySnapshotCodec = new NodeIdentitySnapshotCodec();
