import { addClassToClassName } from '@/higher_order';
import { CardContentValue } from './card_content_value';
import { CardValue } from './card_value';
import './labeled_card_value.css';

export interface LabeledCardValueProps {
  className?: string;
  /**
   * The title, typically a table header cell such as FeeHeadCell, so the
   * card is labelled the same way as the validator table.
   */
  title: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * LabeledCardValue is a CardValue showing a single value under a title.
 */
export const LabeledCardValue: React.FC<LabeledCardValueProps> = (props) => {
  return (
    <CardValue
      className={addClassToClassName(props.className, 'labeled-card-value')}
    >
      <h2>{props.title}</h2>
      <CardContentValue>{props.children}</CardContentValue>
    </CardValue>
  );
};
