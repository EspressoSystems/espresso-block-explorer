import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';

export enum StakingPhase {
  selectValidator = 'selectValidator',
  specifyAmount = 'specifyAmount',
  confirm = 'confirm',
}

export interface StakingModalState {
  // Information Needed for Staking
  showModal: boolean;
  stakingPhase: null | StakingPhase;

  // Who to stake to
  address: null | `0x${string}`;

  // Amount to Stake
  amount: null | MonetaryValue;
}

export interface StakingModalControls {
  showModal(selectAddress?: string): void;
  closeModal(): void;
  setAmount(amount: null | MonetaryValue): void;
  setValidator(address: null | `0x${string}`): void;
}

export const StakingModalStateContext = React.createContext<StakingModalState>({
  showModal: false,
  stakingPhase: null,
  address: null,
  amount: null,
});

export const StakingModalControlsContext =
  React.createContext<StakingModalControls>({
    showModal: () => {},
    closeModal: () => {},
    setAmount: () => {},
    setValidator: () => {},
  });
