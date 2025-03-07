import React from 'react';

import { addClassToClassName } from '@/components/higher_order';
import { InfoCircle } from '@/components/visual';
import { HoverDialog } from './hover_dialog';
import './more_info_element.css';

export interface MoreInfoElementProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  hoverWidth: number;
}

/**
 * MoreInfoElement is a component that displays an info circle element that
 * can be hovered, or clicked on to display a custom caption dialog that is
 * positioned relative to the info circle element.
 */
export const MoreInfoElement: React.FC<MoreInfoElementProps> = ({
  className,
  children,
  hoverWidth,
  ...props
}) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div
      {...props}
      data-toggle={toggle}
      className={addClassToClassName(className, 'more-info-element')}
    >
      <HoverDialog width={hoverWidth}>{children}</HoverDialog>
      <InfoCircle
        onClick={() => {
          setToggle(!toggle);
        }}
      />
    </div>
  );
};

export interface PrefixMoreInfoElementProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
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
export const PrefixMoreInfoElement: React.FC<PrefixMoreInfoElementProps> = ({
  className,
  children,
  hoverWidth,
  ...props
}) => {
  const [hoverContent, content] = children;

  return (
    <div
      {...props}
      className={addClassToClassName(className, 'prefix-more-info-element')}
    >
      <MoreInfoElement hoverWidth={hoverWidth}>{hoverContent}</MoreInfoElement>
      {content}
    </div>
  );
};
