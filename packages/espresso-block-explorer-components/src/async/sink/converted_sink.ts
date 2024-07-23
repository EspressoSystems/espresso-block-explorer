import { Converter } from '@/convert/codec/convert';
import { Sink } from './sink';

/**
 * ConvertedSink is a Sink that converts the type of the request
 * before sending it.
 */
class ConvertedSink<T, U> implements Sink<U> {
  constructor(
    private readonly sink: Sink<T>,
    private readonly converter: Converter<U, T>,
  ) {
    this.sink = sink;
    this.converter = converter;
  }

  async send(request: U): Promise<void> {
    await this.sink.send(this.converter.convert(request));
  }
}

/**
 * createSinkWithConverter creates a Sink that converts the type of the request
 * before sending it.
 */
export function createSinkWithConverter<T, U>(
  sink: Sink<T>,
  converter: Converter<U, T>,
): Sink<U> {
  return new ConvertedSink(sink, converter);
}
