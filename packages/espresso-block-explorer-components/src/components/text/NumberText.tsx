import React, { useContext } from 'react';
import { CurrentNumberFormatters } from '../contexts/NumberFormattersProvider';

export interface NumberTextProps {
  number: number;
}

/**
 * [NumberText] is a component that will format the given `number` prop with
 * the default currency formatter retrieved from the CurrentNumberFormatters.
 */
const NumberText: React.FC<NumberTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.default.format(props.number);
};

export default NumberText;
