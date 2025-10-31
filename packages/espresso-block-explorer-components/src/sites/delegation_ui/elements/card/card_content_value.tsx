import './card_value.css';

/**
 * CardContentValue is a container for the main value displayed in a card.
 */
export const CardContentValue: React.FC<React.PropsWithChildren> = (props) => {
  return <div className="value">{props.children}</div>;
};
