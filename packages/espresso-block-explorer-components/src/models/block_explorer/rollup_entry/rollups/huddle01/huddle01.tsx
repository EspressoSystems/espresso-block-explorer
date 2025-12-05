import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import Huddle01Logo24x24_1x from './huddle01_logo24x24@1x.png';
import Huddle01Logo24x24_2x from './huddle01_logo24x24@2x.png';
import Huddle01Logo24x24_3x from './huddle01_logo24x24@3x.png';
import Huddle01Logo32x32_1x from './huddle01_logo32x32@1x.png';
import Huddle01Logo32x32_2x from './huddle01_logo32x32@2x.png';
import Huddle01Logo32x32_3x from './huddle01_logo32x32@3x.png';
import Huddle01Logo40x40_1x from './huddle01_logo40x40@1x.png';
import Huddle01Logo40x40_2x from './huddle01_logo40x40@2x.png';
import Huddle01Logo40x40_3x from './huddle01_logo40x40@3x.png';

/**
 * Huddle01Logo24 represents the Huddle01 Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 *
 * Huddle01 doesn't have any explicit brand guidelines, but it's logos are
 * sourced from here:
 * https://drive.google.com/drive/folders/1xW7B-gK8oOmGb5p-8kSj1lXRvt5Ge01D
 *
 * Found on a link from their website: https://huddle01.com/
 */
export const Huddle01Logo24: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={Huddle01Logo24x24_1x}
      alt="Huddle01 Logo"
      srcSet={`${Huddle01Logo24x24_1x} 1x, ${Huddle01Logo24x24_2x} 2x, ${Huddle01Logo24x24_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * Huddle01Logo32 represents the Huddle01 Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const Huddle01Logo32: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={Huddle01Logo32x32_1x}
      alt="Huddle01 Logo"
      srcSet={`${Huddle01Logo32x32_1x} 1x, ${Huddle01Logo32x32_2x} 2x, ${Huddle01Logo32x32_3x} 3x`}
    />
  </AvatarLogo>
);

/**
 * Huddle01Logo40 represents the Huddle01 Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export const Huddle01Logo40: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img
      src={Huddle01Logo40x40_1x}
      alt="Huddle01 Logo"
      srcSet={`${Huddle01Logo40x40_1x} 1x, ${Huddle01Logo40x40_2x} 2x, ${Huddle01Logo40x40_3x} 3x`}
    />
  </AvatarLogo>
);
