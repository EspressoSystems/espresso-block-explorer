import { IHotShotQueryServiceRewardStateAPI } from '../types';
import { RewardClaimInput } from './reward_claim_input';
/**
 * HotShotQueryServiceRewardStateAPI is a type that represents the
 * Reward State API for the HotShot Query Service. This interface
 * represents the idealized interactions for the Reward StateAPI.  This should
 * allow for easy interactions with the Reward State API, while also allowing for
 * different implementations for testing purposes.
 */
export type HotShotQueryServiceRewardStateAPI = IHotShotQueryServiceRewardStateAPI<RewardClaimInput>;
