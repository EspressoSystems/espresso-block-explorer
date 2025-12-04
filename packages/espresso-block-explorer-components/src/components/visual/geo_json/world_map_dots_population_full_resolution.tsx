import { DataContext } from '@/components/contexts/DataProvider';
import { LoadingContext } from '@/components/contexts/LoadingProvider';
import { WithUiText600 } from '@/components/typography/typography';
import { foldRIterator } from '@/functional/functional';
import {
  degreesToCoordinateSpaceProjection,
  gridCellRadius,
  mapWidth,
} from '@/models/geo/world_map_grid/constants';
import React from 'react';
import Text from '../../text/Text';
import {
  SVGToolTipContentComponent,
  SVGToolTipDrawAreaHeight,
  SVGToolTipPointX,
  SVGToolTipPointY,
  SVGToolTipValueRatio,
  SVGTooltip,
} from '../svg/SVGToolTip';
import { DotPopulation } from './WorldMapDotsPopulationResolver';
import {
  MapCoordinateGridSpaceCentersContext,
  MapCoordinateSpaceRectContext,
} from './contexts';
import './world_map_dots.css';

const UiText600 = WithUiText600('text') as React.FC<
  React.SVGTextElementAttributes<SVGTextElement>
>;
const text600FontSize = 14;

const PopulationEntryContext = React.createContext<DotPopulation | null>(null);

const MAX_DOT_POPULATION_SCALE_ADJUSTMENT = 5;
const MIN_DOT_POPULATION_SCALE_ADJUSTMENT = 1;

/**
 * WorldMapDotsPopulationFullResolution represents dots that are lit up based on
 * the containing coordinate box.  The dots are meant to represent the parts
 * of the world that have a node present.
 */
const WorldMapDotsPopulationFullResolution: React.FC = () => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const loading = React.useContext(LoadingContext);
  const dotPopulationUnsorted =
    (React.useContext(DataContext) as DotPopulation[]) || [];
  const centers = React.useContext(MapCoordinateGridSpaceCentersContext);
  const radius =
    (Number(gridCellRadius) / Number(mapWidth)) * Number(rect.width);

  // We sort the population dots by the number of nodes they contain,
  // so that the largest dots are rendered first, and thus appear on top of
  // smaller dots in the SVG rendering.
  const dotPopulation = dotPopulationUnsorted
    .slice()
    .sort((a, b) => b.nodes.length - a.nodes.length);

  // We want to know the largest population of nodes in any dot, as this
  // will allow us to scale the radius of the dots based on the
  // population of nodes in that dot.
  const maxPopulation = foldRIterator(
    (acc, dot) => Math.max(dot.nodes.length, acc),
    1,
    dotPopulation[Symbol.iterator](),
  );

  if (loading) {
    return <></>;
  }

  // We scale the radius of the dots based on the population of nodes in that
  // dot.
  const dotScaler = (population: number): number => {
    return Math.max(
      Math.min(Math.log2(population + 1), MAX_DOT_POPULATION_SCALE_ADJUSTMENT),
      MIN_DOT_POPULATION_SCALE_ADJUSTMENT,
    );
  };

  return (
    <>
      <svg
        className="world-map-population-dots"
        viewBox={`${Number(rect.x)} ${Number(rect.y)} ${Number(rect.x) + Number(rect.width)} ${Number(rect.y) + Number(rect.height)}`}
      >
        {dotPopulation.map((dot, index) => {
          const center = centers[dot.offset];
          const adjustedRadius = radius * dotScaler(dot.nodes.length);
          return (
            <g
              key={index}
              data-population={dot.nodes.length}
              data-index={index}
              data-z-index={maxPopulation - dot.nodes.length}
            >
              <circle
                className="node"
                cx={Number(center.lng)}
                cy={Number(center.lat)}
                r={adjustedRadius}
                data-coord={degreesToCoordinateSpaceProjection
                  .inverseProject(center)
                  .toString()}
              />
            </g>
          );
        })}
      </svg>
      <svg
        className="world-map-population-dots-tooltips"
        viewBox={`${Number(rect.x)} ${Number(rect.y)} ${Number(rect.x) + Number(rect.width)} ${Number(rect.y) + Number(rect.height)}`}
      >
        {dotPopulation.map((dot, index) => {
          const center = centers[dot.offset];
          const adjustedRadius = radius * dotScaler(dot.nodes.length);
          return (
            <g className="population" key={index}>
              <rect
                className="node-hitbox"
                x={Number(center.lng) - Number(radius)}
                y={Number(center.lat) - Number(radius)}
                width={Number(adjustedRadius) * 2}
                height={Number(adjustedRadius) * 2}
                data-coord={degreesToCoordinateSpaceProjection
                  .inverseProject(center)
                  .toString()}
                data-index={index}
              />
              <PopulationEntryContext.Provider value={dot}>
                <WorldMapDotPopulationTooltip />
              </PopulationEntryContext.Provider>
            </g>
          );
        })}
      </svg>
    </>
  );
};

const WorldMapDotPopulationTooltip: React.FC = () => {
  const rect = React.useContext(MapCoordinateSpaceRectContext);
  const dot = React.useContext(PopulationEntryContext);
  const centers = React.useContext(MapCoordinateGridSpaceCentersContext);
  if (!dot) {
    return <></>;
  }

  const center = centers[dot.offset];
  const xOffset = Number(center.lng) / Number(rect.width);

  return (
    <SVGToolTipContentComponent.Provider value={WorldMapDotToolTipContent}>
      <SVGToolTipDrawAreaHeight.Provider value={Number(rect.height)}>
        <SVGToolTipPointX.Provider value={Number(center.lng)}>
          <SVGToolTipPointY.Provider value={Number(center.lat)}>
            <SVGToolTipValueRatio.Provider value={xOffset}>
              <SVGTooltip />
            </SVGToolTipValueRatio.Provider>
          </SVGToolTipPointY.Provider>
        </SVGToolTipPointX.Provider>
      </SVGToolTipDrawAreaHeight.Provider>
    </SVGToolTipContentComponent.Provider>
  );
};

const WorldMapDotToolTipContent: React.FC = () => {
  const dot = React.useContext(PopulationEntryContext);

  if (!dot) {
    return <></>;
  }

  return (
    <>
      {dot.nodes.map((node, index) => {
        if (node.name === null) {
          return (
            <UiText600
              key={index}
              x={Number(0)}
              y={text600FontSize * (index + 1)}
              textAnchor="start"
            >
              <Text text={`unnamed node ${index + 1}`} />
            </UiText600>
          );
        }

        return (
          <UiText600
            key={index}
            x={Number(0)}
            y={text600FontSize * (index + 1)}
            textAnchor="start"
          >
            <Text text={node.name} />
          </UiText600>
        );
      })}
    </>
  );
};

export default WorldMapDotsPopulationFullResolution;
