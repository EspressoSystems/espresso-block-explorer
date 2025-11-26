import React from 'react';
import './colors.css';
import { RetrieveLifetimeClaimedRewards } from './contexts/claimed_rewards_context';
import { DeriveConsensusSet } from './contexts/consensus_map_context';
import { DeriveCurrentDelegations } from './contexts/current_delegations_context';
import { ProvideESPBalance } from './contexts/esp_balance_context';
import { ProvideEspressoRefreshTimestampContext } from './contexts/espresso_refresh_timestamp_context';
import { ProvideL1RefreshTimestampContext } from './contexts/l1_refresh_timestamp_context';
import { DerivePendingExits } from './contexts/pending_exits_context';
import { DerivePendingUndelegations } from './contexts/pending_undelegations_context';
import { DeriveRank } from './contexts/rank_map_context';
import { RetrieveEspressoRewardClaimInput } from './contexts/reward_claim_input_context';
import { DeriveTotalStake } from './contexts/total_stake_context';
import { ProvideTotalSupply } from './contexts/total_supply_context';
import { ProvideValidatorSelection } from './contexts/validator_selection_context';
import { DelegationHeader } from './delegation_header';
import './delegation_ui.css';
import { DelegationUIContent } from './delegation_ui_content';
import { ProvideDelegationUILocalState } from './delegation_ui_local_state';

interface DelegationPageProps {
  className?: string;
}

/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
const DelegationUI: React.FC<DelegationPageProps> = () => {
  return (
    <ProvideContexts>
      <main className="delegation-ui">
        <DelegationHeader />

        <DelegationUIContent />
      </main>
    </ProvideContexts>
  );
};

const ProvideContexts: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ProvideL1RefreshTimestampContext>
      <ProvideEspressoRefreshTimestampContext>
        <ProvideTotalSupply>
          <ProvideESPBalance>
            <ProvideDelegationUILocalState>
              <RetrieveLifetimeClaimedRewards>
                <RetrieveEspressoRewardClaimInput>
                  <DeriveTotalStake>
                    <DeriveConsensusSet>
                      <DeriveRank>
                        <DeriveCurrentDelegations>
                          <DerivePendingUndelegations>
                            <DerivePendingExits>
                              <ProvideValidatorSelection>
                                {children}
                              </ProvideValidatorSelection>
                            </DerivePendingExits>
                          </DerivePendingUndelegations>
                        </DeriveCurrentDelegations>
                      </DeriveRank>
                    </DeriveConsensusSet>
                  </DeriveTotalStake>
                </RetrieveEspressoRewardClaimInput>
              </RetrieveLifetimeClaimedRewards>
            </ProvideDelegationUILocalState>
          </ProvideESPBalance>
        </ProvideTotalSupply>
      </ProvideEspressoRefreshTimestampContext>
    </ProvideL1RefreshTimestampContext>
  );
};

export default DelegationUI;
