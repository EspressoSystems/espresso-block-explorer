import { HigherOrderComponentWithClassNameProps } from '../../../../../../../../../../../src/components/higher_order';
import { default as React } from 'react';

/**
 * WithEdgeMargin is a function that takes a component and adds the
 * class 'edge-margin' to its className.
 */
export declare function WithEdgeMargin<Props extends HigherOrderComponentWithClassNameProps>(component: React.ComponentType<Props> | string): React.FC<Props>;
