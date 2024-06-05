import { describe, it } from 'vitest';
import DensityIndependentPoint from '../../units/DensityIndependentPoint';
import LatLng from '../../units/LatLng';
import Latitude from '../../units/Latitude';
import Longitude from '../../units/Longitude';
import {
  degreesToCoordinateSpaceProjection,
  mapHeight,
  mapWidth,
} from '../constants';

describe('Degrees to Coordinate Space Projection', () => {
  it('should map top left in coordinate space to top left in mercator projection', () => {
    const epsilon = 1e-9;
    const mapped = degreesToCoordinateSpaceProjection.inverseProject(
      new LatLng(
        new Latitude(new DensityIndependentPoint(0)),
        new Longitude(new DensityIndependentPoint(0)),
      ),
    );

    expect(Number(mapped.lat)).closeTo(-180, epsilon);
    expect(Number(mapped.lng)).closeTo(90, epsilon);
  });

  it('should map bottom right in coordinate space to top left in mercator projection', () => {
    const epsilon = 1e-9;
    const mapped = degreesToCoordinateSpaceProjection.inverseProject(
      new LatLng(
        new Latitude(new DensityIndependentPoint(mapWidth)),
        new Longitude(new DensityIndependentPoint(mapHeight)),
      ),
    );

    expect(Number(mapped.lat)).closeTo(180, epsilon);
    expect(Number(mapped.lng)).closeTo(-90, epsilon);
  });
});
