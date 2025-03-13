import { default as React } from '../../../../../../node_modules/react';

export interface MoreInfoElementProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    hoverWidth: number;
}
/**
 * MoreInfoElement is a component that displays an info circle element that
 * can be hovered, or clicked on to display a custom caption dialog that is
 * positioned relative to the info circle element.
 */
export declare const MoreInfoElement: React.FC<MoreInfoElementProps>;
export interface PrefixMoreInfoElementProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    className?: string;
    children: [React.ReactNode, React.ReactNode];
    hoverWidth: number;
}
/**
 * PrefixMoreInfoElement is a convenience component that wraps the
 * MoreInfoElement ensuring that it is inline with the contents it is
 * mean to be displayed next to.
 *
 * It has the following layout:
 * (i) <content>
 *
 * where the (i) represents the info element
 */
export declare const PrefixMoreInfoElement: React.FC<PrefixMoreInfoElementProps>;
/**
 * SuffixMoreInfoElement is a convenience component that wraps the
 * MoreInfoElement ensuring that it is inline with the contents it is
 * mean to be displayed next to.
 *
 * It has the following layout:
 * <content> (i)
 *
 * where the (i) represents the info element
 */
export declare const SuffixMoreInfoElement: React.FC<PrefixMoreInfoElementProps>;
