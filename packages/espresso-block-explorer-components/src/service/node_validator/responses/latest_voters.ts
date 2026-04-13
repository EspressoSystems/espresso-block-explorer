import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { BitVec, bitVecCodec } from '@/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 */
export const kLatestVotersType = 'LatestVoters' as const;

/**
 * LatestVoters is a response from the node
 * validator that contains a snapshot of the voters in the network.
 */
export class LatestVoters extends NodeValidatorResponse {
  readonly latestVoter: BitVec;

  constructor(latestVoter: BitVec) {
    super();
    this.latestVoter = latestVoter;
  }

  toJSON() {
    return latestVotersCodec.encode(this);
  }
}

class LatestVotersDecoder implements Converter<unknown, LatestVoters> {
  convert(input: unknown): LatestVoters {
    assertRecordWithKeys(input, kLatestVotersType);

    return new LatestVoters(bitVecCodec.decode(input[kLatestVotersType]));
  }
}

class LatestVotersEncoder implements Converter<LatestVoters> {
  convert(input: LatestVoters) {
    return {
      [kLatestVotersType]: bitVecCodec.encode(input.latestVoter),
    };
  }
}

class LatestVotersCodec extends TypeCheckingCodec<
  LatestVoters,
  ReturnType<InstanceType<new () => LatestVotersEncoder>['convert']>
> {
  readonly encoder = new LatestVotersEncoder();
  readonly decoder = new LatestVotersDecoder();
}

export const latestVotersCodec = new LatestVotersCodec();
