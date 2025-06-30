import { BincodeDeserializer } from '../../../../../../../../../../src/convert/bincode/deserializer';
import { BincodeSerializer } from '../../../../../../../../../../src/convert/bincode/serializer';
import { ArrayCodec } from '../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
import { default as WalletAddress } from '../wallet_address/wallet_address';
/**
 * Inscription represents the basic data that is conveyed for an inscription.
 * This structure represents the minimum data that is needed to convey the
 * inscription either when sourcing the data from the inscription service,
 * or when submitting the data to the inscription service.
 */
export default class Inscription {
    readonly address: WalletAddress;
    readonly time: Date;
    readonly message: string;
    constructor(address: WalletAddress, time: Date, message: string);
    toJSON(): unknown;
}
/**
 * InscriptionEncoder is a Converter that converts an Inscription into a
 * JSON object that can be used to represent the Inscription.
 */
declare class InscriptionEncoder implements Converter<Inscription> {
    convert(input: Inscription): {
        address: string;
        time: number;
        message: string;
    };
}
/**
 * InscriptionDecoder is a Converter that converts a JSON object into an
 * Inscription.
 */
declare class InscriptionDecoder implements Converter<unknown, Inscription> {
    convert(input: unknown): Inscription;
}
/**
 * InscriptionCodec is a TypeCheckingCodec for Inscription.
 */
declare class InscriptionCodec extends TypeCheckingCodec<Inscription> {
    readonly encoder: InscriptionEncoder;
    readonly decoder: InscriptionDecoder;
}
/**
 * inscriptionCodec is an instance of InscriptionCodec.
 */
export declare const inscriptionCodec: InscriptionCodec;
export declare const listInscriptionCodec: ArrayCodec<Inscription, unknown>;
export declare function deserializeBincodeInscription(input: BincodeDeserializer): Inscription;
export declare function serializeBincodeInscription(serializer: BincodeSerializer, input: Inscription): void;
export {};
