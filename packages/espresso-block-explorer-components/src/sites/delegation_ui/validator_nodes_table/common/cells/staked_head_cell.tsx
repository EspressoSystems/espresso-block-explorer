import { Text } from '@/components/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * StakedHeadCell is the header cell for the validator table that represents
 * the amount the wallet has actively staked to the validator node.
 */
export const StakedHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Staked" />
      <MoreInfoElement>
        <Text text="The amount that this wallet has delegated to this node." />
      </MoreInfoElement>
    </>
  );
};
