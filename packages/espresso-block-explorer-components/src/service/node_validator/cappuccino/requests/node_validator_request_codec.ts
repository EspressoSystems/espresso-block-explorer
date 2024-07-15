import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import CappuccinoNodeValidatorRequest from './node_validator_request';
import {
  CappuccinoNodeIdentityRoleCall,
  cappuccinoNodeIdentityRoleCallCodec,
  kCappuccinoNodeIdentityRoleCallType,
} from './role_call';

class CappuccinoNodeValidatorRequestDecoder
  implements Converter<unknown, CappuccinoNodeValidatorRequest>
{
  convert(input: unknown): CappuccinoNodeValidatorRequest {
    assertRecordWithKeys(input, 'type');

    switch (input.type) {
      case kCappuccinoNodeIdentityRoleCallType:
        return cappuccinoNodeIdentityRoleCallCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoNodeValidatorRequestEncoder
  implements Converter<CappuccinoNodeValidatorRequest>
{
  convert(input: CappuccinoNodeValidatorRequest) {
    if (input instanceof CappuccinoNodeIdentityRoleCall) {
      return cappuccinoNodeIdentityRoleCallCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class CappuccinoNodeValidatorRequestCodec extends TypeCheckingCodec<
  CappuccinoNodeValidatorRequest,
  ReturnType<
    InstanceType<new () => CappuccinoNodeValidatorRequestEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoNodeValidatorRequestEncoder();
  readonly decoder = new CappuccinoNodeValidatorRequestDecoder();
}

export const cappuccinoNodeValidatorRequestCodec =
  new CappuccinoNodeValidatorRequestCodec();
