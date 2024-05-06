import { addClassNameToComponent, addClassToClassName } from '@/higher_order';
import React from 'react';
import './images.css';

export interface AvatarLogoProps {
  className?: string;
  src: string;
  alt?: string;
}

/**
 * AvatarLogo represents an Avatar Logo representation of an Avatar Logo.
 * Traditionally these tend to be circular.  However in the case of some
 * of our Rollups, specifically Eigen Layer, their logo in the design is
 * not clipped to a circle. So instead the avatar is more concerned with
 * being just a picture element, and nothing else.  It will automatically
 * add the 'avatar' class to the picture element.
 */
const AvatarLogo: React.FC<AvatarLogoProps> = ({
  className,
  alt,
  src,
  ...props
}) => {
  return (
    <picture {...props} className={addClassToClassName(className, 'avatar')}>
      <img src={src} alt={alt} />
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
) => <AvatarLogo {...props} src="/alt_layer_logo.png" alt="Alt Layer Logo" />;

/**
 * ArbitrumAvatarLogo represents the Arbitrum Logo
 */
export const ArbitrumAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => <AvatarLogo {...props} src="/arbitrum_logo.png" alt="Arbitrum Logo" />;

/**
 * CalderaAvatarLogo represents the Caldera Logo
 */
export const CalderaAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => <AvatarLogo {...props} src="/caldera_logo.png" alt="Caldera Logo" />;

/**
 * EigenLayerAvatarLogo represents the Eigen Layer Logo
 */
export const EigenLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => (
  <AvatarLogo {...props} src="/eigen_layer_logo.png" alt="Eigen Layer Logo" />
);

/**
 * OpStackAvatarLogo represents the OP Stack Logo
 */
export const OpStackAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => <AvatarLogo {...props} src="/op_stack_logo.png" alt="Op Stack Logo" />;

/**
 * PolygonAvatarLogo represents the Polygon Logo
 */
export const PolygonAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => <AvatarLogo {...props} src="/polygon_logo.png" alt="Polygon Logo" />;

/**
 * SpireAvatarLogo represents the Spire Logo
 */
export const SpireAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (props) => (
  <AvatarLogo {...props} src="/spire_logo.png" alt="Spire Logo" />
);

/**
 * VistaraAvatarLogo represents the Vistara Logo
 */
export const VistaraAvatarLogo: React.FC<PreFedSrcAvatarLogoProps> = (
  props,
) => <AvatarLogo {...props} src="/vistara_logo.png" alt="Vistara Logo" />;

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
