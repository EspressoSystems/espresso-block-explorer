import { PromiseResolver } from '@/components/data';
import { DataContext } from '@/contexts/data_provider';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { neverPromise } from '@/functional/functional_async';
import { L1RefreshTimestampContext } from '@/sites/delegation_ui/contexts/l1_refresh_timestamp_context';
import { default as React } from 'react';
import { type EstimateFeesPerGasReturnType } from 'viem/actions';

export const EstimatedFeesPerGasContext =
  React.createContext<null | EstimateFeesPerGasReturnType>(null);

export const ProvideEstimatedFeesPerGas: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  React.useContext(L1RefreshTimestampContext);
  const l1Methods = React.useContext(L1MethodsContext);

  const promise = !l1Methods ? neverPromise : l1Methods.estimateFeesPerGas({});

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToFeesPerGasEstimate>
        {children}
      </TransformDataToFeesPerGasEstimate>
    </PromiseResolver>
  );
};

const TransformDataToFeesPerGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(
    DataContext,
  ) as null | EstimateFeesPerGasReturnType;

  return (
    <EstimatedFeesPerGasContext.Provider value={data}>
      {children}
    </EstimatedFeesPerGasContext.Provider>
  );
};
