import { AsyncSnapshot } from '../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot';
import { Undelegation } from '../../../../contracts/stake_table/stake_table_interface';
import { NodeSetEntry } from '../../../../../../../../../../../../src/service/espresso_l1_validator_service/common/node_set_entry';
import { ValidatorSelectionEnum } from '../../contexts/validator_selection_context';
import { default as React } from 'react';
import { PerformWriteTransactionState } from '../contexts/perform_write_states';
export interface ValidatorConfirmedExampleProps {
    selection: ValidatorSelectionEnum & {
        validatorAddress: ArrayBuffer;
    };
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
export declare const ValidatorConfirmedExample: React.FC<ValidatorConfirmedExampleProps>;
export declare const DefaultMeta: {
    readonly component: React.FC<ValidatorConfirmedExampleProps>;
    readonly parameters: {
        readonly layout: "fullscreen";
    };
    readonly args: {
        readonly balance: "5000000000000000000000000";
        readonly amount: "0";
        readonly allowance: "0";
        readonly currentStakeToNode: "5000000000000000000000";
        readonly claimableRewards: "5000000000000000000000";
        readonly lifetimeRewardsClaimed: "0";
        readonly undelegation: Undelegation;
        readonly undelegationAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
        readonly approvalAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
        readonly delegationAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
        readonly claimWithDrawalAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
        readonly claimExitAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
        readonly claimRewardsAsyncSnapshot: {
            get asyncState(): import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            get data(): unknown;
            get error(): undefined | unknown;
            get hasData(): boolean;
            get hasError(): boolean;
            toJSON(): {
                asyncState: import('../../../../../../../../../../../../src/components/data/async_data/AsyncSnapshot').AsyncState;
            };
        };
    };
    readonly argTypes: {
        readonly selection: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly validator: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly amount: {
            readonly control: "text";
        };
        readonly balance: {
            readonly control: "text";
        };
        readonly currentStakeToNode: {
            readonly control: "text";
        };
        readonly undelegation: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly undelegationAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly approvalAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly delegationAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly claimWithDrawalAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly claimExitAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
        readonly claimRewardsAsyncSnapshot: {
            readonly table: {
                readonly disable: true;
            };
        };
    };
    readonly globals: {
        readonly background: "light";
        readonly parameters: {
            readonly backgrounds: {
                readonly default: "light";
                readonly options: {
                    readonly light: {
                        readonly name: "Light";
                        readonly value: "#f8fafcff";
                    };
                };
            };
        };
    };
};
