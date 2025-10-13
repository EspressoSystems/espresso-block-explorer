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
import CopyWalletAddress from '@/components/text/CopyWalletAddress';
import MoneyText from '@/components/text/MoneyText';
import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import { CheckCircleFilled } from '@/components/visual';
import Close from '@/components/visual/icons/Close';
import ErrorIconFilled from '@/components/visual/icons/ErrorIconFilled';
import EspToken from '@/contracts/EspToken';
import StakeTable from '@/contracts/StakeTable';
import UnimplementedError from '@/errors/UnimplementedError';
import { firstWhereIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { walletAddressCodec } from '@/models/wallet_address/wallet_address';
import { CurrentValidatorsContext } from 'pages';
import React from 'react';
import { Config, useConfig, useReadContract, useWriteContract } from 'wagmi';
import {
  CurrentStakeTableV1AllowanceContext,
  CurrentTokenBalanceContext,
  RefreshWalletReadContext,
} from '../staking_summary/staking_summary';
import {
  StakingModalControlsContext,
  StakingModalState,
  StakingModalStateContext,
} from './context';
import './staking_modal.css';
import {
  createWriteContractAsyncHandler,
  WriteContractAsync,
  WriteContractAsyncComponentIdleContext,
  WriteContractAsyncSetStateContext,
  WriteContractAsyncStateContext,
} from './write_contract';

/**
 * useStakingModalState is a custom hook that provides the state and controls
 * for the staking modal.
 */
function useStakingModalState(
  initialState: StakingModalState = {
    showModal: false,
    stakingPhase: null,
    address: null,
    amount: null,
  },
) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [state, setState] = React.useState<StakingModalState>(initialState);

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

/**
 * StakingModalHeading is the heading of the staking modal dialog.  It includes
 * the title and the close button.
 */
const StakingModalHeading: React.FC = () => {
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

/**
 * DelegationPreviewTitle is the title of the delegation preview section.
 * It includes the validator address and the title "Stake Preview".
 */
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
          <CopyWalletAddress value={walletAddressCodec.decode(state.address)}>
            <WalletAddressText
              value={walletAddressCodec.decode(state.address)}
            />
          </CopyWalletAddress>
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

/**
 * InformationRow is a simple layout component that displays a label and a
 * value in a table row.
 */
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

/**
 * ValidatorContractInformation is a context that provides the validator
 * information read from the StakeTable contract.
 */
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

/**
 * ReadAndProvideStakeTableContractInformation is a component that reads the
 * validator information from the StakeTable contract and provides it to its
 * children via the ValidatorContractInformation context.
 */
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

/**
 * ProvideValidatorContractInformation is a component that provides the
 * validator information to its children via the ValidatorContractInformation
 * context.
 */
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

/**
 * ESPTokenAllowanceAndBalance is a context that provides the ESP token
 * allowance and balance for the current user.
 *
 * This is a convenience that combines two prior context values into one.
 */
const ESPTokenAllowanceAndBalance = React.createContext<
  [bigint, bigint] | null
>(null);

interface ReadAndProvideESPAllowanceAndBalanceProps {
  espTokenContractAddress: `0x${string}`;
  stakingTableContractAddress: `0x${string}`;
  address: `0x${string}`;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ReadAndProvideESPAllowanceAndBalance is a component that reads the ESP token
 * allowance and balance for the current user and provides it to its children
 * via the ESPTokenAllowanceAndBalance context.
 */
const ReadAndProvideESPAllowanceAndBalance: React.FC<
  ReadAndProvideESPAllowanceAndBalanceProps
> = (props) => {
  const balance = React.useContext(CurrentTokenBalanceContext) ?? 0n;
  const allowance = React.useContext(CurrentStakeTableV1AllowanceContext) ?? 0n;

  return (
    <ESPTokenAllowanceAndBalance.Provider value={[allowance, balance]}>
      {props.children}
    </ESPTokenAllowanceAndBalance.Provider>
  );
};

/**
 * ProvideAccountESPAllowanceAndBalance is a component that provides the ESP
 * token allowance and balance for the current user to its children via the
 * ESPTokenAllowanceAndBalance context.
 */
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

/**
 * ValidatorStatus is a component that displays the status of the validator
 * based on the status code provided by the StakeTable contract.
 */
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

/**
 * ContractInformation is a component that displays the validator
 * information read from the StakeTable contract, provided that the
 * data is available.
 */
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

/**
 * DelegationPreviewValidatorInformation is a component that displays the
 * validator information in the delegation preview section of the staking
 * modal.
 */
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
            <CopyWalletAddress value={walletAddressCodec.decode(state.address)}>
              <WalletAddressText
                value={walletAddressCodec.decode(state.address)}
              />
            </CopyWalletAddress>
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

/**
 * DelegationAmountToStake is a component that allows the user to specify
 * the amount of ESP to stake to the selected validator.
 */
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

/**
 * IncreaseAllowanceBundle is a component that provides the means for the user
 * to increase the allowance of their ESP token to the StakeTable contract.
 */
const IncreaseAllowanceBundle: React.FC = () => {
  return (
    <WriteContractAsyncComponentIdleContext.Provider
      value={IncreaseAllowanceButton}
    >
      <WriteContractAsync />
    </WriteContractAsyncComponentIdleContext.Provider>
  );
};

export interface IncreaseAllowanceButtonProps {
  amount?: bigint;
}

/**
 * UINT256_MAX is the maximum value of a uint256 in Solidity.  This is used
 * to request the maximum allowance for the ESP token to the StakeTable
 * contract.
 */
const UINT256_MAX =
  0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;

/**
 * IncreaseAllowanceButton is a button that will prompt the user to increase
 * the allowance of their wallet to the StakeTable contract on behalf of their
 * ESP Token.
 */
export const IncreaseAllowanceButton: React.FC<IncreaseAllowanceButtonProps> = (
  props,
) => {
  const refreshBalance = React.useContext(RefreshWalletReadContext);
  const state = React.useContext(WriteContractAsyncStateContext);
  const setState = React.useContext(WriteContractAsyncSetStateContext);
  const wagmiConfig = useConfig();

  const abi = EspToken;
  const { writeContractAsync } = useWriteContract();
  const config = React.useContext(EspressoConfigContext);
  const address = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  // We request Max uint256 value so the user won't have to bother with
  // raising the allowance again for future staking operations.
  // Wallets may also allow the user to modify the amount of allowance
  // being requested.
  const { amount = UINT256_MAX } = props;
  const espTokenContractAddress = config?.espTokenContractAddress;
  const stakeTableContractAddress = config?.stakeTableContractAddress;

  if (!address || !espTokenContractAddress || !stakeTableContractAddress) {
    return null;
  }

  return (
    <LabeledButton
      onClick={createWriteContractAsyncHandler(
        wagmiConfig,
        state,
        setState,
        async () =>
          writeContractAsync({
            abi,
            address: espTokenContractAddress,
            functionName: 'approve',
            args: [stakeTableContractAddress, amount],
          }),
        refreshBalance,
      )}
      className="increase-allowance"
    >
      <Text text="Increase Allowance" />
    </LabeledButton>
  );
};

/**
 * ResetAllowanceButton is a button that will prompt the user to reset /
 * withdraw the allowance of their wallet to the StakeTable contract on
 * behalf of their ESP Token.
 */
export const ResetAllowanceButton: React.FC<IncreaseAllowanceButtonProps> = (
  props,
) => {
  const refreshBalance = React.useContext(RefreshWalletReadContext);
  const wagmiConfig = useConfig();
  const state = React.useContext(WriteContractAsyncStateContext);
  const setState = React.useContext(WriteContractAsyncSetStateContext);
  const abi = EspToken;
  const { writeContractAsync } = useWriteContract();
  const config = React.useContext(EspressoConfigContext);
  const address = React.useContext(RainbowKitAccountAddressContext) as
    | null
    | `0x${string}`;

  const amount = props.amount ?? 0x00n;
  const espTokenContractAddress = config?.espTokenContractAddress;
  const stakeTableContractAddress = config?.stakeTableContractAddress;

  if (!address || !espTokenContractAddress) {
    return null;
  }

  return (
    <LabeledButton
      onClick={createWriteContractAsyncHandler(
        wagmiConfig,
        state,
        setState,
        async () =>
          writeContractAsync({
            abi,
            address: espTokenContractAddress,
            functionName: 'approve',
            args: [stakeTableContractAddress, amount],
          }),
        refreshBalance,
      )}
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
          <ul>
            <li className="fail">
              <Text text="Insufficient Balance" /> <ErrorIconFilled />
              <br />
              <MoneyText money={MonetaryValue.ESP(amountToStake)} /> &gt;{' '}
              <MoneyText money={MonetaryValue.ESP(balance)} />
              <br />
              <Text text="More ESP needed" />
            </li>
          </ul>
        </div>
      </>
    );
  }

  if (amountToStake > allowance) {
    return (
      <>
        <Divider />
        <div className="warning">
          <ul>
            <li className="pass">
              <Text text="Sufficient Balance" /> <CheckCircleFilled />
            </li>
            <li className="fail">
              <Text text="Insufficient Allowance" /> <ErrorIconFilled />
              <br />
              <MoneyText money={MonetaryValue.ESP(amountToStake)} /> &gt;{' '}
              <MoneyText money={MonetaryValue.ESP(allowance)} />
              <br />
              <Text text="An allowance increase is required." />
            </li>
          </ul>
          <br />
        </div>
      </>
    );
  }
  return (
    <ul>
      <li className="pass">
        <Text text="Sufficient Balance" />
        &nbsp;
        <CheckCircleFilled />
      </li>
      <li className="pass">
        <Text text="Sufficient Allowance" /> <CheckCircleFilled />
      </li>
    </ul>
  );

  return null;
};

/**
 * shouldEnableStakeButton determines if the stake button should be enabled
 * based on the current state of the modal, the user's address, chain info,
 * and allowance and balance information.
 */
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

/**
 * DelegationPreviewStakeButton is the button that will be used to stake
 * the amount specified to the validator selected. It will be disabled
 * until the user has selected a validator and an amount, and has enough
 * balance and allowance to perform the staking operation.
 */
const DelegationPreviewStakeButton: React.FC = () => {
  const state = React.useContext(WriteContractAsyncStateContext);
  const setState = React.useContext(WriteContractAsyncSetStateContext);
  const refreshBalance = React.useContext(RefreshWalletReadContext);
  const wagmiConfig = useConfig();
  const { writeContractAsync } = useWriteContract();
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoInfo = React.useContext(EspressoConfigContext);
  const stakingModalState = React.useContext(StakingModalStateContext);
  const allowanceAndBalance = React.useContext(ESPTokenAllowanceAndBalance);
  const chainInfo = React.useContext(RainbowKitChainContext);
  const stakeTableContractAddress =
    espressoInfo?.stakeTableContractAddress ?? null;
  const abi = StakeTable;

  const enabled = shouldEnableStakeButton(
    address,
    chainInfo,
    allowanceAndBalance,
    wagmiConfig,
    stakingModalState,
  );

  // This is the button that will be used to stake the amount specified.
  // It will be disabled until the user has selected a validator and an amount.
  return (
    <LabeledButton
      onClick={createWriteContractAsyncHandler(
        wagmiConfig,
        state,
        setState,
        async () => {
          if (
            !stakingModalState.address ||
            !stakeTableContractAddress ||
            !stakingModalState.amount
          ) {
            // If we don't have an address, stake table contract address, or amount,
            // we can't stake.
            throw new UnimplementedError();
          }

          return writeContractAsync({
            abi,
            address: stakeTableContractAddress,
            functionName: 'delegate',
            args: [stakingModalState.address, stakingModalState.amount.value],
          });
        },
        refreshBalance,
      )}
      disabled={!enabled}
    >
      <Text text="Stake" />
      {stakingModalState.amount ? (
        <>
          &nbsp;
          <MoneyText
            money={stakingModalState.amount ?? MonetaryValue.ESP(0n)}
          />
        </>
      ) : null}
    </LabeledButton>
  );
};

/**
 * DetermineActionButton is a component that attempts to determine what action
 * the user needs to take next.
 */
const DetermineActionButton: React.FC = () => {
  const state = React.useContext(StakingModalStateContext);
  const allowanceAndBalance = React.useContext(ESPTokenAllowanceAndBalance);
  const amountToStake = state.amount?.value ?? 0n;

  if (!amountToStake || !allowanceAndBalance) {
    return null;
  }

  const [allowance, balance] = allowanceAndBalance;

  if (amountToStake > balance) {
    // The user doesn't have enough balance to stake the amount they
    // have specified.
    return <Text text="More ESP needed" />;
  }

  if (amountToStake > allowance) {
    return <IncreaseAllowanceBundle />;
  }

  console.info('<<<< HERE', amountToStake, allowance, balance);

  return <DelegationPreviewStakeButton />;
};

/**
 * DelegationPreview is a component that provides a summary of the staking
 * operation the user is about to perform.  It also provides the means for the
 * user to edit the amount he/she is wanting to stake, and the means to
 * perform the staking operation.
 */
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
      {/* <DelegationPreviewStakeButton /> */}
      <DetermineActionButton />
    </div>
  );
};

