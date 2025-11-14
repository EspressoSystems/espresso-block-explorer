import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
/**
 * HeightAndAddress represents the input needed in order to claim rewards
 * for a user from the ClaimRewards contract.
 */
export declare class HeightAndAddress {
    readonly height: number;
    readonly address: string;
    constructor(height: number, address: string);
    toJSON(): {
        height: number;
        address: string;
    };
}
declare class HeightAndAddressDecoder implements Converter<unknown, HeightAndAddress> {
    convert(input: unknown): HeightAndAddress;
}
declare class HeightAndAddressEncoder implements Converter<HeightAndAddress> {
    convert(input: HeightAndAddress): {
        height: number;
        address: string;
    };
}
declare class HeightAndAddressCodec extends TypeCheckingCodec<HeightAndAddress, ReturnType<InstanceType<new () => HeightAndAddressEncoder>['convert']>> {
    readonly encoder: HeightAndAddressEncoder;
    readonly decoder: HeightAndAddressDecoder;
}
export declare const heightAndAddressCodec: HeightAndAddressCodec;
export declare const nullableHeightAndAddressCodec: NullCodec<HeightAndAddress, {
    height: number;
    address: string;
}>;
export {};
