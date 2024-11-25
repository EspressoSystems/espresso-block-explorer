import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as ChainDetails } from './chain_details';
import { default as Inscription } from './inscription';

/**
 * InscriptionAndChainDetails represents the combination of an Inscription and
 * the chain details that are used to identify the transaction in the chain.
 */
export default class InscriptionAndChainDetails {
    readonly inscription: Inscription;
    readonly chainDetails: ChainDetails;
    constructor(inscription: Inscription, chainDetails: ChainDetails);
    toJSON(): {
        inscription: unknown;
        chain_details: unknown;
    };
}
/**
 * InscriptionAndChainDetailsEncoder is a Converter that converts an
 * InscriptionAndChainDetails into a JSON object that can be used to represent
 * the InscriptionAndChainDetails.
 */
declare class InscriptionAndChainDetailsEncoder implements Converter<InscriptionAndChainDetails> {
    convert(input: InscriptionAndChainDetails): {
        inscription: unknown;
        chain_details: unknown;
    };
}
/**
 * InscriptionAndChainDetailsDecoder is a Converter that converts a JSON object
 * into an InscriptionAndChainDetails.
 */
declare class InscriptionAndChainDetailsDecoder implements Converter<unknown, InscriptionAndChainDetails> {
    convert(input: unknown): InscriptionAndChainDetails;
}
/**
 * InscriptionAndChainDetailsCodec is a TypeCheckingCodec for
 * InscriptionAndChainDetails.
 */
declare class InscriptionAndChainDetailsCodec extends TypeCheckingCodec<InscriptionAndChainDetails, ReturnType<InstanceType<new () => InscriptionAndChainDetailsEncoder>['convert']>> {
    readonly encoder: InscriptionAndChainDetailsEncoder;
    readonly decoder: InscriptionAndChainDetailsDecoder;
}
/**
 * inscriptionAndChainDetailsCodec is an instance of
 * InscriptionAndChainDetailsCodec.
 */
export declare const inscriptionAndChainDetailsCodec: InscriptionAndChainDetailsCodec;
export declare const arrayInscriptionAndChainDetailsCodec: ArrayCodec<InscriptionAndChainDetails, {
    inscription: unknown;
    chain_details: unknown;
}>;
export {};
