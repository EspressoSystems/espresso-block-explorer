import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import FooterComp from '../footer';

interface ExampleProps {}
const Example: React.FC<ExampleProps> = (props) => <FooterComp {...props} />;

const meta: Meta<typeof Example> = {
  title: 'Page Components/Footer',
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
