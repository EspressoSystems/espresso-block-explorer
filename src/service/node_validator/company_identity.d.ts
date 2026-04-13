import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
/**
 * CompanyIdentity represents the identity of a company.
 * It contains information that pertains to the company running this node.
 */
export default class CompanyIdentity {
    readonly name: string;
    readonly website: string;
    constructor(name: string, website: string);
    toJSON(): unknown;
}
declare class CompanyIdentityEncoder implements Converter<CompanyIdentity> {
    convert(input: CompanyIdentity): {
        name: string;
        website: string;
    };
}
declare class CompanyIdentityDecoder implements Converter<unknown, CompanyIdentity> {
    convert(input: unknown): CompanyIdentity;
}
declare class CompanyIdentityCodec extends TypeCheckingCodec<CompanyIdentity> {
    readonly encoder: CompanyIdentityEncoder;
    readonly decoder: CompanyIdentityDecoder;
}
export declare const companyIdentityCodec: CompanyIdentityCodec;
export {};
