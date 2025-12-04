import { ErrorCarry, ErrorJoiner } from '@/components/contexts';
import AsyncIterableResolver from '@/components/data/async_data/async_iterable_resolver';
import { NodeSummaryData } from '@/components/page_sections/nodes_summary_data_table/nodes_summary_loader';
import {
  filterIterable,
  inf,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import {
  mapAsyncIterable,
  unimplementedAsyncIterable,
} from '@/functional/functional_async';
import { Latitude, Longitude } from '@/models/geo';
import { generateBoundingBoxFromMinMaxes } from '@/models/geo/geo_json/bounding_box';
import Degrees from '@/models/geo/units/degrees';
import DensityIndependentPoint from '@/models/geo/units/density_independent_point';
import LatLng from '@/models/geo/units/lat_lng';
import {
  degreesToCoordinateSpaceProjection,
  gridCellCoordinateSpaceCenters,
  gridCellSize,
} from '@/models/geo/world_map_grid/constants';
import React from 'react';

export const NodeIdentityInformationStreamContext = React.createContext<
  AsyncIterable<NodeSummaryData[]>
>(unimplementedAsyncIterable());

export interface DotPopulation {
  offset: number;
  // center: LatLng<DensityIndependentPoint>;
  nodes: NodeSummaryData[];
}

/**
 * DotPopulationStreamContext is a context that provides an AsyncIterable of
 * DotPopulation.  The DotPopulation represents the nodes that are contained
 * within the bounding boxes of the map grid.
 */
export const DotPopulationStreamContext = React.createContext<
  AsyncIterable<DotPopulation[]>
>(unimplementedAsyncIterable());

/**
 * convertNodeInformationToDotPopulation is a function that takes in a list of
 * NodeSummaryData and converts it into a list of DotPopulation.  The DotPopulation
 * represents the nodes that are contained within the bounding boxes of the map grid.
 */
export function convertNodeInformationToDotPopulation(
  nodeInformation: NodeSummaryData[],
): DotPopulation[] {
  // Generating bounding boxes for every cell of the map
  const halfGridCellSize = Number(gridCellSize) / 2;
  const boundingBoxes = zipWithIterable(
    inf(),
    gridCellCoordinateSpaceCenters,
    (index, center) => {
      const min = new LatLng(
        new Latitude(
          new DensityIndependentPoint(Number(center.lat) - halfGridCellSize),
        ),
        new Longitude(
          new DensityIndependentPoint(Number(center.lng) - halfGridCellSize),
        ),
      );
      const max = new LatLng(
        new Latitude(
          new DensityIndependentPoint(Number(center.lat) + halfGridCellSize),
        ),
        new Longitude(
          new DensityIndependentPoint(Number(center.lng) + halfGridCellSize),
        ),
      );

      return {
        // center,
        offset: index,
        bbox: generateBoundingBoxFromMinMaxes([
          degreesToCoordinateSpaceProjection.inverseProject(min),
          degreesToCoordinateSpaceProjection.inverseProject(max),
        ]),
      };
    },
  );
  // Calculate which nodes are contained within the bounding box
  const rawDotPopulation = mapIterable(boundingBoxes, ({ offset, bbox }) => {
    const nodes = filterIterable(nodeInformation, (node) => {
      return (
        node.location !== null &&
        node.location.coords !== null &&
        bbox.contains(
          new LatLng(
            new Latitude(new Degrees(node.location.coords[0])),
            new Longitude(new Degrees(node.location.coords[1])),
          ),
        )
      );
    });

    return {
      // center,
      offset,
      bbox,
      nodes: Array.from(nodes),
    };
  });

  // Filter out bounding boxes that have no nodes.
  const filteredDotPopulation = filterIterable(
    rawDotPopulation,
    (dotPopulation) => dotPopulation.nodes.length > 0,
  );

  const result = Array.from(filteredDotPopulation);
  return result;
}

/**
 * convertNodeInformationToDotPopulationPromise is a function that takes in a
 * list of NodeSummaryData and converts it into a list of DotPopulation.
 */
export function convertNodeInformationToDotPopulationPromise(
  nodeInformation: NodeSummaryData[],
): Promise<DotPopulation[]> {
  return Promise.resolve(
    convertNodeInformationToDotPopulation(nodeInformation),
  );
}

export interface NodeInformationToDotPopulationProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * NodeInformationToDotPopulation is a component that takes in a stream of
 * a list of NodeSummaryData and converts it into a stream of a list of
 * DotPopulation.  The DotPopulation represents the nodes that are contained
 * within the bounding boxes of the map grid.
 */
export const NodeInformationToDotPopulation: React.FC<
  NodeInformationToDotPopulationProps
> = (props) => {
  const nodeInformation = React.useContext(
    NodeIdentityInformationStreamContext,
  );

  const dotPopulationHitMapStream = React.useMemo(
    () =>
      mapAsyncIterable(
        nodeInformation,
        convertNodeInformationToDotPopulationPromise,
      ),
    [nodeInformation],
  );

  return (
    <DotPopulationStreamContext.Provider value={dotPopulationHitMapStream}>
      {props.children}
    </DotPopulationStreamContext.Provider>
  );
};

export interface DotPopulationStreamConsumerProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * DotPopulationStreamConsumer is a component that consumes the
 * DotPopulationStreamContext.  It does this via the AsyncIterableResolver
 * component. The children of this component can retrieve the DotPopulation
 * via the contexts provided by the AsyncIterableResolver.
 */
export const DotPopulationStreamConsumer: React.FC<
  DotPopulationStreamConsumerProps
> = (props) => {
  const stream = React.useContext(DotPopulationStreamContext);

  return (
    <ErrorCarry>
      <AsyncIterableResolver asyncIterable={stream}>
        <ErrorJoiner>{props.children}</ErrorJoiner>
      </AsyncIterableResolver>
    </ErrorCarry>
  );
};
