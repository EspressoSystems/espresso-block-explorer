import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoInscriptionRequest } from './inscription_request';

export declare const kRetrieveInscriptionsForAddressValue: "RetrieveInscriptionsForAddress";
/**
 * RetrieveInscriptionsForAddress is a proxy request to submit an Inscription to the
 * inscription service.
 */
export declare class RetrieveInscriptionsForAddress extends CappuccinoInscriptionRequest {
    readonly address: string;
    constructor(address: string);
    toJSON(): unknown;
}
/**
 * RetrieveInscriptionsForAddressEncoder is a Converter that converts a RetrieveInscriptionsForAddress into a
 * JSON object that can be used to represent the RetrieveInscriptionsForAddress.
 */
declare class RetrieveInscriptionsForAddressEncoder implements Converter<RetrieveInscriptionsForAddress, unknown> {
    convert(input: RetrieveInscriptionsForAddress): {
        type: string;
        address: string;
    };
}
/**
 * RetrieveInscriptionsForAddressDecoder is a Converter that converts a JSON object into a
 * RetrieveInscriptionsForAddress.
 */
declare class RetrieveInscriptionsForAddressDecoder implements Converter<unknown, RetrieveInscriptionsForAddress> {
    convert(input: unknown): RetrieveInscriptionsForAddress;
}
/**
 * RetrieveInscriptionsForAddressCodec is a TypeCheckingCodec for RetrieveInscriptionsForAddress.
 */
declare class RetrieveInscriptionsForAddressCodec extends TypeCheckingCodec<RetrieveInscriptionsForAddress> {
    readonly encoder: RetrieveInscriptionsForAddressEncoder;
    readonly decoder: RetrieveInscriptionsForAddressDecoder;
}
/**
 * RetrieveInscriptionsForAddressCodec is an instance of RetrieveInscriptionsForAddressCodec.
 */
export declare const retrieveInscriptionsForAddressCodec: RetrieveInscriptionsForAddressCodec;
export {};
