import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';

export const StakingAmountContext = React.createContext<MonetaryValue>(
  MonetaryValue.ESP(0n),
);

export const SetStakingAmountContext = React.createContext<
  React.Dispatch<React.SetStateAction<MonetaryValue>>
>(() => {});

function useSpecifyStakingAmount(
  initialAmount: MonetaryValue = MonetaryValue.ESP(0n),
) {
  return React.useState<MonetaryValue>(initialAmount);
}
export const ProvideStakingAmountContexts: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [amount, setAmount] = useSpecifyStakingAmount();

  return (
    <StakingAmountContext.Provider value={amount}>
      <SetStakingAmountContext.Provider value={setAmount}>
        {children}
      </SetStakingAmountContext.Provider>
    </StakingAmountContext.Provider>
  );
};
