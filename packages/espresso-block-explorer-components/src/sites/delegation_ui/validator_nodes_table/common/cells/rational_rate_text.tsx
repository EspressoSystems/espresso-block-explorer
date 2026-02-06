import Text from '@/components/text/text';
import { PercentageText } from '@/components/text';
import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
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

  const content =
    !Number.isFinite(rate.ratio) || Number.isNaN(rate.ratio) ? (
      <Text text="-" />
    ) : (
      <PercentageText percentage={rate.ratio} />
    );

  return (
    <span
      title={`${formatter.format(rate.numerator)} / ${formatter.format(rate.denominator)}`}
    >
      {content}
    </span>
  );
};
