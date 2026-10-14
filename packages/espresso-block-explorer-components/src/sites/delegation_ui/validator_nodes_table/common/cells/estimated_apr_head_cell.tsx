import { Text } from '@/components/text';
import { MoreInfoElement } from '@/sites/delegation_ui/elements/tooltip/more_info';
import { default as React } from 'react';

/**
 * EstimatedAPRHeadCell is the header for a validator's estimated APR.
 */
export const EstimatedAPRHeadCell: React.FC = () => {
  return (
    <>
      <Text text="Estimated APR" />
      <MoreInfoElement>
        <Text text="The network's estimated yearly return on staked tokens, after this validator's commission. Informational, and not a guarantee of returns. A '-' indicates the validator is not in the active set for the current Epoch, and does not earn rewards." />
      </MoreInfoElement>
    </>
  );
};
