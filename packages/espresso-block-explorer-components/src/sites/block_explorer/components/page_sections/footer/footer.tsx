import { default as ExternalLinks } from '@/block_explorer/components/links/external_links/external_links';
import { EspressoLogo } from '@/visual/icons';
import { default as React } from 'react';
import './footer.css';

/**
 * Footer represents the bottom page element that is meant to exist on every
 * page that you can navigate to in the Block Explorer.
 */
const Footer: React.FC = () => (
  <footer>
    <ExternalLinks />
    <hr />
    <EspressoLogo width={200} height={200} />
  </footer>
);

export default Footer;
