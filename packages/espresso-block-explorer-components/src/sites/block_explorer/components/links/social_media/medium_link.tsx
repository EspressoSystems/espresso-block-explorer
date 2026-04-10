import { MediumIcon } from '@/visual/icons';
import { default as React } from 'react';
import { default as SocialMediaIconLink } from './social_media_icon_link';

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
