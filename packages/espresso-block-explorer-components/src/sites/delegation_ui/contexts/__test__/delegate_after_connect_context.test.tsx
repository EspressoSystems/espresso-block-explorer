import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  DelegateAfterConnectContext,
  ProvideDelegateAfterConnect,
} from '../delegate_after_connect_context';
import { ModalContext } from '../modal_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedStake,
} from '../validator_selection_context';

afterEach(cleanup);

const validator = `0x${'ab'.repeat(20)}` as `0x${string}`;
const wallet = `0x${'cd'.repeat(20)}` as `0x${string}`;

interface WalletState {
  account: null | `0x${string}`;
  connectModalOpen: boolean;
}

function setup() {
  const openConnectModal = vi.fn();
  const openStakingModal = vi.fn();
  const setSelection = vi.fn();
  let delegateAfterConnect: (validator: `0x${string}`) => void = () => {};

  const Capture: React.FC = () => {
    delegateAfterConnect = React.useContext(DelegateAfterConnectContext);
    return null;
  };

  const tree = ({ account, connectModalOpen }: WalletState) => (
    <RainbowKitAccountAddressContext.Provider value={account}>
      <RainbowKitModalContext.Provider
        value={{
          openConnectModal,
          openAccountModal: () => {},
          openChainModal: () => {},
          connectModalOpen,
          accountModalOpen: false,
          chainModalOpen: false,
        }}
      >
        <ModalContext.Provider
          value={{
            ref: null,
            open: openStakingModal,
            close: () => {},
            setOpenState: () => {},
            isOpen: false,
          }}
        >
          <SetValidatorSelectionContext.Provider value={setSelection}>
            <ProvideDelegateAfterConnect>
              <Capture />
            </ProvideDelegateAfterConnect>
          </SetValidatorSelectionContext.Provider>
        </ModalContext.Provider>
      </RainbowKitModalContext.Provider>
    </RainbowKitAccountAddressContext.Provider>
  );

  const view = render(tree({ account: null, connectModalOpen: false }));
  return {
    openConnectModal,
    openStakingModal,
    setSelection,
    delegate: () => act(() => delegateAfterConnect(validator)),
    update: (state: WalletState) => view.rerender(tree(state)),
  };
}

describe('ProvideDelegateAfterConnect', () => {
  it('opens the delegate step once the wallet connects', () => {
    const t = setup();
    t.delegate();
    expect(t.openConnectModal).toHaveBeenCalledOnce();
    expect(t.openStakingModal).not.toHaveBeenCalled();

    t.update({ account: null, connectModalOpen: true });
    t.update({ account: wallet, connectModalOpen: true });
    t.update({ account: wallet, connectModalOpen: false });

    expect(t.setSelection).toHaveBeenCalledOnce();
    expect(t.setSelection.mock.calls[0][0]).toEqual(
      new ValidatorConfirmedStake(validator),
    );
    expect(t.openStakingModal).toHaveBeenCalledOnce();
  });

  it('does nothing when the connect modal is closed without connecting', () => {
    const t = setup();
    t.delegate();
    t.update({ account: null, connectModalOpen: true });
    t.update({ account: null, connectModalOpen: false });
    t.update({ account: wallet, connectModalOpen: false });

    expect(t.setSelection).not.toHaveBeenCalled();
    expect(t.openStakingModal).not.toHaveBeenCalled();
  });
});
