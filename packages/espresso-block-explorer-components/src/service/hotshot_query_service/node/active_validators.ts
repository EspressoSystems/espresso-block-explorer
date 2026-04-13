import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import {
  MapObjectCodec,
  MapObjectDecoder,
  MapObjectEncoder,
} from '@/convert/codec/map';
import { stringCodec } from '@/convert/codec/string';
import { ValidatorEntry, validatorEntryCodec } from './validator_entry';

export class ActiveValidators {
  constructor(public readonly validators: Map<`0x${string}`, ValidatorEntry>) {
    Object.freeze(this);
  }

  toJSON() {
    return activeValidatorsCodec.encode(this);
  }
}

const validatorsCodec = new MapObjectCodec(
  new MapObjectDecoder(
    stringCodec as TypeCheckingCodec<`0x${string}`, string>,
    validatorEntryCodec,
  ),
  new MapObjectEncoder(
    stringCodec as TypeCheckingCodec<`0x${string}`, string>,
    validatorEntryCodec,
  ),
);

class ActiveValidatorsDecoder implements Converter<unknown, ActiveValidators> {
  convert(input: unknown): ActiveValidators {
    return new ActiveValidators(validatorsCodec.decode(input));
  }
}

class ActiveValidatorsEncoder implements Converter<ActiveValidators> {
  convert(input: ActiveValidators) {
    return validatorsCodec.encode(input.validators);
  }
}

class ActiveValidatorsCodec extends TypeCheckingCodec<
  ActiveValidators,
  ReturnType<InstanceType<new () => ActiveValidatorsEncoder>['convert']>
> {
  readonly encoder = new ActiveValidatorsEncoder();
  readonly decoder = new ActiveValidatorsDecoder();
}

export const activeValidatorsCodec = new ActiveValidatorsCodec();
