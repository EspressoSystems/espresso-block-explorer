import { BackButton } from './back_button';
import './staking_header.css';

export const StakingHeader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="staking-modal-header">
      <BackButton />
      {children}
    </div>
  );
};
