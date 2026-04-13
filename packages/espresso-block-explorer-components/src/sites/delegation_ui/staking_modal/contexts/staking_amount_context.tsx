import { MonetaryValue } from '@/models/block_explorer';
import { default as React } from 'react';

export const StakingAmountContext = React.createContext<null | MonetaryValue>(
  null,
);

export const SetStakingAmountContext = React.createContext<
  React.Dispatch<React.SetStateAction<null | MonetaryValue>>
>(() => {});

function useSpecifyStakingAmount(initialAmount: null | MonetaryValue = null) {
  return React.useState<null | MonetaryValue>(initialAmount);
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
