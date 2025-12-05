import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import { EspressoError } from './espresso_error';
import NoCodecFoundError from './no_codec_found_error';

const espressoErrorRegistry: Map<
  string,
  Codec<EspressoError, unknown>
> = new Map();

class EspressoErrorDecoder implements Converter<unknown, EspressoError> {
  convert(input: unknown): EspressoError {
    assertRecordWithKeys(input, 'code');
    const code = stringCodec.decode(input.code);

    const codec = espressoErrorRegistry.get(code);
    if (!codec) {
      throw new NoCodecFoundError(code);
    }

    return codec.decode(input);
  }
}

class EspressoErrorEncoder implements Converter<EspressoError, unknown> {
  convert(input: EspressoError): unknown {
    const codec = espressoErrorRegistry.get(input.code);
    if (!codec) {
      throw new NoCodecFoundError(input.code);
    }

    return codec.encode(input);
  }
}

class EspressoErrorCodec extends Codec<EspressoError, unknown> {
  readonly encoder: Converter<EspressoError, unknown> =
    new EspressoErrorEncoder();
  readonly decoder: Converter<unknown, EspressoError> =
    new EspressoErrorDecoder();
}

export const espressoErrorCodec = new EspressoErrorCodec();

/**
 * registerCodec allows an error to register itself as a codec for a given code.
 * This allows for errors to be defined, and to be registered and utilized while
 * being decodable from a single location.
 */
export function registerCodec<T extends EspressoError>(
  code: string,
  codec: Codec<T, unknown>,
): void {
  espressoErrorRegistry.set(code, codec);
}
