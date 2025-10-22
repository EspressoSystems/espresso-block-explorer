import { Divider } from '@/components/layout/divider/divider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ArrowDownward from '../ArrowDownward';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';
import ArrowUpward from '../ArrowUpward';
import Chain from '../Chain';
import Check from '../Check';
import CheckCircleFilled from '../CheckCircleFilled';
import ChevronDown from '../ChevronDown';
import ChevronRight from '../ChevronRight';
import ChevronUp from '../ChevronUp';
import Copy from '../Copy';
import DiscordIcon from '../DiscordIcon';
import ErrorIconFilled from '../ErrorIconFilled';
import EspressoLogo from '../EspressoLogo';
import EspressoLogoAndTitle from '../EspressoLogoAndTitle';
import ExternalLink from '../ExternalLink';
import InfoCircle from '../InfoCircle';
import LogOut from '../LogOut';
import MediumIcon from '../MediumIcon';
import MenuIcon from '../Menu';
import Money from '../Money';
import Payments from '../Payments';
import SearchGlass from '../SearchGlass';
import TwitterIcon from '../TwitterIcon';
import XIcon from '../XIcon';

const Example: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <EspressoLogo />
    <EspressoLogoAndTitle />
    <Divider />
    <ArrowLeft />
    <ArrowRight />
    <ArrowUpward />
    <ArrowDownward />
    <Chain />
    <Check />
    <CheckCircleFilled />
    <ChevronDown />
    <ChevronUp />
    <ChevronRight />
    <Copy />
    <DiscordIcon />
    <ErrorIconFilled />
    <ExternalLink />
    <InfoCircle />
    <LogOut />
    <MediumIcon />
    <MenuIcon />
    <Money />
    <Payments />
    <SearchGlass />
    <TwitterIcon />
    <XIcon />
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
