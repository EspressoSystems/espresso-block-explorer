import { RewardClaimInput } from '../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/reward_state/reward_claim_input';
import { default as React } from 'react';
/**
 * EspressoRewardClaimInputContext provides a React Context
 * for the RewardClaimInput for the current wallet and espresso height
 */
export declare const EspressoRewardClaimInputContext: React.Context<RewardClaimInput | null>;
/**
 * RetrieveActiveValidators is a React Component that retrieves
 * the RewardClaimInput for the current wallet and espresso height and provides
 * it via the EspressoRewardClaimInputContext to its children.
 */
export declare const RetrieveEspressoRewardClaimInput: React.FC<React.PropsWithChildren>;
