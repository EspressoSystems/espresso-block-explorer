/**
 * runLengthEncode takes an input ArrayBuffer and encodes it using run-length
 * encoding. The encoding is performed a a pair of bytes.  The first pair is the
 * total number of repeats, and the second byte is the value that is being
 * repeated.
 */
export function runLengthEncode(input: ArrayBuffer): ArrayBuffer {
  const inputDataView = new DataView(input);

  const encodedBytes: number[] = [];

  const length = input.byteLength;
  let lastByte: number = inputDataView.getUint8(0);
  let run: number = 1;
  for (let i = 1; i < length; i++) {
    const byte = inputDataView.getUint8(i);
    if (byte === lastByte) {
      run++;
      if (run === 0xff) {
        // A full run.
        encodedBytes.push(run, lastByte);
        run = 0;
      }
      continue;
    }

    if (run >= 1) {
      encodedBytes.push(run, lastByte);
    }

    lastByte = byte;
    run = 1;
  }

  // We need to write the last run of bytes.
  if (run >= 1) {
    encodedBytes.push(run, lastByte);
  }

  const result = new ArrayBuffer(encodedBytes.length);
  const resultDataView = new DataView(result);
  for (let i = 0; i < encodedBytes.length; i++) {
    const byte = encodedBytes[i];
    resultDataView.setUint8(i, byte);
  }

  return result;
}

/**
 * expandRunLengthEncoding takes an input ArrayBuffer, that is assumed to
 * be run-length encoded, and will attempt to expand it.
 */
export function expandRunLengthEncoding(input: ArrayBuffer): ArrayBuffer {
  const inputDataView = new DataView(input);
  const inputByteLength = input.byteLength;

  // Figure out the total number of bytes of the result.
  // The run is the first byte in each pair, so just increment through each
  // pair, and add the first byte to determine the total number of bytes.
  let totalBytes = 0;
  for (let i = 0; i < inputByteLength; i += 2) {
    totalBytes += inputDataView.getUint8(i);
  }

  const result = new ArrayBuffer(totalBytes);
  const resultDataView = new DataView(result);
  for (let i = 0, o = 0; i < inputByteLength; i += 2) {
    const run = inputDataView.getUint8(i);
    const byte = inputDataView.getUint8(i + 1);

    for (let j = 0; j < run; j++) {
      resultDataView.setUint8(o++, byte);
    }
  }

  return result;
}
