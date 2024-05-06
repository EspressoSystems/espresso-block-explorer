import { CorruptBase64InputError } from '@/errors/CorruptBase64InputError';
import { IncorrectBase64PaddingError } from '@/errors/IncorrectBase64PaddingError';
import { InvalidBase64AlphabetLengthError } from '@/errors/InvalidBase64LengthError';

const textEncoder = new TextEncoder();
export function convertStringToArrayBuffer(s: string): Uint8Array {
  return textEncoder.encode(s);
}

const textDecoder = new TextDecoder();
export function convertArrayBufferToString(ab: ArrayBuffer): string {
  return textDecoder.decode(ab);
}

export function* charCodesFromString(s: string) {
  const data = convertStringToArrayBuffer(s);
  yield* data;
}

function* fill256Array() {
  for (let i = 0; i < 256; i++) {
    yield 0xff;
  }
}

export const noPadding = -1;
export const stdPadding = '='.charCodeAt(0);

/**
 * Encoding represents a Base64 Encoding type. This class allows for the
 * creation of new Base64 Encodings with different alphabets of non standard
 * ordering.
 */
export class Encoding {
  private encodeMap: number[];
  private decodeMap: number[];
  private padChar: number;
  private strict: boolean;

  constructor(
    encodeMap: number[],
    decodeMap: number[],
    padChar: number = stdPadding,
    strict: boolean = false,
  ) {
    this.encodeMap = encodeMap;
    this.decodeMap = decodeMap;
    this.padChar = padChar;
    this.strict = strict;
  }

  static withAlphabet(alphabet: string): Encoding {
    const l = alphabet.length;
    if (l !== 64) {
      throw new InvalidBase64AlphabetLengthError(l);
    }

    const encodeMap = Array.from(charCodesFromString(alphabet));
    const decodeMap = Array.from(fill256Array());
    for (let i = 0; i < l; i++) {
      decodeMap[encodeMap[i]] = i;
    }

    return new Encoding(encodeMap, decodeMap);
  }

  withPadding(padChar: number): Encoding {
    return new Encoding(this.encodeMap, this.decodeMap, padChar, this.strict);
  }

  public encode(input: ArrayBuffer): ArrayBuffer {
    if (input.byteLength === 0) {
      return new ArrayBuffer(0);
    }

    let di = 0,
      si = 0;
    const n = Math.floor(input.byteLength / 3) * 3;
    const nextSize = Math.ceil(input.byteLength / 3) * 4;
    const result = new ArrayBuffer(nextSize);
    const src = new DataView(input);
    const dst = new DataView(result);
    while (si < n) {
      // Convert 3x 8bit source bytes into 4 bytes
      const val =
        (src.getUint8(si + 0) << 16) |
        (src.getUint8(si + 1) << 8) |
        src.getUint8(si + 2);

      dst.setUint8(di + 0, this.encodeMap[(val >> 18) & 0x3f]);
      dst.setUint8(di + 1, this.encodeMap[(val >> 12) & 0x3f]);
      dst.setUint8(di + 2, this.encodeMap[(val >> 6) & 0x3f]);
      dst.setUint8(di + 3, this.encodeMap[val & 0x3f]);

      si += 3;
      di += 4;
    }

    const remain = input.byteLength - si;
    if (remain === 0) {
      return result;
    }

    // Add the remaining small block
    let val = src.getUint8(si + 0) << 16;
    if (remain === 2) {
      val |= src.getUint8(si + 1) << 8;
    }

    dst.setUint8(di + 0, this.encodeMap[(val >> 18) & 0x3f]);
    dst.setUint8(di + 1, this.encodeMap[(val >> 12) & 0x3f]);

    switch (remain) {
      case 2:
        dst.setUint8(di + 2, this.encodeMap[(val >> 6) & 0x3f]);
        if (this.padChar !== noPadding) {
          dst.setUint8(di + 3, this.padChar);
          return result.slice(0, di + 4);
        }
        return result.slice(0, di + 3);
      case 1:
        if (this.padChar !== noPadding) {
          dst.setUint8(di + 2, this.padChar);
          dst.setUint8(di + 3, this.padChar);
          return result.slice(0, di + 4);
        }

        break;
    }

    return result.slice(0, di + 2);
  }

