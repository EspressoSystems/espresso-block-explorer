import ArrowLeft from '@/visual/icons/ArrowLeft';
import ArrowRight from '@/visual/icons/ArrowRight';
import CheckCircleFilled from '@/visual/icons/CheckCircleFilled';
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
import IconAnchorButtonComp from '../IconAnchorButton';

interface ExampleProps {
  href: string;
  title: string;
  disabled: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const Example: React.FC<ExampleProps> = ({
  disabled,
  href,
  children,
  ...props
}) => (
  <IconAnchorButtonComp
    disabled={disabled}
    href={href}
    target="_blank"
    {...props}
  >
    {children}
  </IconAnchorButtonComp>
);

const Children = {
  'Arrow Left': React.createElement(ArrowLeft),
  'Arrow Right': React.createElement(ArrowRight),
  'Check Circle': React.createElement(CheckCircleFilled),
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
  title: 'Components/HID/Buttons/Icon Anchor Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const IconAnchorButton: Story = {
  args: {
    title: 'Example',
    href: 'https://example.com/',
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
