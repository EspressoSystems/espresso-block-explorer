import React from 'react';
import SVGIconBase from '../svg_icon_base';

/**
 * DecorationDots represents a series of decorative dots.
 */
const DecorationDotsMask: React.FC<React.SVGProps<SVGElement>> = (props) =>
  React.createElement(
    SVGIconBase,
    {
      ...props,
      width: 0,
      height: 0,
      viewBox: '0 0 182 20',
    },
    // Feather Icon
    // These are dots used for decoration in the UI
    // Not part of the Feather Icon Set

    <defs>
      <mask id="dots-mask">
        <circle cx="2.85714" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="14.571" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="26.2859" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="37.9997" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="49.7146" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="61.4284" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="73.1433" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="84.8571" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="96.571" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="108.286" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="120" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="131.715" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="143.428" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="155.143" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="166.857" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="178.571" cy="2.85714" r="2.85714" fill="#fff" />
        <circle cx="2.85714" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="14.571" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="26.2859" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="37.9997" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="49.7146" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="61.4284" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="73.1433" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="84.8571" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="96.571" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="108.286" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="120" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="131.715" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="143.428" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="155.143" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="166.857" cy="16.5715" r="2.85714" fill="#fff" />
        <circle cx="178.571" cy="16.5715" r="2.85714" fill="#fff" />
      </mask>
    </defs>,
  );

export default DecorationDotsMask;
