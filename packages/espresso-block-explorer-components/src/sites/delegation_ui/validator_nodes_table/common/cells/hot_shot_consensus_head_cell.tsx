import Text from '@/components/text/Text';
import ChevronDown from '@/components/visual/icons/feather/chevron_down';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * HotShotConsensusHeadCell is the header cell for the HotShot Consensus
 * column in the validator table.
 */
export const HotShotConsensusHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Consensus" />
      &nbsp;
      <VerticalScroll />
      <ChevronDown />
    </>
  );
};
