import { EspressoConfigContext } from '@/components/config/espresso';
import { DataContext } from '@/components/contexts/DataProvider';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import { LabeledButton } from '@/components/hid';
import { Heading2 } from '@/components/layout';
import {
  RainbowKitAccountAddressContext,
  RainbowKitChainContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { MoneyText, Text } from '@/components/text';
import { foldRIterator, mapIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { CurrentValidatorsContext } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import React from 'react';
import { parseAbi } from 'viem';
import { readContract } from 'viem/actions';
import { useConfig, WagmiContext } from 'wagmi';
import { YourValidatorsSection } from '../your_validators/your_validators';
import './staking_summary.css';

/**
 * The user has an active wallet account, but the chain that he/she has
 * selected is not supported or expected by the current component.
 *
 * This components provides a message to the user he/she should switch
 * to a supported chain, and provides a button to open the chain modal
 * to allow the user to select a different chain.
 */
const InvalidChainSelected: React.FC = () => {
  const modals = React.useContext(RainbowKitModalContext);

  return (
    <div className="staking-summary-content card--padding">
      <div>
        <Heading2>
          <Text text="Invalid Chain Selected" />
        </Heading2>
        <p>
          <Text text="The chain that is configured with your current wallet is not supported for staking." />
          <Text text="Please select one of the following supported chains to view your staking summary:" />
        </p>
        <LabeledButton onClick={modals.openChainModal}>
          <Text text="Select Chain" />
        </LabeledButton>
      </div>
    </div>
  );
};

const CurrentDelegatedAmount: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const validators = React.useContext(CurrentValidatorsContext);
  // Let's take a look at our current validator's and compute our
  // current total staked amount.

  if (!address) {
    // We don't have an address or validators, so we can't compute the staked amount.
    return null;
  }

  const lowerCaseAddress = address.toLowerCase();

  const totalDelegatedAmount = foldRIterator(
    (acc, amount) => acc + amount,
    0n,
    mapIterable(
      validators.values(),
      (validators) => validators.delegators.get(lowerCaseAddress) ?? 0n,
    ),
  );

  return (
    <div>
      <Heading2>
        <Text text="Your Delegated Stake" />
      </Heading2>
      <MoneyText money={MonetaryValue.ESP(totalDelegatedAmount)} />
    </div>
  );
};

// function isPrefixed<S extends string>(
//   address: string,
//   prefix: S,
// ): address is `${S}${string}` {
//   return address.startsWith(prefix);
// }

const CurrentAvailableBalance: React.FC = () => {
  const balance = React.useContext(CurrentTokenBalanceContext);
  if (balance === null) {
    return null;
  }

  return (
    <div>
      <Heading2>
        <Text text="Available Balance" />
      </Heading2>
      <MoneyText money={MonetaryValue.ESP(balance)} />
    </div>
  );
};

export const CurrentStakeTableV1AllowanceContext = React.createContext<
  null | bigint
>(null);

export const CurrentTokenBalanceContext = React.createContext<null | bigint>(
  null,
);

export const LastWalletReadTimestampContext = React.createContext<Date>(
  new Date(0),
);
export const RefreshWalletReadContext = React.createContext<() => void>(
  () => {},
);

interface LastReadWalletTimestampProps {
  children: React.ReactNode | React.ReactNode[];
}

const LastReadWalletTimestamp: React.FC<LastReadWalletTimestampProps> = ({
  children,
}) => {
  const [lastRead, setLastRead] = React.useState<Date>(new Date());

  return (
    <LastWalletReadTimestampContext.Provider value={lastRead}>
      <RefreshWalletReadContext.Provider value={() => setLastRead(new Date())}>
        {children}
      </RefreshWalletReadContext.Provider>
    </LastWalletReadTimestampContext.Provider>
  );
};

interface ProvideCurrentWalletTokenProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideCurrentWalletTokens: React.FC<ProvideCurrentWalletTokenProps> = ({
  children,
}) => {
  const wagmiContext = React.useContext(WagmiContext);
  const lastRead = React.useContext(LastWalletReadTimestampContext);
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoConfig = React.useContext(EspressoConfigContext);
  const espTokenAddress = espressoConfig?.espTokenContractAddress;

  interface CurrentWalletTokensState {
    lastRead: Date;
    loading: boolean;
    error: null | unknown;
    balance: null | bigint;
  }

  const [state, setState] = React.useState<CurrentWalletTokensState>({
    lastRead: new Date(0),
    loading: false,
    error: null,
    balance: null,
  });

  if (!address || !espressoConfig || !espTokenAddress || !wagmiContext) {
    return (
      <CurrentTokenBalanceContext.Provider value={null}>
        {children}
      </CurrentTokenBalanceContext.Provider>
    );
  }

  if (lastRead.valueOf() <= state.lastRead.valueOf() || state.loading) {
    // We have already read the wallet at this timestamp, so we don't need
    // to do it again.
    return (
      <CurrentTokenBalanceContext.Provider value={state.balance}>
        {children}
      </CurrentTokenBalanceContext.Provider>
    );
  }

  // We need to retrieve the Wallet balance

  const wagmiClient = wagmiContext.getClient();
  const result = readContract(wagmiClient, {
    functionName: 'balanceOf',
    abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
    args: [address as `0x${string}`],
    address: espTokenAddress,
  });

  // Set the state to loading
  setState({
    ...state,
    loading: true,
  });

  result.then(
    (result) => {
      setState({
        ...state,
        lastRead: new Date(),
        loading: false,
        error: null,
        balance: result,
      });
    },
    (error: unknown) => {
      setState({
        ...state,
        loading: false,
        error,
      });
    },
  );

  return (
    <CurrentTokenBalanceContext.Provider value={state.balance}>
      {children}
    </CurrentTokenBalanceContext.Provider>
  );
};

const ProvideCurrentStakeTableV1Allowance: React.FC<
  ProvideCurrentWalletTokenProps
> = ({ children }) => {
  const wagmiContext = React.useContext(WagmiContext);
  const lastRead = React.useContext(LastWalletReadTimestampContext);
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoConfig = React.useContext(EspressoConfigContext);
  const espTokenAddress = espressoConfig?.espTokenContractAddress;
  const stakeTableAddress = espressoConfig?.stakeTableContractAddress;

  interface CurrentStakeTableAllowanceState {
    lastRead: Date;
    loading: boolean;
    error: null | unknown;
    allowance: null | bigint;
  }

  const [state, setState] = React.useState<CurrentStakeTableAllowanceState>({
    lastRead: new Date(0),
    loading: false,
    error: null,
    allowance: null,
  });

  if (
    !address ||
    !espressoConfig ||
    !espTokenAddress ||
    !stakeTableAddress ||
    !wagmiContext
  ) {
    return (
      <CurrentStakeTableV1AllowanceContext.Provider value={null}>
        {children}
      </CurrentStakeTableV1AllowanceContext.Provider>
    );
  }

  if (lastRead.valueOf() <= state.lastRead.valueOf() || state.loading) {
    // We have already read the wallet at this timestamp, so we don't need
    // to do it again.
    return (
      <CurrentStakeTableV1AllowanceContext.Provider value={state.allowance}>
        {children}
      </CurrentStakeTableV1AllowanceContext.Provider>
    );
  }

  // Retrieve the Allowance granted to the current Stake Table contract.

  const wagmiClient = wagmiContext.getClient();
  // const r = writeContract(wagmiClient, {
  //   address: espTokenAddress,
  //   functionName: 'approve',
  //   abi: parseAbi(['function approve(address,uint256) returns (bool)']),
  //   args: [stakeTableAddress, 0n],
  //   account: null,
  // });

  // r.then(
  //   (result) => {
  //     console.info('<<< HERE approve result', result);
  //   },
  //   (error) => {
  //     console.error('<<< HERE approve error', error);
  //   },
  // );

  const result = readContract(wagmiClient, {
    address: espTokenAddress,
    functionName: 'allowance',
    abi: parseAbi([
      'function allowance(address,address) view returns (uint256)',
    ]),
    args: [address as `0x${string}`, stakeTableAddress],
  });

  // Set the state to loading
  setState({
    ...state,
    loading: true,
  });

  result.then(
    (result) => {
      setState({
        ...state,
        lastRead: new Date(),
        loading: false,
        error: null,
        allowance: result,
      });
    },
    (error: unknown) => {
      setState({
        ...state,
        loading: false,
        error,
      });
    },
  );

  return (
    <CurrentStakeTableV1AllowanceContext.Provider value={state.allowance}>
      {children}
    </CurrentStakeTableV1AllowanceContext.Provider>
  );
};

const ESPBalanceFromData: React.FC = () => {
  const data = React.useContext(DataContext);
  if (typeof data !== 'bigint') {
    return <Text text="no balance found" />;
  }

  return (
    <>
      <MoneyText money={MonetaryValue.ESP(data)} />
      <br />
      <LabeledButton disabled title="Claiming rewards coming soon">
        <Text text="Claim Rewards" />
      </LabeledButton>
    </>
  );
};

const CurrentRewardsAvailable: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  if (!address) {
    // We don't have an address, so we can't compute the rewards available.
    return null;
  }

  const promise =
    hotShotQueryService.rewardState.getLatestRewardBalance(address);

  return (
    <div className="rewards">
      <Heading2>
        <Text text="Unclaimed Rewards" />
      </Heading2>
      <PromiseResolver promise={promise}>
        <ESPBalanceFromData />
      </PromiseResolver>
    </div>
  );
};

