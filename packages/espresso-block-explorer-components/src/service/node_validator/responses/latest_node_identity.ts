import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { default as NodeIdentity, nodeIdentityCodec } from '../node_identity';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kLatestNodeIdentityType is the type string for the
 * LatestNodeIdentity class.
 */
export const kLatestNodeIdentityType = 'LatestNodeIdentity' as const;

/**
 * LatestNodeIdentity is a response from the node
 * validator that contains a real-time update for one of the Node
 * Identities in the network.
 */
export class LatestNodeIdentity extends NodeValidatorResponse {
  constructor(public readonly nodeIdentity: NodeIdentity) {
    super();
  }

  toJSON() {
    return latestNodeIdentityCodec.encode(this);
  }
}

class LatestNodeIdentityDecoder implements Converter<
  unknown,
  LatestNodeIdentity
> {
  convert(input: unknown): LatestNodeIdentity {
    assertRecordWithKeys(input, kLatestNodeIdentityType);

    return new LatestNodeIdentity(
      nodeIdentityCodec.decode(input[kLatestNodeIdentityType]),
    );
  }
}

class LatestNodeIdentityEncoder implements Converter<LatestNodeIdentity> {
  convert(input: LatestNodeIdentity) {
    return {
      [kLatestNodeIdentityType]: nodeIdentityCodec.encode(input.nodeIdentity),
    };
  }
}

class LatestNodeIdentityCodec extends TypeCheckingCodec<
  LatestNodeIdentity,
  ReturnType<InstanceType<new () => LatestNodeIdentityEncoder>['convert']>
> {
  readonly encoder = new LatestNodeIdentityEncoder();
  readonly decoder = new LatestNodeIdentityDecoder();
}

export const latestNodeIdentityCodec = new LatestNodeIdentityCodec();
