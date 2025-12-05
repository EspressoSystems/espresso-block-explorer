import { default as React } from 'react';
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
export declare const AvatarLogo: React.FC<AvatarLogoProps>;
