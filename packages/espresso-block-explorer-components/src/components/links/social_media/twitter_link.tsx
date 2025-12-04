import XIcon from '@/components/visual/icons/XIcon';
import React from 'react';
import SocialMediaIconLink from './SocialMediaIconLink';

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
