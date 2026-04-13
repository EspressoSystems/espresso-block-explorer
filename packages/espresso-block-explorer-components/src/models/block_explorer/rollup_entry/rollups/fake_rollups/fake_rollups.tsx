import { AvatarLogo } from '../../avatar_logo';
import { PreFedSrcAvatarLogoProps } from '../../higher_order';
import { default as AltLayerLogo } from './alt_layer_logo.png';
import { default as ArbitrumLogo } from './arbitrum_logo.png';
import { default as CalderaLogo } from './caldera_logo.png';
import { default as EigenLayerLogo } from './eigen_layer_logo.png';
import { default as OpStackLogo } from './op_stack_logo.png';
import { default as PolygonLogo } from './polygon_logo.png';
import { default as SpireLogo } from './spire_logo.png';
import { default as VistaraLogo } from './vistara_logo.png';

/**
 * AltLayerAvatarLogo represents the Alt Layer Logo
 */
export const AltLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={AltLayerLogo} alt="Alt Layer Logo" />
  </AvatarLogo>
);

/**
 * ArbitrumAvatarLogo represents the Arbitrum Logo
 */
export const ArbitrumAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={ArbitrumLogo} alt="Arbitrum Logo" />
  </AvatarLogo>
);

/**
 * CalderaAvatarLogo represents the Caldera Logo
 */
export const CalderaAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={CalderaLogo} alt="Caldera Logo" />
  </AvatarLogo>
);

/**
 * EigenLayerAvatarLogo represents the Eigen Layer Logo
 */
export const EigenLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={EigenLayerLogo} alt="Eigen Layer Logo" />
  </AvatarLogo>
);

/**
 * OpStackAvatarLogo represents the OP Stack Logo
 */
export const OpStackAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={OpStackLogo} alt="Op Stack Logo" />
  </AvatarLogo>
);

/**
 * PolygonAvatarLogo represents the Polygon Logo
 */
export const PolygonAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={PolygonLogo} alt="Polygon Logo" />
  </AvatarLogo>
);

/**
 * SpireAvatarLogo represents the Spire Logo
 */
export const SpireAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img src={SpireLogo} alt="Spire Logo" />
  </AvatarLogo>
);

/**
 * VistaraAvatarLogo represents the Vistara Logo
 */
export const VistaraAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src={VistaraLogo} alt="Vistara Logo" />
  </AvatarLogo>
);