/**
 * DialogContent is the main content area of the staking modal.  It provides
 * the layout and structure for the various sections of the staking modal.
 */
const DialogContent: React.FC = () => {
  // How do we make this Mobile friendly?
  return (
    <ProvideAccountESPAllowanceAndBalance>
      <ProvideValidatorContractInformation>
        <div className="dialog-content">
          {/* We Have a set of sections */}

          {/* The Summary being Built */}
          <WriteContractAsyncComponentIdleContext.Provider
            value={DelegationPreview}
          >
            <WriteContractAsync />
          </WriteContractAsyncComponentIdleContext.Provider>
          {/* <DelegationPreview /> */}
        </div>
      </ProvideValidatorContractInformation>
    </ProvideAccountESPAllowanceAndBalance>
  );
};

/**
 * StakingModalLifecycle is a component that manages the lifecycle of the
 * staking modal.  It is responsible for rendering the modal and its content
 * when the state indicates to do so.
 */
const StakingModalLifecycle: React.FC<StakingModalLifecycleProps> = (props) => {
  const state = React.useContext(StakingModalStateContext);

  // state.showModal

  // We want to have a barrier, and the modal should be shown when the state
  // indicates to do so.
  return (
    <dialog
      ref={props.dialogRef}
      className="staking-modal"
      open={state.showModal}
    >
      {/* Heading */}
      <StakingModalHeading />

      {/* Content Layout */}
      <DialogContent />
    </dialog>
  );
};

export interface StakingModalProps {
  children: React.ReactNode | React.ReactNode[];
  initialModalState?: StakingModalState;
  className?: string;
}

/**
 * StakingModal is the main component that provides the staking modal
 * functionality.  This component itself adds the modal to the DOM, but is
 * also utilized to wrap the content of whatever children component are passed
 * to it.
 *
 * In this way, it allows all children components to have access to the
 * relevant context information needed to interact with, and display the
 * staking modal.
 */
export const StakingModal: React.FC<StakingModalProps> = (props) => {
  const { state, dialogRef, showModal, closeModal, setAmount, setValidator } =
    useStakingModalState(props.initialModalState);

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
