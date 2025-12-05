import { default as React } from 'react';
import { AvatarLogoProps } from './avatar_logo';
export type PreFedSrcAvatarLogoProps = Omit<AvatarLogoProps, 'src'>;
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
