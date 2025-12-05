import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * LogOut represents a logout icon.
 */
const LogOut: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      className: addClassToClassName(props.className, 'stroked'),
    },
    // Feather Icon
    // https://feathericons.com/?query=log-out

    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </>,
  );

export default LogOut;
