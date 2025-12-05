import { addClassNameToComponent } from '@/higher_order';
import React from 'react';
import { AvatarLogoProps } from './avatar_logo';
import './images.css';

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
