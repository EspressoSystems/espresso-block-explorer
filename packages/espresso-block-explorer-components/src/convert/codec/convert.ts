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
export abstract class Codec<A = unknown, B = unknown> {
  abstract readonly encoder: Converter<A, B>;
  abstract readonly decoder: Converter<B, A>;

  encode(input: A): B {
    return this.encoder.convert(input);
  }

  decode(input: B): A {
    return this.decoder.convert(input);
  }
}

/**
 * TypeCheckingCodec is a Codec that is able to convert between two types,
 * but also has the ability to check the input types before conversion.
 */
export abstract class TypeCheckingCodec<A = unknown, B = unknown> extends Codec<
  A,
  B | unknown
> {
  abstract readonly encoder: Converter<A, B>;
  abstract readonly decoder: Converter<unknown, A>;

  encode(input: A): B {
    return this.encoder.convert(input);
  }

  decode(input: unknown): A {
    return this.decoder.convert(input);
  }
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

export class InvalidInputError extends Error {
  constructor(message = 'invalid input') {
    super(message);
  }
}
