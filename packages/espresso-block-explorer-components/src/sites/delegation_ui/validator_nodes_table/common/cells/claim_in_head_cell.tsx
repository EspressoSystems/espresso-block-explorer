import { Text } from '@/components/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * ClaimInHeadCell is the header cell for the Claim In column in the
 * validator table.
 */
export const ClaimInHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Claim In" />
      <MoreInfoElement>
        <Text text="How much time is remaining in order to withdraw any claims or exits." />
      </MoreInfoElement>
    </>
  );
};
