import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import { default as LigeroLogo24x24_1x } from './ligero_logo24x24@1x.png';
import { default as LigeroLogo24x24_2x } from './ligero_logo24x24@2x.png';
import { default as LigeroLogo24x24_3x } from './ligero_logo24x24@3x.png';
import { default as LigeroLogo32x32_1x } from './ligero_logo32x32@1x.png';
import { default as LigeroLogo32x32_2x } from './ligero_logo32x32@2x.png';
import { default as LigeroLogo32x32_3x } from './ligero_logo32x32@3x.png';
import { default as LigeroLogo40x40_1x } from './ligero_logo40x40@1x.png';
import { default as LigeroLogo40x40_2x } from './ligero_logo40x40@2x.png';
import { default as LigeroLogo40x40_3x } from './ligero_logo40x40@3x.png';

/**
 * LigeroLogo24 represents the Ligero Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * Ligero doesn't have any explicit brand guidelines, but it's logos are
 * sourced from the Lotto icon found on its website.
 * https://pages.ligero-inc.com/products#client-side-proving
 *
 * Found on a link from their website: https://ligero-inc.com/
 */
export const LigeroLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={LigeroLogo24x24_1x}
      alt="Ligero Logo"
      srcSet={`${LigeroLogo24x24_1x} 1x, ${LigeroLogo24x24_2x} 2x, ${LigeroLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * LigeroLogo32 represents the Ligero Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const LigeroLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={LigeroLogo32x32_1x}
      alt="Ligero Logo"
      srcSet={`${LigeroLogo32x32_1x} 1x, ${LigeroLogo32x32_2x} 2x, ${LigeroLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * LigeroLogo40 represents the Ligero Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const LigeroLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={LigeroLogo40x40_1x}
      alt="Ligero Logo"
      srcSet={`${LigeroLogo40x40_1x} 1x, ${LigeroLogo40x40_2x} 2x, ${LigeroLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
