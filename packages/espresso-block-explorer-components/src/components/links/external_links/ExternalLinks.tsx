import React from 'react';
import ExternalLink from './ExternalLink';
import Text from '../../text/Text';

/**
 * ExternalLinks is a helpful container for the list of External Links we'd
 * like within the Footer of all of the Espresso Pages.
 */
const ExternalLinks: React.FC = () => (
  <div className="external-links type--ui--text-600 ">
    <ExternalLink href="https://medium.com/@espressosys">
      <Text text="News" />
    </ExternalLink>
    <ExternalLink href="https://jobs.lever.co/Espresso">
      <Text text="Careers" />
    </ExternalLink>
    <ExternalLink href="https://github.com/EspressoSystems/HotShot/blob/main/docs/espresso-sequencer-paper.pdf">
      <Text text="HotShot Paper" />
    </ExternalLink>
    <ExternalLink href="http://docs.espressosys.com/">
      <Text text="Espresso Docs" />
    </ExternalLink>
    <ExternalLink href="https://github.com/espressosystems/">
      <Text text="GitHub repo" />
    </ExternalLink>
    <ExternalLink href="https://www.espressosys.com/privacy-policy">
      <Text text="Privacy policy" />
    </ExternalLink>
  </div>
);

export default ExternalLinks;
