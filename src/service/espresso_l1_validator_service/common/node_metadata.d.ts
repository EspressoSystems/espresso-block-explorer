import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { OptionalCodec } from '../../../../../../../../../../../src/convert/codec/optional';
import { NodeMetadataContent } from './node_metadata_content';
/**
 * NodeMetadata contains metadata URI and, potentially, the content derived
 * from that URI of the metadata.
 */
export declare class NodeMetadata {
    readonly uri: URL;
    readonly content: null | NodeMetadataContent;
    constructor(uri: URL, content: null | NodeMetadataContent);
}
declare class NodeMetadataJSONDecoder implements Converter<unknown, NodeMetadata> {
    convert(input: unknown): NodeMetadata;
}
declare class NodeMetadataJSONEncoder implements Converter<NodeMetadata, unknown> {
    convert(input: NodeMetadata): unknown;
}
declare class NodeMetadataJSONCodec extends TypeCheckingCodec<NodeMetadata, unknown> {
    readonly encoder: NodeMetadataJSONEncoder;
    readonly decoder: NodeMetadataJSONDecoder;
}
export declare const nodeMetadataJSONCodec: NodeMetadataJSONCodec;
export declare const nullableNodeMetadataJSONCodec: NullCodec<NodeMetadata, unknown>;
export declare const optionalNodeMetadataJSONCodec: OptionalCodec<NodeMetadata, unknown>;
export {};
