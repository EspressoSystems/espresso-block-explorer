import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import {
  nullableStringCodec,
  preferNullOverEmptyString,
} from '@/convert/codec/string';
import { nullableURLCodec } from '@/convert/codec/url';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import LocationDetails, {
  nullableLocationDetailsCodec,
} from './node_location_details';

/**
 * NodeIdentity represents the identity of a node in the
 * Espress network. It only contains information that is expected to
 * be mostly static.  Any statistics or tracking of the node should reference
 * this node via its public key
 */
export default class NodeIdentity {
  constructor(
    public readonly publicKey: TaggedBase64,
    public readonly name: null | string,
    public readonly publicURL: null | URL,
    public readonly company: null | string,
    public readonly companyWebsite: null | URL,
    public readonly location: null | LocationDetails,
    public readonly operatingSystem: null | string,
    public readonly nodeType: null | string,
    public readonly networkType: null | string,
  ) {}

  toJSON() {
    return nodeIdentityCodec.encode(this);
  }
}

class NodeIdentityEncoder implements Converter<NodeIdentity> {
  convert(input: NodeIdentity) {
    return {
      public_key: taggedBase64Codec.encode(input.publicKey),
      name: nullableStringCodec.encode(input.name),
      public_url: nullableURLCodec.encode(input.publicURL),
      company: nullableStringCodec.encode(input.company),
      company_website: nullableURLCodec.encode(input.companyWebsite),
      location: nullableLocationDetailsCodec.encode(input.location),
      operating_system: nullableStringCodec.encode(input.operatingSystem),
      node_type: nullableStringCodec.encode(input.nodeType),
      network_type: nullableStringCodec.encode(input.networkType),
    };
  }
}

class NodeIdentityDecoder implements Converter<unknown, NodeIdentity> {
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
    return new NodeIdentity(
      taggedBase64Codec.decode(input.public_key),
      preferNullOverEmptyString(nullableStringCodec.decode(input.name)),
      nullableURLCodec.decode(input.public_url),
      preferNullOverEmptyString(nullableStringCodec.decode(input.company)),
      nullableURLCodec.decode(input.company_website),
      nullableLocationDetailsCodec.decode(input.location),
      preferNullOverEmptyString(
        nullableStringCodec.decode(input.operating_system),
      ),
      preferNullOverEmptyString(nullableStringCodec.decode(input.node_type)),
      preferNullOverEmptyString(nullableStringCodec.decode(input.network_type)),
    );
  }
}

class NodeIdentityCodec extends TypeCheckingCodec<NodeIdentity> {
  readonly encoder = new NodeIdentityEncoder();
  readonly decoder = new NodeIdentityDecoder();
}

export const nodeIdentityCodec = new NodeIdentityCodec();
export const listNodeIdentityCodec = new ArrayCodec(
  new ArrayDecoder(nodeIdentityCodec),
  new ArrayEncoder(nodeIdentityCodec),
);
