import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { L1BlockInfo } from '../common/l1_block_info';
import { WalletDiff } from './wallet_diff/wallet_diff';
/**
 * WalletUpdate represents an update of a specific Wallet address at a specific
 * L1 Block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9801ebdfdc6d2c11ee028
 */
export declare class WalletUpdate {
    readonly l1Block: L1BlockInfo;
    readonly diff: WalletDiff[];
    constructor(l1Block: L1BlockInfo, diff: WalletDiff[]);
    toJSON(): unknown;
}
/**
 * WalletUpdateJSONDecoder decodes WalletUpdate
 * objects from a JSON object.
 */
declare class WalletUpdateJSONDecoder implements Converter<unknown, WalletUpdate> {
    convert(input: unknown): WalletUpdate;
}
/**
 * WalletUpdateJSONEncoder encodes WalletUpdate
 * objects to a JSON object.
 */
declare class WalletUpdateJSONEncoder implements Converter<WalletUpdate, unknown> {
    convert(input: WalletUpdate): unknown;
}
/**
 * WalletUpdateJSONCodec is a codec that encodes and decodes
 * WalletUpdate objects to and from JSON.
 */
declare class WalletUpdateJSONCodec extends TypeCheckingCodec<WalletUpdate, unknown> {
    readonly encoder: WalletUpdateJSONEncoder;
    readonly decoder: WalletUpdateJSONDecoder;
}
/**
 * walletUpdateJSONCodec is a codec that encodes and decodes
 * WalletUpdate objects to and from JSON.
 */
export declare const walletUpdateJSONCodec: WalletUpdateJSONCodec;
export {};
