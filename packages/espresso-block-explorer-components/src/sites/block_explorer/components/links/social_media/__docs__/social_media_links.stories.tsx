import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as SocialMediaLinks } from '../social_media_links';

interface ExampleProps {}

const Example: React.FC<ExampleProps> = (props) => (
  <SocialMediaLinks {...props} />
);

const meta: Meta<typeof Example> = {
  title: 'Block Explorer/Components/Links/Social Media/Links',
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
