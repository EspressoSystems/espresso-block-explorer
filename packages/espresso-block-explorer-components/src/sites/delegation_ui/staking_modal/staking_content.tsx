import { addClassToClassName } from '@/components/higher_order';
import { default as React } from 'react';

export type StakingContentProps = React.PropsWithChildren & {
  className?: string;
};

/**
 * StakingContent is a React component that displays the content
 * area for staking modals.
 *
 * This is a common component that is used for every Staking Modal's
 * content area.
 */
export const StakingContent: React.FC<StakingContentProps> = ({
  className,
  children,
}) => {
  return (
    <div className={addClassToClassName(className, 'staking-modal-content')}>
      {children}
    </div>
  );
};
