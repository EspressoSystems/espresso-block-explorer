import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConsensusMapContext } from '../contexts/consensus_map_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { ActiveConsensusChip } from '../elements/chips/active_consensus_chip';
import { APYChip } from '../elements/chips/apy_chip';
import { InactiveConsensusChip } from '../elements/chips/inactive_consensus_chip';

export const ValidatorDisplayArea: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const formattedAddress = validator.addressText;
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
