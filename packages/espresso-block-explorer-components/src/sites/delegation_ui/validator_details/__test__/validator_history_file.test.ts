import { Environment } from '@/models/config/environment/environment';
import { describe, expect, it } from 'vitest';
import {
  activityFromFile,
  commissionChangesFromFile,
  delegationBaselinesFromFile,
  delegatorAPRFromFile,
  earningsFromFile,
  epochsFromFile,
  exitedAtFromFile,
  flowsFromFile,
  HistoryFileEvent,
  historyNetwork,
  isValidatorAddress,
  isValidatorHistoryFile,
  msPerEpochFromFile,
  lastEpochVoteFromFile,
  networkMissedRatesFromFile,
  nodeVersionFromFile,
  nodeVersionStatusFromFile,
  registeredAtFromFile,
  stakePointsFromFile,
  ValidatorHistoryFile,
  validatorHistoryFileURL,
  votesFromFile,
} from '../validator_history_file';

const NOW = new Date('2026-10-27T12:00:00Z');
const ESP = 10n ** 18n;

function event(
  type: HistoryFileEvent['type'],
  timestamp: string,
  fields: Partial<HistoryFileEvent> = {},
): HistoryFileEvent {
  return {
    type,
    timestamp,
    block: 1,
    tx_hash: '0xabc',
    log_index: 0,
    delegator: null,
    amount: null,
    old_commission_bps: null,
    new_commission_bps: null,
    ...fields,
  };
}

function file(overrides: Partial<ValidatorHistoryFile>): ValidatorHistoryFile {
  return {
    schema_version: 1,
    network: 'decaf',
    address: '0x21bb73833454c3b3522de8f009550e78981053dd',
    generated_at: '2026-10-27T12:00:00Z',
    latest_epoch: 10,
    epochs: [],
    network_epochs: [],
    stake_history: [],
    events: [],
    ...overrides,
  };
}

