import { default as React } from 'react';
export interface RelativeTimeTextProps {
    date: Date;
}
/**
 * RelativeTimeText attempts to render the given date into the disparate
 * components for localization.
 *
 * @todo
 * However, it combines them using traditional English Combining rules that
 * may not be guaranteed to localize into other languages well.
 */
declare const RelativeTimeText: React.FC<RelativeTimeTextProps>;
export default RelativeTimeText;
