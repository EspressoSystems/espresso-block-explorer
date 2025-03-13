import { default as React } from '../../../../../../node_modules/react';

export interface HoverDialogProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    width: number;
}
/**
 * HoverDialog is an element that holds the custom content that should be
 * displayed from an info circle element.  It is used to position and contain
 * additional context that is best described as "more information".
 */
export declare const HoverDialog: React.FC<HoverDialogProps>;
