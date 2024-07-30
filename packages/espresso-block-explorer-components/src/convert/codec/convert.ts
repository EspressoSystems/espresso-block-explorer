import ExpectedObjectWithKeyError from './ExpectedObjectWithKeyError';

/**
 * a Converter is a simple contract that indicates that a member is able to
 * be converted from an incoming input type of Input, to an outgoing output
 * type of Output.
 *
 * It makes not assertions about how this is achieved, or even indicates
 * whether it will succeed or not.
 *
 * Expect this conversion to have the potential to throw an error if the
 * necessary input conditions are not met.
 */
export interface Converter<Input = unknown, Output = unknown> {
  convert(input: Input): Output;
}

/**
 * A Codec is a combination of two converts that are able to convert back
 * and forth between the two types of representations.
 */
export abstract class Codec<A = unknown, B = unknown, C = B, D = A> {
  abstract readonly encoder: Converter<A, B>;
  abstract readonly decoder: Converter<C, D>;

  encode(input: A): B {
    return this.encoder.convert(input);
  }

  decode(input: C): D {
    return this.decoder.convert(input);
  }
}

/**
 * TypeCheckingCodec is a Codec that is able to convert between two types,
 * but also has the ability to check the input types before conversion.
 */
export abstract class TypeCheckingCodec<A = unknown, B = unknown> extends Codec<
  A,
  B,
  unknown,
  A
> {
  abstract readonly encoder: Converter<A, B>;
  abstract readonly decoder: Converter<unknown, A>;
}

export function isBoolean(input: unknown): input is boolean {
  return typeof input === 'boolean';
}

export function isNumber(input: unknown): input is number {
  return typeof input === 'number';
}

export function isString(input: unknown): input is string {
  return typeof input === 'string';
}

export function isSymbol(input: unknown): input is symbol {
  return typeof input === 'symbol';
}

export function isBigint(input: unknown): input is bigint {
  return typeof input === 'bigint';
}

export function isObject(input: unknown): input is Record<string, unknown> {
  return typeof input === 'object' && input !== null;
}

export function isUndefined(input: unknown): input is undefined {
  return typeof input === 'undefined';
}

export function isUnknown(input: unknown): input is unknown {
  return input !== undefined;
}

export function isNull(input: unknown): input is null {
  return input === null;
}

export function isEither<A, B>(
  predA: (input: unknown) => input is A,
  predB: (input: unknown) => input is B,
) {
  return (input: unknown): input is A | B => predA(input) || predB(input);
}

export function isArray<T>(
  input: unknown,
  predicate: (input: unknown) => input is T,
): input is T[] {
  return Array.isArray(input) && input.every(predicate);
}

export function isArrayMemberFunction<T>(
  predicate: (input: unknown) => input is T,
) {
  return (input: unknown): input is T[] => isArray(input, predicate);
}

export function isRecord<Key extends string, Value>(
  value: unknown,
  key: Key,
  predicate: (value: unknown) => value is Value,
): value is Record<Key, Value> {
  return (
    isObject(value) &&
    key in value &&
    predicate((value as Record<Key, unknown>)[key])
  );
}

/**
 * isRecordWithKeys is a helper function that indicates that the value passed
 * in is a record with the keys passed in.  This is a type checking function
 * for typescript.
 */
export function isRecordWithKeys<Key extends string>(
  value: unknown,
  ...keys: Key[]
): value is Record<Key, unknown> {
  return isObject(value) && keys.every((key) => key in value);
}

/**
 * assertRecordWithKeys is a helper function much like `isRecord`.  It is an
 * assertion type function for typescript, which indicates that the type passed
 * in has the keys passed in, otherwise this throw an error that indicates the
 * nature of the error in question.
 */
export function assertRecordWithKeys<Key extends string>(
  value: unknown,
  ...keys: Key[]
): asserts value is Record<Key, unknown> {
  if (typeof value !== 'object') {
    throw new Error('expected object');
  }

  if (value === null) {
    throw new Error('received null');
  }

  for (const key of keys) {
    if (!(key in value)) {
      throw new ExpectedObjectWithKeyError('object', key);
    }
  }
}

/**
 * assertErrorCode is a helper function for decoding Errors.  All encoded errors
 * are meant to have a 'code' present that indicates the type of error that is
 * present, and potentially how it should be decoded.
 */
export function assertErrorCode<Code extends string>(
  value: Record<'code', unknown>,
  code: Code,
): asserts value is Record<'code', Code> {
  if (!isString(value.code)) {
    throw new Error('code must be a string');
  }

  if (value.code !== code) {
    throw new Error(`expected code to be ${code}, got ${value.code}`);
  }
}

export function assertTypeCode<Type extends string>(
  value: Record<'type', unknown>,
  type: Type,
): asserts value is Record<'type', Type> {
  if (!isString(value.type)) {
    throw new Error('type must be a string');
  }

  if (value.type !== type) {
    throw new Error(`expected type to be ${type}, got ${value.type}`);
  }
}
