import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import MoltenLogo24x24_1x from './molten_logo24x24@1x.png';
import MoltenLogo24x24_2x from './molten_logo24x24@2x.png';
import MoltenLogo24x24_3x from './molten_logo24x24@3x.png';
import MoltenLogo32x32_1x from './molten_logo32x32@1x.png';
import MoltenLogo32x32_2x from './molten_logo32x32@2x.png';
import MoltenLogo32x32_3x from './molten_logo32x32@3x.png';
import MoltenLogo40x40_1x from './molten_logo40x40@1x.png';
import MoltenLogo40x40_2x from './molten_logo40x40@2x.png';
import MoltenLogo40x40_3x from './molten_logo40x40@3x.png';

/**
 * MoltenLogo24 represents the Molten Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * Molten doesn't seem to have any direct branding guidelines, we can get
 * their logo from a page linked from their website here:
 * https://molten.hub.caldera.xyz/
 */
export const MoltenLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={MoltenLogo24x24_1x}
      alt="Molten Logo"
      srcSet={`${MoltenLogo24x24_1x} 1x, ${MoltenLogo24x24_2x} 2x, ${MoltenLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * MoltenLogo32 represents the Molten Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const MoltenLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={MoltenLogo32x32_1x}
      alt="Molten Logo"
      srcSet={`${MoltenLogo32x32_1x} 1x, ${MoltenLogo32x32_2x} 2x, ${MoltenLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * MoltenLogo40 represents the Molten Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const MoltenLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={MoltenLogo40x40_1x}
      alt="Molten Logo"
      srcSet={`${MoltenLogo40x40_1x} 1x, ${MoltenLogo40x40_2x} 2x, ${MoltenLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
