import Text from '@/components/text/Text';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * ParticipationRateHeadCell is the header cell for the Participation Rate
 * column in the validator table.
 */
export const ParticipationRateHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Participation" />
      &nbsp;
      <VerticalScroll />
    </>
  );
};
