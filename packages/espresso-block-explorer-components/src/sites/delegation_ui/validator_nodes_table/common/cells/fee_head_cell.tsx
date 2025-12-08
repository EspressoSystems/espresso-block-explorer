import Text from '@/components/text/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';
import React from 'react';

/**
 * FeeHeadCell is the header cell for the Fee column in the validator table.
 */
export const FeeHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Commission Rate" />
      <MoreInfoElement>
        <Text text="This is a fee charged by the validator for their services.  It is deducted from your staking rewards and paid to the validator." />
      </MoreInfoElement>
    </>
  );
};
