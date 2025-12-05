import DiscordIcon from '@/visual/icons/discord_icon';
import React from 'react';
import SocialMediaIconLink from './social_media_icon_link';

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
