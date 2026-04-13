import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';

/**
 * CompanyIdentity represents the identity of a company.
 * It contains information that pertains to the company running this node.
 */
export default class CompanyIdentity {
  constructor(
    public readonly name: string,
    public readonly website: string,
  ) {}

  toJSON() {
    return companyIdentityCodec.encode(this);
  }
}

class CompanyIdentityEncoder implements Converter<CompanyIdentity> {
  convert(input: CompanyIdentity) {
    return {
      name: stringCodec.encode(input.name),
      website: stringCodec.encode(input.website),
    };
  }
}

class CompanyIdentityDecoder implements Converter<unknown, CompanyIdentity> {
  convert(input: unknown) {
    assertRecordWithKeys(input, 'name', 'website');

    return new CompanyIdentity(
      stringCodec.decode(input.name),
      stringCodec.decode(input.website),
    );
  }
}

class CompanyIdentityCodec extends TypeCheckingCodec<CompanyIdentity> {
  readonly encoder = new CompanyIdentityEncoder();
  readonly decoder = new CompanyIdentityDecoder();
}

export const companyIdentityCodec = new CompanyIdentityCodec();
