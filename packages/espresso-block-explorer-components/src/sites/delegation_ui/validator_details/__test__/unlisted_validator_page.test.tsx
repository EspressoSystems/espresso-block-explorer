import React from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { EnvironmentContext } from '@/components/config/environment';
import { Now } from '@/contexts/now_provider';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { Environment } from '@/models/config/environment/environment';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import { AllValidatorsContext } from '../../contexts/all_validators_context';
import { PendingExitsContext } from '../../contexts/pending_exits_context';
import { ValidatorHistoryURLContext } from '../../contexts/validator_details_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedExitWithdraw,
} from '../../contexts/validator_selection_context';
import { ValidatorDetailsView } from '../validator_details_ui';
import {
  HistoryFileEvent,
  ValidatorHistoryFile,
} from '../validator_history_file';

const ESP = 10n ** 18n;
// A validator that is listed, so the list counts as loaded.
const listed = new NodeSetEntry(
  new Uint8Array(20).fill(0xaa).buffer,
  new TaggedBase64('', new ArrayBuffer(0)),
  100n * ESP,
  Ratio.floatingPoint(0.05),
  null,
);
// The validator the page is opened for, which is not in the list.
const exitedBytes = new Uint8Array(20).fill(0xee).buffer;
const exited = `0x${'ee'.repeat(20)}` as `0x${string}`;
const walletBytes = new Uint8Array(20).fill(0xcd).buffer;
const now = new Date('2026-11-12T12:00:00Z');

const NOT_REGISTERED = 'This address is not a registered validator.';
const EXITED_ON = /^This validator exited on Nov 1, 2026/;
const EXITED = 'This validator has exited and no longer accepts delegations.';

const exitEvent: HistoryFileEvent = {
  type: 'exited',
  timestamp: '2026-11-01T00:00:00Z',
  block: 1,
  tx_hash: `0x${'11'.repeat(32)}`,
  log_index: 0,
  delegator: null,
  amount: null,
  old_commission_bps: null,
  new_commission_bps: null,
};

function historyFile(events: HistoryFileEvent[]): ValidatorHistoryFile {
  return {
    schema_version: 1,
    network: 'mainnet',
    address: exited,
    generated_at: '2026-11-12T00:00:00Z',
    latest_epoch: 10,
    epochs: [],
    network_epochs: [],
    stake_history: [],
    events,
  };
}

const found = (file: ValidatorHistoryFile) => ({
  ok: true,
  status: 200,
  json: async () => file,
});

const pendingExit = (availableTime: Date) =>
  new Map([
    [
      exited,
      new PendingWithdrawal(walletBytes, exitedBytes, 5n * ESP, availableTime),
    ],
  ]);

let testId = 0;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

interface Page {
  /** response is what the history file request answers with. */
  response: unknown;
  pendingExits?: Map<`0x${string}`, PendingWithdrawal>;
  /** address is what the URL asks for. */
  address?: string;
}

async function renderPage({
  response,
  pendingExits = new Map(),
  address = exited,
}: Page) {
  vi.stubGlobal(
    'fetch',
    response instanceof Error
      ? vi.fn().mockRejectedValue(response)
      : vi.fn().mockResolvedValue(response),
  );
  // jsdom has no <dialog> methods; the staking modal opens one.
  HTMLDialogElement.prototype.showModal ??= () => {};
  HTMLDialogElement.prototype.close ??= () => {};
  const setSelection = vi.fn();

  render(
    <EnvironmentContext.Provider value={Environment.mainnet}>
      <ValidatorHistoryURLContext.Provider
        value={`https://review.invalid/unlisted-${testId++}/`}
      >
        <Now.Provider value={now}>
          <AllValidatorsContext.Provider
            value={new Map([[listed.addressText, listed]])}
          >
            <PendingExitsContext.Provider value={pendingExits}>
              <SetValidatorSelectionContext.Provider value={setSelection}>
                <ValidatorDetailsView address={address} />
              </SetValidatorSelectionContext.Provider>
            </PendingExitsContext.Provider>
          </AllValidatorsContext.Provider>
        </Now.Provider>
      </ValidatorHistoryURLContext.Provider>
    </EnvironmentContext.Provider>,
  );
  await act(async () => {});
  return { setSelection };
}

