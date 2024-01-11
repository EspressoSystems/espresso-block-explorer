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

export interface HigherOrderComponentWithClassNameProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * addClassNameToComponent is a utility function that automatically adds
 * the given className to the givenComponent and returns a new
 * FunctionalComponent that can be easily utilized.
 *
 * @param component The component that you would like to have the className
 *   amended to.
 * @param className The className you would like to add to the component being
 *   passed.
 * @returns A React Functional Component with the Amended className already
 *   added to the passed component.
 */
export function addClassNameToComponent<
  Props extends HigherOrderComponentWithClassNameProps,
>(
  component: React.ComponentType<Props> | string,
  className: string
): React.FC<Props> {
  return (props: Props) =>
    React.createElement(component, {
      ...props,
      className: addClassToClassName(props.className, className),
    });
}

export function addClassToClassName(
  existingClassName: undefined | string,
  newClassName: string
): string {
  if (!existingClassName) {
    return newClassName;
  }

  return `${existingClassName} ${newClassName}`;
}

/**
 * appendClassNameComponent is a utility function that attempts to make it
 * easier to create a Component with an extra class / classes amended to the
 * className prop.
 *
 * In order to achieve this effectively the component must be passed first in
 * order for the props to be inferred within the type system correctly.
 *
 * This makes this function essentially a curry'd implementation of
 * `addClassNameToComponent`.
 *
 * @param component The component that we are looking to add class / classes to.
 * @returns A function that can be passed the classNames to add to the wrapped
 *   component's className props field.  The result of the function will be
 *   a React Component of the originally passed Component, but with the new
 *   class / classes added to the className props field.
 */
export function appendClassNameComponent<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return (className: string): React.FC<Props> =>
    addClassNameToComponent(component, className);
}
