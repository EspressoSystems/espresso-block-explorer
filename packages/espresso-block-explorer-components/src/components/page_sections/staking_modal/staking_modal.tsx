import { EspressoConfigContext } from '@/components/config/espresso';
import IconButton from '@/components/hid/buttons/icon_button/IconButton';
import LabeledButton from '@/components/hid/buttons/labeled_button/LabeledButton';
import { InputContainer } from '@/components/input/container/Container';
import { ESPInput } from '@/components/input/esp/esp_input';
import { Heading2 } from '@/components/layout';
import { Divider } from '@/components/layout/divider/divider';
import {
  RainbowKitAccountAddressContext,
  RainbowKitChain,
  RainbowKitChainContext,
} from '@/components/rainbowkit';
import { MoneyText, PercentageText } from '@/components/text';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import Close from '@/components/visual/icons/Close';
import EspToken from '@/contracts/EspToken';
import StakeTable from '@/contracts/StakeTable';
import { firstWhereIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { walletAddressCodec } from '@/models/wallet_address/wallet_address';
import { CurrentValidatorsContext } from 'pages';
import React from 'react';
import { Config, useConfig, useReadContract, useWriteContract } from 'wagmi';
import {
  CurrentStakeTableV1AllowanceContext,
  CurrentTokenBalanceContext,
} from '../staking_summary/staking_summary';
import {
  StakingModalControlsContext,
  StakingModalState,
  StakingModalStateContext,
} from './context';
import './staking_modal.css';

function useStakingModalState() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [state, setState] = React.useState<StakingModalState>({
    showModal: false,
    stakingPhase: null,
    address: null,
    amount: null,
  });

  const showModal = (selectAddress?: `0x${string}`) => {
    setState({
      ...state,
      showModal: true,
      address: selectAddress ?? null,
    });

    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    setState({
      ...state,
      showModal: false,
      address: null,
      amount: null,
    });

    dialogRef.current?.close();
  };

  const setAmount = (amount: MonetaryValue | null) => {
    setState({
      ...state,
      amount: amount,
    });
  };

  const setValidator = (address: `0x${string}` | null) => {
    setState({
      ...state,
      address: address,
    });
  };

  return {
    dialogRef,
    state,
    showModal,
    closeModal,
    setAmount,
    setValidator,
  };
}

interface StakingModalLifecycleProps {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  // The dialogRef is used to control the dialog lifecycle
}

const DialogHeading: React.FC = () => {
  const controls = React.useContext(StakingModalControlsContext);

  return (
    <header className="dialog-header">
      <Heading2>
        <Text text="Stake ESP" />
      </Heading2>

      <IconButton
        onClick={() => controls.closeModal()}
        title="Close Navigation Drawer"
      >
        <Close />
      </IconButton>
    </header>
  );
};

const EditArea: React.FC = () => {
  // Depending on the phase, we'll either be selecting a validator, or
  // specifying an amount to stake.
  return null;
};

const DelegationPreviewTitle: React.FC = () => {
  const state = React.useContext(StakingModalStateContext);
  if (!state.address) {
    return (
      <Heading2>
        <Text text="No validator selected, please select a validator." />
      </Heading2>
    );
  }

  return (
    <>
      <Heading2>
        <span>
          <Text text="Staking to " />
          <WalletAddressText value={walletAddressCodec.decode(state.address)} />
        </span>
      </Heading2>
      <div className="delegation-preview-title">
        <Text text="Stake Preview" />
      </div>
    </>
  );
};

interface InformationRowProps {
  children: [React.ReactNode, React.ReactNode];
}

const InformationRow: React.FC<InformationRowProps> = ({
  children: [label, value],
}) => {
  return (
    <tr>
      <th>{label}</th>
      <td>{value}</td>
    </tr>
  );
};

const ValidatorContractInformation = React.createContext<
  [bigint, number] | null
>(null);

interface ProvideContextProps {
  children: React.ReactNode | React.ReactNode[];
}

interface ReadAndProvideStakeTableContractInformationProps {
  contractAddress: `0x${string}`;
  address: `0x${string}`;
  children: React.ReactNode | React.ReactNode[];
}

const ReadAndProvideStakeTableContractInformation: React.FC<
  ReadAndProvideStakeTableContractInformationProps
> = (props) => {
  const abi = StakeTable;
  const result = useReadContract({
    address: props.contractAddress,
    abi,
    functionName: 'validators',
    args: [props.address],
  });

  if (!result.data) {
    return props.children;
  }

  return (
    <ValidatorContractInformation.Provider
      value={result.data as [bigint, number]}
    >
      {props.children}
    </ValidatorContractInformation.Provider>
  );
};

