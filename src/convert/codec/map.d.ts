import { Converter, TypeCheckingCodec } from './convert';
export declare class MapObjectDecoder<K, V> implements Converter<unknown, Map<K, V>> {
    private readonly keyCodec;
    private readonly valueCodec;
    constructor(keyCodec: TypeCheckingCodec<K, string>, valueCodec: TypeCheckingCodec<V, unknown>);
    convert(input: unknown): Map<K, V>;
}
export declare class MapObjectEncoder<K, V> implements Converter<Map<K, V>, Record<string, unknown>> {
    private readonly keyCodec;
    private readonly valueCodec;
    constructor(keyCodec: TypeCheckingCodec<K, string>, valueCodec: TypeCheckingCodec<V, unknown>);
    convert(input: Map<K, V>): Record<string, unknown>;
}
export declare class MapObjectCodec<K, V> extends TypeCheckingCodec<Map<K, V>, Record<string, unknown>> {
    readonly encoder: Converter<Map<K, V>, Record<string, unknown>>;
    readonly decoder: Converter<unknown, Map<K, V>>;
    constructor(decoder: Converter<unknown, Map<K, V>>, encoder: Converter<Map<K, V>, Record<string, unknown>>);
    static keyStringCodec<V>(valueCodec: TypeCheckingCodec<V, unknown>): MapObjectCodec<string, V>;
}
