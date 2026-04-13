import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as FooterComp } from '../footer';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = (props) => <FooterComp {...props} />;

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Layout/Footer',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Footer: Story = {
  args: {},
};
