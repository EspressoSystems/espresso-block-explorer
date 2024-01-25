import React from 'react';
import MediumIcon from '../../visual/icons/MediumIcon';
import SocialMediaIconLink from './SocialMediaIconLink';

/**
 * MediumLink is an Icon Link to the Espresso Systems Medium Account
 * @returns
 */
const MediumLink: React.FC = () => (
  <SocialMediaIconLink
    href="https://medium.com/@espressosys"
    title="The Espresso Medium Account"
  >
    <MediumIcon />
  </SocialMediaIconLink>
);

export default MediumLink;
