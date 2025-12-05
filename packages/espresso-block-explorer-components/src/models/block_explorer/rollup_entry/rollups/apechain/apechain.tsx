import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import ApechainLogo24x24_1x from './apechain_logo24x24@1x.png';
import ApechainLogo24x24_2x from './apechain_logo24x24@2x.png';
import ApechainLogo24x24_3x from './apechain_logo24x24@3x.png';
import ApechainLogo32x32_1x from './apechain_logo32x32@1x.png';
import ApechainLogo32x32_2x from './apechain_logo32x32@2x.png';
import ApechainLogo32x32_3x from './apechain_logo32x32@3x.png';
import ApechainLogo40x40_1x from './apechain_logo40x40@1x.png';
import ApechainLogo40x40_2x from './apechain_logo40x40@2x.png';
import ApechainLogo40x40_3x from './apechain_logo40x40@3x.png';

/**
 * ApeChainLogo24 represents the ApeChain Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * ApeChain branding guidelines are contained here:
 * https://live.standards.site/apechain/logo
 */
export const ApeChainLogo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={ApechainLogo24x24_1x}
      alt="ApeChain Logo"
      srcSet={`${ApechainLogo24x24_1x} 1x, ${ApechainLogo24x24_2x} 2x, ${ApechainLogo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * ApeChainLogo32 represents the ApeChain Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const ApeChainLogo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={ApechainLogo32x32_1x}
      alt="ApeChain Logo"
      srcSet={`${ApechainLogo32x32_1x} 1x, ${ApechainLogo32x32_2x} 2x, ${ApechainLogo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * ApeChainLogo40 represents the ApeChain Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const ApeChainLogo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={ApechainLogo40x40_1x}
      alt="ApeChain Logo"
      srcSet={`${ApechainLogo40x40_1x} 1x, ${ApechainLogo40x40_2x} 2x, ${ApechainLogo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
