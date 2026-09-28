import { default as React } from 'react';
export interface RelativeAndAbsoluteDateTimeTextProps {
    date: Date;
}
/**
 * RelativeAndAbsoluteDateTimeText renders the given date both as how long ago
 * it was and as the moment it happened -- "3 mins ago (9/23/2026, 10:20:49 AM
 * EDT)" -- so the reader gets the at-a-glance age and the exact timestamp
 * together.
 *
 * Both halves sit inside a single time element carrying the machine readable
 * dateTime and the UTC title that DateTimeText provides.
 */
declare const RelativeAndAbsoluteDateTimeText: React.FC<RelativeAndAbsoluteDateTimeTextProps>;
export default RelativeAndAbsoluteDateTimeText;
