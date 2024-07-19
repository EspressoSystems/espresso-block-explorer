import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import CappuccinoNodeIdentity, {
  cappuccinoNodeIdentityCodec,
} from '../node_identity';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 * kCappuccinoLatestNodeIdentityType is the type string for the
 * CappuccinoLatestNodeIdentity class.
 */
export const kCappuccinoLatestNodeIdentityType = 'LatestNodeIdentity' as const;

/**
 * CappuccinoLatestNodeIdentity is a response from the Cappuccino node
 * validator that contains a real-time update for one of the Node
 * Identities in the network.
 */
export class CappuccinoLatestNodeIdentity extends CappuccinoNodeValidatorResponse {
  readonly nodeIdentity: CappuccinoNodeIdentity;

  constructor(nodeIdentity: CappuccinoNodeIdentity) {
    super();
    this.nodeIdentity = nodeIdentity;
  }

  toJSON() {
    return cappuccinoLatestNodeIdentityCodec.encode(this);
  }
}

class CappuccinoLatestNodeIdentityDecoder
  implements Converter<unknown, CappuccinoLatestNodeIdentity>
{
  convert(input: unknown): CappuccinoLatestNodeIdentity {
    assertRecordWithKeys(input, kCappuccinoLatestNodeIdentityType);

    return new CappuccinoLatestNodeIdentity(
      cappuccinoNodeIdentityCodec.decode(
        input[kCappuccinoLatestNodeIdentityType],
      ),
    );
  }
}

class CappuccinoLatestNodeIdentityEncoder
  implements Converter<CappuccinoLatestNodeIdentity>
{
  convert(input: CappuccinoLatestNodeIdentity) {
    return {
      [kCappuccinoLatestNodeIdentityType]: cappuccinoNodeIdentityCodec.encode(
        input.nodeIdentity,
      ),
    };
  }
}

class CappuccinoLatestNodeIdentityCodec extends TypeCheckingCodec<
  CappuccinoLatestNodeIdentity,
  ReturnType<
    InstanceType<new () => CappuccinoLatestNodeIdentityEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoLatestNodeIdentityEncoder();
  readonly decoder = new CappuccinoLatestNodeIdentityDecoder();
}

export const cappuccinoLatestNodeIdentityCodec =
  new CappuccinoLatestNodeIdentityCodec();
