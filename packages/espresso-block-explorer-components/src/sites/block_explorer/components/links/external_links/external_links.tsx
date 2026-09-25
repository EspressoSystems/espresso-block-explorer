import { Text } from '@/components/text';
import { default as React } from 'react';
import { default as ExternalLink } from './external_link';

/**
 * ExternalLinks is a helpful container for the list of External Links we'd
 * like within the Footer of all of the Espresso Pages.
 */
const ExternalLinks: React.FC = () => (
  <nav
    className="external-links type--ui--text-600"
    aria-label="Espresso Links"
  >
    <ExternalLink href="https://www.espresso.foundation/">
      <Text text="Espresso Foundation" />
    </ExternalLink>
    <ExternalLink href="https://www.espressosys.com/">
      <Text text="Espresso Systems" />
    </ExternalLink>
  </nav>
);

export default ExternalLinks;
