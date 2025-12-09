import {
  nullableStringCodec,
  nullableURLCodec,
  NullCodec,
  NullDecoder,
  NullEncoder,
} from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { ImageSet, nullableImageSetJSONCodec } from './image_set';

/**
 * NodeMetadataContent contains metadata about a node.
 */
export class NodeMetadataContent {
  constructor(
    public readonly name: null | string,
    public readonly description: null | string,
    public readonly companyName: null | string,
    public readonly companyWebsite: null | URL,
    public readonly clientVersion: null | string,
    public readonly icon: null | ImageSet,
  ) {
    Object.freeze(this);
  }
}

class NodeMetadataContentJSONDecoder implements Converter<
  unknown,
  NodeMetadataContent
> {
  convert(input: unknown): NodeMetadataContent {
    assertRecordWithKeys(
      input,
      'name',
      'description',
      'company_name',
      'company_website',
      'client_version',
      'icon',
    );

    return new NodeMetadataContent(
      nullableStringCodec.decode(input.name),
      nullableStringCodec.decode(input.description),
      nullableStringCodec.decode(input.company_name),
      nullableURLCodec.decode(input.company_website),
      nullableStringCodec.decode(input.client_version),
      nullableImageSetJSONCodec.decode(input.icon),
    );
  }
}

class NodeMetadataContentJSONEncoder implements Converter<
  NodeMetadataContent,
  unknown
> {
  convert(input: NodeMetadataContent): unknown {
    return {
      name: nullableStringCodec.encode(input.name),
      description: nullableStringCodec.encode(input.description),
      company_name: nullableStringCodec.encode(input.companyName),
      company_website: nullableURLCodec.encode(input.companyWebsite),
      client_version: nullableStringCodec.encode(input.clientVersion),
      icon: nullableImageSetJSONCodec.encode(input.icon),
    };
  }
}

class NodeMetadataContentJSONCodec extends TypeCheckingCodec<
  NodeMetadataContent,
  unknown
> {
  readonly encoder = new NodeMetadataContentJSONEncoder();
  readonly decoder = new NodeMetadataContentJSONDecoder();
}

export const nodeMetadataContentJSONCodec = new NodeMetadataContentJSONCodec();
export const nullableNodeMetadataContentJSONCodec = new NullCodec(
  new NullDecoder(nodeMetadataContentJSONCodec),
  new NullEncoder(nodeMetadataContentJSONCodec),
);
