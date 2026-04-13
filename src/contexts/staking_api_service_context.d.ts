import { StakingAPIService } from '../../../../../../../../../src/service/espresso_staking_api_service/staking_api_service';
import { default as React } from 'react';
/**
 * StakingAPIServiceContext provides a React Context
 * for the StakingAPIService.
 */
export declare const StakingAPIServiceContext: React.Context<StakingAPIService>;
/**
 * ProvideStakingAPIServiceContext is a React Component that provides
 * the StakingAPIService context to its children.
 */
export declare const ProvideStakingAPIServiceContext: React.FC<React.PropsWithChildren>;
