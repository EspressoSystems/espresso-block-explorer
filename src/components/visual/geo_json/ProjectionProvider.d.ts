import { default as React } from 'react';

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
export declare const ProjectionProvider: React.FC<ProjectionProviderProps>;
