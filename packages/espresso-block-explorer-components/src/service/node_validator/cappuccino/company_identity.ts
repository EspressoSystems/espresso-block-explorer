import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';

/**
 * CappuccinoCompanyIdentity represents the identity of a Cappuccino company.
 * It contains information that pertains to the company running this node.
 */
export default class CappuccinoCompanyIdentity {
  readonly name: string;
  readonly website: string;

  constructor(name: string, website: string) {
    this.name = name;
    this.website = website;
  }

  toJSON() {
    return cappuccinoCompanyIdentityCodec.encode(this);
  }
}

class CappuccinoCompanyIdentityEncoder implements Converter<CappuccinoCompanyIdentity> {
  convert(input: CappuccinoCompanyIdentity) {
    return {
      name: stringCodec.encode(input.name),
      website: stringCodec.encode(input.website),
    };
  }
}

class CappuccinoCompanyIdentityDecoder implements Converter<
  unknown,
  CappuccinoCompanyIdentity
> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'name', 'website');

    return new CappuccinoCompanyIdentity(
      stringCodec.decode(input.name),
      stringCodec.decode(input.website),
    );
  }
}

class CappuccinoCompanyIdentityCodec extends TypeCheckingCodec<CappuccinoCompanyIdentity> {
  readonly encoder = new CappuccinoCompanyIdentityEncoder();
  readonly decoder = new CappuccinoCompanyIdentityDecoder();
}

export const cappuccinoCompanyIdentityCodec =
  new CappuccinoCompanyIdentityCodec();
