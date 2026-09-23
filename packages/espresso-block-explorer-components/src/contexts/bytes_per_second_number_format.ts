import { default as DecimalBytesNumberFormat } from './decimal_bytes_number_format';

/**
 * BytesPerSecondNumberFormat formats a rate of bytes per second in the largest
 * decimal unit it reaches: "512 B/s", "214.58 kB/s", "1.27 MB/s".
 *
 * See VariableBytesNumberFormat for the same stepping applied to a size.
 */
export default class BytesPerSecondNumberFormat extends DecimalBytesNumberFormat {
  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    super(locales, options, '-per-second', 'B/s');
  }
}
