import React from 'react';
import { ProvideCurrentAllowanceToStakeTable } from './contexts/current_allowance_context';
import { ProvideCurrentStakeToValidator } from './contexts/current_stake_to_validator_context';
import { ProvideEstimatedFeesPerGas } from './contexts/estimated_fees_per_gas_context';
import { ProvideClaimValidatorExitPromiseContext } from './contexts/perfom_claim_validator_exit_context';
import { ProvideApproveAsyncIterableContext } from './contexts/perform_approve_delegation_context';
import { ProvideClaimRewardsPromiseContext } from './contexts/perform_claim_rewards_context';
import { ProvideClaimWithdrawalPromiseContext } from './contexts/perform_claim_withdrawal_context';
import { ProvideDelegateAsyncIterableContext } from './contexts/perform_delegation_context';
import { ProvideUndelegateAsyncIterableContext } from './contexts/perform_undelgation_context';

export const ProvideCurrentStakingInformation: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return (
    <ProvideEstimatedFeesPerGas>
      <ProvideCurrentStakeToValidator>
        <ProvideCurrentAllowanceToStakeTable>
          <ProvideApproveAsyncIterableContext>
            <ProvideDelegateAsyncIterableContext>
              <ProvideUndelegateAsyncIterableContext>
                <ProvideClaimWithdrawalPromiseContext>
                  <ProvideClaimValidatorExitPromiseContext>
                    <ProvideClaimRewardsPromiseContext>
                      {children}
                    </ProvideClaimRewardsPromiseContext>
                  </ProvideClaimValidatorExitPromiseContext>
                </ProvideClaimWithdrawalPromiseContext>
              </ProvideUndelegateAsyncIterableContext>
            </ProvideDelegateAsyncIterableContext>
          </ProvideApproveAsyncIterableContext>
        </ProvideCurrentAllowanceToStakeTable>
      </ProvideCurrentStakeToValidator>
    </ProvideEstimatedFeesPerGas>
  );
};
