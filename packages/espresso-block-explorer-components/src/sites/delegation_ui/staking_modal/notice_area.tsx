import Text from '@/components/text/text';

export const NoticeArea: React.FC = () => {
  return (
    <div className="staking-modal-notice-area">
      <p>
        <Text text="Only top 100 validators are eligible to receive rewards, and will be sent upon next epoch start." />
      </p>
    </div>
  );
};
