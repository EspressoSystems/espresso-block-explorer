import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * HotShotConsensusHeadCell is the header cell for the HotShot Consensus
 * column in the validator table.
 */
export const HotShotConsensusHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Status" />
      <MoreInfoElement>
        <Text text="Active validators are participating in consensus and earning rewards.  Inactive Validators are not currently participating in consensus or earning rewards." />
      </MoreInfoElement>
    </>
  );
};
