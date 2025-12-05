import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import T3rnLogoDark24x24_1x from './t3rn_logo_dark24x24@1x.png';
import T3rnLogoDark24x24_2x from './t3rn_logo_dark24x24@2x.png';
import T3rnLogoDark24x24_3x from './t3rn_logo_dark24x24@3x.png';
import T3rnLogoDark32x32_1x from './t3rn_logo_dark32x32@1x.png';
import T3rnLogoDark32x32_2x from './t3rn_logo_dark32x32@2x.png';
import T3rnLogoDark32x32_3x from './t3rn_logo_dark32x32@3x.png';
import T3rnLogoDark40x40_1x from './t3rn_logo_dark40x40@1x.png';
import T3rnLogoDark40x40_2x from './t3rn_logo_dark40x40@2x.png';
import T3rnLogoDark40x40_3x from './t3rn_logo_dark40x40@3x.png';
import T3rnLogoLight24x24_1x from './t3rn_logo_light24x24@1x.png';
import T3rnLogoLight24x24_2x from './t3rn_logo_light24x24@2x.png';
import T3rnLogoLight24x24_3x from './t3rn_logo_light24x24@3x.png';
import T3rnLogoLight32x32_1x from './t3rn_logo_light32x32@1x.png';
import T3rnLogoLight32x32_2x from './t3rn_logo_light32x32@2x.png';
import T3rnLogoLight32x32_3x from './t3rn_logo_light32x32@3x.png';
import T3rnLogoLight40x40_1x from './t3rn_logo_light40x40@1x.png';
import T3rnLogoLight40x40_2x from './t3rn_logo_light40x40@2x.png';
import T3rnLogoLight40x40_3x from './t3rn_logo_light40x40@3x.png';

/**
 * T3rnLogo24 represents the T3rn Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * T3rn brand guidelines are here:
 * https://brandfetch.com/t3rn.io
 * https://www.notion.so/t3rn/Brand-Guidelines-1f50b189cddb801790bec6ce2855a389
 */
export const T3rnLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="only-light"
      src={T3rnLogoLight24x24_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoLight24x24_1x}1x, ${T3rnLogoLight24x24_2x} 2x, ${T3rnLogoLight24x24_3x} 3x`}
    />
    <img
      className="only-dark"
      src={T3rnLogoDark24x24_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoDark24x24_1x} 1x, ${T3rnLogoDark24x24_2x} 2x, ${T3rnLogoDark24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * T3rnLogo32 represents the T3rn Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const T3rnLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="only-light"
      src={T3rnLogoLight32x32_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoLight32x32_1x} 1x, ${T3rnLogoLight32x32_2x} 2x, ${T3rnLogoLight32x32_3x} 3x`}
    />
    <img
      className="only-dark"
      src={T3rnLogoDark32x32_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoDark32x32_1x} 1x, ${T3rnLogoDark32x32_2x} 2x, ${T3rnLogoDark32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * T3rnLogo40 represents the T3rn Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const T3rnLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="only-light"
      src={T3rnLogoLight40x40_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoLight40x40_1x} 1x, ${T3rnLogoLight40x40_2x} 2x, ${T3rnLogoLight40x40_3x} 3x`}
    />
    <img
      className="only-dark"
      src={T3rnLogoDark40x40_1x}
      alt="T3rn Logo"
      srcSet={`${T3rnLogoDark40x40_1x} 1x, ${T3rnLogoDark40x40_2x} 2x, ${T3rnLogoDark40x40_3x} 3x`}
    />
  </AvatarLogo>
);
