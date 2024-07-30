import { Converter } from '../../../../../../../../../../src/convert/codec/convert';
import { Sink } from './sink';

/**
 * createSinkWithConverter creates a Sink that converts the type of the request
 * before sending it.
 */
export declare function createSinkWithConverter<T, U>(sink: Sink<T>, converter: Converter<U, T>): Sink<U>;
