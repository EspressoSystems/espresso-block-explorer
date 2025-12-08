import WalletAddressText from '@/components/text/wallet_address_text';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { ActiveConsensusChip } from '../elements/chips/active_consensus_chip';
import { InactiveConsensusChip } from '../elements/chips/inactive_consensus_chip';

/**
 * ActiveStatusChip is a component that displays whether the validator is active
 * in consensus or not as a Chip.
 */
const ActiveStatusChip: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const formattedAddress = validator.addressText;
  const isActive = consensusMap.has(formattedAddress);

  if (isActive) {
    return <ActiveConsensusChip />;
  }
  return <InactiveConsensusChip />;
};

/**
 * ValidatorDisplayArea is a component that displays some summary details and
 * information about the targeted validator.
 */
export const ValidatorDisplayArea: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);

  return (
    <div className="staking-modal-validator-display-area">
      <WalletAddressText value={new WalletAddress(validator.address)} />
      <br />
      &nbsp;
      <ActiveStatusChip />
    </div>
  );
};
