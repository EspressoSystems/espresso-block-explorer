import { addClassToClassName } from '@/higher_order';
import React from 'react';
import SVGIconBase from './svg_icon_base';

/**
 * SearchGlass represents an icon of a search glass angled up to the left.
 */
const SearchGlass: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,

      className: addClassToClassName(props.className, 'stroked'),
    },
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M21.0004 20.9984L16.6504 16.6484"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  );

export default SearchGlass;
