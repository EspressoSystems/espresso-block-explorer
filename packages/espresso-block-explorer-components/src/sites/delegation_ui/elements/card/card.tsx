import { addClassToClassName } from '@/components/higher_order';
import './card.css';

export interface CardProps extends React.PropsWithChildren {
  className?: string;
}

/**
 * Card component for displaying content in a card layout.
 */
export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={addClassToClassName(props.className, 'bcard')}>
      {props.children}
    </div>
  );
};
