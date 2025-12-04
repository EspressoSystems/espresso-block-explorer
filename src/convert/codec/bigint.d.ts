import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare class BigintDecoder implements Converter<unknown, bigint> {
    convert(input: unknown): bigint;
}
export declare class BigintEncoder implements Converter<bigint, `0x${string}`> {
    convert(input: bigint): `0x${string}`;
}
export declare class BigintCodec extends TypeCheckingCodec<bigint, `0x${string}`> {
    readonly encoder: BigintEncoder;
    readonly decoder: BigintDecoder;
}
export declare const bigintCodec: BigintCodec;
export declare const nullableBigintCodec: NullCodec<bigint, `0x${string}`>;
export declare const bigintArrayCodec: ArrayCodec<bigint, `0x${string}`>;
export declare const nullableBigintArrayCodec: ArrayCodec<bigint | null, `0x${string}` | null>;
