import { Codec, Converter } from '../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from './EspressoError';
declare class EspressoErrorCodec extends Codec<EspressoError, unknown> {
    readonly encoder: Converter<EspressoError, unknown>;
    readonly decoder: Converter<unknown, EspressoError>;
}
export declare const espressoErrorCodec: EspressoErrorCodec;
/**
 * registerCodec allows an error to register itself as a codec for a given code.
 * This allows for errors to be defined, and to be registered and utilized while
 * being decodable from a single location.
 */
export declare function registerCodec<T extends EspressoError>(code: string, codec: Codec<T, unknown>): void;
export {};
