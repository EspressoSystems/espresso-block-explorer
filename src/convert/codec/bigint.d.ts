import { ArrayCodec } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec } from './null';
export declare class BigintDecoder implements Converter<unknown, bigint> {
    convert(input: unknown): bigint;
}
export declare class BigintEncoder implements Converter<bigint, string> {
    convert(input: bigint): string;
}
export declare class BigintCodec extends TypeCheckingCodec<bigint> {
    readonly encoder: BigintEncoder;
    readonly decoder: BigintDecoder;
}
export declare const bigintCodec: BigintCodec;
export declare const nullableBigintCodec: NullCodec<bigint, unknown>;
export declare const bigintArrayCodec: ArrayCodec<bigint, unknown>;
export declare const nullableBigintArrayCodec: ArrayCodec<bigint | null, unknown>;
