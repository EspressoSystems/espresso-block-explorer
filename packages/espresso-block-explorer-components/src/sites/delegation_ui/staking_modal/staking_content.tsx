/**
 * StakingContent is a React component that displays the content
 * area for staking modals.
 *
 * This is a common component that is used for every Staking Modal's
 * content area.
 */
export const StakingContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="staking-modal-content">{children}</div>;
};
