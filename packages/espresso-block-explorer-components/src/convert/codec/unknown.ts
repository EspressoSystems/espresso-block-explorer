import { Codec, Converter, isArrayMemberFunction, isUnknown } from './convert';

export const isUnknownArray = isArrayMemberFunction(isUnknown);

/**
 * `UnknownConverter` is a `Converter` that really doesn't do anything.  It's
 * an identity converter in that it just returns whatever is given to it without
 * making any assertions or inspections as to the type of whatever is passed into
 * it.
 */
export class UnknownConverter implements Converter<unknown, unknown> {
  convert(input: unknown): unknown {
    // We know nothing about this type, so there's no real assert we can
    // perform here. Therefore this acts as an identity function, by just
    // returning what it received.

    return input;
  }
}

const unknownConverter = new UnknownConverter();

/**
 * UnknownCodec is a `Codec` that is used to "encode" and "decode" whatever
 * values are passed to it.  Since the `UnknownConverter` is an identity
 * `Converter`, this `Codec` doesn't actually perform any conversion at all.
 */
export class UnknownCodec extends Codec<unknown, unknown> {
  readonly encoder = unknownConverter;
  readonly decoder = unknownConverter;
}

export const unknownCodec = new UnknownCodec();
