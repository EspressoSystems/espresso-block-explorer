import { Divider } from '@/components/layout/divider/divider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ArrowDownward from '../arrow_downward';
import ArrowLeft from '../arrow_left';
import ArrowRight from '../arrow_right';
import ArrowUpward from '../arrow_upward';
import Chain from '../chain';
import Check from '../check';
import CheckCircleFilled from '../check_circle_filled';
import ChevronDown from '../chevron_down';
import ChevronRight from '../chevron_right';
import ChevronUp from '../chevron_up';
import Copy from '../copy';
import DiscordIcon from '../discord_icon';
import ErrorIconFilled from '../error_icon_filled';
import EspressoLogo from '../espresso_logo';
import EspressoLogoAndTitle from '../espresso_logo_and_title';
import ExternalLink from '../external_link';
import InfoCircle from '../info_circle';
import LogOut from '../log_out';
import MediumIcon from '../medium_icon';
import MenuIcon from '../menu';
import Money from '../money';
import Payments from '../payments';
import SearchGlass from '../search_glass';
import TwitterIcon from '../twitter_icon';
import XIcon from '../x_icon';

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
