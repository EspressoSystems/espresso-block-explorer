import { default as React } from '../../../../../../node_modules/react';

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
export declare const EspressoAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * RariLogo24 represents the Rari Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const RariLogo24: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * RariLogo32 represents the Rari Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const RariLogo32: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * RariLogo40 represents the Rari Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const RariLogo40: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * LogXLogo24 represents the LogX Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const LogXLogo24: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * LogXLogo32 represents the LogX Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const LogXLogo32: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * LogXLogo40 represents the LogX Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const LogXLogo40: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * AppChainLogo24 represents the AppChain Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const AppChainLogo24: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * AppChainLogo32 represents the AppChain Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const AppChainLogo32: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * AppChainLogo40 represents the AppChain Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const AppChainLogo40: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * ApeChainLogo24 represents the ApeChain Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const ApeChainLogo24: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * ApeChainLogo32 represents the ApeChain Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const ApeChainLogo32: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * ApeChainLogo40 represents the ApeChain Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const ApeChainLogo40: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * MoltenLogo24 represents the Molten Logo square at the size of 24x24
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const MoltenLogo24: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * MoltenLogo32 represents the Molten Logo square at the size of 32x32
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const MoltenLogo32: React.FC<PreFedSrcAvatarLogoProps>;
/**
 * MoltenLogo40 represents the Molten Logo square at the size of 40x40
 * with device pixel ratio support for 1x, 2x, and 3x displays.
 */
export declare const MoltenLogo40: React.FC<PreFedSrcAvatarLogoProps>;
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
