import { default as React } from 'react';
/**
 * ButtonSegment represents a single segment within the segmented button
 * group.
 */
export interface ButtonSegment<T> {
    value: T;
    label: React.ReactNode;
}
/**
 * SegmentedButtonProps defines the properties for the SegmentedButton
 * component.
 */
export interface SegmentedButtonProps<T> {
    className?: string;
    selected: T;
    onSelectionChange: (value: T) => void;
    segments: ButtonSegment<T>[];
}
/**
 * SegmentedButton is a button group that allows the user to select one of
 * multiple segments. Each segment is represented by a button. The selected
 * segment is highlighted.
 */
export declare function SegmentedButton<T>(props: SegmentedButtonProps<T>): import("react/jsx-runtime").JSX.Element;
