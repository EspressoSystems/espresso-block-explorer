import XIcon from '@/components/visual/icons/x_icon';
import React from 'react';
import SocialMediaIconLink from './social_media_icon_link';

/**
 * TwitterLink is an icon link to the Espresso Systems Twitter (X) account
 */
const TwitterLink: React.FC = () => (
  <SocialMediaIconLink
    href="https://twitter.com/EspressoSys"
    title="Follow Espresso on X"
  >
    <XIcon />
  </SocialMediaIconLink>
);

export default TwitterLink;
