import { MonetaryValue } from '../../../../../../../../../../../../src/models/block_explorer';
import { default as React } from 'react';
export declare const StakingAmountContext: React.Context<MonetaryValue | null>;
export declare const SetStakingAmountContext: React.Context<React.Dispatch<React.SetStateAction<MonetaryValue | null>>>;
export declare const ProvideStakingAmountContexts: React.FC<React.PropsWithChildren>;
