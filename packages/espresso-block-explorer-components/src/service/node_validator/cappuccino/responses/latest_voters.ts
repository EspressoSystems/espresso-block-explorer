import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoAPIBitVec,
  cappuccinoAPIBitVecCodec,
} from '@/service/hotshot_query_service';
import CappuccinoNodeValidatorResponse from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */

/**
 */
export const kCappuccinoLatestVotersType = 'LatestVoters' as const;

/**
 * CappuccinoLatestVoters is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export class CappuccinoLatestVoters extends CappuccinoNodeValidatorResponse {
  readonly latestVoter: CappuccinoAPIBitVec;

  constructor(latestVoter: CappuccinoAPIBitVec) {
    super();
    this.latestVoter = latestVoter;
  }

  toJSON() {
    return cappuccinoLatestVotersCodec.encode(this);
  }
}

class CappuccinoLatestVotersDecoder
  implements Converter<unknown, CappuccinoLatestVoters>
{
  convert(input: unknown): CappuccinoLatestVoters {
    assertRecordWithKeys(input, kCappuccinoLatestVotersType);

    return new CappuccinoLatestVoters(
      cappuccinoAPIBitVecCodec.decode(input[kCappuccinoLatestVotersType]),
    );
  }
}

class CappuccinoLatestVotersEncoder
  implements Converter<CappuccinoLatestVoters>
{
  convert(input: CappuccinoLatestVoters) {
    return {
      [kCappuccinoLatestVotersType]: cappuccinoAPIBitVecCodec.encode(
        input.latestVoter,
      ),
    };
  }
}

class CappuccinoLatestVotersCodec extends TypeCheckingCodec<
  CappuccinoLatestVoters,
  ReturnType<InstanceType<new () => CappuccinoLatestVotersEncoder>['convert']>
> {
  readonly encoder = new CappuccinoLatestVotersEncoder();
  readonly decoder = new CappuccinoLatestVotersDecoder();
}

export const cappuccinoLatestVotersCodec = new CappuccinoLatestVotersCodec();
