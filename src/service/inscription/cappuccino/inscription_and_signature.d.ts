import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { default as Inscription } from './inscription';

/**
 * InscriptionAndSignature represents the combination of an Inscription and
 * a signature that is used to sign the Inscription data.
 */
export default class InscriptionAndSignature {
    readonly inscription: Inscription;
    readonly signature: ArrayBuffer;
    constructor(inscription: Inscription, signature: ArrayBuffer);
    toJSON(): unknown;
}
/**
 * InscriptionAndSignatureEncoder is a Converter that converts an
 * InscriptionAndSignature into a JSON object that can be used to represent
 * the InscriptionAndSignature.
 */
declare class InscriptionAndSignatureEncoder implements Converter<InscriptionAndSignature> {
    convert(input: InscriptionAndSignature): {
        inscription: unknown;
        signature: string;
    };
}
/**
 * InscriptionAndSignatureDecoder is a Converter that converts a JSON object
 * into an InscriptionAndSignature.
 */
declare class InscriptionAndSignatureDecoder implements Converter<unknown, InscriptionAndSignature> {
    convert(input: unknown): InscriptionAndSignature;
}
/**
 * InscriptionAndSignatureCodec is a TypeCheckingCodec for InscriptionAndSignature.
 */
declare class InscriptionAndSignatureCodec extends TypeCheckingCodec<InscriptionAndSignature> {
    readonly encoder: InscriptionAndSignatureEncoder;
    readonly decoder: InscriptionAndSignatureDecoder;
}
/**
 * inscriptionAndSignatureCodec is an instance of InscriptionAndSignatureCodec.
 */
export declare const inscriptionAndSignatureCodec: InscriptionAndSignatureCodec;
export {};
