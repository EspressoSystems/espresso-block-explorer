import { default as DensityIndependentPoint } from '../units/DensityIndependentPoint';
import { default as LatLng } from '../units/LatLng';

export declare const hitMap: boolean[];
/**
 * As a convenience, we also provide the coordinates that are hits only,
 * so we don't need to worry about the grid cells that are not hits.
 */
export declare const worldMapGridDots: LatLng<DensityIndependentPoint>[];
