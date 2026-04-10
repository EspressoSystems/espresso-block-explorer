import { Text } from '@/components/text';

export type NoticeAreaProps = Partial<React.PropsWithChildren>;

export const NoticeArea: React.FC<NoticeAreaProps> = ({ children }) => {
  const child = children ?? (
    <p>
      <Text text="Only the top 100 validators as weighted by stake during each epoch are eligible for rewards. Rewards will be sent upon new epoch start." />
    </p>
  );

  return <div className="staking-modal-notice-area">{child}</div>;
};
