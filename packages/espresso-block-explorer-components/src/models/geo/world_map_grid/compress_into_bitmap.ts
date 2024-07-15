/**
 * compressIntoBitMap compresses a boolean array into a bitmap (bitvec)
 * ultimately returning an ArrayBuffer that will be approximately 1/8th
 * the original size of the array.
 *
 * Note: the resulting ArrayBuffer will be padded to the number of bytes
 * that is 1/8th of the original array length, rounded up.
 */
export function compressIntoBitMap(grid: boolean[]): ArrayBuffer {
  const numBytes = Math.ceil(grid.length / 8);
  const bitmapArrayBuffer = new ArrayBuffer(numBytes);
  const bitmapDataView = new DataView(bitmapArrayBuffer);
  const gridLength = grid.length;

  for (let i = 0; i < gridLength; i++) {
    const bitOffset = 0x07 - (i & 0x07);
    const byteOffset = i >> 3;

    let byte = bitmapDataView.getUint8(byteOffset);
    if (grid[i]) {
      byte |= 1 << bitOffset;
    }

    bitmapDataView.setUint8(byteOffset, byte);
  }

  return bitmapArrayBuffer;
}

/**
 * expandIntoBooleanArray takes an ArrayBuffer that is expected to be a
 * bitmap (bitvec) and expands it into a boolean array.  The resulting
 * array will be 8 times the size of the input ArrayBuffer.
 */
export function expandIntoBooleanArray(bitmap: ArrayBuffer): boolean[] {
  const bitmapDataView = new DataView(bitmap);
  const result = new Array(bitmap.byteLength * 8);
  const bitmapLength = bitmap.byteLength;

  for (let j = 0; j < bitmapLength; j++) {
    const byte = bitmapDataView.getUint8(j);
    for (let i = 0; i < 8; i++) {
      const bitOffset = 0x07 - i;
      const byteOffset = j;
      result[byteOffset * 8 + i] = Boolean(byte & (1 << bitOffset));
    }
  }

  return result;
}
