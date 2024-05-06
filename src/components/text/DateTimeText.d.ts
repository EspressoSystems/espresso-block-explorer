import { default as React } from 'react';

export interface DateTimeTextProps {
    date: Date;
}
/**
 * DateTimeText is a simple Element used to render the given date with
 * the default DateTimeFormatters.  It also ensures that the timestamp
 * is wrapped in a time element for accessibility reference.
 */
declare const DateTimeText: React.FC<DateTimeTextProps>;
export default DateTimeText;
