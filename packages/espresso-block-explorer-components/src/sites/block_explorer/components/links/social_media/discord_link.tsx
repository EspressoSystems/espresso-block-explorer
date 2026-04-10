import { default as DiscordIcon } from '@/visual/icons/discord_icon';
import { default as React } from 'react';
import { default as SocialMediaIconLink } from './social_media_icon_link';

/**
 * DiscordLink is an icon link to the Espresso Discord server
 */
const DiscordLink: React.FC = () => (
  <SocialMediaIconLink
    href="https://discord.com/invite/DRfcHRnnBz"
    title="Join the Espresso Discord"
  >
    <DiscordIcon />
  </SocialMediaIconLink>
);

export default DiscordLink;
