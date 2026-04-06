import {
  Codec,
  Converter,
  assertRecordWithKeys,
  isRecordWithKeys,
} from '@/convert/codec/convert';
import { EspressoError } from './espresso_error';
import NoCodecFoundError from './no_codec_found_error';

const espressoErrorRegistry: Map<string, Codec<unknown, unknown>> = new Map();

class AggregateErrorRehydrate extends AggregateError {
  constructor(
    public override errors: unknown[],
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(errors, message, { cause });
  }
}

class EvalErrorRehydrate extends EvalError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class RangeErrorRehydrate extends RangeError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class ReferenceErrorRehydrate extends ReferenceError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class SyntaxErrorRehydrate extends SyntaxError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class TypeErrorRehydrate extends TypeError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class URIErrorRehydrate extends URIError {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

class ErrorRehydrate extends Error {
  constructor(
    public override message: string,
    public override cause?: unknown,
    public override stack?: string,
  ) {
    super(message, { cause });
  }
}

function convertMessage(input: unknown): string {
  if (isRecordWithKeys(input, 'message') && typeof input.message === 'string') {
    return input.message;
  }

  return '';
}

function convertStack(input: unknown): undefined | string {
  if (isRecordWithKeys(input, 'stack') && typeof input.stack === 'string') {
    return input.stack;
  }

  return undefined;
}

function convertCause(dec: EspressoErrorDecoder, input: unknown): unknown {
  if (isRecordWithKeys(input, 'cause')) {
    return dec.convert(input.cause);
  }

  return undefined;
}

function convertErrors(dec: EspressoErrorDecoder, input: unknown): unknown[] {
  if (isRecordWithKeys(input, 'errors') && input.errors instanceof Array) {
    return input.errors.map(dec.convert);
  }

  return [];
}

class EspressoErrorDecoder implements Converter<unknown, unknown> {
  convert(input: unknown): unknown {
    assertRecordWithKeys(input, 'code', 'message');
    if (typeof input.code !== 'string') {
      throw new TypeError(
        `unable to retrieve "code" from error, expected "string", received ${typeof input.code}`,
      );
    }
    const code = input.code;

    switch (code) {
      case 'AggregateError':
        return new AggregateErrorRehydrate(
          convertErrors(this, input),
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );

      case 'EvalError':
        return new EvalErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'RangeError':
        return new RangeErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'ReferenceError':
        return new ReferenceErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'SyntaxError':
        return new SyntaxErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'TypeError':
        return new TypeErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'URIError':
        return new URIErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      case 'Error':
        return new ErrorRehydrate(
          convertMessage(input),
          convertCause(this, input),
          convertStack(input),
        );
      default: {
        const codec = espressoErrorRegistry.get(code);
        if (!codec) {
          throw new NoCodecFoundError(code);
        }

        return codec.decode(input);
      }
    }
  }
}

class EspressoErrorEncoder implements Converter<unknown, unknown> {
  convert(input: unknown): unknown {
    if (input === undefined) {
      return undefined;
    }

    if (input === null) {
      return null;
    }

    if (
      typeof input === 'object' &&
      input &&
      'code' in input &&
      typeof input.code === 'string'
    ) {
      const codec = espressoErrorRegistry.get(input.code);
      if (!codec) {
        throw new NoCodecFoundError(input.code);
      }

      return codec.encode(input);
    }

    // Is this a native error?
    if (input instanceof AggregateError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
        errors: input.errors.map((err) => this.convert(err)),
      };
    }

    if (input instanceof EvalError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof RangeError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof ReferenceError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof SyntaxError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof TypeError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof URIError) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    if (input instanceof Error) {
      return {
        code: input.name,
        message: input.message,
        stack: input.stack,
        cause: this.convert(input.cause),
      };
    }

    throw new Error('no codec found');
  }
}

class EspressoErrorCodec extends Codec<unknown, unknown> {
  readonly encoder: Converter<unknown, unknown> = new EspressoErrorEncoder();
  readonly decoder: Converter<unknown, unknown> = new EspressoErrorDecoder();
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
