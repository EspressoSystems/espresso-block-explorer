import MoneyText from '@/components/text/MoneyText';
import Text from '@/components/text/Text';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import { EstimatedFeesPerGasContext } from './contexts/estimated_fees_per_gas_context';
import { LabelValueSplit } from './label_value_split';

export const TxFeeEstimate: React.FC = () => {
  const estimatedContractGas =
    React.useContext(EstimatedContractGasContext) ?? null;
  const estimatedFeesPerGas =
    React.useContext(EstimatedFeesPerGasContext) ?? null;

  let feeComponent = <Text text="-" />;

  if (estimatedContractGas === null || estimatedFeesPerGas === null) {
    //
  } else if (typeof estimatedFeesPerGas.maxFeePerGas !== 'undefined') {
    const feeEstimate =
      estimatedContractGas *
      (estimatedFeesPerGas.maxFeePerGas +
        estimatedFeesPerGas.maxPriorityFeePerGas);
    feeComponent = <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
  } else if (typeof estimatedFeesPerGas.gasPrice !== 'undefined') {
    const feeEstimate = estimatedContractGas * estimatedFeesPerGas.gasPrice;
    feeComponent = <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
  } else {
    const feeEstimate = estimatedContractGas * 1n;
    feeComponent = <MoneyText money={MonetaryValue.ETH(feeEstimate)} />;
  }

  return (
    <LabelValueSplit>
      <span>
        <Text text="Tx Fee" />
      </span>
      <span>{feeComponent}</span>
    </LabelValueSplit>
  );
};
