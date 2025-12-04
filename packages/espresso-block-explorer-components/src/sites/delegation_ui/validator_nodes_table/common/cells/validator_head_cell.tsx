import Text from '@/components/text/text';
import ChevronDown from '@/components/visual/icons/feather/chevron_down';
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
      <ChevronDown />
    </>
  );
};
