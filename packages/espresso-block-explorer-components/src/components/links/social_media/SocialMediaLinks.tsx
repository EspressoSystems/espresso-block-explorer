import React from 'react';
import { addClassToClassName } from '../../higher_order';
import DiscordLink from './DiscordLink';
import MediumLink from './MediumLink';
import TwitterLink from './TwitterLink';

interface SocialMediaLinksProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

/**
 * SocialMediaLinks is a component that contains the quick icon link references
 * to all of the Espresso Social Media Links grouped together.
 */
const SocialMediaLinks: React.FC<SocialMediaLinksProps> = (props) => (
  <div
    {...props}
    className={addClassToClassName(props.className, 'social-media-links')}
  >
    <DiscordLink />
    <TwitterLink />
    <MediumLink />
  </div>
);

export default SocialMediaLinks;
