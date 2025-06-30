import { GeodesicProjection } from '../../../../../../../../../../../src/models/geo/projection/GeodesicProjection';
import { default as Degrees } from '../../../../../../../../../../../src/models/geo/units/Degrees';
import { default as DensityIndependentPoint } from '../../../../../../../../../../../src/models/geo/units/DensityIndependentPoint';
import { default as LatLng } from '../../../../../../../../../../../src/models/geo/units/LatLng';
import { default as Radians } from '../../../../../../../../../../../src/models/geo/units/Radians';
import { NumberLike } from '../../../../../../../../../../../src/models/numeric/numeric';
import { default as React } from 'react';
/**
 * MapGeodesicToCoordinateSpaceProjectionContext is a context that provides a
 * GeodesicProjection that converts between degrees and density independent
 * points.
 */
export declare const MapGeodesicToCoordinateSpaceProjectionContext: React.Context<GeodesicProjection<Degrees, DensityIndependentPoint>>;
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
export declare const MapCoordinateSpaceRectContext: React.Context<CoordinateRectangle<DensityIndependentPoint>>;
/**
 * MapCoordinateGridHitsContext is a context that provides an array of boolean
 * values that represent whether a grid cell was hit or not.
 */
export declare const MapCoordinateGridHitsContext: React.Context<boolean[]>;
/**
 * MapCoordinateGridSpaceCentersContext is a context that provides an array of
 * LatLng<DensityIndependentPoint> that represent the centers of the grid cells
 * in the coordinate space.
 */
export declare const MapCoordinateGridSpaceCentersContext: React.Context<LatLng<DensityIndependentPoint>[]>;
/**
 * MapGeodesicProjectionContext is a context that provides a GeodesicProjection
 * that converts between Radians and NumberLike.
 *
 * The default projection is the Mercator projection.
 */
export declare const MapGeodesicProjectionContext: React.Context<GeodesicProjection<Radians, NumberLike>>;
