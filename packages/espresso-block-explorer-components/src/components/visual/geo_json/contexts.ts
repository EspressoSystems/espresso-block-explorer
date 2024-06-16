import { mercatorProjection } from '@/models/geo';
import { GeodesicProjection } from '@/models/geo/projection/GeodesicProjection';
import Degrees from '@/models/geo/units/Degrees';
import DensityIndependentPoint from '@/models/geo/units/DensityIndependentPoint';
import LatLng from '@/models/geo/units/LatLng';
import Radians from '@/models/geo/units/Radians';
import {
  degreesToCoordinateSpaceProjection,
  gridCellCoordinateSpaceCenters,
  mapHeight,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import { NumberLike } from '@/models/numeric/numeric';
import React from 'react';

/**
 * MapGeodesicToCoordinateSpaceProjectionContext is a context that provides a
 * GeodesicProjection that converts between degrees and density independent
 * points.
 */
export const MapGeodesicToCoordinateSpaceProjectionContext =
  React.createContext<GeodesicProjection<Degrees, DensityIndependentPoint>>(
    degreesToCoordinateSpaceProjection,
  );

/**
 * MapCoordinateSpaceRectContext is a context that provides the rectangle that
 * represents the coordinate space of the map.
 */
export const MapCoordinateSpaceRectContext = React.createContext<{
  x: DensityIndependentPoint;
  y: DensityIndependentPoint;
  width: DensityIndependentPoint;
  height: DensityIndependentPoint;
}>({
  x: new DensityIndependentPoint(0),
  y: new DensityIndependentPoint(0),
  width: mapWidth,
  height: mapHeight,
});

/**
 * MapCoordinateGridHitsContext is a context that provides an array of boolean
 * values that represent whether a grid cell was hit or not.
 */
export const MapCoordinateGridHitsContext = React.createContext<boolean[]>([]);

/**
 * MapCoordinateGridSpaceCentersContext is a context that provides an array of
 * LatLng<DensityIndependentPoint> that represent the centers of the grid cells
 * in the coordinate space.
 */
export const MapCoordinateGridSpaceCentersContext = React.createContext<
  LatLng<DensityIndependentPoint>[]
>(gridCellCoordinateSpaceCenters);

/**
 * MapGeodesicProjectionContext is a context that provides a GeodesicProjection
 * that converts between Radians and NumberLike.
 *
 * The default projection is the Mercator projection.
 */
export const MapGeodesicProjectionContext =
  React.createContext<GeodesicProjection<Radians, NumberLike>>(
    mercatorProjection,
  );
