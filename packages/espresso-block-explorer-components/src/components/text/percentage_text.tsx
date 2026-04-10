import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import { default as React, useContext } from 'react';

export interface PercentageTextProps {
  percentage: number;
}

/**
 * [PercentageText] is a component that will format the given `number` prop with
 * the percentage formatter retrieved from the `CurrentNumberFormatters` context.
 */
const PercentageText: React.FC<PercentageTextProps> = (props) => {
  const formatters = useContext(CurrentNumberFormatters);
  return formatters.percentage.format(props.percentage);
};

export default PercentageText;
