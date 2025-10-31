import Text from '@/components/text/Text';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';

/**
 * ValidatorHeadCell is the header cell for the Validator column in the
 * validator table.
 */
export const ValidatorHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Validator" />
      &nbsp;
      <VerticalScroll />
    </>
  );
};
