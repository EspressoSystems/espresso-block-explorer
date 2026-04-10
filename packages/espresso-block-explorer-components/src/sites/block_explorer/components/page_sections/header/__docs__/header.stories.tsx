import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as HeaderComp } from '../header';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = (props) => <HeaderComp {...props} />;

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Layout/Header',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Header: Story = {
  args: {},
};
