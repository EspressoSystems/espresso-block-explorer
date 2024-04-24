import { rawURLEncoding } from '@/convert/base64/base64';
import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTaggedBase64EncodingError from '@/errors/InvalidTaggedBase64EncodingError';
import InvalidTypeError from '@/errors/InvalidTypeError';

/**
 * TaggedBase64 is an implementation of the server side type of TaggedBase64.
 * It separates the tag portion from the data portion so that they can be
 * handled / assessed independently.
 */
export class TaggedBase64 {
  public readonly tag: string;
  public readonly data: ArrayBuffer;

  constructor(tag: string, data: ArrayBuffer) {
    this.tag = tag;
    this.data = data;
  }

  public static fromString(input: string): TaggedBase64 {
    const idx = input.indexOf('~');
    if (idx < 0) {
      throw new InvalidTaggedBase64EncodingError();
    }

    const tag = input.substring(0, idx);
    const data = rawURLEncoding.decodeString(input.substring(idx + 1));
    return new TaggedBase64(tag, data);
  }

  public static inflate(value: unknown): TaggedBase64 {
    return taggedBase64Codec.decode(value);
  }

  public toString(): string {
    return `${this.tag}~${rawURLEncoding.encodeToString(this.data)}`;
  }

  public valueOf(): string {
    return this.toString();
  }

  public toJSON() {
    return this.toString();
  }
}

export function isTaggedBase64(a: unknown): a is TaggedBase64 {
  return a instanceof TaggedBase64;
}

export class TaggedBase64Decoder implements Converter<unknown, TaggedBase64> {
  convert(input: unknown): TaggedBase64 {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return TaggedBase64.fromString(input);
  }
}

export class TaggedBase64Encoder implements Converter<TaggedBase64, string> {
  convert(input: TaggedBase64): string {
    return input.toString();
  }
}

export class TaggedBase64Codec extends TypeCheckingCodec<TaggedBase64, string> {
  encoder = new TaggedBase64Encoder();
  decoder = new TaggedBase64Decoder();
}

export const taggedBase64Codec = new TaggedBase64Codec();
