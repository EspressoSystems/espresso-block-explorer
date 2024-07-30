import { default as React } from '../../../../../../node_modules/react';

/**
 * useSVGSize is a helpful hook that can be used to setup the automatic
 * measuring of an SVG element by attaching the returned reference to
 * the SVG element you desire to measure.
 */
export declare function useSVGSize(): readonly [React.MutableRefObject<SVGSVGElement | null>, DOMRect | null];
