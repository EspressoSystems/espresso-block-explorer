import Text from '@/components/text/Text';
import './active_consensus_chip.css';

export const ActiveConsensusChip: React.FC = () => {
  return (
    <span className="consensus-chip active">
      <Text text="Active" />
    </span>
  );
};
