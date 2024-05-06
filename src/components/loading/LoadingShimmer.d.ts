import { default as React } from 'react';
import { HigherOrderComponentWithClassNameProps } from '../../../../../../../../../../src/components/higher_order';

/**
 * WithLoadingShimmer is a higher order component that adds the loading-shimmer
 * class to the given component.
 */
export declare function WithLoadingShimmer<Props extends HigherOrderComponentWithClassNameProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
