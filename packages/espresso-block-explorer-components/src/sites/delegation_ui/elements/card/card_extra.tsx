/**
 * CardContentExtra component for displaying extra content in a card.
 */
export const CardContentExtra: React.FC<React.PropsWithChildren> = (props) => {
  return <div className="extra">{props.children}</div>;
};
