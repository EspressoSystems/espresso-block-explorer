import UnimplementedError from '@/errors/unimplemented_error';
import { isNumber } from '../codec/convert';

/**
 * cloneFromArrayOfNumbers will take an Array of numbers, and return a newly
 * allocated ArrayBuffer with the contents of the given input.
 * The numbers in the input are expected to be bytes, whose value is a
 * whole number in the range of 0 to 255.
 */
function cloneFromArrayOfNumbers(input: Array<number>): ArrayBuffer {
  const l = input.length;
  const buffer = new ArrayBuffer(l);
  const dst = new DataView(buffer);

  for (let i = 0; i < l; i++) {
    dst.setUint8(i, input[i]);
  }

  return buffer;
}

/**
 * cloneFromTypedArray will take a TypedArray, and return a newly allocated
 * `ArrayBuffer` that contains the same bytes as the given input.
 */
function cloneFromTypedArray(
  input:
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | BigUint64Array
    | Int8Array
    | Int16Array
    | Int32Array
    | BigInt64Array
    | Float32Array
    | Float64Array,
): ArrayBuffer {
  const l = input.byteLength;
  const buffer = new ArrayBuffer(l);
  const dst = new DataView(buffer);
  const src = new DataView(
    input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength),
  );

  for (let i = 0; i < l; i++) {
    dst.setUint8(i, src.getUint8(i));
  }

  return buffer;
}

/**
 * cloneFromArrayBuffer will take an ArrayBuffer like object, and return a
 * newly allocated `ArrayBuffer` whose contents are sourced from the given
 * input.
 */
function cloneFromArrayBuffer(
  input: ArrayBuffer | ArrayBufferLike,
): ArrayBuffer {
  const l = input.byteLength;
  const buffer = new ArrayBuffer(l);
  const dst = new Uint8Array(buffer);
  const src = new Uint8Array(input);

  dst.set(src, 0);

  return buffer;
}

/**
 * cloneArrayBuffer will take an ArrayBuffer like object, or an Array of
 * numbers, and return a newly allocated `ArrayBuffer` with the contents of
 * the given input.
 */
export function cloneArrayBuffer(
  input:
    | ArrayBuffer
    | ArrayBufferLike
    | Array<number>
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | BigUint64Array
    | Int8Array
    | Int16Array
    | Int32Array
    | BigInt64Array
    | Float32Array
    | Float64Array,
): ArrayBuffer {
  if (input instanceof Array) {
    if (input.every(isNumber)) {
      return cloneFromArrayOfNumbers(input);
    }

    throw new UnimplementedError();
  }

  if (
    input instanceof Uint8Array ||
    input instanceof Uint16Array ||
    input instanceof Uint32Array ||
    input instanceof BigUint64Array ||
    input instanceof Int8Array ||
    input instanceof Int16Array ||
    input instanceof Int32Array ||
    input instanceof BigInt64Array ||
    input instanceof Float32Array ||
    input instanceof Float64Array
  ) {
    return cloneFromTypedArray(input);
  }

  return cloneFromArrayBuffer(input);
}

/**
 * ensureArrayBuffer behaves very similarly to cloneArrayBuffer, with the
 * distinction that it will avoid an allocation if possible.
 */
export function ensureArrayBuffer(
  input:
    | ArrayBuffer
    | ArrayBufferLike
    | Array<number>
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | BigUint64Array
    | Int8Array
    | Int16Array
    | Int32Array
    | BigInt64Array
    | Float32Array
    | Float64Array,
): ArrayBuffer {
  if (input instanceof Array) {
    if (input.every(isNumber)) {
      return cloneFromArrayOfNumbers(input);
    }

    throw new UnimplementedError();
  }

  if (
    input instanceof Uint8Array ||
    input instanceof Uint16Array ||
    input instanceof Uint32Array ||
    input instanceof BigUint64Array ||
    input instanceof Int8Array ||
    input instanceof Int16Array ||
    input instanceof Int32Array ||
    input instanceof BigInt64Array ||
    input instanceof Float32Array ||
    input instanceof Float64Array
  ) {
    if (
      input.buffer instanceof ArrayBuffer &&
      input.byteOffset === 0 &&
      input.byteLength === input.buffer.byteLength
    ) {
      return input.buffer;
    }

    return cloneFromTypedArray(input);
  }

  if (input instanceof ArrayBuffer) {
    return input;
  }

  return cloneFromArrayBuffer(input);
}