describe('validator history files', () => {
  it('maps environments to history networks', () => {
    expect(historyNetwork(Environment.mainnet)).toBe('mainnet');
    expect(historyNetwork(Environment.decaf)).toBe('decaf');
    expect(historyNetwork(Environment.water)).toBeNull();
  });

  it('builds file URLs with lowercase addresses, with or without a trailing slash', () => {
    const address = '0xABCDEFabcdef0000000000000000000000000000';
    const expected =
      'https://espressonodes.com/validator-data/decaf/validators/0xabcdefabcdef0000000000000000000000000000.json';
    expect(
      validatorHistoryFileURL(
        'https://espressonodes.com/validator-data/',
        'decaf',
        address,
      ),
    ).toBe(expected);
    expect(
      validatorHistoryFileURL(
        'https://espressonodes.com/validator-data',
        'decaf',
        address,
      ),
    ).toBe(expected);
  });

  it('turns stake changes into one point per day, from the first change', () => {
    const points = stakePointsFromFile(
      file({
        stake_history: [
          {
            timestamp: '2026-10-24T09:00:00Z',
            block: 1,
            stake: String(100n * ESP),
          },
          {
            timestamp: '2026-10-26T18:00:00Z',
            block: 2,
            stake: String(250n * ESP),
          },
        ],
      }),
      NOW,
    );

    expect(points.map((p) => p.date.toISOString().slice(0, 10))).toEqual([
      '2026-10-24',
      '2026-10-25',
      '2026-10-26',
      '2026-10-27',
    ]);
    expect(points.map((p) => p.stake)).toEqual([100, 100, 250, 250]);
  });

  it('limits stake history to the last 90 days', () => {
    const points = stakePointsFromFile(
      file({
        stake_history: [
          {
            timestamp: '2025-01-01T00:00:00Z',
            block: 1,
            stake: String(5n * ESP),
          },
        ],
      }),
      NOW,
    );

    expect(points).toHaveLength(90);
    expect(points[0].stake).toBe(5);
  });

  it('sums delegations and undelegations per day for the last 30 days', () => {
    const flows = flowsFromFile(
      file({
        events: [
          event('delegated', '2026-10-27T01:00:00Z', {
            amount: String(10n * ESP),
          }),
          event('delegated', '2026-10-27T05:00:00Z', {
            amount: String(5n * ESP),
          }),
          event('undelegated', '2026-10-26T05:00:00Z', {
            amount: String(3n * ESP),
          }),
          event('delegated', '2026-01-01T00:00:00Z', {
            amount: String(99n * ESP),
          }),
        ],
      }),
      NOW,
    );

    expect(flows).toHaveLength(30);
    expect(flows[29]).toMatchObject({ delegated: 15, undelegated: 0 });
    expect(flows[28]).toMatchObject({ delegated: 0, undelegated: 3 });
    expect(flows.reduce((sum, f) => sum + f.delegated, 0)).toBe(15);
  });

  it('derives missed slots per epoch and skips epochs without slot data', () => {
    const epochs = epochsFromFile(
      file({
        epochs: [
          {
            epoch: 2,
            slots: 40,
            proposals: 38,
            vote_rate: 0.9,
            proposal_rate: 0.95,
          },
          {
            epoch: 1,
            slots: 40,
            proposals: 40,
            vote_rate: 1,
            proposal_rate: 1,
          },
          {
            epoch: 3,
            slots: null,
            proposals: null,
            vote_rate: null,
            proposal_rate: null,
          },
        ],
      }),
    );

    expect(epochs).toEqual([
      { epoch: 1, slotsLed: 40, slotsMissed: 0 },
      { epoch: 2, slotsLed: 40, slotsMissed: 2 },
    ]);
  });

  it('maps epochs to the network missed rate', () => {
    const history = file({
      network_epochs: [
        {
          epoch: 1,
          active_validators: 3,
          avg_vote_rate: 1,
          avg_missed_rate: 0.01,
        },
        {
          epoch: 2,
          active_validators: 3,
          avg_vote_rate: 1,
          avg_missed_rate: 0.03,
        },
        {
          epoch: 9,
          active_validators: 3,
          avg_vote_rate: 1,
          avg_missed_rate: 0.5,
        },
      ],
    });
    const rates = networkMissedRatesFromFile(history);
    expect(rates.get(1)).toBe(0.01);
    expect(rates.get(9)).toBe(0.5);
    expect(rates.size).toBe(3);
  });

  it('lists delegations and undelegations newest first', () => {
    const activity = activityFromFile(
      file({
        events: [
          event('delegated', '2026-10-01T00:00:00Z', {
            delegator: '0x1111111111111111111111111111111111111111',
            amount: String(7n * ESP),
            tx_hash: '0x01',
          }),
          event('undelegated', '2026-10-05T00:00:00Z', {
            delegator: '0x2222222222222222222222222222222222222222',
            amount: String(2n * ESP),
            tx_hash: '0x02',
          }),
          event('commission_updated', '2026-10-06T00:00:00Z', {
            old_commission_bps: 1000,
            new_commission_bps: 900,
          }),
        ],
      }),
    );

    expect(activity).toHaveLength(2);
    expect(activity[0]).toMatchObject({
      kind: 'undelegate',
      amount: 2,
      txHash: '0x02',
    });
    expect(activity[1]).toMatchObject({ kind: 'delegate', amount: 7 });
  });

  it('lists commission changes and the registration commission', () => {
    const history = file({
      events: [
        event('commission_updated', '2026-08-28T00:00:00Z', {
          old_commission_bps: 1500,
          new_commission_bps: 1234,
        }),
        event('registered', '2026-04-10T00:00:00Z', {
          new_commission_bps: 1000,
        }),
      ],
    });

    expect(commissionChangesFromFile(history)).toMatchObject([
      { from: 0.15, to: 0.1234 },
      { from: null, to: 0.1 },
    ]);
    expect(registeredAtFromFile(history)?.toISOString()).toBe(
      '2026-04-10T00:00:00.000Z',
    );
    expect(registeredAtFromFile(file({}))).toBeNull();
  });
});

