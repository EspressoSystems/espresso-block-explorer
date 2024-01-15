import React from 'react';
export interface NumberTextProps {
    number: number;
}
/**
 * [NumberText] is a component that will format the given `number` prop with
 * the default currency formatter retrieved from the CurrentNumberFormatters.
 */
declare const NumberText: React.FC<NumberTextProps>;
export default NumberText;
