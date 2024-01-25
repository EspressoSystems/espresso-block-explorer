import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <SocialMediaLinks {...props} />
);

const meta: Meta<typeof Example> = {
  title: 'Components/Links/Social Media/Links',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Links: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'Footer',
      values: [
        {
          name: 'Footer',
          value: '#451f17ff',
        },
      ],
    },
  },
};
