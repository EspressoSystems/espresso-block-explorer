import { Divider } from '@/block_explorer/components/layout/divider/divider';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { default as React } from 'react';
import { default as ArrowDownward } from '../arrow_downward';
import { default as ArrowLeft } from '../arrow_left';
import { default as ArrowRight } from '../arrow_right';
import { default as ArrowUpward } from '../arrow_upward';
import { default as Chain } from '../chain';
import { default as Check } from '../check';
import { default as CheckCircleFilled } from '../check_circle_filled';
import { default as ChevronDown } from '../chevron_down';
import { default as ChevronRight } from '../chevron_right';
import { default as ChevronUp } from '../chevron_up';
import { default as Copy } from '../copy';
import { default as DiscordIcon } from '../discord_icon';
import { default as ErrorIconFilled } from '../error_icon_filled';
import { default as EspressoLogo } from '../espresso_logo';
import { default as EspressoLogoAndTitle } from '../espresso_logo_and_title';
import { default as ExternalLink } from '../external_link';
import { default as InfoCircle } from '../info_circle';
import { default as LogOut } from '../log_out';
import { default as MediumIcon } from '../medium_icon';
import { default as MenuIcon } from '../menu';
import { default as Money } from '../money';
import { default as Payments } from '../payments';
import { default as SearchGlass } from '../search_glass';
import { default as TwitterIcon } from '../twitter_icon';
import { default as XIcon } from '../x_icon';

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
  title: 'Block Explorer/Style Guide/All Icons',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const AllIcons: Story = {
  args: {},
};
