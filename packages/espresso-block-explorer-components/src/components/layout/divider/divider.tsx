import { addClassToClassName } from '@/components/higher_order';
import './divider.css';

export interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = (props) => {
  return (
    <hr
      {...props}
      className={addClassToClassName(props.className, 'divider')}
    />
  );
};
