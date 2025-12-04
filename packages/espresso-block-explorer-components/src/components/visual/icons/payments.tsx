import React from 'react';
import SVGIconBase from './SVGIconBase';

/**
 * Payments is an icon used to represent payments or transactions.
 */
const Payments: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    props,
    // Uses Material Design Icon:
    // https://fonts.google.com/icons?selected=Material+Icons+Outlined:payments:&icon.query=pay&icon.size=24&icon.color=%23e3e3e3&icon.set=Material+Icons
    <>
      <g>
        <rect fill="none" height="24" width="24" />
        <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
      </g>
    </>,
  );

export default Payments;
