import './staking_modal_title.css';

export const StakingModalTitle: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <h2 className="staking-modal-title">{children}</h2>;
};
