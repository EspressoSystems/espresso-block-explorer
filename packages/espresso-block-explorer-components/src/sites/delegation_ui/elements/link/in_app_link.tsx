import { default as React } from 'react';
import { NavigationContext } from '../../contexts/navigation_context';

export interface InAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

/**
 * InAppLink is a link to another Delegation UI view. Plain left clicks
 * navigate within the app when a NavigationContext is provided; modified
 * clicks (new tab, new window) and middle clicks keep normal link behavior.
 */
export const InAppLink: React.FC<InAppLinkProps> = ({
  href,
  onClick,
  ...props
}) => {
  const navigate = React.useContext(NavigationContext);

  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (
          !navigate ||
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          (props.target && props.target !== '_self')
        ) {
          return;
        }

        event.preventDefault();
        navigate(href);
      }}
    />
  );
};
