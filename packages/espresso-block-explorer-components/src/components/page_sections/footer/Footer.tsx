import React from 'react';
import NewsLetterSignUp from '../../interaction/news_letter_sign_up/NewsLetterSignUp';
import ExternalLinks from '../../links/external_links/ExternalLinks';
import SocialMediaLinks from '../../links/social_media/SocialMediaLinks';
import EspressoLogo from '../../visual/icons/EspressoLogo';
import './footer.css';

/**
 * Footer represents the bottom page element that is meant to exist on every
 * page that you can navigate to in the Block Explorer.
 *
 * It is meant to be responsive and provide several quick links for access to
 * various Espresso Systems documents and information.
 */
const Footer: React.FC = () => (
  <footer>
    <NewsLetterSignUp />
    <SocialMediaLinks />
    <ExternalLinks />
    <hr />
    <EspressoLogo width={200} height={200} />
  </footer>
);

export default Footer;
