import Text from '@/components/text/Text';
import ChevronDown from '@/components/visual/icons/feather/chevron_down';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * RankHeadCell is the header cell for the Rank column in the validator table.
 */
export const RankHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Rank" />
      &nbsp;
      <VerticalScroll />
      <ChevronDown />
    </>
  );
};
