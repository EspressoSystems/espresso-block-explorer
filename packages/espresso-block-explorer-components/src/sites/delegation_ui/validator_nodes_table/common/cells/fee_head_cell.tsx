import Text from '@/components/text/Text';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';
import React from 'react';

/**
 * FeeHeadCell is the header cell for the Fee column in the validator table.
 */
export const FeeHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Fee" />
      &nbsp;
      <VerticalScroll />
    </>
  );
};