  public decode(input: ArrayBuffer): ArrayBuffer {
    const l = input.byteLength;
    if (l === 0) {
      return new ArrayBuffer(0);
    }

    const src = new DataView(input);
    const result = new ArrayBuffer(Math.floor((l / 4) * 3));
    const dst = new DataView(result);
    const temp = new ArrayBuffer(4);
    const dBuf = new DataView(temp);
    let n = 0;
    let si = 0;
    let di = 0;
    let end = false;

    while (si < l && !end) {
      // Read 4 bytes.
      // accounting for newline, carriage return, and padding bytes.
      let dinc = 3,
        dlen = 4;

      for (let j = 0; j < 4; j++) {
        if (si === l) {
          // This is potentially an error
          if (j === 0) {
            // n, false, nil
            return result;
          }

          if (j === 1 || this.padChar !== noPadding) {
            // n, false, error
            throw new CorruptBase64InputError(si - j);
          }

          dinc = j - 1;
          dlen = j;
          end = true;
          break;
        }

        const inV = src.getUint8(si);
        si++;

        const out = this.decodeMap[inV];
        if (out !== 0xff) {
          dBuf.setUint8(j, out);
          continue;
        }

        if (inV === 0x0a || inV === 0x0d) {
          j--;
          continue;
        }

        if (inV === this.padChar) {
          // We've reached the end and there's padding
          switch (j) {
            case 0:
            /* falls through */
            case 1:
              // incorrect padding
              // n, false, error
              throw new IncorrectBase64PaddingError();

            case 2:
              // two paddings are expected, the first padding is already
              // consumed.
              // skip new lines.
              while (
                si < l &&
                (src.getUint8(si) === 0x0a || src.getUint8(si) === 0x0d)
              ) {
                si++;
              }
              if (si === l) {
                // not enough padding
                throw new CorruptBase64InputError(l);
              }

              si++;
          }

          // Skip over newlines
          while (
            si < l &&
            (src.getUint8(si) === 0x0a || src.getUint8(si) === 0x0d)
          ) {
            si++;
          }

          if (si < l) {
            // trailing garbage
            throw new CorruptBase64InputError(si);
          }
          dinc = 3;
          dlen = j;
          end = true;
          break;
        }

        throw new CorruptBase64InputError(si - 1);
      }

      // Convert 4x 6bit source bytes into 3 bytes
      const val =
        (dBuf.getUint8(0) << 18) |
        (dBuf.getUint8(1) << 12) |
        (dBuf.getUint8(2) << 6) |
        dBuf.getUint8(3);

      dBuf.setUint8(2, (val >> 0) & 0xff);
      dBuf.setUint8(1, (val >> 8) & 0xff);
      dBuf.setUint8(0, (val >> 16) & 0xff);

      switch (dlen) {
        // @ts-expect-error - We are explicitly falling through intentionally
        // here.
        // falls through
        case 4:
          dst.setUint8(di + 2, dBuf.getUint8(2));
          dBuf.setUint8(2, 0);

        // @ts-expect-error - We are explicitly falling through intentionally
        // here.
        // falls through
        case 3:
          dst.setUint8(di + 1, dBuf.getUint8(1));
          if (this.strict && dBuf.getUint8(2) !== 0) {
            throw new CorruptBase64InputError(si - 1);
          }

        // falls through
        case 2:
          dst.setUint8(di + 0, dBuf.getUint8(0));
          if (
            this.strict &&
            (dBuf.getUint8(1) !== 0 || dBuf.getUint8(2) !== 0)
          ) {
            throw new CorruptBase64InputError(si - 2);
          }
      }

      di += dinc;
      n += dlen - 1;
    }

    return result.slice(0, n);
  }

  public decodeString(s: string) {
    return this.decode(convertStringToArrayBuffer(s).buffer);
  }

  public encodeToString(src: ArrayBuffer) {
    return convertArrayBufferToString(this.encode(src));
  }
}

export const stdEncoding = Encoding.withAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
);

export const rawStdEncoding = stdEncoding.withPadding(noPadding);

export const urlEncoding = Encoding.withAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
);

export const rawURLEncoding = urlEncoding.withPadding(noPadding);
