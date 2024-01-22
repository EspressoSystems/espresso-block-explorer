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
import { HigherOrderComponentWithClassNameProps } from '../../higher_order';
/**
 * WithEdgeMargin is a function that takes a component and adds the
 * class 'edge-margin' to its className.
 */
export declare function WithEdgeMargin<Props extends HigherOrderComponentWithClassNameProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
