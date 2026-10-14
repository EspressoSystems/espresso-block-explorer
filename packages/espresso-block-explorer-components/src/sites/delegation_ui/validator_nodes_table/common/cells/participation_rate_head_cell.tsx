import { Text } from '@/components/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';

/**
 * ParticipationRateHeadCell is the header cell for the Participation Rate
 * column in the validator table.
 */
export const ParticipationRateHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Vote Participation" />
      <MoreInfoElement>
        <Text text="How often a validator's vote is included in the certificate that finalizes a block. A certificate is formed as soon as votes holding over 2/3 of the stake arrive, and later votes are left out, so this reflects how quickly a validator's votes arrive rather than how often it votes. Some validators are left out of every certificate by design." />
      </MoreInfoElement>
    </>
  );
};
