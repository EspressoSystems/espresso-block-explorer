import { NullCodec } from '../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec/convert';
/**
 * WalletAddress represents a general Wallet Address within the Ethereum
 * ecosystem.
 */
export default class WalletAddress {
    readonly address: ArrayBuffer;
    constructor(address: ArrayBuffer);
    toJSON(): string;
    toString(): string;
}
/**
 * WalletAddressEncoder is a Converter that converts a WalletAddress into a
 * string representation of the wallet address.
 */
declare class WalletAddressEncoder implements Converter<WalletAddress, string> {
    convert(input: WalletAddress): string;
}
/**
 * WalletAddressDecoder is a Converter that converts a string representation of
 * a wallet address into a WalletAddress.
 */
declare class WalletAddressDecoder implements Converter<unknown, WalletAddress> {
    convert(input: unknown): WalletAddress;
}
/**
 * WalletAddressCodec is a TypeCheckingCodec for WalletAddress.
 * It uses WalletAddressEncoder and WalletAddressDecoder for encoding and
 * decoding WalletAddress objects.
 */
declare class WalletAddressCodec extends TypeCheckingCodec<WalletAddress, string> {
    readonly encoder: WalletAddressEncoder;
    readonly decoder: WalletAddressDecoder;
}
/**
 * walletAddressCodec is an instance of WalletAddressCodec.
 */
export declare const walletAddressCodec: WalletAddressCodec;
export declare const nullableWalletAddressCodec: NullCodec<WalletAddress, string>;
export {};
