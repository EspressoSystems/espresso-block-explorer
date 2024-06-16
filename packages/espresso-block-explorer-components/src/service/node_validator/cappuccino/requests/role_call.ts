import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
  assertTypeCode,
} from '@/convert/codec/convert';
import CappuccinoNodeValidatorRequest from './node_validator_request';

export const kCappuccinoNodeIdentityRoleCallType =
  'NodeIdentityRollCall' as const;

export class CappuccinoNodeIdentityRoleCall extends CappuccinoNodeValidatorRequest {
  get type() {
    return kCappuccinoNodeIdentityRoleCallType;
  }

  toJSON() {
    return cappuccinoNodeIdentityRoleCallCodec.encode(this);
  }
}

class CappuccinoNodeIdentityRoleCallDecoder
  implements Converter<unknown, CappuccinoNodeIdentityRoleCall>
{
  convert(input: unknown): CappuccinoNodeIdentityRoleCall {
    assertRecordWithKeys(input, 'type');
    assertTypeCode(input, kCappuccinoNodeIdentityRoleCallType);

    return new CappuccinoNodeIdentityRoleCall();
  }
}

class CappuccinoNodeIdentityRoleCallEncoder
  implements Converter<CappuccinoNodeIdentityRoleCall>
{
  convert() {
    return {
      type: kCappuccinoNodeIdentityRoleCallType,
    };
  }
}

class CappuccinoNodeIdentityRoleCallCodec extends TypeCheckingCodec<
  CappuccinoNodeIdentityRoleCall,
  ReturnType<
    InstanceType<new () => CappuccinoNodeIdentityRoleCallEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoNodeIdentityRoleCallEncoder();
  readonly decoder = new CappuccinoNodeIdentityRoleCallDecoder();
}

export const cappuccinoNodeIdentityRoleCallCodec =
  new CappuccinoNodeIdentityRoleCallCodec();
