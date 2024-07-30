import { default as React } from '../../../../../node_modules/react';

export interface NumberTextProps {
    percentage: number;
}
/**
 * [PercentageText] is a component that will format the given `number` prop with
 * the percentage formatter retrieved from the `CurrentNumberFormatters` context.
 */
declare const PercentageText: React.FC<NumberTextProps>;
export default PercentageText;
