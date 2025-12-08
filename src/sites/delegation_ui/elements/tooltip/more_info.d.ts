import { default as React } from 'react';
export interface MoreInfoElementProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * MoreInfoElement is a component that displays an info circle element that
 * can be hovered, or clicked on to display a custom caption dialog that is
 * positioned relative to the info circle element.
 */
export declare const MoreInfoElement: React.FC<MoreInfoElementProps>;