describe('delegation baselines', () => {
  const wallet = '0xABCDEFabcdef0000000000000000000000000000';
  const baseline = {
    delegated_at: '2026-01-02T00:00:00Z',
    commission_bps: 500,
    block: 2,
    log_index: 3,
  };

  it('reads a retained baseline without a delegation event', () => {
    const history = file({ delegation_baselines: { [wallet]: baseline } });
    expect(isValidatorHistoryFile(history)).toBe(true);
    expect(
      delegationBaselinesFromFile(history)?.get(wallet.toLowerCase()),
    ).toEqual({
      delegatedAt: new Date(baseline.delegated_at),
      commission: 0.05,
      block: 2,
      logIndex: 3,
    });
  });

  it('distinguishes older files from an empty active-wallet map', () => {
    expect(delegationBaselinesFromFile(file({}))).toBeUndefined();
    expect(
      delegationBaselinesFromFile(file({ delegation_baselines: {} }))?.size,
    ).toBe(0);
  });

  it('keeps an unknown commission unknown', () => {
    const history = file({
      delegation_baselines: {
        [wallet]: { ...baseline, commission_bps: null },
      },
    });
    expect(isValidatorHistoryFile(history)).toBe(true);
    expect(
      delegationBaselinesFromFile(history)?.get(wallet.toLowerCase())
        ?.commission,
    ).toBeNull();
  });

  it.each([
    null,
    [],
    { badWallet: baseline },
    { [wallet]: null },
    { [wallet]: { ...baseline, delegated_at: 'invalid' } },
    { [wallet]: { ...baseline, commission_bps: -1 } },
    { [wallet]: { ...baseline, commission_bps: 10001 } },
    { [wallet]: { ...baseline, commission_bps: 0.5 } },
    { [wallet]: { ...baseline, block: -1 } },
    { [wallet]: { ...baseline, log_index: '3' } },
  ])('rejects malformed baselines: %j', (delegation_baselines) => {
    expect(isValidatorHistoryFile({ ...file({}), delegation_baselines })).toBe(
      false,
    );
  });
});

describe('lastEpochVoteFromFile', () => {
  const epoch = (n: number, vote_rate: null | number) => ({
    epoch: n,
    slots: 10,
    proposals: 10,
    vote_rate,
    proposal_rate: 1,
  });

  it('takes the latest epoch with a vote rate', () => {
    const history = file({
      epochs: [epoch(7, 0.8), epoch(9, null), epoch(8, 0.65), epoch(5, 0.9)],
    });
    expect(lastEpochVoteFromFile(history)).toEqual({ epoch: 8, rate: 0.65 });
  });

  it('is null without vote rates', () => {
    expect(lastEpochVoteFromFile(file({}))).toBeNull();
    expect(
      lastEpochVoteFromFile(file({ epochs: [epoch(3, null)] })),
    ).toBeNull();
  });
});

describe('nodeVersionFromFile', () => {
  it('reads the measured version', () => {
    expect(
      nodeVersionFromFile(
        file({
          node_version: {
            version: '0.6.3.16',
            updated_at: '2026-10-20T08:00:00Z',
          },
        }),
      ),
    ).toBe('0.6.3.16');
  });

  it('is null when unknown, blank, or missing from older files', () => {
    expect(nodeVersionFromFile(file({ node_version: null }))).toBeNull();
    expect(
      nodeVersionFromFile(
        file({ node_version: { version: ' ', updated_at: null } }),
      ),
    ).toBeNull();
    expect(nodeVersionFromFile(file({}))).toBeNull();
  });
});

