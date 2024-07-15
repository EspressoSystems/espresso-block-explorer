import {
  filterIterable,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import DensityIndependentPoint from '@/models/geo/units/DensityIndependentPoint';
import LatLng from '@/models/geo/units/LatLng';
import {
  degreesToCoordinateSpaceProjection,
  gridCellRadius,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import { hitMap } from '@/models/geo/world_map_grid/world_map_grid';
import React from 'react';
import {
  MapCoordinateGridSpaceCentersContext,
  MapCoordinateSpaceRectContext,
} from './contexts';
import './world_map_dots.css';

/**
 * WorldMapDotsFullResolution represents the continent hit data as a series of
 * dots.  It is displayed at full resolution and is provided as an example.
 * Since SVGs can be embedded into other SVGs, and for convenience, it is
 * provided here as an SVG element.
 */
const WorldMapDotsFullResolution: React.FC = () => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const gridCellCoordinateSpaceCenters = React.useContext(
    MapCoordinateGridSpaceCentersContext,
  );

  // We combine the coordinate centers with the hit boolean values.
  const combinedCoordinateHitPairs = zipWithIterable(
    gridCellCoordinateSpaceCenters,
    hitMap,
    (center: LatLng<DensityIndependentPoint>, hit: boolean) =>
      [center, hit] as const,
  );

  // We filter out the grid cells that did not result in a hit.  This
  // leaves us with fewer cells to consider for rendering.
  const onlyHitsCombinedCoordinateHitPairs = filterIterable(
    combinedCoordinateHitPairs,
    ([, hit]) => hit,
  );

  // We keep only the centers of the grid cells that were hits.
  const onlyHitsCenters = mapIterable(
    onlyHitsCombinedCoordinateHitPairs,
    ([center]) => center,
  );

  /**
   * As a convenience, we also provide the coordinates that are hits only,
   * so we don't need to worry about the grid cells that are not hits.
   */
  const worldMapGridDots = Array.from(onlyHitsCenters);

  const radius =
    (Number(gridCellRadius) / Number(mapWidth)) * Number(rect.width);

  return (
    <svg
      className="world-map-dots"
      viewBox={`${Number(rect.x)} ${Number(rect.y)} ${Number(rect.width)} ${Number(rect.height)}`}
    >
      {worldMapGridDots.map((center, index) => {
        return (
          <circle
            className="continent"
            key={index}
            cx={Number(center.lng)}
            cy={Number(center.lat)}
            r={Number(radius)}
            data-coord={degreesToCoordinateSpaceProjection
              .inverseProject(center)
              .toString()}
            data-index={index}
          />
        );
      })}
    </svg>
  );
};

export default WorldMapDotsFullResolution;
