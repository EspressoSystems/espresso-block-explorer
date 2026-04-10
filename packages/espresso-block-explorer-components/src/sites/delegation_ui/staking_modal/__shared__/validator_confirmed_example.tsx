import { AsyncSnapshot } from '@/components/data/async_data/async_snapshot';
import {
  STValidator,
  Undelegation,
  ValidatorStatus,
} from '@/contracts/stake_table/stake_table_interface';
import { MonetaryValue } from '@/models/block_explorer';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { RewardClaimInput } from '@/service/hotshot_query_service/reward_state/reward_claim_input';
import { ActiveValidatorsContext } from '@/sites/delegation_ui/contexts/active_validators_context';
import { LifetimeClaimedRewardsContext } from '@/sites/delegation_ui/contexts/claimed_rewards_context';
import { ConfirmedValidatorContext } from '@/sites/delegation_ui/contexts/confirmed_valdiator_context';
import { DeriveConsensusSet } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ESPBalanceContext } from '@/sites/delegation_ui/contexts/esp_balance_context';
import { DialogModal } from '@/sites/delegation_ui/contexts/modal_context';
import { DeriveRank } from '@/sites/delegation_ui/contexts/rank_map_context';
import { EspressoRewardClaimInputContext } from '@/sites/delegation_ui/contexts/reward_claim_input_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  ClaimRewards,
  ProvideValidatorSelection,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionContext,
  ValidatorSelectionEnum,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import { WalletSnapshotContext } from '@/sites/delegation_ui/contexts/wallet_snapshot_context';
import { FakeDataMockOverrides } from '@/sites/delegation_ui/mock/fake_data';
import { default as React } from 'react';
import { DeriveNodeSetFromFullNodeSetSnapshot } from '../../contexts/all_validators_context';
import { FullNodeSetSnapshotContext } from '../../contexts/full_node_set_snapshot_context';
import { ClaimRewardsModalContent } from '../claim_rewards_content';
import { CurrentAllowanceToStakeTableContext } from '../contexts/current_allowance_context';
import { CurrentPendingUndelegationFromValidatorContext } from '../contexts/current_pending_undelegation_from_validator_context';
import { CurrentStakeToValidatorContext } from '../contexts/current_stake_to_validator_context';
import { ClaimValidatorExitAsyncSnapshotContext } from '../contexts/perfom_claim_validator_exit_context';
import { ApproveAsyncSnapshotContext } from '../contexts/perform_approve_delegation_context';
import { ClaimRewardsAsyncSnapshotContext } from '../contexts/perform_claim_rewards_context';
import { ClaimWithdrawalAsyncSnapshotContext } from '../contexts/perform_claim_withdrawal_context';
import { DelegateAsyncSnapshotContext } from '../contexts/perform_delegation_context';
import { UndelegateAsyncSnapshotContext } from '../contexts/perform_undelgation_context';
import { PerformWriteTransactionState } from '../contexts/perform_write_states';
import { StakingAmountContext } from '../contexts/staking_amount_context';
import { ProvideStakingHistory } from '../contexts/staking_modal_history_context';
import { ValidatorFromContractContext } from '../contexts/validator_from_contract_context';
import { ValidatorConfirmedModalContent } from '../staking_modal_validator_confirmed_content';
import { WithDrawClaimModalContent } from '../withdraw_claim_content';
import {
  activeValidatorSet,
  fullValidatorSet,
  walletSnapshot,
} from './example_data';

export interface ValidatorConfirmedExampleProps {
  selection: ValidatorSelectionEnum & { validatorAddress: `0x${string}` };
  validator: NodeSetEntry;
  balance: string;
  allowance: string;
  amount: string;
  claimableRewards: string;
  lifetimeRewardsClaimed: string;
  currentStakeToNode: string;
  undelegation: Undelegation;
  undelegationAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
  approvalAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
  delegationAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
  claimWithDrawalAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
  claimExitAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
  claimRewardsAsyncSnapshot: AsyncSnapshot<PerformWriteTransactionState>;
}

const Content: React.FC = () => {
  const selectedValidator = React.useContext(ValidatorSelectionContext);
  if (selectedValidator instanceof ClaimRewards) {
    return <ClaimRewardsModalContent />;
  }

  if (selectedValidator instanceof ValidatorConfirmedUndelegateWithdraw) {
    return <WithDrawClaimModalContent />;
  }

  return <ValidatorConfirmedModalContent />;
};

export const ValidatorConfirmedExample: React.FC<
  ValidatorConfirmedExampleProps
