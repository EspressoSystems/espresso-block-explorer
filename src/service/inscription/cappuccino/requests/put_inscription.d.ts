import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as InscriptionAndSignature } from '../inscription_and_signature';
import { default as CappuccinoInscriptionRequest } from './inscription_request';

export declare const kPutInscriptionValue: "PutInscription";
/**
 * PutInscription is a proxy request to submit an Inscription to the
 * inscription service.
 */
export declare class PutInscription extends CappuccinoInscriptionRequest {
    readonly inscriptionAndSignature: InscriptionAndSignature;
    constructor(inscriptionAndSignature: InscriptionAndSignature);
    toJSON(): unknown;
}
/**
 * PutInscriptionEncoder is a Converter that converts a PutInscription into a
 * JSON object that can be used to represent the PutInscription.
 */
declare class PutInscriptionEncoder implements Converter<PutInscription, unknown> {
    convert(input: PutInscription): {
        type: string;
        inscription_and_signature: unknown;
    };
}
/**
 * PutInscriptionDecoder is a Converter that converts a JSON object into a
 * PutInscription.
 */
declare class PutInscriptionDecoder implements Converter<unknown, PutInscription> {
    convert(input: unknown): PutInscription;
}
/**
 * PutInscriptionCodec is a TypeCheckingCodec for PutInscription.
 */
declare class PutInscriptionCodec extends TypeCheckingCodec<PutInscription> {
    readonly encoder: PutInscriptionEncoder;
    readonly decoder: PutInscriptionDecoder;
}
/**
 * putInscriptionCodec is an instance of PutInscriptionCodec.
 */
export declare const putInscriptionCodec: PutInscriptionCodec;
export {};
