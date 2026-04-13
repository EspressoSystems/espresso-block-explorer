import { ArrayCodec } from '../../../../../../../../../../src/convert/codec/array';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { default as LocationDetails } from './node_location_details';
/**
 * NodeIdentity represents the identity of a node in the
 * Espress network. It only contains information that is expected to
 * be mostly static.  Any statistics or tracking of the node should reference
 * this node via its public key
 */
export default class NodeIdentity {
    readonly publicKey: TaggedBase64;
    readonly name: null | string;
    readonly publicURL: null | URL;
    readonly company: null | string;
    readonly companyWebsite: null | URL;
    readonly location: null | LocationDetails;
    readonly operatingSystem: null | string;
    readonly nodeType: null | string;
    readonly networkType: null | string;
    constructor(publicKey: TaggedBase64, name: null | string, publicURL: null | URL, company: null | string, companyWebsite: null | URL, location: null | LocationDetails, operatingSystem: null | string, nodeType: null | string, networkType: null | string);
    toJSON(): unknown;
}
declare class NodeIdentityEncoder implements Converter<NodeIdentity> {
    convert(input: NodeIdentity): {
        public_key: string;
        name: string | null;
        public_url: string | null;
        company: string | null;
        company_website: string | null;
        location: unknown;
        operating_system: string | null;
        node_type: string | null;
        network_type: string | null;
    };
}
declare class NodeIdentityDecoder implements Converter<unknown, NodeIdentity> {
    convert(input: unknown): NodeIdentity;
}
declare class NodeIdentityCodec extends TypeCheckingCodec<NodeIdentity> {
    readonly encoder: NodeIdentityEncoder;
    readonly decoder: NodeIdentityDecoder;
}
export declare const nodeIdentityCodec: NodeIdentityCodec;
export declare const listNodeIdentityCodec: ArrayCodec<NodeIdentity, unknown>;
export {};
