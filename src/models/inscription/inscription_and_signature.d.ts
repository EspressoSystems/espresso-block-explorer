import { BincodeDeserializer } from '../../../../../../../../../../src/convert/bincode/deserializer';
import { BincodeSerializer } from '../../../../../../../../../../src/convert/bincode/serializer';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec';
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
        signature: `0x${string}`;
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
export declare function deserializeHexEncodedString(input: BincodeDeserializer): ArrayBuffer;
export declare function deserializeBincodeInscriptionAndSignature(input: BincodeDeserializer): InscriptionAndSignature;
export declare function serializeBincodeInscriptionAndSignature(serializer: BincodeSerializer, input: InscriptionAndSignature): void;
declare class InscriptionAndSignatureBincodeEncoder implements Converter<InscriptionAndSignature, ArrayBuffer> {
    convert(input: InscriptionAndSignature): ArrayBuffer;
}
declare class InscriptionAndSignatureBincodeDecoder implements Converter<unknown, InscriptionAndSignature> {
    convert(input: unknown): InscriptionAndSignature;
}
declare class InscriptionAndSignatureBincodeCodec extends TypeCheckingCodec<InscriptionAndSignature, ArrayBuffer> {
    readonly encoder: InscriptionAndSignatureBincodeEncoder;
    readonly decoder: InscriptionAndSignatureBincodeDecoder;
}
export declare const inscriptionAndSignatureBincodeCodec: InscriptionAndSignatureBincodeCodec;
export {};
