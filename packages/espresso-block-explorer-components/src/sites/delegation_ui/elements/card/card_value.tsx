import { addClassToClassName } from '@/components/higher_order';
import { Card } from './card';

export interface ValueCardProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const CardValue: React.FC<ValueCardProps> = (props) => {
  return (
    <Card className={addClassToClassName(props.className, 'card-value')}>
      {props.children}
    </Card>
  );
};
