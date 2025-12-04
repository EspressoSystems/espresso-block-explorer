import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import HeaderComp from '../header';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = (props) => <HeaderComp {...props} />;

const meta: Meta<typeof Example> = {
  title: 'Page Components/Header',
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
