import { CurrentNumberFormatters } from '@/contexts/NumberFormattersProvider';
import React, { useContext } from 'react';

export interface NumberTextProps {
  percentage: number;
}

/**
 * [PercentageText] is a component that will format the given `number` prop with
 * the percentage formatter retrieved from the `CurrentNumberFormatters` context.
 */
const PercentageText: React.FC<NumberTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.percentage.format(props.percentage);
};

export default PercentageText;
