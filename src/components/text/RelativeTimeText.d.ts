import { default as React } from 'react';
export interface RelativeTimeTextProps {
    durationInMilliseconds: number;
}
/**
 * RelativeTimeText attempts to render the given duration into the
 * disparate components for localization.
 *
 * @todo
 * However, it combines them using traditional English Combining rules that
 * may not be guaranteed to localize into other languages well.
 */
declare const RelativeTimeText: React.FC<RelativeTimeTextProps>;
export default RelativeTimeText;
