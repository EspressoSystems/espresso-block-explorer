import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { EnvironmentContext } from '@/components/config/environment';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { Now } from '@/contexts/now_provider';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { Environment } from '@/models/config/environment/environment';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { ActiveValidators } from '@/service/hotshot_query_service/node/active_validators';
import { EspressoCurrentEpochContext } from '../../contexts/espresso_current_epoch_context';
import { PendingExitsContext } from '../../contexts/pending_exits_context';
import { ValidatorHistoryURLContext } from '../../contexts/validator_details_context';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import {
  ProvideValidatorHistory,
  ValidatorHistoryContext,
} from '../validator_details_contexts';
import { ValidatorHistoryFile } from '../validator_history_file';
import {
  ExitNotice,
  ValidatorStakeActions,
  ValidatorStatusChip,
} from '../validator_summary';

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
const now = new Date('2026-11-02T12:00:00Z');

// A history file that wrongly says the listed validator exited.
const exitedFile: ValidatorHistoryFile = {
  schema_version: 1,
  network: 'mainnet',
  address,
  generated_at: '2026-11-02T00:00:00Z',
  latest_epoch: 10,
  epochs: [],
  network_epochs: [],
  stake_history: [],
  events: [
    {
      type: 'exited',
      timestamp: '2026-11-01T00:00:00Z',
      block: 1,
      tx_hash: `0x${'11'.repeat(32)}`,
      log_index: 0,
      delegator: null,
      amount: null,
      old_commission_bps: null,
      new_commission_bps: null,
    },
  ],
};

const service = {
  node: {
    getValidatorsAtEpoch: async () => new ActiveValidators(new Map()),
  },
} as unknown as HotShotQueryService;

let testId = 0;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function delegateButton(): HTMLButtonElement {
  return screen.getByRole('button', { name: 'Delegate' }) as HTMLButtonElement;
}

async function renderSummary(
  pendingExits: Map<`0x${string}`, PendingWithdrawal>,
) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => exitedFile,
    }),
  );
  let loaded = false;
  const Probe: React.FC = () => {
    loaded = React.useContext(ValidatorHistoryContext)?.status === 'live';
    return null;
  };

  render(
    <EnvironmentContext.Provider value={Environment.mainnet}>
      <ValidatorHistoryURLContext.Provider
        value={`https://review.invalid/exit-${testId++}/`}
      >
        <HotShotQueryServiceAPIContext.Provider value={service}>
          <EspressoCurrentEpochContext.Provider value={10n}>
            <ValidatorNodeContext.Provider value={validator}>
              <Now.Provider value={now}>
                <RainbowKitAccountAddressContext.Provider value={wallet}>
                  <PendingExitsContext.Provider value={pendingExits}>
                    <ProvideValidatorHistory>
                      <Probe />
                      <ValidatorStatusChip />
                      <ValidatorStakeActions />
                      <ExitNotice />
                    </ProvideValidatorHistory>
                  </PendingExitsContext.Provider>
                </RainbowKitAccountAddressContext.Provider>
              </Now.Provider>
            </ValidatorNodeContext.Provider>
          </EspressoCurrentEpochContext.Provider>
        </HotShotQueryServiceAPIContext.Provider>
      </ValidatorHistoryURLContext.Provider>
    </EnvironmentContext.Provider>,
  );
  await act(async () => {});
  expect(loaded).toBe(true);
}

describe('validator exit state', () => {
  it('ignores an exit in the history file for a listed validator', async () => {
    await renderSummary(new Map());

    expect(delegateButton().disabled).toBe(false);
    expect(screen.queryByText('Exiting')).toBeNull();
    expect(
      screen.queryByText(
        'This validator is exiting and no longer accepts delegations.',
      ),
    ).toBeNull();
  });

  it('shows the exit from the wallet pending exits', async () => {
    const pending = new PendingWithdrawal(
      new Uint8Array(20).fill(0xcd).buffer,
      validator.address,
      5n * ESP,
      new Date('2026-11-09T12:00:00Z'),
    );

    await renderSummary(new Map([[address, pending]]));

    expect(delegateButton().disabled).toBe(true);
    expect(screen.queryByText('Exiting')).not.toBeNull();
    expect(
      screen.queryByText(
        'This validator is exiting and no longer accepts delegations.',
      ),
    ).not.toBeNull();
  });
});
