import { default as DecimalBytesNumberFormat } from './decimal_bytes_number_format';

/**
 * VariableBytesNumberFormat formats a quantity of bytes in the largest decimal
 * unit it reaches: "512 B", "2.05 kB", "1.5 MB".
 *
 * This is necessary as Intl.NumberFormat's compact notation doesn't step
 * through SI prefixes, but abbreviates numbers of "thousands" instead. For
 * more detail please refer to the following:
 * https://stackoverflow.com/questions/77215632/why-intl-numberformat-formats-1000000000-bytes-as-1bb-instead-of-1gb
 */
export default class VariableBytesNumberFormat extends DecimalBytesNumberFormat {
  constructor(
    locales?: Intl.LocalesArgument,
    options?: Intl.NumberFormatOptions | undefined,
  ) {
    super(locales, options, '', 'B');
  }
}
