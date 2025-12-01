import { default as React } from 'react';
export interface CollapsableSectionProps extends React.HTMLAttributes<HTMLDetailsElement> {
}
export declare const CollapsableSection: React.FC<CollapsableSectionProps>;
export interface CollapsableHeaderProps extends React.HTMLAttributes<HTMLElement> {
}
export declare const CollapsableHeader: React.FC<React.HTMLAttributes<HTMLElement>>;
export declare const CollapseGuard: React.FC<React.PropsWithChildren>;
