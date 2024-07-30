import { default as React } from '../../../../../../node_modules/react';

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
declare const AvatarLogo: React.FC<AvatarLogoProps>;
export default AvatarLogo;
type PreFedSrcAvatarLogoProps = Omit<AvatarLogoProps, 'src'>;
/**
 * AltLayerAvatarLogo represents the Alt Layer Logo
 */
export declare const AltLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * ArbitrumAvatarLogo represents the Arbitrum Logo
 */
export declare const ArbitrumAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * CalderaAvatarLogo represents the Caldera Logo
 */
export declare const CalderaAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * EigenLayerAvatarLogo represents the Eigen Layer Logo
 */
export declare const EigenLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * OpStackAvatarLogo represents the OP Stack Logo
 */
export declare const OpStackAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * PolygonAvatarLogo represents the Polygon Logo
 */
export declare const PolygonAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * SpireAvatarLogo represents the Spire Logo
 */
export declare const SpireAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * VistaraAvatarLogo represents the Vistara Logo
 */
export declare const VistaraAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * With24PxSquare is a higher order component that adds the class
 * avatar-24x24 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 24px x 24px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export declare function With24PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
/**
 * With24PxSquare is a higher order component that adds the class
 * avatar-32x32 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 32px x 32px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export declare function With32PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
/**
 * With40PxSquare is a higher order component that adds the class
 * avatar-40x40 to the given component.
 *
 * This css class is meant to restrict the size of the wrapped component
 * to a 40px x 40px square.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export declare function With40PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
/**
 * WithCircleBorder is a higher order component that adds the class
 * avatar-circle to the given component.
 *
 * This css class is meant to clip the given element to a circle.
 *
 * @note This is expected to wrap a picture element with the avatar class.
 */
export declare function WithCircleBorder<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
