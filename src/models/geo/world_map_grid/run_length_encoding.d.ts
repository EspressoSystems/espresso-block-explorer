/**
 * runLengthEncode takes an input ArrayBuffer and encodes it using run-length
 * encoding. The encoding is performed a a pair of bytes.  The first pair is the
 * total number of repeats, and the second byte is the value that is being
 * repeated.
 */
export declare function runLengthEncode(input: ArrayBuffer): ArrayBuffer;
/**
 * expandRunLengthEncoding takes an input ArrayBuffer, that is assumed to
 * be run-length encoded, and will attempt to expand it.
 */
export declare function expandRunLengthEncoding(input: ArrayBuffer): ArrayBuffer;
