import { describe, it } from 'vitest';
import { gridCellCoordinateSpaceCenters } from '../constants';
import { worldMapGridDots } from '../world_map_grid';

describe('World Map Grid', () => {
  it('should have fewer hit entries than the total number of grid coordinates', () => {
    expect(worldMapGridDots.length).lessThan(
      gridCellCoordinateSpaceCenters.length,
    );
  });
});
