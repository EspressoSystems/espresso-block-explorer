import React from 'react';
export interface AvatarLogoProps {
    className?: string;
    src: string;
}
declare const AvatarLogo: React.FC<AvatarLogoProps>;
export default AvatarLogo;
type PreFedSrcAvatarLogoProps = Omit<AvatarLogoProps, 'src'>;
export declare const AltLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const ArbitrumAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const CalderaAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const EigenLayerAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const OpStackAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const PolygonAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const SpireAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare const VistaraAvatarLogo: React.FC<PreFedSrcAvatarLogoProps>;
export declare function With24PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
export declare function With32PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
export declare function With40PxSquare<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
export declare function WithCircleBorder<Props extends PreFedSrcAvatarLogoProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
