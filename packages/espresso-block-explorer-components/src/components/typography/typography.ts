/**
 * This file is filled with components that are meant to wrap others as a
 * form of Higher-Order components.  They Essentially wrap other components
 * in order to add a class to the wrapped component.
 *
 * This file defines convenience wrappers for the various text formatting
 * styles that are defined within the main.css files.  The primary reason
 * for creating these higher-order components is to allow for them to be
 * added to other components.
 */

import React from 'react';
import {
  HigherOrderComponentWithClassNameProps,
  addClassNameToComponent,
} from '../higher_order';

import './typography.css';

/**
 * WithParagraphText100 is a function that takes a component and adds the
 * class 'type--paragraph--text-100' to its className.
 */
export function WithParagraphText100<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--text-100');
}

/**
 * WithParagraphText300 is a function that takes a component and adds the
 * class 'type--paragraph--text-300' to its className.
 */
export function WithParagraphText300<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--text-300');
}

/**
 * WithParagraphText500 is a function that takes a component and adds the
 * class 'type--paragraph--text-500' to its className.
 */
export function WithParagraphText500<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--text-500');
}

/**
 * WithParagraphText600 is a function that takes a component and adds the
 * class 'type--paragraph--text-600' to its className.
 */
export function WithParagraphText600<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--text-600');
}

/**
 * WithParagraphBase is a function that takes a component and adds the
 * class 'type--paragraph--base' to its className.
 */
export function WithParagraphBase<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--base');
}

/**
 * WithParagraphSmall is a function that takes a component and adds the
 * class 'type--paragraph--small' to its className.
 */
export function WithParagraphSmall<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--paragraph--small');
}

/**
 * WithUiText100 is a function that takes a component and adds the
 * class 'type--ui--text-100' to its className.
 */
export function WithUiText100<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--text-100');
}

/**
 * WithUiText300 is a function that takes a component and adds the
 * class 'type--ui--text-300' to its className.
 */
export function WithUiText300<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--text-300');
}

/**
 * WithUiText500 is a function that takes a component and adds the
 * class 'type--ui--text-500' to its className.
 */
export function WithUiText500<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--text-500');
}

/**
 * WithUiText600 is a function that takes a component and adds the
 * class 'type--ui--text-600' to its className.
 */
export function WithUiText600<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--text-600');
}

/**
 * WithUiBase is a function that takes a component and adds the
 * class 'type--ui--base' to its className.
 */
export function WithUiBase<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--base');
}

/**
 * WithUiSmall is a function that takes a component and adds the
 * class 'type--ui--small' to its className.
 */
export function WithUiSmall<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--small');
}

/**
 * WithUiButton is a function that takes a component and adds the
 * class 'type--ui--button' to its className.
 */
export function WithUiButton<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'type--ui--button');
}
