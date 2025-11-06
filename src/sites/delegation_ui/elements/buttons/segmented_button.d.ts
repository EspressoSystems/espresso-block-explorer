import { default as React } from 'react';
export interface ButtonSegment<T> {
    value: T;
    label: React.ReactNode;
}
export interface SegmentedButtonProps<T> {
    className?: string;
    selected: T;
    onSelectionChange: (value: T) => void;
    segments: ButtonSegment<T>[];
}
export declare function SegmentedButton<T>(props: SegmentedButtonProps<T>): import("react/jsx-runtime").JSX.Element;
