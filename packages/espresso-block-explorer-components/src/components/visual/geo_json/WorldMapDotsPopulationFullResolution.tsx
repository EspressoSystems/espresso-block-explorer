import {
  degreesToCoordinateSpaceProjection,
  gridCellRadius,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import React from 'react';
import { DataContext, LoadingContext } from '../..';
import { DotPopulation } from './WorldMapDotsPopulationResolver';
import {
  MapCoordinateGridSpaceCentersContext,
  MapCoordinateSpaceRectContext,
} from './contexts';
import './world_map_dots.css';

/**
 * WorldMapDotsPopulationFullResolution represents dots that are lit up based on
 * the containing coordinate box.  The dots are meant to represent the parts
 * of the world that have a node present.
 */
const WorldMapDotsPopulationFullResolution: React.FC = () => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const loading = React.useContext(LoadingContext);
  const dotPopulation = React.useContext(DataContext) as DotPopulation[];
  const centers = React.useContext(MapCoordinateGridSpaceCentersContext);
  const radius =
    (Number(gridCellRadius) / Number(mapWidth)) * Number(rect.width);

  if (loading) {
    return <></>;
  }

  return (
    <svg
      className="world-map-dots"
      viewBox={`${Number(rect.x)} ${Number(rect.y)} ${Number(rect.x) + Number(rect.width)} ${Number(rect.y) + Number(rect.height)}`}
    >
      {dotPopulation.map((dot, index) => {
        const center = centers[dot.offset];
        return (
          <circle
            className="node"
            key={index}
            cx={Number(center.lng)}
            cy={Number(center.lat)}
            r={Number(radius)}
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

export default WorldMapDotsPopulationFullResolution;
