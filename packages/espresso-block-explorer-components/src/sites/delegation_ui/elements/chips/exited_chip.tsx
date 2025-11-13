import Text from '@/components/text/Text';
import { ConsensusChip } from './consensus_chip';

export const ExitedChip: React.FC = () => {
  return (
    <ConsensusChip className="consensus-chip inactive">
      <Text text="Exited" />
    </ConsensusChip>
  );
};
