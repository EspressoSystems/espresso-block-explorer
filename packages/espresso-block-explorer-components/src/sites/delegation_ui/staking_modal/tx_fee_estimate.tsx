import { MoneyText } from '@/components/text';
import { Text } from '@/components/text';
import { CurrentNumberFormatters } from '@/contexts/number_formatters_provider';
import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import { EstimatedFeesPerGasContext } from './contexts/estimated_fees_per_gas_context';
import { LabelValueSplit } from './label_value_split';

/**
 * TxFeeEstimate displays an estimate of the transaction fee for a staking
 * operation.
 */
export const TxFeeEstimate: React.FC = () => {
  return (
    <LabelValueSplit>
      <span>
        <Text text="Tx Fee" />
      </span>
      <FeeBreakdown>
        <FeeDisplay />
      </FeeBreakdown>
    </LabelValueSplit>
  );
};

/**
 * isNotNull is a type guard that filters out null values.
 */
function isNotNull<T>(value: T | null): value is T {
  return value !== null;
}

/**
 * FeeBreakdown displays a breakdown of the fee estimate in a tooltip.
 */
const FeeBreakdown: React.FC<React.PropsWithChildren> = ({ children }) => {
  const estimatedContractGas =
    React.useContext(EstimatedContractGasContext) ?? null;
  const estimatedFeesPerGas =
    React.useContext(EstimatedFeesPerGasContext) ?? null;
  const numberFormatters = React.useContext(CurrentNumberFormatters);

  if (estimatedContractGas === null || estimatedFeesPerGas === null) {
    // No ability to display fee information
    return <span>{children}</span>;
  }

  const maxFeesPerGas = estimatedFeesPerGas.maxFeePerGas ?? null;
  const gasPrice = estimatedFeesPerGas.gasPrice ?? null;
  const maxPriorityFeePerGas = estimatedFeesPerGas.maxPriorityFeePerGas ?? null;
  const contractGasDisplay =
    numberFormatters.defaultFinance.format(estimatedContractGas);

  const gasPriceDisplay = !gasPrice
    ? null
    : numberFormatters.gwei.format(
        MonetaryValue.GWEI(gasPrice).toNumericLiteralString(),
      );
  const maxPriorityFeePerGasDisplay = !maxPriorityFeePerGas
    ? null
    : numberFormatters.gwei.format(
        MonetaryValue.GWEI(maxPriorityFeePerGas).toNumericLiteralString(),
      );
  const maxFeesPerGasDisplay = !maxFeesPerGas
    ? null
    : numberFormatters.gwei.format(
        MonetaryValue.GWEI(maxFeesPerGas).toNumericLiteralString(),
      );

  const priceComponents = [
    `Estimated Gas: ${contractGasDisplay}`,

    !gasPriceDisplay ? null : `Gas Price: ${gasPriceDisplay}`,
    !maxFeesPerGasDisplay ? null : `Max Fees Per Gas: ${maxFeesPerGasDisplay}`,
    !maxPriorityFeePerGasDisplay
      ? null
      : `Max Priority Fee Per Gas: ${maxPriorityFeePerGasDisplay}`,
    '',
  ];

  if (maxFeesPerGasDisplay && maxPriorityFeePerGasDisplay) {
    priceComponents.push(
      `${contractGasDisplay} * (${maxFeesPerGasDisplay} + ${maxPriorityFeePerGasDisplay}) = ${numberFormatters.ETHFull.format(
        MonetaryValue.ETH(
          estimatedContractGas * (maxFeesPerGas! + maxPriorityFeePerGas!),
        ).toNumericLiteralString(),
      )}`,
    );
  }

  const title = priceComponents.filter(isNotNull).join('\n');

  return <span title={title}>{children}</span>;
};

/**
 * FeeDisplay displays the estimated transaction fee.
 */
const FeeDisplay: React.FC = () => {
  const estimatedContractGas =
    React.useContext(EstimatedContractGasContext) ?? null;
  const estimatedFeesPerGas =
    React.useContext(EstimatedFeesPerGasContext) ?? null;

  if (estimatedContractGas === null || estimatedFeesPerGas === null) {
    // No ability to display fee information
    return <Text text="-" />;
  }

  if (typeof estimatedFeesPerGas.maxFeePerGas !== 'undefined') {
    const feeEstimate =
      estimatedContractGas *
      (estimatedFeesPerGas.maxFeePerGas +
        estimatedFeesPerGas.maxPriorityFeePerGas);
    return <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
  }

  if (typeof estimatedFeesPerGas.gasPrice !== 'undefined') {
    const feeEstimate = estimatedContractGas * estimatedFeesPerGas.gasPrice;
    return <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
  }

  const feeEstimate = estimatedContractGas * 1n;
  return <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
};
