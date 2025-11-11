import Text from '@/components/text/Text';
import { CloseStakingModalButton } from './close_staking_modal';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const ValidatorSelectionNeededContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Select a Validator" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>{/* <DecorationDots /> */}</StakingContent>
    </>
  );
};
