import { default as React } from 'react';
export interface RelativeDateTimeTextProps {
    date: Date;
}
/**
 * RelativeDateTimeText renders the given date as an elapsed duration ("12m
 * ago"), while keeping the same time element, absolute title, and machine
 * readable dateTime that DateTimeText provides.
 */
declare const RelativeDateTimeText: React.FC<RelativeDateTimeTextProps>;
export default RelativeDateTimeText;
