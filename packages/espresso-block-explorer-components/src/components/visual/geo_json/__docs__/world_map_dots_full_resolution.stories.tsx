import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import WorldMapDotsFullResolutionComp from '../WorldMapDotsFullResolution';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = () => {
  return <WorldMapDotsFullResolutionComp />;
};

const meta: Meta<typeof Example> = {
  title: 'Components/visual/WorldMapDotsFullResolution',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const WorldMapDotsFullResolution: Story = {
  args: {},
};
