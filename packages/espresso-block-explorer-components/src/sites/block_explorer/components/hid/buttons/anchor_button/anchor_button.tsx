import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import {
  InternalLinkAnchorComponentContext,
  LinkProps,
} from '../../../links/link/link';

export interface AnchorButtonProps extends React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> {
  disabled?: boolean;
}

/**
 * AnchorButton is a link styled as a button. It navigates like InternalLink
 * (without a page reload in the app); disabled, it is a plain anchor.
 */
const AnchorButton: React.FC<AnchorButtonProps> = (props) => {
  const link = React.useContext(InternalLinkAnchorComponentContext);
  const enabled = !props.disabled && props.href !== undefined;

  return React.createElement(enabled ? link : 'a', {
    ...props,
    className: addClassToClassName(props.className, 'btn'),
    href: enabled ? props.href : undefined,
  } as LinkProps);
};

export default AnchorButton;
