import { XIcon } from '@/components/visual/icons';
import { default as React } from 'react';
import { default as SocialMediaIconLink } from './social_media_icon_link';

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
