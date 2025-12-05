import EspressoLogo from '@/components/visual/icons/espresso_logo';
import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';

export const EspressoAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <EspressoLogo />
  </AvatarLogo>
);
