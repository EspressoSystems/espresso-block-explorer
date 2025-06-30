import { assertInstanceOf } from '@/assert/assert';
import { Converter, TypeCheckingCodec } from './convert';
import { stringCodec } from './string';

export class MapObjectDecoder<K, V> implements Converter<unknown, Map<K, V>> {
  private readonly keyCodec: TypeCheckingCodec<K, string>;
  private readonly valueCodec: TypeCheckingCodec<V, unknown>;

  constructor(
    keyCodec: TypeCheckingCodec<K, string>,
    valueCodec: TypeCheckingCodec<V, unknown>,
  ) {
    this.keyCodec = keyCodec;
    this.valueCodec = valueCodec;
  }

  convert(input: unknown): Map<K, V> {
    if (typeof input !== 'object' || input === null) {
      throw new Error(
        `invalid map value: expected an object, got ${typeof input}`,
      );
    }

    const map = new Map<K, V>();
    for (const [key, value] of Object.entries(input)) {
      const decodedKey = this.keyCodec.decode(key);
      const decodedValue = this.valueCodec.decode(value);
      map.set(decodedKey, decodedValue);
    }
    return map;
  }
}

export class MapObjectEncoder<K, V>
  implements Converter<Map<K, V>, Record<string, unknown>>
{
  private readonly keyCodec: TypeCheckingCodec<K, string>;
  private readonly valueCodec: TypeCheckingCodec<V, unknown>;
  constructor(
    keyCodec: TypeCheckingCodec<K, string>,
    valueCodec: TypeCheckingCodec<V, unknown>,
  ) {
    this.keyCodec = keyCodec;
    this.valueCodec = valueCodec;
  }
  convert(input: Map<K, V>): Record<string, unknown> {
    assertInstanceOf(input, Map);

    const obj: Record<string, unknown> = {};
    for (const [key, value] of input.entries()) {
      const encodedKey = this.keyCodec.encode(key);
      const encodedValue = this.valueCodec.encode(value);
      obj[encodedKey] = encodedValue;
    }
    return obj;
  }
}

export class MapObjectCodec<K, V> extends TypeCheckingCodec<
  Map<K, V>,
  Record<string, unknown>
> {
  readonly encoder: Converter<Map<K, V>, Record<string, unknown>>;
  readonly decoder: Converter<unknown, Map<K, V>>;

  constructor(
    decoder: Converter<unknown, Map<K, V>>,
    encoder: Converter<Map<K, V>, Record<string, unknown>>,
  ) {
    super();
    this.encoder = encoder;
    this.decoder = decoder;
  }

  static keyStringCodec<V>(
    valueCodec: TypeCheckingCodec<V, unknown>,
  ): MapObjectCodec<string, V> {
    return new MapObjectCodec(
      new MapObjectDecoder(stringCodec, valueCodec),
      new MapObjectEncoder(stringCodec, valueCodec),
    );
  }
}
