import Text from '@/components/text/Text';
import { ConsensusChip } from './consensus_chip';
import './inactive_consensus_chip.css';

export const InactiveConsensusChip: React.FC = () => {
  return (
    <ConsensusChip className="consensus-chip inactive">
      <Text text="Inactive" />
    </ConsensusChip>
  );
};
