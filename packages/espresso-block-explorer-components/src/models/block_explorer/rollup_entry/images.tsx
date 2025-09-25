import { EspressoLogo } from '@/components/visual';
import { addClassNameToComponent, addClassToClassName } from '@/higher_order';
import React from 'react';
import './images.css';

export interface AvatarLogoProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * AvatarLogo represents an Avatar Logo representation of an Avatar Logo.
 * Traditionally these tend to be circular.  However in the case of some
 * of our Rollups, specifically Eigen Layer, their logo in the design is
 * not clipped to a circle. So instead the avatar is more concerned with
 * being just a picture element, and nothing else.  It will automatically
 * add the 'avatar' class to the picture element.
 */
const AvatarLogo: React.FC<AvatarLogoProps> = ({ className, ...props }) => {
  return (
    <picture {...props} className={addClassToClassName(className, 'avatar')}>
      {props.children}
    </picture>
  );
};

export default AvatarLogo;

type PreFedSrcAvatarLogoProps = Omit<AvatarLogoProps, 'src'>;

/**
 * AltLayerAvatarLogo represents the Alt Layer Logo
 */
export const AltLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/alt_layer_logo.png" alt="Alt Layer Logo" />
  </AvatarLogo>
);

/**
 * ArbitrumAvatarLogo represents the Arbitrum Logo
 */
export const ArbitrumAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/arbitrum_logo.png" alt="Arbitrum Logo" />
  </AvatarLogo>
);

/**
 * CalderaAvatarLogo represents the Caldera Logo
 */
export const CalderaAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/caldera_logo.png" alt="Caldera Logo" />
  </AvatarLogo>
);

/**
 * EigenLayerAvatarLogo represents the Eigen Layer Logo
 */
export const EigenLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/eigen_layer_logo.png" alt="Eigen Layer Logo" />
  </AvatarLogo>
);

/**
 * OpStackAvatarLogo represents the OP Stack Logo
 */
export const OpStackAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/op_stack_logo.png" alt="Op Stack Logo" />
  </AvatarLogo>
);

/**
 * PolygonAvatarLogo represents the Polygon Logo
 */
export const PolygonAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/polygon_logo.png" alt="Polygon Logo" />
  </AvatarLogo>
);

/**
 * SpireAvatarLogo represents the Spire Logo
 */
export const SpireAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props}>
    <img src="/spire_logo.png" alt="Spire Logo" />
  </AvatarLogo>
);

/**
 * VistaraAvatarLogo represents the Vistara Logo
 */
export const VistaraAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <img src="/vistara_logo.png" alt="Vistara Logo" />
  </AvatarLogo>
);

