import React from 'react';

import { addClassToClassName } from '@/higher_order';
import HelpQuestion1 from '@/components/visual/icons/sharp_line/help_question_1';
import './more_info.css';
import { Tooltip } from './tooltip';

export interface MoreInfoElementProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * MoreInfoElement is a component that displays an info circle element that
 * can be hovered, or clicked on to display a custom caption dialog that is
 * positioned relative to the info circle element.
 */
export const MoreInfoElement: React.FC<MoreInfoElementProps> = ({
  className,
  children,
  ...props
}) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div
      {...props}
      data-toggle={toggle}
      className={addClassToClassName(className, 'bmore-info-element')}
    >
      <Tooltip>{children}</Tooltip>
      <HelpQuestion1
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          setToggle(!toggle);
        }}
      />
    </div>
  );
};
