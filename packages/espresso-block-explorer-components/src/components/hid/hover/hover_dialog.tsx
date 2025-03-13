import React from 'react';

import { addClassToClassName } from '@/components/higher_order';
import './hover_dialog.css';

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
export const HoverDialog: React.FC<HoverDialogProps> = ({
  className,
  children,
  width,
  ...props
}) => {
  return (
    <div
      {...props}
      className={addClassToClassName(className, 'hover-dialog')}
      style={{ width: `${width}px` }}
    >
      {children}
    </div>
  );
};