export const EspressoAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props}>
    <EspressoLogo />
  </AvatarLogo>
);

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
      src="/rari_logo24x24@1x.png"
      alt="Rari Logo"
      srcSet="/rari_logo24x24@1x.png 1x, /rari_logo24x24@2x.png 2x, /rari_logo24x24@3x.png 3x"
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
      src="/rari_logo32x32@1x.png"
      alt="Rari Logo"
      srcSet="/rari_logo32x32@1x.png 1x, /rari_logo32x32@2x.png 2x, /rari_logo32x32@3x.png 3x"
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
      src="/rari_logo40x40@1x.png"
      alt="Rari Logo"
      srcSet="/rari_logo40x40@1x.png 1x, /rari_logo40x40@2x.png 2x, /rari_logo40x40@3x.png 3x"
    />
  </AvatarLogo>
);
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
      src="/logx_logo24x24@1x.png"
      alt="Rari Logo"
      srcSet="/logx_logo24x24@1x.png 1x, /logx_logo24x24@2x.png 2x, /logx_logo24x24@3x.png 3x"
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
      src="/logx_logo32x32@1x.png"
      alt="LogX Logo"
      srcSet="/logx_logo32x32@1x.png 1x, /logx_logo32x32@2x.png 2x, /logx_logo32x32@3x.png 3x"
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
      src="/logx_logo40x40@1x.png"
      alt="LogX Logo"
      srcSet="/logx_logo40x40@1x.png 1x, /logx_logo40x40@2x.png 2x, /logx_logo40x40@3x.png 3x"
    />
  </AvatarLogo>
);

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
      src="/appchain_logo24x24@1x.png"
      alt="AppChain Logo"
      srcSet="/appchain_logo24x24@1x.png 1x, /appchain_logo24x24@2x.png 2x, /appchain_logo24x24@3x.png 3x"
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
      src="/appchain_logo32x32@1x.png"
      alt="AppChain Logo"
      srcSet="/appchain_logo32x32@1x.png 1x, /appchain_logo32x32@2x.png 2x, /appchain_logo32x32@3x.png 3x"
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
      src="/appchain_logo40x40@1x.png"
      alt="AppChain Logo"
      srcSet="/appchain_logo40x40@1x.png 1x, /appchain_logo40x40@2x.png 2x, /appchain_logo40x40@3x.png 3x"
    />
  </AvatarLogo>
);

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
      src="/apechain_logo24x24@1x.png"
      alt="ApeChain Logo"
      srcSet="/apechain_logo24x24@1x.png 1x, /apechain_logo24x24@2x.png 2x, /apechain_logo24x24@3x.png 3x"
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
      src="/apechain_logo32x32@1x.png"
      alt="ApeChain Logo"
      srcSet="/apechain_logo32x32@1x.png 1x, /apechain_logo32x32@2x.png 2x, /apechain_logo32x32@3x.png 3x"
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
      src="/apechain_logo40x40@1x.png"
      alt="ApeChain Logo"
      srcSet="/apechain_logo40x40@1x.png 1x, /apechain_logo40x40@2x.png 2x, /apechain_logo40x40@3x.png 3x"
    />
  </AvatarLogo>
);

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
      src="/molten_logo24x24@1x.png"
      alt="Molten Logo"
      srcSet="/molten_logo24x24@1x.png 1x, /molten_logo24x24@2x.png 2x, /molten_logo24x24@3x.png 3x"
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
      src="/molten_logo32x32@1x.png"
      alt="Molten Logo"
      srcSet="/molten_logo32x32@1x.png 1x, /molten_logo32x32@2x.png 2x, /molten_logo32x32@3x.png 3x"
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
      src="/molten_logo40x40@1x.png"
      alt="Molten Logo"
      srcSet="/molten_logo40x40@1x.png 1x, /molten_logo40x40@2x.png 2x, /molten_logo40x40@3x.png 3x"
    />
  </AvatarLogo>
);

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
      src="/t3rn_logo_light24x24@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_light24x24@1x.png 1x, /t3rn_logo_light24x24@2x.png 2x, /t3rn_logo_light24x24@3x.png 3x"
    />
    <img
      className="only-dark"
      src="/t3rn_logo_dark24x24@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_dark24x24@1x.png 1x, /t3rn_logo_dark24x24@2x.png 2x, /t3rn_logo_dark24x24@3x.png 3x"
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
      src="/t3rn_logo_light32x32@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_light32x32@1x.png 1x, /t3rn_logo_light32x32@2x.png 2x, /t3rn_logo_light32x32@3x.png 3x"
    />
    <img
      className="only-dark"
      src="/t3rn_logo_dark32x32@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_dark32x32@1x.png 1x, /t3rn_logo_dark32x32@2x.png 2x, /t3rn_logo_dark32x32@3x.png 3x"
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
      src="/t3rn_logo_light40x40@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_light40x40@1x.png 1x, /t3rn_logo_light40x40@2x.png 2x, /t3rn_logo_light40x40@3x.png 3x"
    />
    <img
      className="only-dark"
      src="/t3rn_logo_dark40x40@1x.png"
      alt="T3rn Logo"
      srcSet="/t3rn_logo_dark40x40@1x.png 1x, /t3rn_logo_dark40x40@2x.png 2x, /t3rn_logo_dark40x40@3x.png 3x"
    />
  </AvatarLogo>
);

/**
 * With24PxSquare is a higher order component that adds the class
 * avatar-24x24 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 24px x 24px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export function With24PxSquare<Props extends PreFedSrcAvatarLogoProps>(
  component: React.ComponentType<Props> | string,
) {
  return addClassNameToComponent(component, 'avatar-24x24');
}

/**
 * With24PxSquare is a higher order component that adds the class
 * avatar-32x32 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 32px x 32px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export function With32PxSquare<Props extends PreFedSrcAvatarLogoProps>(
  component: React.ComponentType<Props> | string,
) {
  return addClassNameToComponent(component, 'avatar-32x32');
}

/**
 * With40PxSquare is a higher order component that adds the class
 * avatar-40x40 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 40px x 40px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export function With40PxSquare<Props extends PreFedSrcAvatarLogoProps>(
  component: React.ComponentType<Props> | string,
) {
  return addClassNameToComponent(component, 'avatar-40x40');
}

/**
 * WithCircleBorder is a higher order component that adds the class
 * avatar-circle to the given component.
 *
 * This css class is meant to clip the given element to a circle.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export function WithCircleBorder<Props extends PreFedSrcAvatarLogoProps>(
  component: React.ComponentType<Props> | string,
) {
  return addClassNameToComponent(component, 'avatar-circle');
}
