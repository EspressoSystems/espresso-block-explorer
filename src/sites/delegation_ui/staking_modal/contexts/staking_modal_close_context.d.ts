import { default as React } from 'react';
/**
 * Context to provide a function to close the staking modal.
 */
export declare const StakingModalCloseContext: React.Context<() => void>;
/**
 * ProvideStakingModalClose provides the StakingModalCloseContext to its
 * children, which when used will automatically close and clean up the
 * staking modal.
 */
export declare const ProvideStakingModalClose: React.FC<React.PropsWithChildren>;
