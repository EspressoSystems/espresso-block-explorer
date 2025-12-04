import { mercatorProjection } from '@/models/geo';
import { GeodesicProjection } from '@/models/geo/projection/geodesic_projection';
import Degrees from '@/models/geo/units/degrees';
import DensityIndependentPoint from '@/models/geo/units/density_independent_point';
import LatLng from '@/models/geo/units/lat_lng';
import Radians from '@/models/geo/units/radians';
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
 * CoordinateRectangle is a rectangle with the given `NumberLike` coordinates.
 */
export interface CoordinateRectangle<T extends NumberLike> {
  x: T;
  y: T;
  width: T;
  height: T;
}

/**
 * MapCoordinateSpaceRectContext is a context that provides the rectangle that
 * represents the coordinate space of the map.
 */
export const MapCoordinateSpaceRectContext = React.createContext<
  CoordinateRectangle<DensityIndependentPoint>
>({
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
