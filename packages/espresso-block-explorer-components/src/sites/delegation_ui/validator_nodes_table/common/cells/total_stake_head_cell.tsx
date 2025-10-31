import Text from '@/components/text/Text';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * TotalStakeHeadCell is the header cell for the Total Stake column in the
 * validator table.
 */
export const TotalStakeHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Total Stake" />
      &nbsp;
      <VerticalScroll />
    </>
  );
};
