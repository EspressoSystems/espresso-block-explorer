import { CurrentNumberFormatters } from '@/contexts/NumberFormattersProvider';
import React, { useContext } from 'react';

export interface NumberTextProps {
  number: number;
}

/**
 * [NumberText] is a component that will format the given `number` prop with
 * the default formatter retrieved from the `CurrentNumberFormatters` context.
 */
const NumberText: React.FC<NumberTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.default.format(props.number);
};

export default NumberText;
