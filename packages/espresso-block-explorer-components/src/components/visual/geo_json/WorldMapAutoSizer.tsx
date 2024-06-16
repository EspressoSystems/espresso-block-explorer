import DensityIndependentPoint from '@/models/geo/units/DensityIndependentPoint';
import React from 'react';
import { useSVGSize } from '../svg/hooks';
import { MapCoordinateSpaceRectContext } from './contexts';

export interface WorldMapAutoSizerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * resolveRectangle resolves the rectangle based on the state of the SVG element
 * and the current rectangle.  If the SVG element is not yet rendered, or if the
 * state is not yet available, the current rectangle is returned.
 */
function resolveRectangle(
  ref: React.MutableRefObject<SVGSVGElement | null>,
  state: DOMRect | null,
  rect: {
    x: DensityIndependentPoint;
    y: DensityIndependentPoint;
    width: DensityIndependentPoint;
    height: DensityIndependentPoint;
  },
) {
  if (
    ref.current === null ||
    state === null ||
    state.width <= 0 ||
    state.height <= 0
  ) {
    return rect;
  }

  return {
    x: new DensityIndependentPoint(state.x),
    y: new DensityIndependentPoint(state.y),
    width: new DensityIndependentPoint(state.width),
    height: new DensityIndependentPoint(state.height),
  };
}

/**
 * WorldMapAutoSizer is a component that automatically sizes the world map
 * based on the size of the SVG element that it is rendered in.  It is a
 * provider for the MapCoordinateSpaceRectContext.
 */
const WorldMapAutoSizer: React.FC<WorldMapAutoSizerProps> = (props) => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const [ref, state] = useSVGSize();

  const resolvedRect = resolveRectangle(ref, state, rect);

  return (
    <MapCoordinateSpaceRectContext.Provider value={resolvedRect}>
      <svg
        ref={ref}
        viewBox={`${Number(resolvedRect.x)} ${Number(resolvedRect.y)} ${Number(resolvedRect.x) + Number(resolvedRect.width)} ${Number(resolvedRect.y) + Number(resolvedRect.height)}`}
      >
        {props.children}
      </svg>
    </MapCoordinateSpaceRectContext.Provider>
  );
};

export default WorldMapAutoSizer;
