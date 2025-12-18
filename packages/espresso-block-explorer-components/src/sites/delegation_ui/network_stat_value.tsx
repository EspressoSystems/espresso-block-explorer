import { addClassToClassName } from '@/components/higher_order';
import React from 'react';

export interface NetworkStatValueProps extends Omit<
  React.HTMLProps<HTMLDivElement>,
  'children'
> {
  children: [React.ReactNode, React.ReactNode];
}

/**
 * NetworkStateValue displays a network statistic value with a label and value.
 * It expects exactly two children: the first child is the label, and the second
 * child is the value.
 */
export const NetworkStatValue: React.FC<NetworkStatValueProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={addClassToClassName(className, 'network-stat-value')}
      {...rest}
    >
      {children}
    </div>
  );
};
