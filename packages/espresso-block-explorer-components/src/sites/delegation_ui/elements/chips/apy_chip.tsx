import './apy_chip.css';
import { Chip } from './chip';

export const APYChip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Chip className="apy">{children}</Chip>;
};
