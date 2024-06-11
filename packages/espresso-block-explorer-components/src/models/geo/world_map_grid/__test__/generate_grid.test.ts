/**
 * This file is a script that is meant to be run in order to generate the grid
 * of points for use in displaying the World map as a grid of points on a
 * mercator projection.  With the raw continent data being ~10MB and the
 * computation of the grid taking ~30 seconds for the desired resolution, it
 * makes it undesirable to do this on the fly, at least with such extremes.  We
 * don't want to increase the data download by such a large amount, and we don't
 * want our page to be unresponsive for such a long time.  As such it is best
 * to just bake the grid result.
 *
 * This script is meant to be run in a node environment, and will generate the
 * grid of points for the world map at the desired resolution.  As a bonus,
 * since our chosen resolution is a multiple of 8, and the dots on the grid
 * are centered and are essentially on or off, we can further compress the
 * resulting data into a list of bytes.  This will allow us to reduce the
 * increase in the bundle size significantly while still allowing for fast
 * computation of the grid.
 */

import { stdEncoding } from '@/convert/base64';
import {
  firstIterator,
  foldRIterator,
  mapIterable,
} from '@/functional/functional';
import fs from 'node:fs';
import GeoJSONFeatureCollection, {
  geoJSONFeatureCollectionCodec,
} from '../../geo_json/feature_collection';
import GeoJSONMultiPolygon from '../../geo_json/multi_polygon';
import Degrees from '../../units/Degrees';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import { createEdgeFunction } from '../../winding_number/edge_function';
import { sundaysWindingAlgorithm } from '../../winding_number/sunday';
import { compressIntoBitMap } from '../compress_into_bitmap';
import {
  degreesToCoordinateSpaceProjection,
  gridCellCoordinateSpaceCenters,
} from '../constants';
import { runLengthEncode } from '../run_length_encoding';

/**
 * createEndAndEdgeFunction create an EdgeFunction by first creating an end
 * point based on the given point. These Edge functions are meant to act as
 * if they have been projected infinitely to thw right of the line.  Doing so,
 * however, would result in bad numbers.  Instead, we just project the point
 * sufficiently far to the right such that it is out of bounds of the rest
 * of the recorded points.  It is quite likely that it is not a requirement
 * of the endpoint to be unreachable.
 */
function createEndAndEdgeFunction(point: LatLng<Degrees>) {
  return [
    point,
    createEdgeFunction(
      point,
      new LatLng(new Latitude(new Degrees(Number(point.lat) + 10)), point.lng),
      // new LatLng(point.lat, new Longitude(new Degrees(400))),
    ),
  ] as const;
}

/**
 * hitTest is a function that tests if a point is within a land mass.
 */
function hitTest(
  point: LatLng<Degrees>,
  data: GeoJSONFeatureCollection,
): boolean {
  const [, edgeFunction] = createEndAndEdgeFunction(point);

  for (const feature of data.features) {
    const { geometry } = feature;

    if (!geometry.bbox.contains(point)) {
      // We don't need to scan this entry.
      continue;
    }

    if (!(geometry instanceof GeoJSONMultiPolygon)) {
      // We'll ignore non-multi polygons for now
      continue;
    }

    for (const multiPolygon of geometry.coordinates) {
      if (!multiPolygon.bbox.contains(point)) {
        // Another fast check to skip this multi polygon
        continue;
      }

      // According to the specification, a MultiPolygon is composed of many
      // rings.  The first ring is meant to be the outer ring, and any
      // subsequent rings are meant to be holes cut out from that area.

      const polygons = multiPolygon[Symbol.iterator]();

      const outline = firstIterator(polygons);
      if (!outline.bbox.contains(point)) {
        // A fast check to skip this polygon entirely.
        // As it does not contain the point.
        continue;
      }

      const initialWindingNumber = sundaysWindingAlgorithm(
        point,
        edgeFunction,
        mapIterable(outline, (point) => point.coordinates),
      );

      if ((initialWindingNumber & 0x01) === 0) {
        // If the winding number is even, that means we aren't in the outline
        // polygon, and we don't need to worry about that others.
        continue;
      }

      const holes = polygons;
      const otherWindingNumber = foldRIterator(
        (windingNumber: number, polygon) => {
          if (!polygon.bbox.contains(point)) {
            return windingNumber;
          }

          return (
            windingNumber +
            sundaysWindingAlgorithm(
              point,
              edgeFunction,
              mapIterable(polygon, (point) => point.coordinates),
            )
          );
        },
        0,
        holes,
      );

      const finalWindingNumber = initialWindingNumber + otherWindingNumber;
      if ((Math.abs(finalWindingNumber) & 0x01) === 1) {
        return true;
      }
      // console.info('final winding number', finalWindingNumber);
    }
  }

  return false;
}

