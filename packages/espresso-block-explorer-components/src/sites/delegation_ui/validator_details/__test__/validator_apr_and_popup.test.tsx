import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { EnvironmentContext } from '@/components/config/environment';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { Now } from '@/contexts/now_provider';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { Environment } from '@/models/config/environment/environment';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { Ratio } from '@/service/espresso_staking_api_service/common/ratio';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { ActiveValidators } from '@/service/hotshot_query_service/node/active_validators';
import { ActiveValidatorsContext } from '../../contexts/active_validators_context';
import { AllValidatorsContext } from '../../contexts/all_validators_context';
import { EspressoCurrentEpochContext } from '../../contexts/espresso_current_epoch_context';
import {
  ValidatorDetailsModalContext,
  ValidatorDetailsModalControls,
  ValidatorHistoryURLContext,
} from '../../contexts/validator_details_context';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import { ESTIMATED_APR_LABEL, MEASURED_APR_LABEL } from '../participation';
import { ProvideValidatorDetailsModal } from '../validator_details_modal';
import { ValidatorDetailsPage } from '../validator_details_page';
import {
  HistoryFileEarnings,
  ValidatorHistoryFile,
} from '../validator_history_file';

const ESP = 10n ** 18n;
const validator = new NodeSetEntry(
  new Uint8Array(20).fill(0xaa).buffer,
  new TaggedBase64('', new ArrayBuffer(0)),
  100n * ESP,
  Ratio.floatingPoint(0.1),
  null,
);
const address = validator.addressText;
const NETWORK_APR = 0.04;

const service = {
  node: { getValidatorsAtEpoch: async () => new ActiveValidators(new Map()) },
} as unknown as HotShotQueryService;

const activeValidators = {
  apr: Ratio.floatingPoint(NETWORK_APR),
} as unknown as React.ContextType<typeof ActiveValidatorsContext>;

function historyFile(earnings?: HistoryFileEarnings): ValidatorHistoryFile {
  return {
    schema_version: 1,
    network: 'mainnet',
    address,
    generated_at: '2026-10-29T00:00:00Z',
    latest_epoch: 10,
    epochs: [],
    network_epochs: [],
    stake_history: [],
    events: [],
    earnings,
  };
}

const measured = (delegator_net_apr: number): HistoryFileEarnings => ({
  as_of: '2026-10-29T00:00:00Z',
  lifetime: { total: '0', validator: '0', delegators: '0' },
  windows: { '30d': { delegator_net_apr, gross_apr: 0.039, days_covered: 30 } },
});

let testId = 0;

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function stubHistory(file: ValidatorHistoryFile) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => file,
    }),
  );
}

const Contexts: React.FC<React.PropsWithChildren> = ({ children }) => (
  <EnvironmentContext.Provider value={Environment.mainnet}>
    <ValidatorHistoryURLContext.Provider
      value={`https://review.invalid/apr-${testId}/`}
    >
      <HotShotQueryServiceAPIContext.Provider value={service}>
        <EspressoCurrentEpochContext.Provider value={10n}>
          <ActiveValidatorsContext.Provider value={activeValidators}>
            <Now.Provider value={new Date('2026-10-29T10:00:00Z')}>
              {children}
            </Now.Provider>
          </ActiveValidatorsContext.Provider>
        </EspressoCurrentEpochContext.Provider>
      </HotShotQueryServiceAPIContext.Provider>
    </ValidatorHistoryURLContext.Provider>
  </EnvironmentContext.Provider>
);

async function renderPage(file: ValidatorHistoryFile) {
  testId++;
  stubHistory(file);
  render(
    <Contexts>
      <ValidatorNodeContext.Provider value={validator}>
        <ValidatorDetailsPage />
      </ValidatorNodeContext.Provider>
    </Contexts>,
  );
  await act(async () => {});
}

/** The value shown beside a label in the page's list of facts. */
function fact(label: string): string {
  const term = screen.getByText(label, { selector: 'dt *, dt' });
  return term.closest('div')?.querySelector('dd')?.textContent ?? '';
}

describe('the APR beside Delegate', () => {
  it('is the measured rate, labelled as measured', async () => {
    await renderPage(historyFile(measured(0.0355)));

    expect(fact(MEASURED_APR_LABEL)).toContain('3.5');
    expect(screen.queryByText(ESTIMATED_APR_LABEL)).toBeNull();
  });

  it('shows a validator that earned nothing as 0%, not the network rate', async () => {
    await renderPage(historyFile(measured(0)));

    expect(fact(MEASURED_APR_LABEL)).toMatch(/^0(\.0+)?%$/);
  });

  it('is the estimate, labelled as one, when the file has an impossible rate', async () => {
    await renderPage(historyFile(measured(2.5)));

    // 4% network APR less 10% commission.
    expect(fact(ESTIMATED_APR_LABEL)).toContain('3.6');
    expect(screen.queryByText(MEASURED_APR_LABEL)).toBeNull();
    expect(document.body.textContent).not.toContain('250');
  });

  it('is the estimate when nothing was measured', async () => {
    await renderPage(historyFile());

    expect(fact(ESTIMATED_APR_LABEL)).toContain('3.6');
  });
});

describe('the validator popup', () => {
  async function openPopup(listed: boolean) {
    testId++;
    stubHistory(historyFile());
    let controls: null | ValidatorDetailsModalControls = null;
    const Capture: React.FC = () => {
      controls = React.useContext(ValidatorDetailsModalContext);
      return null;
    };
    const tree = (isListed: boolean) => (
      <Contexts>
        <AllValidatorsContext.Provider
          value={new Map(isListed ? [[address, validator]] : [])}
        >
          <ProvideValidatorDetailsModal>
            <Capture />
          </ProvideValidatorDetailsModal>
        </AllValidatorsContext.Provider>
      </Contexts>
    );

    const view = render(tree(listed));
    await act(async () => controls?.open(address));
    return { delist: () => view.rerender(tree(false)) };
  }

  const delegate = () =>
    screen.queryByRole('button', { name: 'Delegate', hidden: true });
  const delisted = () =>
    screen.queryByText('This validator is no longer listed.');

  it('shows a listed validator with its Delegate button', async () => {
    await openPopup(true);

    expect(delegate()).not.toBeNull();
    expect(delisted()).toBeNull();
  });

  it('stops offering Delegate when the validator leaves the list while open', async () => {
    const popup = await openPopup(true);
    popup.delist();

    expect(delisted()).not.toBeNull();
    expect(delegate()).toBeNull();
    expect(screen.queryByText('Unnamed validator')).toBeNull();
    // It can still be closed.
    expect(
      screen.queryByRole('button', { name: 'Close', hidden: true }),
    ).not.toBeNull();
  });
});
