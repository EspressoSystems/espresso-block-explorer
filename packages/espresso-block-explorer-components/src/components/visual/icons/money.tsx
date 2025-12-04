import React from 'react';
import SVGIconBase from './SVGIconBase';

/**
 * Money is an icon used to represent money or currency.
 */
const Money: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Uses Material Design Icon:
    // https://fonts.google.com/icons?selected=Material+Icons+Outlined:money:&icon.query=money&icon.size=24&icon.color=%23e3e3e3&icon.set=Material+Icons
    <>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zm1-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z" />
    </>,
  );

export default Money;
