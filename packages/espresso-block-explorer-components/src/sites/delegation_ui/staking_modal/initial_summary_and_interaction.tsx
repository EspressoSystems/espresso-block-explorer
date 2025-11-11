import { addClassToClassName } from '@/components/higher_order';
import { ESPInput } from '@/components/input/esp/esp_input';
import MoneyText from '@/components/text/MoneyText';
import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { ActiveConsensusChip } from '../elements/chips/active_consensus_chip';
import { APYChip } from '../elements/chips/apy_chip';
import { InactiveConsensusChip } from '../elements/chips/inactive_consensus_chip';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';
import './initial_summary_and_interaction.css';

export const InitialSummaryAndInteraction: React.FC = () => {
  return (
    <div className="staking-modal-initial-summary-and-interaction">
      <ValidatorDisplayArea />
      <NoticeArea />
      <ESPInputArea />
    </div>
  );
};

const ValidatorDisplayArea: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const formattedAddress = hexArrayBufferCodec.encode(validator.address);
  const isActive = consensusMap.has(formattedAddress);

  const activeChip = isActive ? (
    <ActiveConsensusChip />
  ) : (
    <InactiveConsensusChip />
  );

  return (
    <div className="staking-modal-validator-display-area">
      <WalletAddressText value={new WalletAddress(validator.address)} />
      <br />
      <APYChip>
        <PercentageText percentage={0.035} />
        &nbsp;
        <Text text="APY" />
      </APYChip>
      &nbsp;
      {activeChip}
    </div>
  );
};

const NoticeArea: React.FC = () => {
  return (
    <div className="staking-modal-notice-area">
      <p>
        <Text text="Only top 100 validators are eligible to receive rewards, and will be sent upon next epoch start." />
      </p>
    </div>
  );
};

const ESPInputArea: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);

  const hasBalance = currentBalance >= stakingAmount.value;
  const insufficient = !hasBalance ? 'insufficient' : undefined;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="Amount to Stake" />
      </label>
      <ESPInput
        id="staking-modal-esp-input"
        className={addClassToClassName(
          insufficient,
          'staking-modal-esp-focus-display',
        )}
        value={stakingAmount}
        onChange={(_event, amount) => setStakingAmount(amount)}
      />
      <InputInfoArea />
    </div>
  );
};

const InputInfoArea: React.FC = () => {
  return (
    <div className="staking-modal-input-info-area">
      <InsufficientBalanceWarning />
      <CurrentBalanceArea />
    </div>
  );
};

const InsufficientBalanceWarning: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext);
  const currentBalance = React.useContext(ESPBalanceContext);

  if (currentBalance >= stakingAmount.value) {
    return null;
  }

  return (
    <div className="staking-modal-insufficient-balance-warning">
      <Text text="Insufficient Balance" />
    </div>
  );
};

const CurrentBalanceArea: React.FC = () => {
  const balance = React.useContext(ESPBalanceContext);
  return (
    <div className="staking-modal-current-balance-area">
      <span className="staking-modal-current-balance-label">
        <Text text="Balance" />
      </span>

      <span className="staking-modal-current-balance-value">
        <MoneyText money={MonetaryValue.ESP(balance)} />
      </span>
    </div>
  );
};
