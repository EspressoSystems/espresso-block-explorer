import { sleep } from '@/async/sleep';
import { NodeSummaryData } from '@/components/page_sections/nodes_summary_data_table/NodesSummaryLoader';
import {
  GeneratedNodeIdentityInformation,
  nodeList,
} from '@/data_source/fake_data_source/generateFakeData';
import { mapIterable } from '@/functional/functional';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ProjectionProvider } from '../ProjectionProvider';
import WorldMapAutoSizer from '../WorldMapAutoSizer';
import WorldMapDotsFullResolution from '../WorldMapDotsFullResolution';
import WorldMapDotsPopulationFullResolution from '../WorldMapDotsPopulationFullResolution';
import {
  DotPopulationStreamConsumer,
  NodeIdentityInformationStreamContext,
  NodeInformationToDotPopulation,
} from '../WorldMapDotsPopulationResolver';

interface ExampleProps {}

function convertGeneratedNodeToNodeInformation(
  node: GeneratedNodeIdentityInformation,
): NodeSummaryData {
  return {
    name: node.name,
    address: node.address,
    companyDetails: {
      name: node.company.name,
      website: node.company.website,
    },
    location: {
      coords: node.location.coords,
      country: node.location.country,
    },
  };
}

const convertedNodeData = Array.from(
  mapIterable(nodeList, convertGeneratedNodeToNodeInformation),
);

async function* sampleNodeInformation() {
  while (true) {
    yield convertedNodeData;
    await sleep(1000 * 60 * 60 * 24);
  }
}

const Example: React.FC<ExampleProps> = () => {
  return (
    <NodeIdentityInformationStreamContext.Provider
      value={sampleNodeInformation()}
    >
      <NodeInformationToDotPopulation>
        <WorldMapAutoSizer>
          <ProjectionProvider>
            <WorldMapDotsFullResolution />
            <DotPopulationStreamConsumer>
              <WorldMapDotsPopulationFullResolution />
            </DotPopulationStreamConsumer>
          </ProjectionProvider>
        </WorldMapAutoSizer>
      </NodeInformationToDotPopulation>
    </NodeIdentityInformationStreamContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/World Map Dots',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const WorldMapDots: Story = {
  args: {},
};
