import {
  HigherOrderComponentWithClassNameProps,
  addClassNameToComponent,
} from '@/higher_order';
import React from 'react';
import './loading_shimmer.css';

/**
 * WithLoadingShimmer is a higher order component that adds the loading-shimmer
 * class to the given component.
 */
export function WithLoadingShimmer<
  Props extends HigherOrderComponentWithClassNameProps,
>(component: React.ComponentType<Props> | string) {
  return addClassNameToComponent(component, 'loading-shimmer');
}
