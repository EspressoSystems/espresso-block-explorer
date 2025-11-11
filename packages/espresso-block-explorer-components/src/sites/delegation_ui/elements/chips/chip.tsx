import { addClassToClassName } from '@/components/higher_order';
import './chip.css';

export interface ChipProps extends React.PropsWithChildren {
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ className, children }) => {
  return (
    <span className={addClassToClassName(className, 'bchip')}>{children}</span>
  );
};
