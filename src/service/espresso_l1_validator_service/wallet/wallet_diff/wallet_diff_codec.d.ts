import { ArrayCodec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { WalletDiff } from './wallet_diff';
/**
 * WalletDiffJSONDecoder decodes WalletDiff objects
 * from a JSON object.
 */
declare class WalletDiffJSONDecoder implements Converter<unknown, WalletDiff> {
    convert(input: unknown): WalletDiff;
}
/**
 * WalletDiffJSONEncoder encodes WalletDiff objects
 * to a JSON object.
 */
declare class WalletDiffJSONEncoder implements Converter<WalletDiff, unknown> {
    convert(input: WalletDiff): unknown;
}
/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * WalletDiff objects to and from JSON.
 */
export declare class WalletDiffJSONCodec extends TypeCheckingCodec<WalletDiff, unknown> {
    readonly encoder: WalletDiffJSONEncoder;
    readonly decoder: WalletDiffJSONDecoder;
}
/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * WalletDiff objects to and from JSON.
 */
export declare const walletDiffJSONCodec: WalletDiffJSONCodec;
/**
 * WalletDiffJSONCodec is a codec that encodes and decodes
 * arrays of WalletDiff objects to and from JSON.
 */
export declare const walletDiffArrayJSONCodec: ArrayCodec<WalletDiff, unknown>;
export {};