const StakingSummaryContent: React.FC = () => {
  return (
    <>
      <div className="staking-summary-content">
        <CurrentDelegatedAmount />
        <CurrentAvailableBalance />
        <CurrentRewardsAvailable />
      </div>
      <YourValidatorsSection />
    </>
  );
};

export interface StakingSummarySectionProps {}

/**
 * StakingSummarySection is a section that governs the current wallet's
 * staking information.  In general this section should only be available
 * to wallets that are connected, and targeting the correct chain.
 *
 * If the user's chain is not correct, then this section should let the
 * user know that they have the wrong chain selected, and that
 * they should switch to the correct chain.
 *
 * With an active user on the correct chain, this section should
 * display the user's current staking summary as of the current epoch.
 * This **should** include information for the user concerning the following
 * topics:
 * - Staked Amount
 * - Current Balance
 * - (Allowance?)
 * - Current Rewards available to claim
 */
export const StakingSummarySection: React.FC<
  StakingSummarySectionProps
> = () => {
  // Grab the Current Address and Chain from the RainbowKit context
  const address = React.useContext(RainbowKitAccountAddressContext);
  const chain = React.useContext(RainbowKitChainContext);
  const wagmiConfig = useConfig();

  if (!address || !chain) {
    // We shouldn't be here, as the consumer should ensure that we have a
    // connected wallet, and that wallet should automatically come with a
    // chain.
    return null;
  }

  const foundChain = wagmiConfig.chains.find((c) => chain.id === c.id) ?? null;
  console.info('<<< HERE found chain', chain, foundChain);

  if (!foundChain) {
    // The chain is not supported by the current wagmi config.  So we need
    // to let the user know that they will need to switch chains
    // to see their staking summary.
    return <InvalidChainSelected />;
  }

  return <StakingSummaryContent />;
};

export interface EspressoAccountDetailsProps {
  children: React.ReactNode | React.ReactNode[];
}

export const EspressoAccountDetails: React.FC<EspressoAccountDetailsProps> = ({
  children,
}) => {
  return (
    <LastReadWalletTimestamp>
      <ProvideCurrentWalletTokens>
        <ProvideCurrentStakeTableV1Allowance>
          {children}
        </ProvideCurrentStakeTableV1Allowance>
      </ProvideCurrentWalletTokens>
    </LastReadWalletTimestamp>
  );
};
