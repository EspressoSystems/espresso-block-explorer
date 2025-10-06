import { mapIterable, yieldAll } from '@/functional/functional';
import { addClassToClassName } from '@/higher_order';
import Text from '@/text/Text';
import React from 'react';
import './hex_dump.css';

export interface HexDumpProps {
  className?: string;
  value: ArrayBufferLike;
}

/**
 * hexEncodeOffset is a function that will encode the current binary offset
 * of the ArrayBuffer with 6 hex digits of precision.
 */
function hexEncodeOffset(offset: number): string {
  return Number(offset).toString(16).padStart(6, '0');
}

/**
 * hexEncodeByte is a function that will encode a single given byte with
 * 2 hex digits of precision.
 */
function hexEncodeByte(byte: number): string {
  return Number(byte).toString(16).padStart(2, '0');
}

/**
 * iterateWithStart is a function that pretends to be an iterator that
 * adds another iterator to the start. It emulates behavior similarly to the
 * cons function in Lisp / Scheme.
 *
 * @todo consider adding this to the functional file where it would likely
 *       be better served, and could be reused.
 */
function* iterateWithStart<T>(start: T, it: Iterator<T>) {
  yield start;
  yield* yieldAll(it);
}

const bytesPerLine = 16;

/**
 * generateHexDumpLineFormat outputs a sequence of string elements for an
 * individual line of the hexdump format.
 */
function* generateHexDumpLineFormat(offset: number, it: Iterator<string>) {
  yield hexEncodeOffset(offset);
  yield '  ';
  for (let l = 0; l < bytesPerLine; l++) {
    const next = it.next();
    if (next.done) {
      return;
    }

    if ((l & 0x01) === 0 && l !== 0) {
      yield ' ';
    }

    yield next.value;
  }
}

/**
 * generateHexDumpLinesFormat takes an iterator of strings, which is assumed
 * to be bytes formatted as hex.
 */
function* generateHexDumpLinesFormat(it: Iterator<string>) {
  let offset = 0;

  for (let next = it.next(); !next.done; next = it.next()) {
    const line = Array.from(
      generateHexDumpLineFormat(offset, iterateWithStart(next.value, it)),
    ).join('');
    offset += bytesPerLine;

    yield line;
  }
}

/**
 * buildHexDumpString will output the given ArrayBuffer as a hexdump formatted
 * string.
 */
function buildHexDumpString(value: ArrayBufferLike): string {
  const data = new Uint8Array(value);

  const it = mapIterable(data, hexEncodeByte);
  return Array.from(generateHexDumpLinesFormat(it)).join('\n');
}

/**
 * HexDump is a component that will display the data content of an
 * ArrayBuffer represented as hexadecimal.  It's format emulates
 * the hexdump binary for alignment, formatting and display.
 */
const HexDump: React.FC<HexDumpProps> = ({ value, className, ...props }) => {
  return (
    <>
      <pre
        {...props}
        className={addClassToClassName(className, 'hex-dump')}
        tabIndex={0}
      >
        <Text text={buildHexDumpString(value)} />
      </pre>
    </>
  );
};

export default HexDump;
