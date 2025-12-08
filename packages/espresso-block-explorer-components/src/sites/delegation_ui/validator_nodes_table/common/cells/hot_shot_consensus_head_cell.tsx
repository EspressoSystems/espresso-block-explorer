import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * HotShotConsensusHeadCell is the header cell for the HotShot Consensus
 * column in the validator table.
 */
export const HotShotConsensusHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Consensus" />
      <MoreInfoElement>
        <Text text="Espresso validators vote on each block and come to an agreement on the correct state of the blockchain in order to finalize it." />
      </MoreInfoElement>
    </>
  );
};
