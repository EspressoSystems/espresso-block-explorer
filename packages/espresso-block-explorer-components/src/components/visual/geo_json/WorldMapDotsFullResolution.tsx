import {
  degreesToCoordinateSpaceProjection,
  gridCellRadius,
  mapHeight,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import { worldMapGridDots } from '@/models/geo/world_map_grid/world_map_grid';
import React from 'react';
import './world_map_dots.css';

/**
 * WorldMapDotsFullResolution represents the continent hit data as a series of
 * dots.  It is displayed at full resolution and is provided as an example.
 * Since SVGs can be embedded into other SVGs, and for convenience, it is
 * provided here as an SVG element.
 */
const WorldMapDotsFullResolution: React.FC = () => {
  return (
    <svg
      className="world-map-dots"
      viewBox={`0 0 ${Number(mapWidth)} ${Number(mapHeight)}`}
    >
      {worldMapGridDots.map((center, index) => {
        return (
          <circle
            className="continent"
            key={index}
            cx={Number(center.lng)}
            cy={Number(center.lat)}
            r={Number(gridCellRadius)}
            data-coord={degreesToCoordinateSpaceProjection
              .inverseProject(center)
              .toString()}
            data-index={index}
          />
        );
      })}
    </svg>
  );
};

export default WorldMapDotsFullResolution;
