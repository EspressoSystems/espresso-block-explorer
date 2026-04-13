import { default as ArrowLeft } from '@/visual/icons/arrow_left';
import { default as ArrowRight } from '@/visual/icons/arrow_right';
import { default as CheckCircleFilled } from '@/visual/icons/check_circle_filled';
import { default as ChevronDown } from '@/visual/icons/chevron_down';
import { default as ChevronUp } from '@/visual/icons/chevron_up';
import { default as DiscordIcon } from '@/visual/icons/discord_icon';
import { default as InfoCircle } from '@/visual/icons/info_circle';
import { default as MediumIcon } from '@/visual/icons/medium_icon';
import { default as Menu } from '@/visual/icons/menu';
import { default as SearchGlass } from '@/visual/icons/search_glass';
import { default as TwitterIcon } from '@/visual/icons/twitter_icon';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as IconAnchorButtonComp } from '../icon_anchor_button';

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
  title: 'Block Explorer/Components/HID/Buttons/Icon Anchor Button',
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
