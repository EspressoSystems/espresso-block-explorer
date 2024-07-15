import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { default as CappuccinoCompanyIdentity } from './company_identity';
import { default as CappuccinoLocationDetails } from './node_location_details';

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
    constructor(publicKey: TaggedBase64, name: string, address: ArrayBuffer, company: CappuccinoCompanyIdentity, location: CappuccinoLocationDetails, operatingSystem: string, nodeType: string, networkType: string);
    toJSON(): unknown;
}
declare class CappuccinoNodeIdentityEncoder implements Converter<CappuccinoNodeIdentity> {
    convert(input: CappuccinoNodeIdentity): {
        publicKey: string;
        name: string;
        address: string;
        company: unknown;
        location: unknown;
        operatingSystem: string;
        nodeType: string;
        networkType: string;
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
