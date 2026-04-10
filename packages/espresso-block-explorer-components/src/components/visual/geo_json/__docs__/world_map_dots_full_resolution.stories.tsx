import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as WorldMapDotsFullResolutionComp } from '../world_map_dots_full_resolution';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = () => {
  return <WorldMapDotsFullResolutionComp />;
};

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Visual/WorldMapDotsFullResolution',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const WorldMapDotsFullResolution: Story = {
  args: {},
};
