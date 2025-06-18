import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  nullableStringCodec,
  nullableURLCodec,
  preferNullOverEmptyString,
} from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import CappuccinoLocationDetails, {
  nullableCappuccinoLocationDetailsCodec,
} from './node_location_details';

/**
 * CappuccinoNodeIdentity represents the identity of a node in the
 * Cappuccino network. It only contains information that is expected to
 * be mostly static.  Any statistics or tracking of the node should reference
 * this node via its public key
 */
export default class CappuccinoNodeIdentity {
  readonly publicKey: TaggedBase64;
  readonly name: null | string;
  readonly publicURL: null | URL;
  readonly company: null | string;
  readonly companyWebsite: null | URL;
  readonly location: null | CappuccinoLocationDetails;
  readonly operatingSystem: null | string;
  readonly nodeType: null | string;
  readonly networkType: null | string;

  constructor(
    publicKey: TaggedBase64,
    name: null | string,
    publicURL: null | URL,
    company: null | string,
    companyWebsite: null | URL,
    location: null | CappuccinoLocationDetails,
    operatingSystem: null | string,
    nodeType: null | string,
    networkType: null | string,
  ) {
    this.publicKey = publicKey;
    this.name = name;
    this.publicURL = publicURL;
    this.company = company;
    this.companyWebsite = companyWebsite;
    this.location = location;
    this.operatingSystem = operatingSystem;
    this.nodeType = nodeType;
    this.networkType = networkType;
  }

  toJSON() {
    return cappuccinoNodeIdentityCodec.encode(this);
  }
}

class CappuccinoNodeIdentityEncoder
  implements Converter<CappuccinoNodeIdentity>
{
  convert(input: CappuccinoNodeIdentity) {
    return {
      public_key: taggedBase64Codec.encode(input.publicKey),
      name: nullableStringCodec.encode(input.name),
      public_url: nullableURLCodec.encode(input.publicURL),
      company: nullableStringCodec.encode(input.company),
      company_website: nullableURLCodec.encode(input.companyWebsite),
      location: nullableCappuccinoLocationDetailsCodec.encode(input.location),
      operating_system: nullableStringCodec.encode(input.operatingSystem),
      node_type: nullableStringCodec.encode(input.nodeType),
      network_type: nullableStringCodec.encode(input.networkType),
    };
  }
}

class CappuccinoNodeIdentityDecoder
  implements Converter<unknown, CappuccinoNodeIdentity>
{
  convert(input: unknown) {
    assertRecordWithKeys(
      input,
      'public_key',
      'name',
      'public_url',
      'company',
      'company_website',
      'location',
      'operating_system',
      'node_type',
      'network_type',
    );
    return new CappuccinoNodeIdentity(
      taggedBase64Codec.decode(input.public_key),
      preferNullOverEmptyString(nullableStringCodec.decode(input.name)),
      nullableURLCodec.decode(input.public_url),
      preferNullOverEmptyString(nullableStringCodec.decode(input.company)),
      nullableURLCodec.decode(input.company_website),
      nullableCappuccinoLocationDetailsCodec.decode(input.location),
      preferNullOverEmptyString(
        nullableStringCodec.decode(input.operating_system),
      ),
      preferNullOverEmptyString(nullableStringCodec.decode(input.node_type)),
      preferNullOverEmptyString(nullableStringCodec.decode(input.network_type)),
    );
  }
}

class CappuccinoNodeIdentityCodec extends TypeCheckingCodec<CappuccinoNodeIdentity> {
  readonly encoder = new CappuccinoNodeIdentityEncoder();
  readonly decoder = new CappuccinoNodeIdentityDecoder();
}

export const cappuccinoNodeIdentityCodec = new CappuccinoNodeIdentityCodec();
export const listCappuccinoNodeIdentityCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoNodeIdentityCodec),
  new ArrayEncoder(cappuccinoNodeIdentityCodec),
);