describe('delegatorAPRFromFile', () => {
  it('reads the 30 day delegator APR', () => {
    expect(
      delegatorAPRFromFile(
        file({
          earnings: {
            windows: {
              '7d': { delegator_net_apr: 0.0352 },
              '30d': { delegator_net_apr: 0.0357 },
            },
          },
        }),
      ),
    ).toBe(0.0357);
  });

  it('is null without measured earnings', () => {
    expect(delegatorAPRFromFile(file({}))).toBeNull();
    expect(delegatorAPRFromFile(file({ earnings: null }))).toBeNull();
    expect(
      delegatorAPRFromFile(
        file({ earnings: { windows: { '30d': { delegator_net_apr: null } } } }),
      ),
    ).toBeNull();
  });
});

describe('votesFromFile', () => {
  it('pairs vote rates with the network average and skips missing ones', () => {
    const history = file({
      epochs: [
        { epoch: 6, slots: 5, proposals: 5, vote_rate: 0.8, proposal_rate: 1 },
        { epoch: 5, slots: 5, proposals: 5, vote_rate: 0.6, proposal_rate: 1 },
        { epoch: 7, slots: 5, proposals: 5, vote_rate: null, proposal_rate: 1 },
      ],
      network_epochs: [
        {
          epoch: 5,
          active_validators: 90,
          avg_vote_rate: 0.7,
          avg_missed_rate: 0,
        },
      ],
    });
    expect(votesFromFile(history)).toEqual([
      { epoch: 5, rate: 0.6, networkRate: 0.7 },
      { epoch: 6, rate: 0.8, networkRate: null },
    ]);
  });
});

describe('earningsFromFile', () => {
  it('converts lifetime totals, windows and periods in time order', () => {
    const earnings = earningsFromFile(
      file({
        earnings: {
          as_of: '2026-10-28T12:00:00Z',
          lifetime: {
            total: '3000000000000000000',
            validator: '1000000000000000000',
            delegators: '2000000000000000000',
          },
          windows: {
            '7d': { delegator_net_apr: 0.035, gross_apr: 0.039 },
            '30d': { delegator_net_apr: 0.036 },
          },
          intervals: [
            {
              start: '2026-10-27T00:00:00Z',
              end: '2026-10-28T00:00:00Z',
              source: 'measured',
              validator: '1000000000000000000',
              delegators: '9000000000000000000',
            },
            {
              start: '2026-10-26T00:00:00Z',
              end: '2026-10-27T00:00:00Z',
              source: 'estimated',
              validator: '0',
              delegators: '5000000000000000000',
            },
          ],
        },
      }),
    );
    expect(earnings?.lifetime.total).toBe(3000000000000000000n);
    expect(earnings?.last7Days).toEqual({
      delegatorNetAPR: 0.035,
      grossAPR: 0.039,
    });
    expect(earnings?.last30Days).toEqual({
      delegatorNetAPR: 0.036,
      grossAPR: null,
    });
    expect(earnings?.periods.map((p) => [p.estimated, p.delegators])).toEqual([
      [true, 5],
      [false, 9],
    ]);
  });

  it('is null without earnings', () => {
    expect(earningsFromFile(file({}))).toBeNull();
    expect(earningsFromFile(file({ earnings: null }))).toBeNull();
    expect(earningsFromFile(file({ earnings: { windows: {} } }))).toBeNull();
  });
});

describe('msPerEpochFromFile', () => {
  const interval = (from: number, to: number, start: string, end: string) => ({
    epoch_from: from,
    epoch_to: to,
    start,
    end,
    source: 'measured' as const,
    validator: '0',
    delegators: '0',
  });

  it('averages the epoch length over the latest intervals', () => {
    const ms = msPerEpochFromFile(
      file({
        earnings: {
          intervals: [
            interval(5, 8, '2026-10-02T00:00:00Z', '2026-10-03T00:00:00Z'),
            interval(1, 4, '2026-10-01T00:00:00Z', '2026-10-02T00:00:00Z'),
          ],
        },
      }),
    );
    expect(ms).toBe(6 * 60 * 60 * 1000);
  });

  it('is null without intervals that name their epochs', () => {
    expect(msPerEpochFromFile(file({}))).toBeNull();
    expect(
      msPerEpochFromFile(
        file({
          earnings: {
            intervals: [
              {
                start: '2026-10-01T00:00:00Z',
                end: '2026-10-02T00:00:00Z',
                source: 'measured',
                validator: '0',
                delegators: '0',
              },
            ],
          },
        }),
      ),
    ).toBeNull();
  });
});

