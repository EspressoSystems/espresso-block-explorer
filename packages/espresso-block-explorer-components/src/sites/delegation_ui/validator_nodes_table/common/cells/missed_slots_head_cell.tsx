import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';
import React from 'react';

/**
 * MissedSlotsHeadCell is the header cell for the Missed Slots column in the
 * validator table.
 */
export const MissedSlotsHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Missed Slots" />
      <MoreInfoElement>
        <Text text="The amount of times a validator fails to propose a block when it's their turn (e.g. by being offline). A higher % of missed slots means the validator is not performing well. A '-' indicates the validator has not yet proposed any blocks, or may not be actively participating in consensus for the current Epoch." />
      </MoreInfoElement>
    </>
  );
};
