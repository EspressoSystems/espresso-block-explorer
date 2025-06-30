import { addClassToClassName } from '@/components/higher_order';

export interface LabelProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Label represents a small text label that can be used in various
 * components to provide additional context or information.
 *
 * This is a contextual label that is **NOT** a `label` HTML element, which
 * is meant to be used with form elements.
 *
 * It ensures that text rendered within the label has the correct
 * typography, specifically using the 'type--ui--small' class.
 *
 */
export const Label: React.FC<LabelProps> = (props) => {
  return (
    <span
      className={addClassToClassName(
        props.className ?? 'type--ui--small',
        'label',
      )}
    >
      {props.children}
    </span>
  );
};
