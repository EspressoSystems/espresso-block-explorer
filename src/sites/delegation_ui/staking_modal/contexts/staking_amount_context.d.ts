import { default as MonetaryValue } from '../../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { default as React } from 'react';
export declare const StakingAmountContext: React.Context<MonetaryValue>;
export declare const SetStakingAmountContext: React.Context<React.Dispatch<React.SetStateAction<MonetaryValue>>>;
export declare const ProvideStakingAmountContexts: React.FC<React.PropsWithChildren>;
