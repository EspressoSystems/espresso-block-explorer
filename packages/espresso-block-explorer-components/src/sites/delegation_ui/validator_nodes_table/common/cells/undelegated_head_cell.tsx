import { Text } from '@/components/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * UndelegatedHeadCell is the header cell for the validator table that
 * represents the amount the wallet has actively pending withdrawl from the
 * validator node.
 */
export const UndelegatedHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Undelegated" />
      <MoreInfoElement>
        <Text text="You will be able to claim this amount after the escrow period ends" />
      </MoreInfoElement>
    </>
  );
};
