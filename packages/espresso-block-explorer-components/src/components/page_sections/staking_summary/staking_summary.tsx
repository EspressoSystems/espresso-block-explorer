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
import EspToken from '@/contracts/EspToken';
import { foldRIterator, mapIterable } from '@/functional/functional';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages/CappuccinoHotShotQueryServiceAPIContext';
import { CurrentValidatorsContext } from 'pages/CappuccinoNodeValidatorServiceAdapters';
import React from 'react';
import { useBalance, useConfig, useReadContract } from 'wagmi';
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

interface ReadBalanceFromContractProps {
  address: `0x${string}`;
  espTokenAddress: `0x${string}`;
}

const ReadBalanceFromContract: React.FC<ReadBalanceFromContractProps> = ({
  address,
  espTokenAddress,
}) => {
  const result = useBalance({
    address,
    token: espTokenAddress,
  });

  const amount = result.data?.value ?? null;
  if (amount === null) {
    return <Text text="no balance found" />;
  }

  return <MoneyText money={MonetaryValue.ESP(amount)} />;
};

interface ReadAllowanceFromContractProps {
  address: `0x${string}`;
  espTokenAddress: `0x${string}`;
  stakeTableAddress: `0x${string}`;
}

const ReadAllowanceFromContract: React.FC<ReadAllowanceFromContractProps> = ({
  address,
  espTokenAddress,
  stakeTableAddress,
}) => {
  const abi = EspToken;
  const result = useReadContract({
    address: espTokenAddress,
    abi,
    functionName: 'allowance',
    args: [address, stakeTableAddress],
  });

  const amount = result.data ?? null;
  if (amount === null || typeof amount !== 'bigint') {
    return <Text text="no balance found" />;
  }

  return <MoneyText money={MonetaryValue.ESP(amount)} />;
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
        <Text text="Delegated Amount" />
      </Heading2>
      <MoneyText money={MonetaryValue.ESP(totalDelegatedAmount)} />
    </div>
  );
};

function isPrefixed<S extends string>(
  address: string,
  prefix: S,
): address is `${S}${string}` {
  return address.startsWith(prefix);
}

const CurrentAvailableBalance: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoConfig = React.useContext(EspressoConfigContext);
  const espTokenAddress = espressoConfig?.espTokenContractAddress;

  if (
    !address ||
    !espressoConfig ||
    !espTokenAddress ||
    !isPrefixed(address, '0x') ||
    !isPrefixed(espTokenAddress, '0x')
  ) {
    // We don't have an address or config, so we can't compute the available
    // balance.
    return null;
  }

  return (
    <div>
      <Heading2>
        <Text text="Available Balance" />
      </Heading2>
      <ReadBalanceFromContract
        address={address}
        espTokenAddress={espTokenAddress}
      />
    </div>
  );
};

const CurrentAllowance: React.FC = () => {
  const address = React.useContext(RainbowKitAccountAddressContext);
  const espressoConfig = React.useContext(EspressoConfigContext);
  const espTokenAddress = espressoConfig?.espTokenContractAddress;
  const stakeTableAddress = espressoConfig?.stakeTableContractAddress;

  if (
    !address ||
    !espressoConfig ||
    !espTokenAddress ||
    !stakeTableAddress ||
    !isPrefixed(address, '0x') ||
    !isPrefixed(espTokenAddress, '0x') ||
    !isPrefixed(stakeTableAddress, '0x')
  ) {
    // We don't have an address or config, so we can't compute the allowance.
    return null;
  }

  return (
    <div>
      <Heading2>
        <Text text="Allowance" />
      </Heading2>
      <ReadAllowanceFromContract
        address={address}
        espTokenAddress={espTokenAddress}
        stakeTableAddress={stakeTableAddress}
      />
    </div>
  );
};

const ESPBalanceFromData: React.FC = () => {
  const data = React.useContext(DataContext);
  if (typeof data !== 'bigint') {
    return <Text text="no balance found" />;
  }

  return <MoneyText money={MonetaryValue.ESP(data)} />;
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
        <Text text="Rewards" />
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
        <CurrentAllowance />
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

  if (!foundChain) {
    // The chain is not supported by the current wagmi config.  So we need
    // to let the user know that they will need to switch chains
    // to see their staking summary.
    return <InvalidChainSelected />;
  }

  return <StakingSummaryContent />;
};
