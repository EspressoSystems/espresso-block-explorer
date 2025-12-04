import Text from '@/components/text/text';
import { ConsensusChip } from './consensus_chip';

export const UndelegatedChip: React.FC = () => {
  return (
    <ConsensusChip className="consensus-chip inactive">
      <Text text="Undelegated" />
    </ConsensusChip>
  );
};
