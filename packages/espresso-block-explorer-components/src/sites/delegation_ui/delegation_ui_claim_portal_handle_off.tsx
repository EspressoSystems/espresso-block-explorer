import React from 'react';
import './colors.css';
import './delegation_ui.css';
import { ProvideDelegationUIContexts } from './delegation_ui_contexts';
import { ConnectWalletButton } from './connect_wallet_button';
import { ClaimPortalIntentContext } from './contexts/claim_portal_intent_context';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import Text from '@/components/text/text';
import {
  compareArrayBuffer,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import { assert } from '@/assert/assert';
import {
  RainbowKitAccountAddressContext,
  RainbowKitChainContext,
} from '@/components/rainbowkit/contexts/contexts';
import { WagmiContext } from 'wagmi';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from './contexts/all_validators_context';
import {
  ESPBalanceAsyncSnapshotContext,
  ESPBalanceContext,
} from './contexts/esp_balance_context';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import MoneyText from '@/components/text/money_text';
import { AsyncState } from '@/components/data/async_data/async_snapshot';

interface DelegationUIClaimPortalHandOffProps {
  className?: string;
}

/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
const DelegationUIClaimPortalHandOff: React.FC<
  DelegationUIClaimPortalHandOffProps
> = () => {
  return (
    <ProvideDelegationUIContexts>
      <main className="delegation-ui">
        <DelegationUIClaimPortalHandOffRouter />
      </main>
    </ProvideDelegationUIContexts>
  );
};

export default DelegationUIClaimPortalHandOff;

const DelegationUIClaimPortalHandOffRouter: React.FC = () => {
  return (
    <DelegationUIClaimPortalHandOffAccountCheck>
      <DelegationUICClaimPortalHandOffChainCheck>
        <DelegationUIClaimPortalHandOffFilterValidators>
          <DelegationUIClaimPortalHandOffValidatorChoice>
            <DelegationUIClaimPortalHandOffBalanceCheck>
              <div />
            </DelegationUIClaimPortalHandOffBalanceCheck>
          </DelegationUIClaimPortalHandOffValidatorChoice>
        </DelegationUIClaimPortalHandOffFilterValidators>
      </DelegationUICClaimPortalHandOffChainCheck>
    </DelegationUIClaimPortalHandOffAccountCheck>
  );
};

/**
 * DelegationUIClaimPortalHandOffAccountCheck is a component that serves
 * to check that the user currently has his/her Wallet connected.
 *
 * If the User has not Wallet connected, then it will display elements to
 * urge the user to connect his/her wallet to the page before being able
 * to continue.
 *
 * If there is an Intent populated, and it has an `address` specified for a
 * specific Wallet, then that will also be check, and if the User has
 * connected the wrong wallet, elements will be presented to notify the
 * User of the miss-match, and guide the User to correct it.
 */
const DelegationUIClaimPortalHandOffAccountCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const intent = React.useContext(ClaimPortalIntentContext) ?? {
    intent: 'claim-and-stake',
    address: null,
    amount: null,
  };

  const connectedAccountAddress = React.useContext(
    RainbowKitAccountAddressContext,
  );

  if (!connectedAccountAddress) {
    // We do not currently have a wallet connected. Let's guide the user
    // toward connecting his/her wallet.
    return (
      <>
        <Text text="Not currently connected" />
        <br />
        <ConnectWalletButton />
      </>
    );
  }

  const haveAddress = hexArrayBufferCodec.decode(connectedAccountAddress);

  if (
    intent.address != null &&
    connectedAccountAddress !== intent.address.toString()
  ) {
    const wantAddress = intent.address.address;
    if (compareArrayBuffer(haveAddress, wantAddress) !== 0) {
      // The user is connected to the wrong address.
      return (
        <>
          <Text text="Connected to the wrong Wallet" />
          <br />
          <ConnectWalletButton />
        </>
      );
    }
  }

  // Is the Wallet connected to the correct chain?
  return children;
};

/**
 * DelegationUICClaimPortalHandOffChainCheck is a component that checks to
 * ensure tha the user is connected to the correct Chain.
 *
 * If the User is not connected to thecorrect chain, elements will be
 * displayed to the User to guid him/her towards correcting the Chain being
 * utilized.
 */
const DelegationUICClaimPortalHandOffChainCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const chain = React.useContext(RainbowKitChainContext);
  const config = React.useContext(WagmiContext);

  const haveChainID = chain?.id ?? null;
  const wantChainID = config?.chains[0]?.id ?? -1;

  if (haveChainID !== wantChainID) {
    return (
      <>
        <Text text="Connected to the wrong Chain" />
        <br />
        <ConnectWalletButton />
      </>
    );
  }

  assert(chain !== undefined && chain !== null);
  assert(config !== undefined && config !== null);

  return children;
};

const DelegationUIClaimPortalHandOffFilterValidators: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const nodeList = React.useContext(NodeAddressListContext);
  const nodeMap = React.useContext(AllValidatorsContext);

  const filteredNodeList = nodeList.filter((address) => {
    const node = nodeMap.get(address);
    const name = node?.metadata?.content?.name;
    return Boolean(name);
  });

  return (
    <NodeAddressListContext.Provider value={filteredNodeList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

const DelegationUIClaimPortalHandOffValidatorChoice: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We need to resolve the Validator.

  const nodeList = React.useContext(NodeAddressListContext);

  const randomOrderNodeList = Array.from(
    zipWithIterable(
      nodeList,
      mapIterable(nodeList, () => Math.random()),
      (a, b) => [a, b] as const,
    ),
  )
    .toSorted((a, b) => a[1] - b[1])
    .map((a) => a[0]);

  const [validatorAddress] = randomOrderNodeList;
  return (
    <>
      <div>
        <Text text={validatorAddress} />
      </div>
      {children}
    </>
  );
};

const DelegationUIClaimPortalHandOffBalanceCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const balance = React.useContext(ESPBalanceContext);
  const balanceAsyncSnapshot = React.useContext(ESPBalanceAsyncSnapshotContext);
  const intent = React.useContext(ClaimPortalIntentContext);

  if (
    balanceAsyncSnapshot.asyncState === AsyncState.done &&
    balanceAsyncSnapshot.hasError
  ) {
    return (
      <>
        <Text text="error encountered while attempting to retrieve balance" />
      </>
    );
  }

  if (balanceAsyncSnapshot.asyncState === AsyncState.waiting) {
    // We're waiting for the balance to load
    return (
      <>
        <Text text="waiting for balance to load..." />
      </>
    );
  }

  assert(balance !== null && balance !== undefined);

  const wantAmount = intent?.amount ?? null;
  const haveAmount = balance;

  if (wantAmount !== null && haveAmount < wantAmount) {
    // The User does not have enough balance to cover the desired delegation
    // operation
    return (
      <>
        <Text text="Insufficent Balance to perform Staking operation." />
        <br />
        <Text text="Have" /> <MoneyText money={MonetaryValue.ESP(haveAmount)} />{' '}
        <Text text="Want" /> <MoneyText money={MonetaryValue.ESP(wantAmount)} />
      </>
    );
  }

  const resolvedAmount = wantAmount ?? balance;

  return (
    <>
      <MoneyText money={MonetaryValue.ESP(wantAmount)} />
    </>
  );
};
