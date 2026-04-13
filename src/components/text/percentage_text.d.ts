import { default as React } from 'react';
export interface PercentageTextProps {
    percentage: number;
}
/**
 * [PercentageText] is a component that will format the given `number` prop with
 * the percentage formatter retrieved from the `CurrentNumberFormatters` context.
 */
declare const PercentageText: React.FC<PercentageTextProps>;
export default PercentageText;
