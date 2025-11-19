import {
  act,
  findAllByText,
  findByText,
  waitFor,
} from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { StepFunction } from 'storybook/internal/csf';

async function newDelegationInteraction(
  canvasElement: HTMLElement,
  step: StepFunction,
  event: UserEvent,
) {
  await step('Start', async () => {});
  await waitFor(
    async () => {
      await findByText<HTMLDialogElement>(canvasElement, '', {
        selector: 'dialog',
      });

      await findByText<HTMLElement>(canvasElement, 'Rank', {
        selector: 'th',
      });
    },
    { timeout: 10000 },
  );

  await step('Connect Account', async () => {});
  const connectWalletButton = await act(async () => {
    return findByText<HTMLButtonElement>(canvasElement, 'Connect Wallet', {
      selector: 'button',
    });
  });
  await act(async () => event.click(connectWalletButton));
  await step('Sort By Rank', async () => {});

  const rankHeader = await act(async () => {
    return findByText<HTMLTableCellElement>(canvasElement, 'Rank', {
      selector: 'th',
    });
  });
  await act(async () => event.click(rankHeader));
  // Click again to sort ascending
  await act(async () => event.click(rankHeader));

  await step('Spawn New Delegation Modal', async () => {});
  const delegateButtons = await act(async () => {
    return findAllByText<HTMLButtonElement>(canvasElement, 'Delegate', {
      selector: 'td > button',
    });
  });
  const [delegateButton0] = delegateButtons;
  await act(async () => event.click(delegateButton0));

  await step('Enter Delegation Amount', async () => {});
  const amountInput = await act(async () => {
    return findByText<HTMLInputElement>(canvasElement, '', {
      selector: 'input.staking-modal-esp-focus-display',
    });
  });

  // Select the Input Box and enter amount
  await act(async () => userEvent.click(amountInput));
  await act(async () => userEvent.clear(amountInput));
  await act(async () => userEvent.type(amountInput, '100'));

  await step('Approve Allowance', async () => {});
  const approveButton = await act(async () => {
    return findByText<HTMLButtonElement>(canvasElement, 'Approve', {
      selector: 'button',
    });
  });
  const delegateButton1 = await act(async () => {
    return findByText<HTMLButtonElement>(canvasElement, 'Delegate', {
      selector: 'button.btn-delegate',
    });
  });
  await act(async () => event.click(approveButton));
  // Wait for the approve button to be processed
  await waitFor(
    async () => {
      await findByText(canvasElement, 'Confirm Delegation');
    },
    { timeout: 24_000 },
  );

  await step('Delegate Funds', async () => {});
  await act(async () => event.click(delegateButton1));
  await waitFor(
    async () => {
      await findByText(canvasElement, 'Delegation successful', {
        selector: '.staking-modal-instructions-and-progress span',
      });
      await findByText(canvasElement, 'Close', { selector: 'dialog button' });
    },
    { timeout: 24_000 },
  );

  await step('Close Modal', async () => {});

  const closeButton = await act(async () => {
    return findByText<HTMLButtonElement>(canvasElement, 'Close', {
      selector: 'dialog button',
    });
  });
  await act(async () => event.click(closeButton));
}

export async function delegationUIInteractions(
  _canvasElement: HTMLElement,
  step: StepFunction,
) {
  const event = userEvent.setup();
  await step('New Delegation', async ({ canvasElement, step }) => {
    await newDelegationInteraction(canvasElement, step, event);
  });
}
