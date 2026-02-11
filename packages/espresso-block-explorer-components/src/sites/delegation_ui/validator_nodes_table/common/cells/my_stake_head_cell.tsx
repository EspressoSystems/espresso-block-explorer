import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';
import React from 'react';

/**
 * MyStakeHeadCell is the header cell for the My Stake column in the
 * validator table.
 */
export const MyStakeHeadCell: React.FC = () => {
  return (
    <>
      <Text text="My Delegation" />
      <MoreInfoElement>
        <Text text="How much stake the current wallet has delegated to this validator node." />
      </MoreInfoElement>
    </>
  );
};
