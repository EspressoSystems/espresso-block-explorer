import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * ParticipationRateHeadCell is the header cell for the Participation Rate
 * column in the validator table.
 */
export const ParticipationRateHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Participation" />
      <MoreInfoElement>
        <Text text="The percentage of blocks a validator has voted.  Espresso requires at least 66% of stake to participate to finalize a block." />
      </MoreInfoElement>
    </>
  );
};
