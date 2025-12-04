import { UserEvent } from '@testing-library/user-event';
import { StepFunction } from 'storybook/internal/csf';
import { expect, findByRole, waitFor } from 'storybook/test';

export async function interactionsTypeValue(
  canvasElement: HTMLElement,
  step: StepFunction,
  userEvent: UserEvent,
  toType: string,
  expectedValue: string,
  expectedCursorPosition: number,
): Promise<void>;
export async function interactionsTypeValue(
  canvasElement: HTMLElement,
  step: StepFunction,
  userEvent: UserEvent,
  toType: string,
  expectedValue: string,
) {
  await step('Wait for Input to be ready', async () => {
    // Wait for the Input to be visible / ready
    await waitFor(async () => {
      expect(await findByRole(canvasElement, 'textbox')).toBeVisible();
    });
  });

  await step('Focus the Input', async () => {
    const textBox = await findByRole<HTMLInputElement>(
      canvasElement,
      'textbox',
    );

    await userEvent.click(textBox);

    await waitFor(async () => {
      expect(textBox).toHaveFocus();
    });
  });

  await step(`Type value: "${toType}"`, async () => {
    const textBox = await findByRole<HTMLInputElement>(
      canvasElement,
      'textbox',
    );

    await userEvent.type(textBox, toType, {
      initialSelectionStart: textBox.value.length,
    });
  });

  await step('Verify formatted value matches expected value', async () => {
    const textBox = await findByRole<HTMLInputElement>(
      canvasElement,
      'textbox',
    );

    await waitFor(async () => {
      expect(textBox).toHaveValue(expectedValue);
    });

    expect(textBox).toHaveValue(expectedValue);

    // expect(textBox.selectionStart).toBe(expectedCursorPosition);
    // expect(textBox.selectionEnd).toBe(expectedCursorPosition);
  });
}
