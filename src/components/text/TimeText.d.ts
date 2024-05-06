import { default as React } from 'react';

export interface TimeTextProps {
    date: Date;
}
/**
 * TimeText renders the given date as only the time portion of a timestamp. It
 * also is sure to wrap the text in a time element for accessibility.
 *
 * It achieves this by using the `time` formatter from the
 * `CurrentDateTimeFormatters` context.
 */
declare const TimeText: React.FC<TimeTextProps>;
export default TimeText;
