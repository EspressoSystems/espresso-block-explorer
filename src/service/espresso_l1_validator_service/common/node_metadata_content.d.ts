import { NullCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ImageSet } from './image_set';
/**
 * NodeMetadataContent contains metadata about a node.
 */
export declare class NodeMetadataContent {
    readonly name: null | string;
    readonly description: null | string;
    readonly companyName: null | string;
    readonly companyWebsite: null | URL;
    readonly clientVersion: null | string;
    readonly icon: null | ImageSet;
    constructor(name: null | string, description: null | string, companyName: null | string, companyWebsite: null | URL, clientVersion: null | string, icon: null | ImageSet);
}
declare class NodeMetadataContentJSONDecoder implements Converter<unknown, NodeMetadataContent> {
    convert(input: unknown): NodeMetadataContent;
}
declare class NodeMetadataContentJSONEncoder implements Converter<NodeMetadataContent, unknown> {
    convert(input: NodeMetadataContent): unknown;
}
declare class NodeMetadataContentJSONCodec extends TypeCheckingCodec<NodeMetadataContent, unknown> {
    readonly encoder: NodeMetadataContentJSONEncoder;
    readonly decoder: NodeMetadataContentJSONDecoder;
}
export declare const nodeMetadataContentJSONCodec: NodeMetadataContentJSONCodec;
export declare const nullableNodeMetadataContentJSONCodec: NullCodec<NodeMetadataContent, unknown>;
export {};
