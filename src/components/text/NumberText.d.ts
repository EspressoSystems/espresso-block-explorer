import { default as React } from 'react';
export interface NumberTextProps {
    number: number | bigint;
}
/**
 * [NumberText] is a component that will format the given `number` prop with
 * the default formatter retrieved from the `CurrentNumberFormatters` context.
 */
declare const NumberText: React.FC<NumberTextProps>;
export default NumberText;
