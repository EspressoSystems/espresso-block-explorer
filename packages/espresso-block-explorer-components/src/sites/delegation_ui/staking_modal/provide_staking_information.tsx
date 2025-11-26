import React from 'react';
import { ProvideCurrentAllowanceToStakeTable } from './contexts/current_allowance_context';
import { ProvideCurrentStakeToValidator } from './contexts/current_stake_to_validator_context';
import { ProvideEstimatedFeesPerGas } from './contexts/estimated_fees_per_gas_context';
import { ProvideClaimValidatorExitAsyncIterableContext } from './contexts/perfom_claim_validator_exit_context';
import { ProvideApproveAsyncIterableContext } from './contexts/perform_approve_delegation_context';
import { ProvideClaimRewardsAsyncIterableContext } from './contexts/perform_claim_rewards_context';
import { ProvideClaimWithdrawalAsyncIterableContext } from './contexts/perform_claim_withdrawal_context';
import { ProvideDelegateAsyncIterableContext } from './contexts/perform_delegation_context';
import { ProvideUndelegateAsyncIterableContext } from './contexts/perform_undelgation_context';
import { ProvideValidatorFromContract } from './contexts/validator_from_contract_context';

export const ProvideCurrentStakingInformation: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return (
    <ProvideEstimatedFeesPerGas>
      <ProvideCurrentStakeToValidator>
        <ProvideValidatorFromContract>
          <ProvideCurrentAllowanceToStakeTable>
            <ProvideApproveAsyncIterableContext>
              <ProvideDelegateAsyncIterableContext>
                <ProvideUndelegateAsyncIterableContext>
                  <ProvideClaimWithdrawalAsyncIterableContext>
                    <ProvideClaimValidatorExitAsyncIterableContext>
                      <ProvideClaimRewardsAsyncIterableContext>
                        {children}
                      </ProvideClaimRewardsAsyncIterableContext>
                    </ProvideClaimValidatorExitAsyncIterableContext>
                  </ProvideClaimWithdrawalAsyncIterableContext>
                </ProvideUndelegateAsyncIterableContext>
              </ProvideDelegateAsyncIterableContext>
            </ProvideApproveAsyncIterableContext>
          </ProvideCurrentAllowanceToStakeTable>
        </ProvideValidatorFromContract>
      </ProvideCurrentStakeToValidator>
    </ProvideEstimatedFeesPerGas>
  );
};
