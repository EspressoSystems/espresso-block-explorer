import { act, getByText } from '@testing-library/react';
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
  await waitFor(async () => {
    expect(
      await findByText(canvasElement, '', { selector: 'section' }),
    ).toBeVisible();
  });

  const delegationUI = await findByText<HTMLElement>(canvasElement, '', {
    selector: 'main.delegation-ui',
  });
  expect(delegationUI).toBeInTheDocument();
  expect(delegationUI).toBeVisible();

  const sectionElement = await findByText<HTMLElement>(delegationUI, '', {
    selector: 'section.delegation-ui-content',
  });

  await step('Wait For Page Load', async () => {
    await waitFor(
      async () => {
        const tableElement = await findByRole<HTMLTableElement>(
          sectionElement,
          'table',
        );
        expect(tableElement).toBeInTheDocument();
        expect(tableElement).toBeVisible();

        const heading = await findByText<HTMLTableCellElement>(
          tableElement,
          'Total Stake',
          {
            selector: 'th',
          },
        );

        expect(heading).toBeInTheDocument();
        expect(heading).toBeVisible();
      },
      { timeout: 20_000 },
    );
  });

  await step('Connect Account', async () => {
    const connectWalletButton = await act(async () => {
      return findByText<HTMLButtonElement>(delegationUI, 'Connect Wallet', {
        selector: 'button',
      });
    });
    await act(async () => event.click(connectWalletButton));
  });

  await step('Sort By Rank', async () => {
    const rankHeader = await act(async () => {
      return findByText<HTMLTableCellElement>(delegationUI, 'Total Stake', {
        selector: 'th',
      });
    });
    await act(async () => event.click(rankHeader));
    // Click again to sort ascending
    await act(async () => event.click(rankHeader));
  });

  await step('Spawn New Delegation Modal', async () => {
    const delegateButtons = await act(async () => {
      return findAllByText<HTMLButtonElement>(delegationUI, 'Delegate', {
        selector: 'td > button',
      });
    });
    const [delegateButton0] = delegateButtons;
    await act(async () => event.click(delegateButton0));

    await waitFor(async () => {
      // const dialog = await findByRole<HTMLDialogElement>(
      //   delegationUI,
      //   'dialog',
      // );
      const dialog = await findByText<HTMLDialogElement>(delegationUI, '', {
        selector: 'dialog.staking-modal',
      });

      expect(dialog).toBeInTheDocument();
    });
  });

  const modalDialog = await act(async () =>
    // findByRole<HTMLDialogElement>(delegationUI, 'dialog'),
    findByText<HTMLDialogElement>(delegationUI, '', {
      selector: 'dialog.staking-modal',
    }),
  );

  await step('Enter Delegation Amount', async () => {
    const amountInput = await act(async () => {
      return findByRole<HTMLInputElement>(modalDialog, 'textbox');
      // return findByText<HTMLInputElement>(modalDialog, '', {
      //   selector: 'input[type="text"]',
      // });
      // return findByPlaceholderText<HTMLInputElement>(modalDialog, 'ESP 0');
      // return findByText(modalDialog, '', {
      //   selector: '#staking-modal-esp-input',
      // });
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
    const approvedButton = await act(async () => {
      try {
        return getByText<HTMLButtonElement>(modalDialog, 'Approved', {
          selector: 'button',
        });
      } catch {
        return null;
      }
    });

    if (approvedButton) {
      // If the transaction is already approved, then there's no need to
      // approve again.
      return;
    }

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
        selector: 'td button',
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
