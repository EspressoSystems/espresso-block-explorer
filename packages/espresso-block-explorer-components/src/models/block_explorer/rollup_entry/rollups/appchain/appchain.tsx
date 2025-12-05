import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import AppchainLogo24x24_1x from './appchain_logo24x24@1x.png';
import AppchainLogo24x24_2x from './appchain_logo24x24@2x.png';
import AppchainLogo24x24_3x from './appchain_logo24x24@3x.png';
import AppchainLogo32x32_1x from './appchain_logo32x32@1x.png';
import AppchainLogo32x32_2x from './appchain_logo32x32@2x.png';
import AppchainLogo32x32_3x from './appchain_logo32x32@3x.png';
import AppchainLogo40x40_1x from './appchain_logo40x40@1x.png';
import AppchainLogo40x40_2x from './appchain_logo40x40@2x.png';
import AppchainLogo40x40_3x from './appchain_logo40x40@3x.png';

/**
 * AppChainLogo24 represents the AppChain Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * AppChain doesn't seem to have any direct branding guidelines, we can get
 * their logo from their website here:
 * https://appchain.xyz/
 */
export const AppChainLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={AppchainLogo24x24_1x}
      alt="AppChain Logo"
      srcSet={`${AppchainLogo24x24_1x} 1x, ${AppchainLogo24x24_2x} 2x, ${AppchainLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * AppChainLogo32 represents the AppChain Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const AppChainLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={AppchainLogo32x32_1x}
      alt="AppChain Logo"
      srcSet={`${AppchainLogo32x32_1x} 1x, ${AppchainLogo32x32_2x} 2x, ${AppchainLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * AppChainLogo40 represents the AppChain Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const AppChainLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={AppchainLogo40x40_1x}
      alt="AppChain Logo"
      srcSet={`${AppchainLogo40x40_1x} 1x, ${AppchainLogo40x40_2x} 2x, ${AppchainLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
