import { act } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { StepFunction } from 'storybook/internal/csf';
import {
  expect,
  findAllByText,
  findByRole,
  findByText,
  waitFor,
} from 'storybook/test';

async function newDelegationInteraction(
  canvasElement: HTMLElement,
  step: StepFunction,
  event: UserEvent,
) {
  await step('Wait For Page Load', async () => {
    await waitFor(
      async () => {
        await findByText<HTMLElement>(canvasElement, 'Total Stake', {
          selector: 'th',
        });
      },
      { timeout: 10000 },
    );
  });

  await step('Connect Account', async () => {
    const connectWalletButton = await act(async () => {
      return findByText<HTMLButtonElement>(canvasElement, 'Connect Wallet', {
        selector: 'button',
      });
    });
    await act(async () => event.click(connectWalletButton));
  });

  await step('Sort By Rank', async () => {
    const rankHeader = await act(async () => {
      return findByText<HTMLTableCellElement>(canvasElement, 'Total Stake', {
        selector: 'th',
      });
    });
    await act(async () => event.click(rankHeader));
    // Click again to sort ascending
    await act(async () => event.click(rankHeader));
  });

  await step('Spawn New Delegation Modal', async () => {
    const delegateButtons = await act(async () => {
      return findAllByText<HTMLButtonElement>(canvasElement, 'Delegate', {
        selector: 'td > button',
      });
    });
    const [delegateButton0] = delegateButtons;
    await act(async () => event.click(delegateButton0));

    await waitFor(async () => {
      expect(
        await findByRole<HTMLDialogElement>(canvasElement, 'dialog'),
      ).toBeVisible();
    });
  });

  const modalDialog = await act(async () =>
    findByRole<HTMLDialogElement>(canvasElement, 'dialog'),
  );

  await step('Enter Delegation Amount', async () => {
    const amountInput = await act(async () => {
      return findByRole<HTMLInputElement>(modalDialog, 'textbox');
    });

    // Select the Input Box and enter amount
    await act(async () => userEvent.click(amountInput));
    await act(async () => userEvent.type(amountInput, '100'));

    await waitFor(async () => {
      expect(
        await findByText(modalDialog, 'Approve', { selector: 'button' }),
      ).toBeEnabled();
    });
  });

  await step('Approve Allowance', async () => {
    const approveButton = await act(async () => {
      return findByText<HTMLButtonElement>(modalDialog, 'Approve', {
        selector: 'button',
      });
    });

    await act(async () => event.click(approveButton));
    // Wait for the approve button to be processed
    await waitFor(
      async () => {
        await findByText(modalDialog, 'Confirm Delegation');
      },
      { timeout: 24_000 },
    );
  });

  await step('Delegate Funds', async () => {
    const delegateButton1 = await act(async () => {
      return findByText<HTMLButtonElement>(modalDialog, 'Delegate', {
        selector: 'button',
      });
    });

    await act(async () => event.click(delegateButton1));
    await waitFor(
      async () => {
        await findByText(modalDialog, 'Delegation successful');
        await findByText(modalDialog, 'Close', { selector: 'button' });
      },
      { timeout: 24_000 },
    );
  });

  await step('Close Modal', async () => {
    const closeButton = await act(async () => {
      return findByText<HTMLButtonElement>(modalDialog, 'Close', {
        selector: 'button',
      });
    });
    await act(async () => event.click(closeButton));
    await waitFor(async () => {
      expect(modalDialog).not.toBeVisible();
    });
  });
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
