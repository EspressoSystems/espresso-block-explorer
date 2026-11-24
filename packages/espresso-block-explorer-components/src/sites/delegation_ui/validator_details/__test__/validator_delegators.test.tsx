import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EnvironmentContext } from '@/components/config/environment';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { Now } from '@/contexts/now_provider';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { Environment } from '@/models/config/environment/environment';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { ActiveValidators } from '@/service/hotshot_query_service/node/active_validators';
import { ValidatorEntry } from '@/service/hotshot_query_service/node/validator_entry';
import { EspressoCurrentEpochContext } from '../../contexts/espresso_current_epoch_context';
import {
  SampleValidatorHistoryContext,
  ValidatorHistoryURLContext,
} from '../../contexts/validator_details_context';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import { ValidatorHistory } from '../sample_history';
import {
  EPOCH_VALIDATORS_RETRY_MS,
  ProvideValidatorHistory,
  ValidatorHistoryContext,
} from '../validator_details_contexts';
import { ValidatorDetailsPage } from '../validator_details_page';
import { ValidatorHistoryFile } from '../validator_history_file';

const ESP = 10n ** 18n;
const validator = new NodeSetEntry(
  new Uint8Array(20).fill(0xaa).buffer,
  new TaggedBase64('', new ArrayBuffer(0)),
  100n * ESP,
  Ratio.floatingPoint(0.05),
  null,
);
const address = validator.addressText;
const walletA = `0x${'0a'.repeat(20)}`;
const walletB = `0x${'0b'.repeat(20)}`;

const baseline = {
  delegated_at: '2026-10-01T00:00:00Z',
  commission_bps: 500,
  block: 1,
  log_index: 0,
};

function historyFile(
  overrides: Partial<ValidatorHistoryFile> = {},
): ValidatorHistoryFile {
  return {
    schema_version: 1,
    network: 'mainnet',
    address,
    generated_at: '2026-10-29T00:00:00Z',
    latest_epoch: 10,
    epochs: [],
    network_epochs: [],
    stake_history: [
      { timestamp: '2026-10-01T00:00:00Z', block: 1, stake: `${100n * ESP}` },
    ],
    events: [],
    delegation_baselines: { [walletA]: baseline, [walletB]: baseline },
    ...overrides,
  };
}

/** The stake table with the validator in it, and its three delegators. */
const activeSet = () =>
  new ActiveValidators(
    new Map([
      [
        address,
        {
          stake: 100n * ESP,
          delegators: new Map([
            [address, 70n * ESP],
            [walletA as `0x${string}`, 20n * ESP],
            [walletB as `0x${string}`, 10n * ESP],
          ]),
        } as unknown as ValidatorEntry,
      ],
    ]),
  );

/** The stake table without the validator: it is not in the active set. */
const otherActiveSet = () => new ActiveValidators(new Map());

function serviceWith(
  getValidatorsAtEpoch: () => Promise<ActiveValidators>,
): HotShotQueryService {
  return { node: { getValidatorsAtEpoch } } as unknown as HotShotQueryService;
}

let testId = 0;
let latest: null | ValidatorHistory = null;

const Probe: React.FC = () => {
  latest = React.useContext(ValidatorHistoryContext);
  return null;
};

interface Setup {
  service: HotShotQueryService;
  file?: null | ValidatorHistoryFile;
  sample?: boolean;
  children?: React.ReactNode;
}

async function renderHistory({
  service,
  file = historyFile(),
  sample = false,
  children,
}: Setup) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => file,
    }),
  );
  render(
    <EnvironmentContext.Provider value={Environment.mainnet}>
      <ValidatorHistoryURLContext.Provider
        value={file ? `https://review.invalid/delegators-${testId++}/` : null}
      >
        <SampleValidatorHistoryContext.Provider value={sample}>
          <HotShotQueryServiceAPIContext.Provider value={service}>
            <EspressoCurrentEpochContext.Provider value={10n}>
              <ValidatorNodeContext.Provider value={validator}>
                <Now.Provider value={new Date('2026-10-29T10:00:00Z')}>
                  <ProvideValidatorHistory>
                    <Probe />
                  </ProvideValidatorHistory>
                  {children}
                </Now.Provider>
              </ValidatorNodeContext.Provider>
            </EspressoCurrentEpochContext.Provider>
          </HotShotQueryServiceAPIContext.Provider>
        </SampleValidatorHistoryContext.Provider>
      </ValidatorHistoryURLContext.Provider>
    </EnvironmentContext.Provider>,
  );
  await act(async () => {});
}

/** The row of a label in the page's list of facts. */
function factRow(label: string): HTMLElement {
  const term = screen.getByText(label, { selector: 'dt *, dt' });
  return term.closest('div') as HTMLElement;
}

/** The value shown beside a label in the page's list of facts. */
function fact(label: string): string {
  return factRow(label).querySelector('dd')?.textContent ?? '';
}

/** The explanation a fact gives on hover, if it has one. */
function factNote(label: string): null | string {
  return factRow(label).getAttribute('title');
}

