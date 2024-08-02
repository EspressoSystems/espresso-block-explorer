import {
  ArrayCodec,
  ArrayDecoder,
  ArrayEncoder,
  nullableStringCodec,
  nullableURLCodec,
} from '@/convert/codec';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
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
  readonly location: null | CappuccinoLocationDetails;
  readonly operatingSystem: null | string;
  readonly nodeType: null | string;
  readonly networkType: null | string;

  constructor(
    publicKey: TaggedBase64,
    name: null | string,
    publicURL: null | URL,
    company: null | string,
    location: null | CappuccinoLocationDetails,
    operatingSystem: null | string,
    nodeType: null | string,
    networkType: null | string,
  ) {
    this.publicKey = publicKey;
    this.name = name;
    this.publicURL = publicURL;
    this.company = company;
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
      'location',
      'operating_system',
      'node_type',
      'network_type',
    );
    return new CappuccinoNodeIdentity(
      taggedBase64Codec.decode(input.public_key),
      nullableStringCodec.decode(input.name),
      nullableURLCodec.decode(input.public_url),
      nullableStringCodec.decode(input.company),
      nullableCappuccinoLocationDetailsCodec.decode(input.location),
      nullableStringCodec.decode(input.operating_system),
      nullableStringCodec.decode(input.node_type),
      nullableStringCodec.decode(input.network_type),
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
