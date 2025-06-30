import { NodeSummaryData } from '../../../../../../../../../../../src/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import { default as React } from 'react';
export declare const NodeIdentityInformationStreamContext: React.Context<AsyncIterable<NodeSummaryData[]>>;
export interface DotPopulation {
    offset: number;
    nodes: NodeSummaryData[];
}
/**
 * DotPopulationStreamContext is a context that provides an AsyncIterable of
 * DotPopulation.  The DotPopulation represents the nodes that are contained
 * within the bounding boxes of the map grid.
 */
export declare const DotPopulationStreamContext: React.Context<AsyncIterable<DotPopulation[]>>;
/**
 * convertNodeInformationToDotPopulation is a function that takes in a list of
 * NodeSummaryData and converts it into a list of DotPopulation.  The DotPopulation
 * represents the nodes that are contained within the bounding boxes of the map grid.
 */
export declare function convertNodeInformationToDotPopulation(nodeInformation: NodeSummaryData[]): DotPopulation[];
/**
 * convertNodeInformationToDotPopulationPromise is a function that takes in a
 * list of NodeSummaryData and converts it into a list of DotPopulation.
 */
export declare function convertNodeInformationToDotPopulationPromise(nodeInformation: NodeSummaryData[]): Promise<DotPopulation[]>;
export interface NodeInformationToDotPopulationProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * NodeInformationToDotPopulation is a component that takes in a stream of
 * a list of NodeSummaryData and converts it into a stream of a list of
 * DotPopulation.  The DotPopulation represents the nodes that are contained
 * within the bounding boxes of the map grid.
 */
export declare const NodeInformationToDotPopulation: React.FC<NodeInformationToDotPopulationProps>;
export interface DotPopulationStreamConsumerProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * DotPopulationStreamConsumer is a component that consumes the
 * DotPopulationStreamContext.  It does this via the AsyncIterableResolver
 * component. The children of this component can retrieve the DotPopulation
 * via the contexts provided by the AsyncIterableResolver.
 */
export declare const DotPopulationStreamConsumer: React.FC<DotPopulationStreamConsumerProps>;
