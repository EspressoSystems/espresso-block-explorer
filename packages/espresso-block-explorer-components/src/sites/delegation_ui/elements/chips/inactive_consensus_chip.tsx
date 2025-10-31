import Text from '@/components/text/Text';
import './inactive_consensus_chip.css';

export const InactiveConsensusChip: React.FC = () => {
  return (
    <span className="consensus-chip inactive">
      <Text text="Inactive" />
    </span>
  );
};
