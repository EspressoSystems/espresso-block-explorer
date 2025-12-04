import Text from '@/components/text/text';
import './active_consensus_chip.css';
import { ConsensusChip } from './consensus_chip';

export const ActiveConsensusChip: React.FC = () => {
  return (
    <ConsensusChip className="consensus-chip active">
      <Text text="Active" />
    </ConsensusChip>
  );
};
