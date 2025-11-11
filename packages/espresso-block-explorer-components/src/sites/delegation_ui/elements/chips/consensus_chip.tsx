import { addClassToClassName } from '@/components/higher_order';
import { Chip, ChipProps } from './chip';

export const ConsensusChip: React.FC<ChipProps> = ({ className, children }) => {
  return (
    <Chip className={addClassToClassName(className, 'consensus-chip')}>
      {children}
    </Chip>
  );
};
