import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as InscriptionAndChainDetails } from '../inscription_and_chain_details';
import { default as CappuccinoInscriptionResponse } from './inscription_response';

/**
 * kRetrievedInscriptionsForWalletAddressType is the type string for the
 * CappuccinoRetrievedInscriptionsForWalletAddress class.
 */
export declare const kRetrievedInscriptionsForWalletAddressType: "RetrievedInscriptionsForWalletAddress";
/**
 * CappuccinoRetrievedInscriptionsForWalletAddress is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class CappuccinoRetrievedInscriptionsForWalletAddress extends CappuccinoInscriptionResponse {
    readonly inscriptionAndChainDetails: InscriptionAndChainDetails[];
    constructor(inscriptionAndChainDetails: InscriptionAndChainDetails[]);
    toJSON(): {
        RetrievedInscriptionsForWalletAddress: {
            inscription: unknown;
            chain_details: unknown;
        }[];
    };
}
declare class CappuccinoRetrievedInscriptionsForWalletAddressDecoder implements Converter<unknown, CappuccinoRetrievedInscriptionsForWalletAddress> {
    convert(input: unknown): CappuccinoRetrievedInscriptionsForWalletAddress;
}
declare class CappuccinoRetrievedInscriptionsForWalletAddressEncoder implements Converter<CappuccinoRetrievedInscriptionsForWalletAddress> {
    convert(input: CappuccinoRetrievedInscriptionsForWalletAddress): {
        RetrievedInscriptionsForWalletAddress: {
            inscription: unknown;
            chain_details: unknown;
        }[];
    };
}
declare class CappuccinoRetrievedInscriptionsForWalletAddressCodec extends TypeCheckingCodec<CappuccinoRetrievedInscriptionsForWalletAddress, ReturnType<InstanceType<new () => CappuccinoRetrievedInscriptionsForWalletAddressEncoder>['convert']>> {
    readonly encoder: CappuccinoRetrievedInscriptionsForWalletAddressEncoder;
    readonly decoder: CappuccinoRetrievedInscriptionsForWalletAddressDecoder;
}
export declare const cappuccinoRetrievedInscriptionsForWalletAddressCodec: CappuccinoRetrievedInscriptionsForWalletAddressCodec;
export {};
