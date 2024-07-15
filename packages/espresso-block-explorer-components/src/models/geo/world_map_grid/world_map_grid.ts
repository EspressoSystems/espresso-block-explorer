/**
 * This file expands the hit bitmap data back into a boolean array of the
 * hits that correspond to the grid.
 */

import { stdEncoding } from '@/convert/base64';
import {
  filterIterable,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import DensityIndependentPoint from '../units/DensityIndependentPoint';
import LatLng from '../units/LatLng';
import { hitBitmapData } from './baked_map_data.generated';
import { expandIntoBooleanArray } from './compress_into_bitmap';
import { gridCellCoordinateSpaceCenters } from './constants';
import { expandRunLengthEncoding } from './run_length_encoding';

// Decode the base64 encoded data
const base64Decoded = stdEncoding.decodeString(hitBitmapData);
// Run length expand the run length encoded data
const runLengthDecoded = expandRunLengthEncoding(base64Decoded);
// Expand the hit map bit vector bytes into a boolean array
const hitMapDecoded = expandIntoBooleanArray(runLengthDecoded);

// This is our resulting hit map.  An Array of booleans.
export const hitMap = hitMapDecoded;

// We combine the coordinate centers with the hit boolean values.
const combinedCoordinateHitPairs = zipWithIterable(
  gridCellCoordinateSpaceCenters,
  hitMapDecoded,
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
export const worldMapGridDots = Array.from(onlyHitsCenters);
