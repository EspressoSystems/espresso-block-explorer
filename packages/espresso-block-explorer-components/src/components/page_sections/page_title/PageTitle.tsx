import React from 'react';
import { addClassToClassName } from '../../higher_order';
import { WithEdgeMargin } from '../../layout/margin';
import './page_title.css';

export interface PageTitleProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const EdgeMarginDiv = WithEdgeMargin('div');

/**
 * PageTitle is a container element to hold the page's title, sub-heading
 * information, and potentially navigation elements.
 */
const PageTitle: React.FC<PageTitleProps> = (props) => (
  <EdgeMarginDiv
    {...props}
    className={addClassToClassName(props.className, 'page-title')}
  />
);

export default PageTitle;
