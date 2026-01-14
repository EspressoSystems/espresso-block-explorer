import Text from '@/components/text/text';

export const NoticeArea: React.FC = () => {
  return (
    <div className="staking-modal-notice-area">
      <p>
        <Text text="Only the top 100 validators as weighted by stake during each epoch are eligible for rewards. Rewards will be sent upon new epoch start." />
      </p>
    </div>
  );
};
