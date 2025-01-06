import { addClassToClassName } from '@/higher_order';
import React from 'react';

import './link.css';

type CreateElementTarget = Parameters<typeof React.createElement>[0];

/**
 * InternalLinkAnchorComponentContext is a context that is used to determine the
 * underlying component to use for the internal link. This allows the component
 * to be easily swapped out for a different component if needed.
 *
 * The primary use case for this feature is to facilitate the special Link
 * components provided by NextJS, or other libraries as an enhancement to the
 * standard anchor tag.
 */
export const InternalLinkAnchorComponentContext =
  React.createContext<CreateElementTarget>('a');

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

/**
 * InternalLink component represents a simple Anchor tag link. This link is
 * expected to navigate to a different page on the same webpage. This component
 * may be expanded and have many different variations.
 *
 * This component utilizes the AnchorComponentContext to determine the
 * underlying component to use for the link. This allows the component to be
 * easily swapped out for a different component if needed.  The default
 * component specified by AnchorComponentContext is an anchor tag.
 */
export const InternalLink: React.FC<LinkProps> = (props) => {
  const component = React.useContext(InternalLinkAnchorComponentContext);

  const { className, children, ...rest } = props;

  return React.createElement(
    component,
    {
      ...rest,
      className: addClassToClassName(className, 'link'),
    } as LinkProps,
    children,
  );
};

/**
 * EgressLink is a component that represents a simple Anchor tag link. This
 * is provided separately from InternalLink as a means of adding context as to
 * the intent of the underlying link to navigate away from the current domain.
 */
export const EgressLink: React.FC<LinkProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <a {...rest} className={addClassToClassName(className, 'link')}>
      {children}
    </a>
  );
};
