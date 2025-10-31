import { default as React } from 'react';
export interface RelativeTimeTextProps {
    durationInMilliseconds: number;
}
/**
 * TimeLeftText displays the duration specified in terms of the total number
 * of hours, minutes, and seconds that comprise the total milliseconds provided.
 */
declare const TimeLeftText: React.FC<RelativeTimeTextProps>;
export default TimeLeftText;
