import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { default as CappuccinoLocationDetails } from './node_location_details';
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
    constructor(publicKey: TaggedBase64, name: null | string, publicURL: null | URL, company: null | string, companyWebsite: null | URL, location: null | CappuccinoLocationDetails, operatingSystem: null | string, nodeType: null | string, networkType: null | string);
    toJSON(): unknown;
}
declare class CappuccinoNodeIdentityEncoder implements Converter<CappuccinoNodeIdentity> {
    convert(input: CappuccinoNodeIdentity): {
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
declare class CappuccinoNodeIdentityDecoder implements Converter<unknown, CappuccinoNodeIdentity> {
    convert(input: unknown): CappuccinoNodeIdentity;
}
declare class CappuccinoNodeIdentityCodec extends TypeCheckingCodec<CappuccinoNodeIdentity> {
    readonly encoder: CappuccinoNodeIdentityEncoder;
    readonly decoder: CappuccinoNodeIdentityDecoder;
}
export declare const cappuccinoNodeIdentityCodec: CappuccinoNodeIdentityCodec;
export declare const listCappuccinoNodeIdentityCodec: ArrayCodec<CappuccinoNodeIdentity, unknown>;
export {};
