import React from 'react';
import './colors.css';
import { RetrieveActiveValidators } from './contexts/active_validators_context';
import { RetrieveAllValidators } from './contexts/all_validators_context';
import { DeriveConsensusSet } from './contexts/consensus_map_context';
import { DeriveRank } from './contexts/rank_map_context';
import { DeriveTotalStake } from './contexts/total_stake_context';
import { ProvideTotalSupply } from './contexts/total_supply_context';
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
    <main className="delegation-ui">
      <DelegationHeader />

      <RetrieveAllValidators>
        <RetrieveActiveValidators>
          <DeriveTotalStake>
            <DeriveConsensusSet>
              <DeriveRank>
                <ProvideTotalSupply>
                  <DelegationUIContent />
                </ProvideTotalSupply>
              </DeriveRank>
            </DeriveConsensusSet>
          </DeriveTotalStake>
        </RetrieveActiveValidators>
      </RetrieveAllValidators>
    </main>
  );
};

export default DelegationUI;
