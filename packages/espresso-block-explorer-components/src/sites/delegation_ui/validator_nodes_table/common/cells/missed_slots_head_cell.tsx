import Text from '@/components/text/Text';
import ChevronDown from '@/components/visual/icons/feather/chevron_down';
import VerticalScroll from '@/components/visual/icons/feather/vertical-scroll';
import React from 'react';

/**
 * MissedSlotsHeadCell is the header cell for the Missed Slots column in the
 * validator table.
 */
export const MissedSlotsHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Missed Slots" />
      &nbsp;
      <VerticalScroll />
      <ChevronDown />
    </>
  );
};
