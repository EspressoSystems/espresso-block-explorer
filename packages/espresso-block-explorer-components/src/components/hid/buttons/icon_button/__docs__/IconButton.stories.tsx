import ArrowLeft from '@/visual/icons/ArrowLeft';
import ArrowRight from '@/visual/icons/ArrowRight';
import CheckCircle from '@/visual/icons/CheckCircle';
import ChevronDown from '@/visual/icons/ChevronDown';
import ChevronUp from '@/visual/icons/ChevronUp';
import DiscordIcon from '@/visual/icons/DiscordIcon';
import InfoCircle from '@/visual/icons/InfoCircle';
import MediumIcon from '@/visual/icons/MediumIcon';
import Menu from '@/visual/icons/Menu';
import SearchGlass from '@/visual/icons/SearchGlass';
import TwitterIcon from '@/visual/icons/TwitterIcon';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import IconButtonComp from '../IconButton';

interface ExampleProps {
  title: string;
  disabled: boolean;
  onClick?: () => void;
  children: React.ReactNode | React.ReactNode[];
}

const Example: React.FC<ExampleProps> = ({
  title,
  disabled,
  children,
  ...props
}) => (
  <IconButtonComp title={title} disabled={disabled} {...props}>
    {children}
  </IconButtonComp>
);

const Children = {
  'Arrow Left': React.createElement(ArrowLeft),
  'Arrow Right': React.createElement(ArrowRight),
  'Check Circle': React.createElement(CheckCircle),
  'Chevron Down': React.createElement(ChevronDown),
  'Chevron Up': React.createElement(ChevronUp),
  'Discord Icon': React.createElement(DiscordIcon),
  'Info Circle': React.createElement(InfoCircle),
  'Medium Icon': React.createElement(MediumIcon),
  Menu: React.createElement(Menu),
  'Search Glass': React.createElement(SearchGlass),
  'Twitter Icon': React.createElement(TwitterIcon),
};

const meta: Meta<typeof Example> = {
  title: 'Components/HID/buttons/Icon Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const IconButton: Story = {
  args: {
    title: 'Back',
    disabled: false,
    children: React.createElement(ArrowLeft),
  },

  argTypes: {
    children: {
      options: Object.keys(Children),
      mapping: Children,
      control: {
        type: 'select',
        labels: Object.keys(Children),
      },
    },
  },
};
