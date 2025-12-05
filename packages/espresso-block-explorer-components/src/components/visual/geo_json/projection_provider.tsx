import { expandIterable, iota, mapIterable } from '@/functional/functional';
import ChainProjection from '@/models/geo/projection/chain_projection';
import CoordinateSpaceProjection from '@/models/geo/projection/coordinate_space_projection';
import { degreesRadiansProjection } from '@/models/geo/projection/degrees_radians_projection';
import DensityIndependentPoint from '@/models/geo/units/density_independent_point';
import LatLng from '@/models/geo/units/lat_lng';
import Latitude from '@/models/geo/units/latitude';
import Longitude from '@/models/geo/units/longitude';
import {
  gridCellSize,
  mapWidth,
  numXCells,
  numYCells,
} from '@/models/geo/world_map_grid/constants';
import React from 'react';
import {
  MapCoordinateGridSpaceCentersContext,
  MapCoordinateSpaceRectContext,
  MapGeodesicProjectionContext,
  MapGeodesicToCoordinateSpaceProjectionContext,
} from './contexts';

export interface ProjectionProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProjectionProvider is a component that provides the necessary context for
 * the projection of geodesic coordinates to the coordinate space of the map.
 *
 * The projection is computed from the desired size of the map and the desired
 * geodesic projection.  These are consumed from the following contexts:
 * - MapCoordinateSpaceRectContext
 * - MapGeodesicProjectionContext
 *
 * This component is a provider for the following contexts:
 * - MapCoordinateGridSpaceCentersContext
 * - MapGeodesicToCoordinateSpaceProjectionContext
 *
 */
export const ProjectionProvider: React.FC<ProjectionProviderProps> = (
  props,
) => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const geodesicProjection = React.useContext(MapGeodesicProjectionContext);

  // We will create our new projection chain here, utilizing the rectangle
  // metrics were given.

  const geodesicOutToLocalCoordinateSpaceProjection =
    new CoordinateSpaceProjection(
      geodesicProjection.minOutput,
      geodesicProjection.maxOutput,
      new LatLng(
        new Latitude(
          new DensityIndependentPoint(Number(rect.y) + Number(rect.width)),
        ),
        new Longitude(rect.x),
      ),
      new LatLng(
        new Latitude(rect.y),
        new Longitude(
          new DensityIndependentPoint(Number(rect.x) + Number(rect.width)),
        ),
      ),
    );

  const radiansToLocalCoordinateSpaceProjection = new ChainProjection(
    geodesicProjection,
    geodesicOutToLocalCoordinateSpaceProjection,
  );

  const degreesToLocalCoordinateSpaceProjection = new ChainProjection(
    degreesRadiansProjection,
    radiansToLocalCoordinateSpaceProjection,
  );

  const cellSize = new DensityIndependentPoint(
    (Number(rect.width) * Number(gridCellSize)) / Number(mapWidth),
  );
  const halfCellSize = new DensityIndependentPoint(Number(cellSize) / 2);

  const yCoords = Array.from(
    mapIterable(
      iota(numYCells),
      (y) =>
        new Latitude(
          new DensityIndependentPoint(
            y * Number(cellSize) + Number(halfCellSize),
          ),
        ),
    ),
  );

  const xCoords = Array.from(
    mapIterable(
      iota(numXCells),
      (x) =>
        new Longitude(
          new DensityIndependentPoint(
            x * Number(cellSize) + Number(halfCellSize),
          ),
        ),
    ),
  );

  // compute the centers of the grid cells, in coordinate space.
  const gridCellCoordinateSpaceCenters = Array.from(
    expandIterable(xCoords, (coordX) => {
      return mapIterable(yCoords, (coordY) => new LatLng(coordY, coordX));
    }),
  );

  return (
    <MapCoordinateGridSpaceCentersContext.Provider
      value={gridCellCoordinateSpaceCenters}
    >
      <MapGeodesicToCoordinateSpaceProjectionContext.Provider
        value={degreesToLocalCoordinateSpaceProjection}
      >
        {props.children}
      </MapGeodesicToCoordinateSpaceProjectionContext.Provider>
    </MapCoordinateGridSpaceCentersContext.Provider>
  );
};
