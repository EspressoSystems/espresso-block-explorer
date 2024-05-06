import React from 'react';

import {
  HigherOrderComponentWithClassNameProps,
  addClassNameToComponent,
} from '@/higher_order';
import './margin.css';

/**
 * WithEdgeMargin is a function that takes a component and adds the
 * class 'edge-margin' to its className.
 */
export function WithEdgeMargin<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'edge-margin');
}