const ProvideValidatorContractInformation: React.FC<ProvideContextProps> = (
  props,
) => {
  const state = React.useContext(StakingModalStateContext);
  const espressoInfo = React.useContext(EspressoConfigContext);
  const contractAddress = espressoInfo?.stakeTableContractAddress;
  if (!contractAddress || !state.address) {
    // If we don't have a contract address or an address, we can't provide
    // the context.
    return props.children;
  }

  return (
    <ReadAndProvideStakeTableContractInformation
      contractAddress={contractAddress}
      address={state.address as `0x${string}`}
    >
      {props.children}
    </ReadAndProvideStakeTableContractInformation>
  );
};

const ESPTokenAllowanceAndBalance = React.createContext<
  [bigint, bigint] | null
>(null);

interface ReadAndProvideESPAllowanceAndBalanceProps {
  espTokenContractAddress: `0x${string}`;
  stakingTableContractAddress: `0x${string}`;
  address: `0x${string}`;
  children: React.ReactNode | React.ReactNode[];
}

const ReadAndProvideESPAllowanceAndBalance: React.FC<
  ReadAndProvideESPAllowanceAndBalanceProps
> = (props) => {
  const balance = React.useContext(CurrentTokenBalanceContext) ?? 0n;
  const allowance = React.useContext(CurrentStakeTableV1AllowanceContext) ?? 0n;

  // const abi = EspToken;
  // const result = useReadContracts({
  //   contracts: [
  //     {
  //       address: props.espTokenContractAddress,
  //       abi,
  //       functionName: 'allowance',
  //       args: [props.address, props.stakingTableContractAddress],
  //     },
  //     {
  //       address: props.espTokenContractAddress,
  //       abi,
  //       functionName: 'balanceOf',
  //       args: [props.address],
  //     },
  //   ] as const,
  // });

  // if (!result.data || result.data.length < 2) {
  //   return props.children;
  // }
  // if (
  //   result.data[0].status !== 'success' ||
  //   result.data[1].status !== 'success'
  // ) {
  //   return props.children;
  // }

  // const allowance = result.data[0].result as bigint;
  // const balance = result.data[1].result as bigint;

  return (
    <ESPTokenAllowanceAndBalance.Provider value={[allowance, balance]}>
      {props.children}
    </ESPTokenAllowanceAndBalance.Provider>
  );
};

const ProvideAccountESPAllowanceAndBalance: React.FC<ProvideContextProps> = (
  props,
) => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoInfo = React.useContext(EspressoConfigContext);

  const espTokenContractAddress = espressoInfo?.espTokenContractAddress;
  const stakingTableContractAddress = espressoInfo?.stakeTableContractAddress;
  if (!espTokenContractAddress || !stakingTableContractAddress || !address) {
    // If we don't have a contract address or an address, we can't provide
    // the context.
    return props.children;
  }

  return (
    <ReadAndProvideESPAllowanceAndBalance
      espTokenContractAddress={espTokenContractAddress}
      stakingTableContractAddress={stakingTableContractAddress}
      address={address as `0x${string}`}
    >
      {props.children}
    </ReadAndProvideESPAllowanceAndBalance>
  );
};

const ValidatorStatus: React.FC = () => {
  const data = React.useContext(ValidatorContractInformation);

  if (!data) {
    return <></>;
  }
  const [, status] = data;

  switch (status) {
    case 1:
      return <Text text="Active" />;
    case 2:
      return <Text text="Exited" />;
    default:
      return <Text text="Unknown" />;
  }
};

const ContractInformation: React.FC = () => {
  const data = React.useContext(ValidatorContractInformation);

  if (!data) {
    return <></>;
  }
  const [delegatedAmount] = data;

  return (
    <>
      <InformationRow>
        <Text text="Current Stake" />
        <MoneyText money={MonetaryValue.ESP(delegatedAmount)} />
      </InformationRow>
      <InformationRow>
        <Text text="Status" />
        <ValidatorStatus />
      </InformationRow>
    </>
  );
};

const DelegationPreviewValidatorInformation: React.FC = () => {
  const state = React.useContext(StakingModalStateContext);
  const validators = React.useContext(CurrentValidatorsContext);
  if (!state.address) {
    return null;
  }

  const lowerAddress = state.address.toLowerCase();
  const validator =
    firstWhereIterable(
      validators.values(),
      (v) => v.account.toString().toLowerCase() === lowerAddress,
    ) ?? null;
  if (!validator) {
    return <></>;
  }

  // This is the validator information that will be displayed in the preview.
  // It will include the validator's address, name, and any other relevant
  // information.
  return (
    <>
      <Divider />
      <table className="validator-information">
        <tbody>
          <InformationRow>
            <Text text="Address" />
            <WalletAddressText
              value={walletAddressCodec.decode(state.address)}
            />
          </InformationRow>
          <InformationRow>
            <Text text="Commission" />
            <PercentageText percentage={validator.commission.valueOf()} />
          </InformationRow>
          <InformationRow>
            <Text text="Current Epoch Stake" />
            <MoneyText money={MonetaryValue.ESP(validator.stake)} />
          </InformationRow>
          <ContractInformation />
        </tbody>
      </table>
    </>
  );
};

