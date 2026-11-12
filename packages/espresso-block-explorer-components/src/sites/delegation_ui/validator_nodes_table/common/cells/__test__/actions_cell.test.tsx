import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { Now } from '@/contexts/now_provider';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { Delegation } from '@/service/espresso_staking_api_service/common/delegation';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import { CurrentDelegationsContext } from '@/sites/delegation_ui/contexts/current_delegations_context';
import { ModalContext } from '@/sites/delegation_ui/contexts/modal_context';
import { PendingExitsContext } from '@/sites/delegation_ui/contexts/pending_exits_context';
import { PendingUndelegationsContext } from '@/sites/delegation_ui/contexts/pending_undelegations_context';
import { ValidatorDetailsModalContext } from '@/sites/delegation_ui/contexts/validator_details_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmed,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegateWithdraw,
} from '@/sites/delegation_ui/contexts/validator_selection_context';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ActionsCell } from '../actions_cell';

afterEach(cleanup);

const ESP = 10n ** 18n;
const validator = new NodeSetEntry(
  new Uint8Array(20).fill(0xaa).buffer,
  new TaggedBase64('', new ArrayBuffer(0)),
  100n * ESP,
  Ratio.floatingPoint(0.05),
  null,
);
const address = validator.addressText;
const wallet = `0x${'cd'.repeat(20)}` as `0x${string}`;
const walletBytes = new Uint8Array(20).fill(0xcd).buffer;
const now = new Date('2026-11-02T12:00:00Z');
const earlier = new Date(now.valueOf() - 1000);
const later = new Date(now.valueOf() + 1000);

const delegation = new Delegation(walletBytes, validator.address, 5n * ESP);
const withdrawal = (availableTime: Date) =>
  new PendingWithdrawal(
    walletBytes,
    validator.address,
    5n * ESP,
    availableTime,
  );

interface Row {
  account?: null | `0x${string}`;
  /** popup is whether the validator details modal is available. */
  popup?: boolean;
  delegated?: boolean;
  pendingExit?: PendingWithdrawal;
  pendingUndelegation?: PendingWithdrawal;
}

function renderRow({
  account = wallet,
  popup = true,
  delegated = false,
  pendingExit,
  pendingUndelegation,
}: Row) {
  const openPopup = vi.fn();
  const openConnectModal = vi.fn();
  const openStakingModal = vi.fn();
  const setSelection = vi.fn();
  const entries = <T,>(value: undefined | T) =>
    new Map<`0x${string}`, T>(value ? [[address, value]] : []);

  render(
    <RainbowKitAccountAddressContext.Provider value={account}>
      <RainbowKitModalContext.Provider
        value={{
          openConnectModal,
          openAccountModal: () => {},
          openChainModal: () => {},
          connectModalOpen: false,
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
            <ValidatorDetailsModalContext.Provider
              value={popup ? { open: openPopup, close: () => {} } : null}
            >
              <Now.Provider value={now}>
                <ValidatorNodeContext.Provider value={validator}>
                  <CurrentDelegationsContext.Provider
                    value={entries(delegated ? delegation : undefined)}
                  >
                    <PendingExitsContext.Provider value={entries(pendingExit)}>
                      <PendingUndelegationsContext.Provider
                        value={entries(pendingUndelegation)}
                      >
                        <ActionsCell />
                      </PendingUndelegationsContext.Provider>
                    </PendingExitsContext.Provider>
                  </CurrentDelegationsContext.Provider>
                </ValidatorNodeContext.Provider>
              </Now.Provider>
            </ValidatorDetailsModalContext.Provider>
          </SetValidatorSelectionContext.Provider>
        </ModalContext.Provider>
      </RainbowKitModalContext.Provider>
    </RainbowKitAccountAddressContext.Provider>,
  );

  return { openPopup, openConnectModal, openStakingModal, setSelection };
}

function click(name: string) {
  fireEvent.click(screen.getByRole('button', { name }));
}

describe('ActionsCell', () => {
  describe('with the validator popup available', () => {
    it.each<[string, Row]>([
      ['Delegate', { account: null }],
      ['Delegate', {}],
      ['Manage', { delegated: true }],
      ['Claim', { pendingUndelegation: withdrawal(earlier) }],
      ['Claim', { pendingExit: withdrawal(earlier) }],
    ])('%s opens the popup for the validator (%j)', (name, row) => {
      const t = renderRow(row);
      click(name);

      expect(t.openPopup).toHaveBeenCalledExactlyOnceWith(address);
      expect(t.openStakingModal).not.toHaveBeenCalled();
      expect(t.openConnectModal).not.toHaveBeenCalled();
    });
  });

  describe('without the validator popup', () => {
    it('Delegate asks a visitor to connect a wallet', () => {
      const t = renderRow({ account: null, popup: false });
      click('Delegate');

      expect(t.openConnectModal).toHaveBeenCalledOnce();
      expect(t.openStakingModal).not.toHaveBeenCalled();
    });

    it.each<[string, Row, object]>([
      ['Delegate', {}, new ValidatorConfirmedStake(address)],
      ['Manage', { delegated: true }, new ValidatorConfirmed(address)],
      [
        'Claim',
        { pendingUndelegation: withdrawal(earlier) },
        new ValidatorConfirmedUndelegateWithdraw(address),
      ],
      [
        'Claim',
        { pendingExit: withdrawal(earlier) },
        new ValidatorConfirmedExitWithdraw(address),
      ],
    ])(
      '%s opens the staking modal on its step (%j)',
      (name, row, selection) => {
        const t = renderRow({ ...row, popup: false });
        click(name);

        expect(t.setSelection).toHaveBeenCalledOnce();
        expect(t.setSelection.mock.calls[0][0]).toEqual(selection);
        expect(t.openStakingModal).toHaveBeenCalledOnce();
      },
    );
  });

  describe('while an undelegation or exit is in progress', () => {
    it('shows Undelegating instead of a button until it can be claimed', () => {
      renderRow({ delegated: true, pendingUndelegation: withdrawal(later) });

      expect(screen.queryByRole('button')).toBeNull();
      expect(screen.getByText('Undelegating')).toBeTruthy();
    });

    it('shows Exiting instead of a button until it can be claimed', () => {
      renderRow({ delegated: true, pendingExit: withdrawal(later) });

      expect(screen.queryByRole('button')).toBeNull();
      expect(screen.getByText('Exiting')).toBeTruthy();
    });

    it.each<[string, Row]>([
      ['an undelegation', { pendingUndelegation: withdrawal(now) }],
      ['an exit', { pendingExit: withdrawal(now) }],
    ])('offers Claim for %s at the moment it becomes claimable', (_, row) => {
      // The popup offers the claim from this moment too; the list must not
      // still say Undelegating or Exiting.
      renderRow(row);

      expect(screen.getByRole('button', { name: 'Claim' })).toBeTruthy();
    });

    it('puts an exit before an undelegation from the same validator', () => {
      const t = renderRow({
        popup: false,
        pendingExit: withdrawal(earlier),
        pendingUndelegation: withdrawal(earlier),
      });
      click('Claim');

      expect(t.setSelection.mock.calls[0][0]).toEqual(
        new ValidatorConfirmedExitWithdraw(address),
      );
    });
  });
});
