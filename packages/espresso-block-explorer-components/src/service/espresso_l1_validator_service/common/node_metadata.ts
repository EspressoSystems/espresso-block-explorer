import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { urlCodec } from '@/convert/codec/url';
import {
  NodeMetadataContent,
  nullableNodeMetadataContentJSONCodec,
} from './node_metadata_content';

/**
 * NodeMetadata contains metadata URI and, potentially, the content derived
 * from that URI of the metadata.
 */
export class NodeMetadata {
  constructor(
    public readonly uri: URL,
    public readonly content: null | NodeMetadataContent,
  ) {
    Object.freeze(this);
  }
}

class NodeMetadataJSONDecoder implements Converter<unknown, NodeMetadata> {
  convert(input: unknown): NodeMetadata {
    assertRecordWithKeys(input, 'uri', 'content');

    return new NodeMetadata(
      urlCodec.decode(input.uri),
      nullableNodeMetadataContentJSONCodec.decode(input.content),
    );
  }
}

class NodeMetadataJSONEncoder implements Converter<NodeMetadata, unknown> {
  convert(input: NodeMetadata): unknown {
    return {
      uri: urlCodec.encode(input.uri),
      content: nullableNodeMetadataContentJSONCodec.encode(input.content),
    };
  }
}

class NodeMetadataJSONCodec extends TypeCheckingCodec<NodeMetadata, unknown> {
  public readonly encoder = new NodeMetadataJSONEncoder();
  public readonly decoder = new NodeMetadataJSONDecoder();
}

export const nodeMetadataJSONCodec = new NodeMetadataJSONCodec();
export const nullableNodeMetadataJSONCodec = new NullCodec(
  new NullDecoder(nodeMetadataJSONCodec),
  new NullEncoder(nodeMetadataJSONCodec),
);
