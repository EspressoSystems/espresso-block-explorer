import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * CappuccinoCompanyIdentity represents the identity of a Cappuccino company.
 * It contains information that pertains to the company running this node.
 */
export default class CappuccinoCompanyIdentity {
    readonly name: string;
    readonly website: string;
    constructor(name: string, website: string);
    toJSON(): unknown;
}
declare class CappuccinoCompanyIdentityEncoder implements Converter<CappuccinoCompanyIdentity> {
    convert(input: CappuccinoCompanyIdentity): {
        name: string;
        website: string;
    };
}
declare class CappuccinoCompanyIdentityDecoder implements Converter<unknown, CappuccinoCompanyIdentity> {
    convert(input: unknown): CappuccinoCompanyIdentity;
}
declare class CappuccinoCompanyIdentityCodec extends TypeCheckingCodec<CappuccinoCompanyIdentity> {
    readonly encoder: CappuccinoCompanyIdentityEncoder;
    readonly decoder: CappuccinoCompanyIdentityDecoder;
}
export declare const cappuccinoCompanyIdentityCodec: CappuccinoCompanyIdentityCodec;
export {};
