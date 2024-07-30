import { default as React } from '../../../../../node_modules/react';

export interface NumberTextProps {
    number: number;
}
/**
 * [NumberText] is a component that will format the given `number` prop with
 * the default formatter retrieved from the `CurrentNumberFormatters` context.
 */
declare const NumberText: React.FC<NumberTextProps>;
export default NumberText;