const DelegationAmountToStake: React.FC = () => {
  const state = React.useContext(StakingModalStateContext);
  const controls = React.useContext(StakingModalControlsContext);
  const allowanceAndBalance = React.useContext(ESPTokenAllowanceAndBalance);

  if (!state.address || !allowanceAndBalance) {
    // Do not show any value option, if we don't even have a validator
    // selected
    return null;
  }

  const [allowance, balance] = allowanceAndBalance;
  const maxAllowed = allowance > balance ? balance : allowance;

  // We need to be able to parse what the user is typing in here.

  return (
    <>
      <Divider />
      <Text text="Amount to Stake" />
      <br />
      <InputContainer>
        <ESPInput
          id="stake-amount"
          value={state.amount}
          onChange={(_, value) => {
            controls.setAmount(value);
          }}
        />
        <LabeledButton
          className="btn--max"
          onClick={() => controls.setAmount(MonetaryValue.ESP(maxAllowed))}
        >
          <Text text="Max" />
        </LabeledButton>
      </InputContainer>
    </>
  );
};

export interface RaiseAllowanceButtonProps {
  amount?: bigint;
}

export const RaiseAllowanceButton: React.FC<RaiseAllowanceButtonProps> = (
  props,
) => {
  const abi = EspToken;
  const { writeContract } = useWriteContract();
  const config = React.useContext(EspressoConfigContext);
  const address = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  const amount =
    props.amount ??
    0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
  const espTokenContractAddress = config?.espTokenContractAddress;

  if (!address || !espTokenContractAddress) {
    return null;
  }

  return (
    <LabeledButton
      onClick={() => {
        writeContract({
          abi,
          address: espTokenContractAddress,
          functionName: 'approve',
          args: [address, amount],
        });
      }}
      className="raise-allowance"
    >
      <Text text="Raise Allowance" />
    </LabeledButton>
  );
};

export const ResetAllowanceButton: React.FC<RaiseAllowanceButtonProps> = (
  props,
) => {
  const abi = EspToken;
  const { writeContract } = useWriteContract();
  const config = React.useContext(EspressoConfigContext);
  const address = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  const amount = props.amount ?? 0x00n;
  const espTokenContractAddress = config?.espTokenContractAddress;

  if (!address || !espTokenContractAddress) {
    return null;
  }

  return (
    <LabeledButton
      onClick={() => {
        writeContract({
          abi,
          address: espTokenContractAddress,
          functionName: 'approve',
          args: [address, amount],
        });
      }}
      className="raise-allowance"
    >
      <Text text="Reset Allowance" />
    </LabeledButton>
  );
};

/**
 * DelegationInsufficientFundsWarning is a component that will display a warning
 * if the user does not have enough funds to stake the amount they have
 * specified.
 * Insufficient
 */
const DelegationInsufficientFundsWarning: React.FC = () => {
  const state = React.useContext(StakingModalStateContext);
  const address = React.useContext(RainbowKitAccountAddressContext);
  const allowanceAndBalance = React.useContext(ESPTokenAllowanceAndBalance);
  const espressoState = React.useContext(EspressoConfigContext);
  const espTokenContractAddress =
    espressoState?.espTokenContractAddress ?? null;
  const stakeTableContractAddress =
    espressoState?.stakeTableContractAddress ?? null;

  if (
    !espressoState ||
    !address ||
    !espTokenContractAddress ||
    !stakeTableContractAddress
  ) {
    // If we don't have the espresso state, address, or contract addresses,
    return null;
  }

  if (!state.amount || !allowanceAndBalance) {
    // If we don't have an amount or allowance and balance, we can't show
    // the warning.
    return null;
  }

  const [allowance, balance] = allowanceAndBalance;
  const amountToStake = state.amount.value;

  if (amountToStake > balance) {
    return (
      <>
        <Divider />
        <div className="warning">
          <Text text="Insufficient Balance" />
          <br />
          <MoneyText money={MonetaryValue.ESP(amountToStake)} /> &gt;{' '}
          <MoneyText money={MonetaryValue.ESP(balance)} />
          <br />
          <Text text="More ESP needed" />
        </div>
      </>
    );
  }

  if (amountToStake > allowance) {
    return (
      <>
        <Divider />
        <div className="warning">
          <Text text="Insufficient Allowance" />
          <br />
          <MoneyText money={MonetaryValue.ESP(amountToStake)} /> &gt;{' '}
          <MoneyText money={MonetaryValue.ESP(allowance)} />
          <br />
          {/*
            We Request Max uint256 value so the user won't have to bother with
            raising the allowance again for future staking operations.
           */}
          <RaiseAllowanceButton />
        </div>
      </>
    );
  }

  return null;
};

