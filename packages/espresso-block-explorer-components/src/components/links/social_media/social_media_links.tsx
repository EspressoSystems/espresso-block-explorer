import { addClassToClassName } from '@/higher_order';
import React from 'react';
import DiscordLink from './discord_link';
import MediumLink from './medium_link';
import TwitterLink from './twitter_link';

interface SocialMediaLinksProps extends React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {}

/**
 * SocialMediaLinks is a component that contains the quick icon link references
 * to all of the Espresso Social Media Links grouped together.
 */
const SocialMediaLinks: React.FC<SocialMediaLinksProps> = (props) => (
  <nav
    {...props}
    className={addClassToClassName(props.className, 'social-media-links')}
    aria-label="Social Media Links"
  >
    <DiscordLink />
    <TwitterLink />
    <MediumLink />
  </nav>
);

export default SocialMediaLinks;
