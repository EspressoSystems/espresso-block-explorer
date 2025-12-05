import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ESFlow from '../es_flow';

const Example: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ESFlow />
  </div>
);

const meta: Meta<typeof Example> = {
  title: 'Style Guide/Lottie',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Lottie: Story = {
  args: {},
};
