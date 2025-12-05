import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import RariLogo24x24_1x from './rari_logo24x24@1x.png';
import RariLogo24x24_2x from './rari_logo24x24@2x.png';
import RariLogo24x24_3x from './rari_logo24x24@3x.png';
import RariLogo32x32_1x from './rari_logo32x32@1x.png';
import RariLogo32x32_2x from './rari_logo32x32@2x.png';
import RariLogo32x32_3x from './rari_logo32x32@3x.png';
import RariLogo40x40_1x from './rari_logo40x40@1x.png';
import RariLogo40x40_2x from './rari_logo40x40@2x.png';
import RariLogo40x40_3x from './rari_logo40x40@3x.png';

/**
 * RariLogo24 represents the Rari Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * Rari's official branding guidelines are here:
 * https://rarichain.org/brand-kit
 */
export const RariLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RariLogo24x24_1x}
      alt="Rari Logo"
      srcSet={`${RariLogo24x24_1x} 1x, ${RariLogo24x24_2x} 2x, ${RariLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * RariLogo32 represents the Rari Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const RariLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RariLogo32x32_1x}
      alt="Rari Logo"
      srcSet={`${RariLogo32x32_1x} 1x, ${RariLogo32x32_2x} 2x, ${RariLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * RariLogo40 represents the Rari Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const RariLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={RariLogo40x40_1x}
      alt="Rari Logo"
      srcSet={`${RariLogo40x40_1x} 1x, ${RariLogo40x40_2x} 2x, ${RariLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
