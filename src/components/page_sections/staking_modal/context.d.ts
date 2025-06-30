import { default as MonetaryValue } from '../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { default as React } from 'react';
export declare enum StakingPhase {
    selectValidator = "selectValidator",
    specifyAmount = "specifyAmount",
    confirm = "confirm"
}
export interface StakingModalState {
    showModal: boolean;
    stakingPhase: null | StakingPhase;
    address: null | `0x${string}`;
    amount: null | MonetaryValue;
}
export interface StakingModalControls {
    showModal(selectAddress?: string): void;
    closeModal(): void;
    setAmount(amount: null | MonetaryValue): void;
    setValidator(address: null | `0x${string}`): void;
}
export declare const StakingModalStateContext: React.Context<StakingModalState>;
export declare const StakingModalControlsContext: React.Context<StakingModalControls>;