/**
 * loadContinentData loads the continent data from the file
 * `raw_continents_data.json`. The file is expected to be a GEOJSON file of
 * the form anticipated by our source.  It will automatically expand or
 * "inflate" the data into the relevant Geo JSON objects.
 *
 * The file `raw_continents_data.json` is a GeoJSON file that was found at
 * this location: https://gist.github.com/cmunns/76fb72646a68202e6bde
 */
function loadContinentData() {
  return geoJSONFeatureCollectionCodec.decode(
    JSON.parse(fs.readFileSync('./files/raw_continents_data.json', 'utf8')),
  );
}

/**
 * computeLandMassHits computes the hits for the land mass data. This allows us
 * to generate an array of the same size of the grid with a bunch of booleans
 * that indicate where the land mass is.
 */
function computeLandMassHits(data: GeoJSONFeatureCollection) {
  return gridCellCoordinateSpaceCenters.map((center) =>
    hitTest(degreesToCoordinateSpaceProjection.inverseProject(center), data),
  );
}

function computeAndTimeLandMassHits(data: GeoJSONFeatureCollection) {
  const start = new Date();
  // This tells us if this cell is "on" or "off".  The cell being on indicates
  // that it is representing a land mass, off means that is is not.
  const hits = computeLandMassHits(data);
  const end = new Date();
  const gridGenerationTime = end.valueOf() - start.valueOf();

  // How long did it take to compute the grid?
  console.info('Grid generated in', gridGenerationTime, 'ms');
  return hits;
}

/**
 * main is the main function that is run when the script is executed.  It
 * will create a generated typescript file that contains the hit bitmap data
 * encoded by a single base64 string.
 */
function main() {
  const continentsData = loadContinentData();

  // This tells us if this cell is "on" or "off".  The cell being on indicates
  // that it is representing a land mass, off means that is is not.
  const hits = computeAndTimeLandMassHits(continentsData);

  // Now let's compress the grid. We to optimize the storage by choosing the
  // the next largest multiple of 8, as the booleans can be represented
  // by a single bit in a BitVector.

  const compressed = compressIntoBitMap(hits);
  const runLengthEncoded = runLengthEncode(compressed);

  console.info(
    'total bytes',
    compressed.byteLength,
    'total run length encoded bytes',
    runLengthEncoded.byteLength,
  );

  // Now we should have a fully compressed bitmap of the grid hits.
  const encoded = stdEncoding.encodeToString(runLengthEncoded);

  const fileHandle = fs.openSync(
    './src/models/geo/world_map_grid/baked_map_data.generated.ts',
    'w',
  );
  fs.writeSync(
    fileHandle,
    Buffer.from(`// This file is generated by a script.  To Regenerate the file simply run the
// command:
// npm --workspace=packages/espresso-block-explorer-components run regenerate-baked-map-data

export const hitBitmapData =
  '${encoded}';
`),
  );

  // Close the file
  fs.closeSync(fileHandle);
}

describe.skipIf(!process.env.GENERATE)('generate world map grid', () => {
  it('should return successfully', () => {
    main();
  });
});
