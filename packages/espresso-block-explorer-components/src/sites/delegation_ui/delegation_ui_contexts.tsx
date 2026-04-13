import { default as React } from 'react';
import './colors.css';
import { RetrieveBlocksPerEpoch } from './contexts/blocks_per_epoch_context';
import { RetrieveLifetimeClaimedRewards } from './contexts/claimed_rewards_context';
import { DeriveConsensusSet } from './contexts/consensus_map_context';
import { DeriveCurrentDelegations } from './contexts/current_delegations_context';
import { DeriveCurrentTotalStaked } from './contexts/current_total_staked_context';
import { ProvideESPBalance } from './contexts/esp_balance_context';
import { ProvideEspressoRefreshTimestampContext } from './contexts/espresso_refresh_timestamp_context';
import { ProvideL1RefreshTimestampContext } from './contexts/l1_refresh_timestamp_context';
import { RetrieveLightClientFinalizedState } from './contexts/light_client_finalized_state_context';
import { ComputeMillisecondsPerBlock } from './contexts/milliseconds_per_block_context';
import { DerivePendingExits } from './contexts/pending_exits_context';
import { DerivePendingUndelegations } from './contexts/pending_undelegations_context';
import { DeriveRank } from './contexts/rank_map_context';
import { RetrieveEspressoRewardClaimInput } from './contexts/reward_claim_input_context';
import { DeriveTotalStake } from './contexts/total_stake_context';
import { ProvideTotalSupply } from './contexts/total_supply_context';
import { ProvideValidatorSelection } from './contexts/validator_selection_context';
import { ProvideDelegationUILocalState } from './delegation_ui_local_state';

/**
 * ProvideDelegationUIContexts is a component that provides all necessary
 * Contexts, Derived Contexts, and Information retrieval operations to the
 * components that are descendents in the Component tree.
 */
export const ProvideDelegationUIContexts: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideL1RefreshTimestampContext>
      <ProvideEspressoRefreshTimestampContext>
        <ProvideTotalSupply>
          <ProvideESPBalance>
            <ProvideDelegationUILocalState>
              <RetrieveLifetimeClaimedRewards>
                <RetrieveLightClientFinalizedState>
                  <RetrieveEspressoRewardClaimInput>
                    <RetrieveBlocksPerEpoch>
                      <DeriveTotalStake>
                        <DeriveCurrentTotalStaked>
                          <DeriveConsensusSet>
                            <DeriveRank>
                              <DeriveCurrentDelegations>
                                <DerivePendingUndelegations>
                                  <DerivePendingExits>
                                    <ProvideValidatorSelection>
                                      <ComputeMillisecondsPerBlock>
                                        {children}
                                      </ComputeMillisecondsPerBlock>
                                    </ProvideValidatorSelection>
                                  </DerivePendingExits>
                                </DerivePendingUndelegations>
                              </DeriveCurrentDelegations>
                            </DeriveRank>
                          </DeriveConsensusSet>
                        </DeriveCurrentTotalStaked>
                      </DeriveTotalStake>
                    </RetrieveBlocksPerEpoch>
                  </RetrieveEspressoRewardClaimInput>
                </RetrieveLightClientFinalizedState>
              </RetrieveLifetimeClaimedRewards>
            </ProvideDelegationUILocalState>
          </ProvideESPBalance>
        </ProvideTotalSupply>
      </ProvideEspressoRefreshTimestampContext>
    </ProvideL1RefreshTimestampContext>
  );
};