describe('exitedAtFromFile', () => {
  it('is the latest exit, or null', () => {
    expect(
      exitedAtFromFile(
        file({
          events: [
            event('registered', '2026-04-10T00:00:00Z'),
            event('exited', '2026-08-03T13:28:00Z'),
          ],
        }),
      )?.toISOString(),
    ).toBe('2026-08-03T13:28:00.000Z');
    expect(exitedAtFromFile(file({}))).toBeNull();
  });
});

describe('nodeVersionStatusFromFile', () => {
  it('reads latest or outdated, and ignores anything else', () => {
    const withStatus = (status: unknown) =>
      nodeVersionStatusFromFile(
        file({
          node_version: {
            version: '0.6.3.12',
            updated_at: null,
            latest: '0.6.3.16',
            status: status as 'latest' | 'outdated',
          },
        }),
      );
    expect(withStatus('outdated')).toEqual({
      status: 'outdated',
      latest: '0.6.3.16',
    });
    expect(withStatus('latest')?.status).toBe('latest');
    expect(withStatus(null)).toBeNull();
    expect(nodeVersionStatusFromFile(file({}))).toBeNull();
  });
});

describe('isValidatorAddress', () => {
  it('accepts 20-byte hex addresses in any case', () => {
    expect(
      isValidatorAddress('0x21bb73833454c3b3522de8f009550e78981053dd'),
    ).toBe(true);
    expect(
      isValidatorAddress('0x21BB73833454C3B3522DE8F009550E78981053DD'),
    ).toBe(true);
  });

  it('rejects anything that could change the history file URL', () => {
    expect(isValidatorAddress('../../index')).toBe(false);
    expect(
      isValidatorAddress('0x21bb73833454c3b3522de8f009550e78981053dd?x'),
    ).toBe(false);
    expect(
      isValidatorAddress('0x21bb73833454c3b3522de8f009550e78981053d'),
    ).toBe(false);
    expect(isValidatorAddress('21bb73833454c3b3522de8f009550e78981053dd')).toBe(
      false,
    );
    expect(isValidatorAddress('')).toBe(false);
  });
});

describe('isValidatorHistoryFile', () => {
  it('accepts a well-formed file, with and without optional sections', () => {
    expect(isValidatorHistoryFile(file({}))).toBe(true);
    expect(
      isValidatorHistoryFile(
        file({
          epochs: [
            {
              epoch: 1,
              slots: 10,
              proposals: 1,
              vote_rate: 0.9,
              proposal_rate: 1,
            },
          ],
          stake_history: [
            { timestamp: '2026-10-01T00:00:00Z', block: 1, stake: '1000' },
          ],
          events: [event('registered', '2026-10-01T00:00:00Z')],
          node_version: { version: '0.6.3.16', updated_at: null },
          earnings: null,
        }),
      ),
    ).toBe(true);
  });

  it('rejects files whose entries would throw in a reader', () => {
    expect(isValidatorHistoryFile(null)).toBe(false);
    expect(isValidatorHistoryFile(file({ schema_version: 2 }))).toBe(false);
    expect(isValidatorHistoryFile({ ...file({}), epochs: [null] })).toBe(false);
    expect(
      isValidatorHistoryFile({ ...file({}), events: [{ type: 'delegated' }] }),
    ).toBe(false);
    expect(
      isValidatorHistoryFile({ ...file({}), stake_history: ['1000'] }),
    ).toBe(false);
    expect(
      isValidatorHistoryFile({
        ...file({}),
        node_version: { version: null, updated_at: null },
      }),
    ).toBe(false);
    expect(
      isValidatorHistoryFile({ ...file({}), earnings: { intervals: 'x' } }),
    ).toBe(false);
  });
});