beforeEach(() => {
  latest = null;
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('validator delegators', () => {
  it('lists the delegators of a validator in the active set', async () => {
    await renderHistory({ service: serviceWith(async () => activeSet()) });

    expect(latest).toMatchObject({
      delegatorCount: 3,
      delegatorsUnknown: null,
      delegatorsEpoch: 10,
    });
  });

  it('counts an inactive validator’s delegators from its history file, not as zero', async () => {
    await renderHistory({ service: serviceWith(async () => otherActiveSet()) });

    expect(latest).toMatchObject({
      delegatorCount: 2,
      delegatorsUnknown: 'inactive',
      delegatorsEpoch: 10,
    });
  });

  it('leaves an inactive validator’s delegators unknown when the file has no count', async () => {
    await renderHistory({
      service: serviceWith(async () => otherActiveSet()),
      file: historyFile({ delegation_baselines: undefined }),
    });

    expect(latest).toMatchObject({
      delegatorCount: null,
      delegatorsUnknown: 'inactive',
    });
  });

  it('leaves the delegators unknown when the request fails, then retries', async () => {
    vi.useFakeTimers();
    const getValidatorsAtEpoch = vi
      .fn()
      .mockRejectedValueOnce(new Error('503'))
      .mockResolvedValue(activeSet());
    await renderHistory({ service: serviceWith(getValidatorsAtEpoch) });

    expect(latest).toMatchObject({
      delegatorCount: null,
      delegatorsUnknown: 'error',
      delegatorsEpoch: null,
    });

    await act(async () => {
      await vi.advanceTimersByTimeAsync(EPOCH_VALIDATORS_RETRY_MS);
    });
    expect(getValidatorsAtEpoch).toHaveBeenCalledTimes(2);
    expect(latest).toMatchObject({
      delegatorCount: 3,
      delegatorsUnknown: null,
    });
  });

  it('is loading, not zero, until the stake table answers', async () => {
    await renderHistory({ service: serviceWith(() => new Promise(() => {})) });

    expect(latest).toMatchObject({
      delegatorCount: null,
      delegatorsUnknown: 'loading',
    });
  });
});

describe('validator page delegators', () => {
  const page = { children: <ValidatorDetailsPage /> };

  it('shows the count for an active validator, with nothing to explain', async () => {
    await renderHistory({
      service: serviceWith(async () => activeSet()),
      ...page,
    });

    expect(fact('Delegators')).toBe('3');
    expect(factNote('Delegators')).toBeNull();
  });

  it('shows an inactive validator’s count and says where it is from', async () => {
    await renderHistory({
      service: serviceWith(async () => otherActiveSet()),
      ...page,
    });

    expect(fact('Delegators')).toBe('2');
    expect(factNote('Delegators')).toBe(
      "This validator isn't in the active set for epoch 10. These are the wallets with stake in it, from its history.",
    );
  });

  it('shows a dash, not 0, for an inactive validator without a count', async () => {
    await renderHistory({
      service: serviceWith(async () => otherActiveSet()),
      file: historyFile({ delegation_baselines: undefined }),
      ...page,
    });

    expect(fact('Delegators')).toBe('-');
    expect(factNote('Delegators')).toBe(
      "This validator isn't in the active set for epoch 10, so its delegators aren't known.",
    );
  });

  it('shows a dash, not 0, when the delegators could not be loaded', async () => {
    await renderHistory({
      service: serviceWith(async () => {
        throw new Error('503');
      }),
      ...page,
    });

    expect(fact('Delegators')).toBe('-');
    expect(factNote('Delegators')).toBe(
      "Delegators couldn't be loaded right now.",
    );
  });

  it('has no list of delegators, only activity and commission history', async () => {
    await renderHistory({
      service: serviceWith(async () => activeSet()),
      ...page,
    });

    expect(
      screen.getByRole('heading', { name: 'Validator info' }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole('button').map((button) => button.textContent),
    ).toEqual(expect.arrayContaining(['Activity', 'Commission']));
    expect(screen.queryByRole('button', { name: 'Delegators' })).toBeNull();
    expect(screen.queryByText('Share of stake')).toBeNull();
  });
});

describe('validator history without a source', () => {
  it('is unavailable, with nothing made up, on a deployed site', async () => {
    await renderHistory({
      service: serviceWith(async () => activeSet()),
      file: null,
      children: <ValidatorDetailsPage />,
    });

    expect(latest).toMatchObject({
      status: 'unavailable',
      stake: [],
      epochs: [],
      activity: [],
    });
    expect(fact('Missed slots (last epoch)')).toBe('-');
    expect(screen.queryByText('Sample data')).toBeNull();
    expect(
      screen.getAllByText("Validator history isn't available on this network.")
        .length,
    ).toBeGreaterThan(0);
  });

  it('is sample data only where the host turns it on, and says so', async () => {
    await renderHistory({
      service: serviceWith(async () => activeSet()),
      file: null,
      sample: true,
      children: <ValidatorDetailsPage />,
    });

    expect(latest?.status).toBe('sample');
    expect(latest?.epochs.length).toBeGreaterThan(0);
    // Made-up epochs never become a fact about the validator.
    expect(fact('Missed slots (last epoch)')).toBe('-');
    expect(screen.getAllByText('Sample data').length).toBeGreaterThan(0);
  });
});
