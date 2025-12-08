import React from 'react';

import { addClassToClassName } from '@/components/higher_order';
import './tooltip.css';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * Tooltip is an element that holds the custom content that should be
 * displayed from an info circle element.  It is used to position and contain
 * additional context that is best described as "more information".
 */
export const Tooltip: React.FC<TooltipProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={addClassToClassName(className, 'btooltip')}
      role="tooltip"
    >
      {children}
    </div>
  );
};
