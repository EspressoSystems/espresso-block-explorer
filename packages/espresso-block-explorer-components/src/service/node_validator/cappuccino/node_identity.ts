import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import CappuccinoCompanyIdentity, {
  cappuccinoCompanyIdentityCodec,
} from './company_identity';
import CappuccinoLocationDetails, {
  cappuccinoLocationDetailsCodec,
} from './node_location_details';

/**
 * CappuccinoNodeIdentity represents the identity of a node in the
 * Cappuccino network. It only contains information that is expected to
 * be mostly static.  Any statistics or tracking of the node should reference
 * this node via its public key
 */
export default class CappuccinoNodeIdentity {
  readonly publicKey: TaggedBase64;
  readonly name: string;
  readonly address: ArrayBuffer;
  readonly company: CappuccinoCompanyIdentity;
  readonly location: CappuccinoLocationDetails;
  readonly operatingSystem: string;
  readonly nodeType: string;
  readonly networkType: string;

  constructor(
    publicKey: TaggedBase64,
    name: string,
    address: ArrayBuffer,
    company: CappuccinoCompanyIdentity,
    location: CappuccinoLocationDetails,
    operatingSystem: string,
    nodeType: string,
    networkType: string,
  ) {
    this.publicKey = publicKey;
    this.name = name;
    this.address = address;
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
      publicKey: taggedBase64Codec.encode(input.publicKey),
      name: stringCodec.encode(input.name),
      address: hexArrayBufferCodec.encode(input.address),
      company: cappuccinoCompanyIdentityCodec.encode(input.company),
      location: cappuccinoLocationDetailsCodec.encode(input.location),
      operatingSystem: stringCodec.encode(input.operatingSystem),
      nodeType: stringCodec.encode(input.nodeType),
      networkType: stringCodec.encode(input.networkType),
    };
  }
}

class CappuccinoNodeIdentityDecoder
  implements Converter<unknown, CappuccinoNodeIdentity>
{
  convert(input: unknown) {
    assertRecordWithKeys(
      input,
      'publicKey',
      'name',
      'address',
      'company',
      'location',
      'operatingSystem',
      'nodeType',
      'networkType',
    );
    return new CappuccinoNodeIdentity(
      taggedBase64Codec.decode(input.publicKey),
      stringCodec.decode(input.name),
      hexArrayBufferCodec.decode(input.address),
      cappuccinoCompanyIdentityCodec.decode(input.company),
      cappuccinoLocationDetailsCodec.decode(input.location),
      stringCodec.decode(input.operatingSystem),
      stringCodec.decode(input.nodeType),
      stringCodec.decode(input.networkType),
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
