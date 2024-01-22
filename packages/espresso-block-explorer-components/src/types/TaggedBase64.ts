import { rawURLEncoding } from './base64';

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
      throw new TypeError('unable to find ~ within string');
    }

    const tag = input.substring(0, idx);
    const data = rawURLEncoding.decodeString(input.substring(idx + 1));
    return new TaggedBase64(tag, data);
  }

  public static inflate(value: unknown): TaggedBase64 {
    if (typeof value !== 'string') {
      throw new TypeError(
        `expected a string, instead received ${typeof value}`,
      );
    }

    return TaggedBase64.fromString(value);
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
