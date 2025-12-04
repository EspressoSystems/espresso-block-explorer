/**
 * This file exists as a means of bridging the gap between Storybook testing
 * and library demoing and the vitest unit tests.
 *
 * Implementation is based on article found here:
 * https://scottnath.com/blahg/sharing-tests-between-vitest-and-storybook/
 *
 * Based on the article it helps to have a shared file with helper functions
 * that can share the common functionality to make the component work in both
 * the Storybook and vitest environments.
 */
import { act, findByRole, waitFor } from '@testing-library/react';
import { UserEvent } from '@testing-library/user-event';
import { expect, userEvent } from 'storybook/test';

export type PartialLocationHref = Pick<Location, 'href'>;

/**
 * getTextEditing is a helper function that will return the input element
 * from the canvasElement provided.
 */
export const getTextInput = async (
  canvasElement: HTMLElement,
): Promise<HTMLInputElement> => {
  await waitFor(async () => {
    await findByRole(canvasElement, 'textbox');
  });

  const input = await findByRole<HTMLInputElement>(canvasElement, 'textbox');

  return input;
};

export async function performInputChecks(input: HTMLElement) {
  await expect(input).toBeTruthy();
  await expect(input).toBeInTheDocument();
  expect(input.tagName.toLowerCase()).toBe('input');
  expect(input).toBeInstanceOf(HTMLInputElement);
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input is not an HTMLInputElement');
  }
}

/**
 *
 */
export const interactionFocusInput = async (
  canvasElement: HTMLElement,
  userEvent: UserEvent,
): Promise<HTMLInputElement> => {
  const input = await getTextInput(canvasElement);

  await act(async () => userEvent.click(input));

  await waitFor(async () => {
    expect(input).toHaveFocus();
  });

  expect(input).toHaveFocus();

  return input;
};

/**
 *
 */
export const interactionKeyInInput = async (
  canvasElement: HTMLElement,
  userEvent: UserEvent,
  value: string,
) => {
  const inputElement = await getTextInput(canvasElement);

  await userEvent.keyboard(value);
  await waitFor(async () => {
    expect(inputElement.value).toBe(value);
  });

  return inputElement;
};

/**
 *
 */
export const selectTextInInput = async (
  canvasElement: HTMLElement,
  userEvent: UserEvent,
  selectionStart: number,
  selectionEnd: number,
) => {
  await act(async () => {
    const inputElement = await getTextInput(canvasElement);

    await userEvent.pointer([
      // left click and hold at char selectionStart
      { target: inputElement, offset: selectionStart, keys: '[MouseLeft>]' },
      // drag the mouse to the right selectionEnd characters
      { target: inputElement, offset: selectionEnd },
      // release the left mouse button
      { target: inputElement, keys: '[/MouseLeft]' },
    ]);

    await waitFor(async () => {
      // const expectedSelectedText = inputElement.value.slice(
      //   selectionStart,
      //   selectionEnd,
      // );
      // const selection = document.getSelection()?.toString();

      expect(inputElement.selectionStart).toBe(selectionStart);
      expect(inputElement.selectionEnd).toBe(selectionEnd);
      // expect(selection).toBe(expectedSelectedText);
    });
  });
};

/**
 *
 */
export const interactionReplaceText = async (
  inputElement: HTMLInputElement,
  textToInsert: string,
) => {
  expect(document.getSelection()).toBeTruthy();

  await act(async () => {
    await userEvent.keyboard(textToInsert);
  });

  await waitFor(async () => {
    expect(inputElement.value.includes(textToInsert)).toBe(true);
  });

  return inputElement;
};
