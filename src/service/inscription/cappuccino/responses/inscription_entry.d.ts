import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as InscriptionAndChainDetails } from '../inscription_and_chain_details';
import { default as CappuccinoInscriptionResponse } from './inscription_response';

/**
 * kCappuccinoInscriptionType is the type string for the
 * CappuccinoInscriptionEntry class.
 */
export declare const kCappuccinoInscriptionType: "LatestInscription";
/**
 * CappuccinoInscriptionEntry is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class CappuccinoInscriptionEntry extends CappuccinoInscriptionResponse {
    readonly inscriptionAndChainDetails: InscriptionAndChainDetails;
    constructor(inscriptionAndChainDetails: InscriptionAndChainDetails);
    toJSON(): {
        LatestInscription: {
            inscription: unknown;
            chain_details: unknown;
        };
    };
}
declare class CappuccinoInscriptionEntryDecoder implements Converter<unknown, CappuccinoInscriptionEntry> {
    convert(input: unknown): CappuccinoInscriptionEntry;
}
declare class CappuccinoInscriptionEntryEncoder implements Converter<CappuccinoInscriptionEntry> {
    convert(input: CappuccinoInscriptionEntry): {
        LatestInscription: {
            inscription: unknown;
            chain_details: unknown;
        };
    };
}
declare class CappuccinoInscriptionEntryCodec extends TypeCheckingCodec<CappuccinoInscriptionEntry, ReturnType<InstanceType<new () => CappuccinoInscriptionEntryEncoder>['convert']>> {
    readonly encoder: CappuccinoInscriptionEntryEncoder;
    readonly decoder: CappuccinoInscriptionEntryDecoder;
}
export declare const cappuccinoInscriptionCodec: CappuccinoInscriptionEntryCodec;
export {};