function shouldEnableStakeButton(
  address: null | string,
  chainInfo: null | RainbowKitChain,
  allowanceAndBalance: null | [bigint, bigint],
  wagmiConfig: Config,
  state: StakingModalState,
): boolean {
  // The button should be disabled if the user doesn't have an active address,
  // hasn't specified a validator, or don't have any chain information.
  if (!state.address || !address || !chainInfo) {
    return false;
  }

  const supportedChain =
    firstWhereIterable(wagmiConfig.chains, (c) => chainInfo.id === c.id) ??
    null;

  // The button should be disabled if the chain that the user has selected
  // isn't what we're configured to support.
  if (!supportedChain) {
    return false;
  }

  // The button should be disabled if the user hasn't specified an amount
  // to stake, or if we don't have the allowance and balance information.
  if (!state.amount || !allowanceAndBalance) {
    return false;
  }

  const [allowance, balance] = allowanceAndBalance;
  const amountToStake = state.amount.value;

  if (amountToStake <= 0n) {
    // The user cannot stake a negative amount or zero.
    return false;
  }

  // The user can only stake if they have enough balance and allowance.
  return amountToStake <= balance && amountToStake <= allowance;
}

const DelegationPreviewStakeButton: React.FC = () => {
  const { writeContract } = useWriteContract();
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoInfo = React.useContext(EspressoConfigContext);
  const state = React.useContext(StakingModalStateContext);
  const allowanceAndBalance = React.useContext(ESPTokenAllowanceAndBalance);
  const chainInfo = React.useContext(RainbowKitChainContext);
  const wagmiConfig = useConfig();
  const stakeTableContractAddress =
    espressoInfo?.stakeTableContractAddress ?? null;
  const abi = StakeTable;

  const enabled = shouldEnableStakeButton(
    address,
    chainInfo,
    allowanceAndBalance,
    wagmiConfig,
    state,
  );

  // This is the button that will be used to stake the amount specified.
  // It will be disabled until the user has selected a validator and an amount.
  return (
    <LabeledButton
      onClick={() => {
        if (!state.address || !stakeTableContractAddress || !state.amount) {
          // If we don't have an address, stake table contract address, or amount,
          // we can't stake.
          return;
        }

        writeContract({
          abi,
          address: stakeTableContractAddress,
          functionName: 'delegate',
          args: [state.address, state.amount.value],
        });
      }}
      disabled={!enabled}
    >
      <Text text="Stake" />
      {state.amount ? (
        <>
          {' '}
          <MoneyText money={state.amount ?? MonetaryValue.ESP(0n)} />
        </>
      ) : null}
    </LabeledButton>
  );
};

const DelegationPreview: React.FC = () => {
  // This is the staking overview.  It is meant to provide a summary of what
  // the user is requesting to do.  This is meant to be a read-only display
  // to allow the user to confirm their action visually before proceeding
  // with the transaction.
  return (
    <div className="delegation-preview">
      <DelegationPreviewTitle />
      <DelegationPreviewValidatorInformation />
      <DelegationAmountToStake />
      <DelegationInsufficientFundsWarning />
      <div className="flex-spacer" />
      <DelegationPreviewStakeButton />
    </div>
  );
};

const DialogContent: React.FC = () => {
  // How do we make this Mobile friendly?
  return (
    <ProvideAccountESPAllowanceAndBalance>
      <ProvideValidatorContractInformation>
        <div className="dialog-content">
          {/* We Have a set of sections */}

          {/* The Steps Section */}
          {/* <StakingSteps /> */}

          {/* The Current Actionable Area */}
          <EditArea />

          {/* The Summary being Built */}
          <DelegationPreview />
        </div>
      </ProvideValidatorContractInformation>
    </ProvideAccountESPAllowanceAndBalance>
  );
};

const StakingModalLifecycle: React.FC<StakingModalLifecycleProps> = (props) => {
  // We want to have a barrier, and the modal should be shown when the state
  // indicates to do so.
  return (
    <dialog ref={props.dialogRef} className="staking-modal">
      {/* Heading */}
      <DialogHeading />

      {/* Content Layout */}
      <DialogContent />
    </dialog>
  );
};

export interface StakingModalProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const StakingModal: React.FC<StakingModalProps> = (props) => {
  const { state, dialogRef, showModal, closeModal, setAmount, setValidator } =
    useStakingModalState();

  return (
    <StakingModalStateContext.Provider value={state}>
      <StakingModalControlsContext.Provider
        value={{ showModal, closeModal, setAmount, setValidator }}
      >
        <>
          {props.children}
          <StakingModalLifecycle dialogRef={dialogRef} />
        </>
      </StakingModalControlsContext.Provider>
    </StakingModalStateContext.Provider>
  );
};
