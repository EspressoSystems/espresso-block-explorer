import Text from '@/components/text/Text';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * HotShotConsensusHeadCell is the header cell for the HotShot Consensus
 * column in the validator table.
 */
export const HotShotConsensusHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Hotshot Consensus?" />
      &nbsp;
      <VerticalScroll />
    </>
  );
};
