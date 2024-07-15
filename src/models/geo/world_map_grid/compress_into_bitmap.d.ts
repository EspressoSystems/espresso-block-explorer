/**
 * compressIntoBitMap compresses a boolean array into a bitmap (bitvec)
 * ultimately returning an ArrayBuffer that will be approximately 1/8th
 * the original size of the array.
 *
 * Note: the resulting ArrayBuffer will be padded to the number of bytes
 * that is 1/8th of the original array length, rounded up.
 */
export declare function compressIntoBitMap(grid: boolean[]): ArrayBuffer;
/**
 * expandIntoBooleanArray takes an ArrayBuffer that is expected to be a
 * bitmap (bitvec) and expands it into a boolean array.  The resulting
 * array will be 8 times the size of the input ArrayBuffer.
 */
export declare function expandIntoBooleanArray(bitmap: ArrayBuffer): boolean[];
