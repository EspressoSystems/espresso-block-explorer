import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import LogxLogo24x24_1x from './logx_logo24x24@1x.png';
import LogxLogo24x24_2x from './logx_logo24x24@2x.png';
import LogxLogo24x24_3x from './logx_logo24x24@3x.png';
import LogxLogo32x32_1x from './logx_logo32x32@1x.png';
import LogxLogo32x32_2x from './logx_logo32x32@2x.png';
import LogxLogo32x32_3x from './logx_logo32x32@3x.png';
import LogxLogo40x40_1x from './logx_logo40x40@1x.png';
import LogxLogo40x40_2x from './logx_logo40x40@2x.png';
import LogxLogo40x40_3x from './logx_logo40x40@3x.png';

/**
 * LogXLogo24 represents the LogX Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * LogX doesn't seem to have any direct branding guidelines, we can get
 * their logo from their website here:
 * https://www.logx.network/
 */
export const LogXLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="logx-logo"
      src={LogxLogo24x24_1x}
      alt="Rari Logo"
      srcSet={`${LogxLogo24x24_1x} 1x, ${LogxLogo24x24_2x} 2x, ${LogxLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * LogXLogo32 represents the LogX Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const LogXLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="logx-logo"
      src={LogxLogo32x32_1x}
      alt="LogX Logo"
      srcSet={`${LogxLogo32x32_1x} 1x, ${LogxLogo32x32_2x} 2x, ${LogxLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * LogXLogo40 represents the LogX Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const LogXLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      className="logx-logo"
      src={LogxLogo40x40_1x}
      alt="LogX Logo"
      srcSet={`${LogxLogo40x40_1x} 1x, ${LogxLogo40x40_2x} 2x, ${LogxLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
