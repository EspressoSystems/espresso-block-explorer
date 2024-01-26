import React from 'react';
export interface PageTitleProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * PageTitle is a container element to hold the page's title, sub-heading
 * information, and potentially navigation elements.
 */
declare const PageTitle: React.FC<PageTitleProps>;
export default PageTitle;
