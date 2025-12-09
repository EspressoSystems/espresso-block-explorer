import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import {
  OptionalCodec,
  OptionalDecoder,
  OptionalEncoder,
} from '@/convert/codec/optional';
import {
  nullableStringCodec,
  optionalStringCodec,
} from '@/convert/codec/string';
import { nullableURLCodec, optionalURLCodec } from '@/convert/codec/url';
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
    assertRecordWithKeys(input);

    return new NodeMetadataContent(
      optionalStringCodec.decode(input.name) ?? null,
      optionalStringCodec.decode(input.description) ?? null,
      optionalStringCodec.decode(input.company_name) ?? null,
      optionalURLCodec.decode(input.company_website) ?? null,
      optionalStringCodec.decode(input.client_version) ?? null,
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
      name: nullableStringCodec.encode(input.name) ?? undefined,
      description: nullableStringCodec.encode(input.description) ?? undefined,
      company_name: nullableStringCodec.encode(input.companyName) ?? undefined,
      company_website:
        nullableURLCodec.encode(input.companyWebsite) ?? undefined,
      client_version:
        nullableStringCodec.encode(input.clientVersion) ?? undefined,
      icon: nullableImageSetJSONCodec.encode(input.icon) ?? undefined,
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
export const optionalNodeMetadataContentJSONCodec = new OptionalCodec(
  new OptionalDecoder(nodeMetadataContentJSONCodec),
  new OptionalEncoder(nodeMetadataContentJSONCodec),
);
