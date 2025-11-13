import React from 'react';
import './colors.css';
import { RetrieveActiveValidators } from './contexts/active_validators_context';
import { RetrieveAllValidators } from './contexts/all_validators_context';
import { DeriveConsensusSet } from './contexts/consensus_map_context';
import { DeriveCurrentDelegations } from './contexts/current_delegations_context';
import { ProvideESPBalance } from './contexts/esp_balance_context';
import { RetrieveLatestL1BlockID } from './contexts/l1_block_id_context';
import { ProvideL1RefreshTimestampContext } from './contexts/l1_refresh_timestamp_context';
import { DerivePendingExits } from './contexts/pending_exits_context';
import { DerivePendingUndelegations } from './contexts/pending_undelegations_context';
import { DeriveRank } from './contexts/rank_map_context';
import { DeriveTotalStake } from './contexts/total_stake_context';
import { ProvideTotalSupply } from './contexts/total_supply_context';
import { ProvideValidatorSelection } from './contexts/validator_selection_context';
import { RetrieveWalletSnapshot } from './contexts/wallet_snapshot_context';
import { DelegationHeader } from './delegation_header';
import './delegation_ui.css';
import { DelegationUIContent } from './delegation_ui_content';

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
      <ProvideTotalSupply>
        <ProvideESPBalance>
          <RetrieveLatestL1BlockID>
            <RetrieveAllValidators>
              <RetrieveActiveValidators>
                <RetrieveWalletSnapshot>
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
                </RetrieveWalletSnapshot>
              </RetrieveActiveValidators>
            </RetrieveAllValidators>
          </RetrieveLatestL1BlockID>
        </ProvideESPBalance>
      </ProvideTotalSupply>
    </ProvideL1RefreshTimestampContext>
  );
};

export default DelegationUI;
