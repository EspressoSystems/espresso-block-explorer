import { CurrentNumberFormatters } from '@/components/contexts/number_formatters_provider';
import { PercentageText } from '@/components/text';
import { RatioRational } from '@/service/espresso_l1_validator_service/common/ratio';
import React from 'react';

export interface RatioRationalText {
  rate: RatioRational;
}

/**
 * RatioRationalText is a component that displays a RatioRational
 * as a percentage, with a tooltip showing the exact fraction.
 */
export const RatioRationalText: React.FC<RatioRationalText> = ({ rate }) => {
  const numberFormatters = React.useContext(CurrentNumberFormatters);
  const formatter = numberFormatters.default;

  return (
    <span
      title={`${formatter.format(rate.numerator)} / ${formatter.format(rate.denominator)}`}
    >
      <PercentageText percentage={rate.ratio} />
    </span>
  );
};
