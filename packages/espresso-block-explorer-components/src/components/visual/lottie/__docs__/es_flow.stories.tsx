import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as ESFlow } from '../es_flow';

const Example: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <ESFlow />
  </div>
);

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Style Guide/Lottie',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Lottie: Story = {
  args: {},
};
