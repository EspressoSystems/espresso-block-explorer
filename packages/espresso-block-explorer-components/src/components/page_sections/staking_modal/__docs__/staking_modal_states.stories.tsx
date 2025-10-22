import { hexArrayBufferCodec } from '@/convert/codec';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { Environment } from '@/models/config/environment/environment';
import { StoryBookSpecifyEnvironmentAndContracts } from '@/models/config/storybook/storybook';
import { CommissionPercent } from '@/models/espresso/stake_table/commission_percent';
import { Validator } from '@/models/espresso/stake_table/validator';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import WalletAddress from '@/models/wallet_address/wallet_address';
import { Meta, StoryObj } from '@storybook/react-vite';
import { CurrentValidatorsContext } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import {
  CurrentStakeTableV1AllowanceContext,
  CurrentTokenBalanceContext,
  LastWalletReadTimestampContext,
} from '../../staking_summary/staking_summary';
import { StakingModalState } from '../context';
import { StakingModal } from '../staking_modal';

const FAKE_VALIDATOR_ADDRESS: `0x${string}` =
  '0x1234567890abcdef1234567890abcdef12345678';
const FAKE_VALIDATOR = new Validator(
  new WalletAddress(hexArrayBufferCodec.decode(FAKE_VALIDATOR_ADDRESS)),
  new TaggedBase64('BLS_KEY', new ArrayBuffer(32)),
  new TaggedBase64('STATE_VER_KEY', new ArrayBuffer(32)),
  200000000000000000000n,
  new CommissionPercent(5),
  new Map([[FAKE_VALIDATOR_ADDRESS, 1000000000n]]),
);

interface ExampleProps {
  initialState?: StakingModalState;
  currentBalance?: bigint;
  currentAllowance?: bigint;
}

const Example: React.FC<ExampleProps> = (props) => {
  const {
    initialState = {
      showModal: false,
      stakingPhase: null,
      address: null,
      amount: null,
    },
    currentAllowance = 10000000000000000000n,
    currentBalance = 1000000000000000000000n,
  } = props;
  return (
    <StoryBookSpecifyEnvironmentAndContracts
      environment={Environment.localDevNet}
      espTokenContractAddress="0x0000000000000000000000000000000000000001"
      stakeTableContractAddress="0x0000000000000000000000000001111111111112"
    >
      <CurrentStakeTableV1AllowanceContext.Provider value={currentAllowance}>
        <CurrentTokenBalanceContext.Provider value={currentBalance}>
          <LastWalletReadTimestampContext.Provider value={new Date()}>
            <CurrentValidatorsContext.Provider
              value={new Map([[FAKE_VALIDATOR_ADDRESS, FAKE_VALIDATOR]])}
            >
              <StakingModal initialModalState={initialState}>
                <></>
              </StakingModal>
            </CurrentValidatorsContext.Provider>
          </LastWalletReadTimestampContext.Provider>
        </CurrentTokenBalanceContext.Provider>
      </CurrentStakeTableV1AllowanceContext.Provider>
    </StoryBookSpecifyEnvironmentAndContracts>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Staking Modal/States',
  component: Example,
  argTypes: {
    initialState: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Closed: Story = {
  args: {
    initialState: {
      showModal: false,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: MonetaryValue.ETH(1000000000000000000n),
    },
  },
};

export const Opened: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: null,
      amount: null,
    },
  },
};

export const ValidatorSelected: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: null,
    },
  },
};

export const AmountSpecified: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: MonetaryValue.ETH(1000000000000000000n),
    },
  },
};

export const InsufficientBalance: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: MonetaryValue.ETH(10000000000000000000000n),
    },
  },
};

export const InsufficientAllowance: Story = {
  args: {
    initialState: {
      showModal: true,
      stakingPhase: null,
      address: FAKE_VALIDATOR_ADDRESS,
      amount: MonetaryValue.ETH(1000000000000000000000n),
    },
  },
};
