import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';
import CheckCircle from '../CheckCircle';
import ChevronDown from '../ChevronDown';
import ChevronUp from '../ChevronUp';
import DiscordIcon from '../DiscordIcon';
import EspressoLogo from '../EspressoLogo';
import EspressoLogoAndTitle from '../EspressoLogoAndTitle';
import InfoCircle from '../InfoCircle';
import MediumIcon from '../MediumIcon';
import MenuIcon from '../Menu';
import SearchGlass from '../SearchGlass';
import TwitterIcon from '../TwitterIcon';

const Example: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <EspressoLogo />
    <EspressoLogoAndTitle />
    <hr />
    <ArrowLeft />
    <ArrowRight />
    <CheckCircle />
    <ChevronDown />
    <ChevronUp />
    <DiscordIcon />
    <InfoCircle />
    <MediumIcon />
    <MenuIcon />
    <SearchGlass />
    <TwitterIcon />
  </div>
);

const meta: Meta<typeof Example> = {
  title: 'Style Guide/All Icons',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const AllIcons: Story = {
  args: {},
};
