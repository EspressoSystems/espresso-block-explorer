/**
 * cloneArrayBuffer will take an ArrayBuffer like object, or an Array of
 * numbers, and return a newly allocated `ArrayBuffer` with the contents of
 * the given input.
 */
export declare function cloneArrayBuffer(input: ArrayBuffer | ArrayBufferLike | Array<number> | Uint8Array | Uint16Array | Uint32Array | BigUint64Array | Int8Array | Int16Array | Int32Array | BigInt64Array | Float32Array | Float64Array): ArrayBuffer;
/**
 * ensureArrayBuffer behaves very similarly to cloneArrayBuffer, with the
 * distinction that it will avoid an allocation if possible.
 */
export declare function ensureArrayBuffer(input: ArrayBuffer | ArrayBufferLike | Array<number> | Uint8Array | Uint16Array | Uint32Array | BigUint64Array | Int8Array | Int16Array | Int32Array | BigInt64Array | Float32Array | Float64Array): ArrayBuffer;