const claim = () => screen.queryByRole('button', { name: 'Claim' });

describe('the page of a validator that is not listed', () => {
  describe('without a pending exit for the wallet', () => {
    it('says when the validator exited', async () => {
      await renderPage({ response: found(historyFile([exitEvent])) });

      expect(screen.getByText(EXITED_ON)).toBeTruthy();
      expect(claim()).toBeNull();
    });

    it('says the address is not a validator when its history has no exit', async () => {
      await renderPage({ response: found(historyFile([])) });

      expect(screen.getByText(NOT_REGISTERED)).toBeTruthy();
    });

    it('says the address is not a validator when it has no history at all', async () => {
      await renderPage({ response: { ok: false, status: 404 } });

      expect(screen.getByText(NOT_REGISTERED)).toBeTruthy();
    });

    it.each([
      ['fails', { ok: false, status: 503 }],
      ['times out', new DOMException('timed out', 'TimeoutError')],
      ['is malformed', found({ schema_version: 99 } as never)],
    ])(
      'does not call the address unregistered when its history %s',
      async (_, response) => {
        await renderPage({ response });

        expect(screen.queryByText(NOT_REGISTERED)).toBeNull();
        expect(
          screen.getByText(
            "This address isn't in the validator list. Its history couldn't be loaded right now, so it may be a validator that has exited.",
          ),
        ).toBeTruthy();
      },
    );
  });

  describe('with a pending exit for the wallet', () => {
    it('offers the claim once the exit can be claimed', async () => {
      const page = await renderPage({
        response: found(historyFile([exitEvent])),
        pendingExits: pendingExit(new Date(now.valueOf() - 1000)),
      });

      expect(screen.getByText(EXITED_ON)).toBeTruthy();
      expect(
        screen.getByText(/from this exited validator is ready to claim/),
      ).toBeTruthy();

      fireEvent.click(claim() as HTMLElement);
      expect(page.setSelection).toHaveBeenCalledOnce();
      expect(page.setSelection.mock.calls[0][0]).toEqual(
        new ValidatorConfirmedExitWithdraw(exited),
      );
    });

    it('says when the exit can be claimed before it can be', async () => {
      await renderPage({
        response: found(historyFile([exitEvent])),
        pendingExits: pendingExit(new Date('2026-11-15T12:00:00Z')),
      });

      expect(screen.getByText(EXITED_ON)).toBeTruthy();
      expect(screen.getByText(/can be claimed from Nov 15/)).toBeTruthy();
      expect(claim()).toBeNull();
      // The page already says the validator exited; the notice doesn't
      // repeat it in other words.
      expect(screen.queryByText(/is exiting/)).toBeNull();
    });

    it.each([
      ['fails', { ok: false, status: 503 }],
      ['is missing', { ok: false, status: 404 }],
      ['has no exit yet', found(historyFile([]))],
    ])('still offers the claim when the history %s', async (_, response) => {
      await renderPage({
        response,
        pendingExits: pendingExit(new Date(now.valueOf() - 1000)),
      });

      expect(screen.getByText(EXITED)).toBeTruthy();
      expect(screen.queryByText(NOT_REGISTERED)).toBeNull();
      expect(claim()).not.toBeNull();
    });

    it('finds the exit whatever the case of the address in the URL', async () => {
      await renderPage({
        response: found(historyFile([exitEvent])),
        pendingExits: pendingExit(new Date(now.valueOf() - 1000)),
        address: exited.toUpperCase().replace('0X', '0x'),
      });

      expect(claim()).not.toBeNull();
    });
  });

  it('never looks up anything that is not an address', async () => {
    await renderPage({
      response: found(historyFile([exitEvent])),
      address: '../../secrets',
    });

    expect(screen.getByText(NOT_REGISTERED)).toBeTruthy();
    expect(fetch).not.toHaveBeenCalled();
  });
});
