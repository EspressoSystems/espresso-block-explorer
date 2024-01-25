import React from 'react';
import TwitterIcon from '../../visual/icons/TwitterIcon';
import SocialMediaIconLink from './SocialMediaIconLink';

/**
 * TwitterLink is an icon link to the Espresso Systems Twitter (X) account
 */
const TwitterLink: React.FC = () => (
  <SocialMediaIconLink
    href="https://twitter.com/EspressoSys"
    title="Follow Espresso on X"
  >
    <TwitterIcon />
  </SocialMediaIconLink>
);

export default TwitterLink;
