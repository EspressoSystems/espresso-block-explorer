import { default as DensityIndependentPoint } from '../units/density_independent_point';
import { default as LatLng } from '../units/lat_lng';
export declare const hitMap: boolean[];
/**
 * As a convenience, we also provide the coordinates that are hits only,
 * so we don't need to worry about the grid cells that are not hits.
 */
export declare const worldMapGridDots: LatLng<DensityIndependentPoint>[];
