import { Undelegation } from '../../../../contracts/stake_table/stake_table_interface';
import { default as React } from 'react';
export declare const CurrentPendingUndelegationFromValidatorContext: React.Context<Undelegation | null>;
export declare const ProvideCurrentPendingUndelegationToValidator: React.FC<React.PropsWithChildren>;
