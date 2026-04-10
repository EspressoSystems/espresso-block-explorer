import { default as ExternalLinks } from '@/block_explorer/components/links/external_links/external_links';
import { default as SocialMediaLinks } from '@/block_explorer/components/links/social_media/social_media_links';
import { EspressoLogo } from '@/visual/icons';
import { default as React } from 'react';
import { default as NewsLetterSignUp } from '../../interaction/news_letter_sign_up/news_letter_sign_up';
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
