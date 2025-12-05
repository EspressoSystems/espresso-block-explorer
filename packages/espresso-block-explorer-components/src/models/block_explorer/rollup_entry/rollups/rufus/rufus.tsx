import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import RufusLogo24x24_1x from './rufus_logo24x24@1x.png';
import RufusLogo24x24_2x from './rufus_logo24x24@2x.png';
import RufusLogo24x24_3x from './rufus_logo24x24@3x.png';
import RufusLogo32x32_1x from './rufus_logo32x32@1x.png';
import RufusLogo32x32_2x from './rufus_logo32x32@2x.png';
import RufusLogo32x32_3x from './rufus_logo32x32@3x.png';
import RufusLogo40x40_1x from './rufus_logo40x40@1x.png';
import RufusLogo40x40_2x from './rufus_logo40x40@2x.png';
import RufusLogo40x40_3x from './rufus_logo40x40@3x.png';

/**
 * RufusLogo24 represents the Rufus Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * @note Rufus itself doesn't have any specific brand guide for their specific
 * usage.  They are a project from DogelonMars.  DogelonMars has a brand guide
 * located here: https://github.com/DogelonMars/dogelon-assets.  This is just
 * a bunch of assets without much guidance.
 */
export const RufusLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RufusLogo24x24_1x}
      alt="Rufus Logo"
      srcSet={`${RufusLogo24x24_1x} 1x, ${RufusLogo24x24_2x} 2x, ${RufusLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * RufusLogo32 represents the Rufus Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const RufusLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RufusLogo32x32_1x}
      alt="Rufus Logo"
      srcSet={`${RufusLogo32x32_1x} 1x, ${RufusLogo32x32_2x} 2x, ${RufusLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * RufusLogo40 represents the Rufus Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const RufusLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RufusLogo40x40_1x}
      alt="Rufus Logo"
      srcSet={`${RufusLogo40x40_1x} 1x, ${RufusLogo40x40_2x} 2x, ${RufusLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