> = (props) => {
  return (
    <>
      <FakeDataMockOverrides>
        <WalletSnapshotContext.Provider value={walletSnapshot}>
          <ESPBalanceContext.Provider value={BigInt(props.balance)}>
            <CurrentPendingUndelegationFromValidatorContext.Provider
              value={props.undelegation}
            >
              <CurrentAllowanceToStakeTableContext.Provider
                value={BigInt(props.allowance)}
              >
                <EspressoRewardClaimInputContext.Provider
                  value={
                    new RewardClaimInput(
                      BigInt(props.claimableRewards),
                      new ArrayBuffer(),
                    )
                  }
                >
                  <LifetimeClaimedRewardsContext.Provider
                    value={BigInt(props.lifetimeRewardsClaimed)}
                  >
                    <ProvideValidatorSelection>
                      <ValidatorSelectionContext.Provider
                        value={props.selection}
                      >
                        <FullNodeSetSnapshotContext.Provider
                          value={fullValidatorSet}
                        >
                          <DeriveNodeSetFromFullNodeSetSnapshot>
                            <ActiveValidatorsContext.Provider
                              value={activeValidatorSet}
                            >
                              <DeriveRank>
                                <DeriveConsensusSet>
                                  <ConfirmedValidatorContext.Provider
                                    value={props.selection.validatorAddress}
                                  >
                                    <DialogModal className="staking-modal" open>
                                      <ProvideStakingHistory>
                                        <CurrentStakeToValidatorContext.Provider
                                          value={BigInt(
                                            props.currentStakeToNode,
                                          )}
                                        >
                                          <ValidatorFromContractContext.Provider
                                            value={
                                              new STValidator(
                                                1_000_000_000_000_000_000_000n,
                                                ValidatorStatus.active,
                                              )
                                            }
                                          >
                                            <ValidatorNodeContext.Provider
                                              value={props.validator}
                                            >
                                              <StakingAmountContext.Provider
                                                value={
                                                  props.amount.trim() === ''
                                                    ? null
                                                    : MonetaryValue.ESP(
                                                        BigInt(props.amount),
                                                      )
                                                }
                                              >
                                                <UndelegateAsyncSnapshotContext.Provider
                                                  value={
                                                    props.undelegationAsyncSnapshot
                                                  }
                                                >
                                                  <ApproveAsyncSnapshotContext.Provider
                                                    value={
                                                      props.approvalAsyncSnapshot
                                                    }
                                                  >
                                                    <DelegateAsyncSnapshotContext.Provider
                                                      value={
                                                        props.delegationAsyncSnapshot
                                                      }
                                                    >
                                                      <ClaimWithdrawalAsyncSnapshotContext.Provider
                                                        value={
                                                          props.claimWithDrawalAsyncSnapshot
                                                        }
                                                      >
                                                        <ClaimValidatorExitAsyncSnapshotContext.Provider
                                                          value={
                                                            props.claimExitAsyncSnapshot
                                                          }
                                                        >
                                                          <ClaimRewardsAsyncSnapshotContext.Provider
                                                            value={
                                                              props.claimRewardsAsyncSnapshot
                                                            }
                                                          >
                                                            <Content />
                                                          </ClaimRewardsAsyncSnapshotContext.Provider>
                                                        </ClaimValidatorExitAsyncSnapshotContext.Provider>
                                                      </ClaimWithdrawalAsyncSnapshotContext.Provider>
                                                    </DelegateAsyncSnapshotContext.Provider>
                                                  </ApproveAsyncSnapshotContext.Provider>
                                                </UndelegateAsyncSnapshotContext.Provider>
                                              </StakingAmountContext.Provider>
                                            </ValidatorNodeContext.Provider>
                                          </ValidatorFromContractContext.Provider>
                                        </CurrentStakeToValidatorContext.Provider>
                                      </ProvideStakingHistory>
                                    </DialogModal>
                                  </ConfirmedValidatorContext.Provider>
                                </DeriveConsensusSet>
                              </DeriveRank>
                            </ActiveValidatorsContext.Provider>
                          </DeriveNodeSetFromFullNodeSetSnapshot>
                        </FullNodeSetSnapshotContext.Provider>
                      </ValidatorSelectionContext.Provider>
                    </ProvideValidatorSelection>
                  </LifetimeClaimedRewardsContext.Provider>
                </EspressoRewardClaimInputContext.Provider>
              </CurrentAllowanceToStakeTableContext.Provider>
            </CurrentPendingUndelegationFromValidatorContext.Provider>
          </ESPBalanceContext.Provider>
        </WalletSnapshotContext.Provider>
      </FakeDataMockOverrides>
    </>
  );
};

export const DefaultMeta = {
  component: ValidatorConfirmedExample,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    balance: '5000000000000000000000000',
    amount: '',
    allowance: '0',
    currentStakeToNode: '50000000000000000000',
    claimableRewards: '5000000000000000000000',
    lifetimeRewardsClaimed: '0',

    undelegation: new Undelegation(5000000000000000000000n, 0n),
    undelegationAsyncSnapshot: AsyncSnapshot.nothing(),
    approvalAsyncSnapshot: AsyncSnapshot.nothing(),
    delegationAsyncSnapshot: AsyncSnapshot.nothing(),
    claimWithDrawalAsyncSnapshot: AsyncSnapshot.nothing(),
    claimExitAsyncSnapshot: AsyncSnapshot.nothing(),
    claimRewardsAsyncSnapshot: AsyncSnapshot.nothing(),
  },
  argTypes: {
    selection: { table: { disable: true } },
    validator: { table: { disable: true } },
    amount: { control: 'text' },
    balance: { control: 'text' },
    currentStakeToNode: { control: 'text' },

    undelegation: { table: { disable: true } },
    undelegationAsyncSnapshot: { table: { disable: true } },
    approvalAsyncSnapshot: { table: { disable: true } },
    delegationAsyncSnapshot: { table: { disable: true } },
    claimWithDrawalAsyncSnapshot: { table: { disable: true } },
    claimExitAsyncSnapshot: { table: { disable: true } },
    claimRewardsAsyncSnapshot: { table: { disable: true } },
  },

  globals: {
    background: 'light',
    parameters: {
      backgrounds: {
        default: 'light',
        options: {
          light: { name: 'Light', value: '#f8fafcff' },
        },
      },
    },
  },
} as const;
