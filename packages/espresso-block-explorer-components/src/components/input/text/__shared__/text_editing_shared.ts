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
import { act, waitFor } from '@testing-library/react';
import { expect, userEvent, within } from 'storybook/test';

export type PartialLocationHref = Pick<Location, 'href'>;

/**
 * getTextEditing is a helper function that will return the input element
 * from the canvasElement provided.
 */
export const getTextInput = async (
  canvasElement: HTMLElement,
): Promise<HTMLInputElement> => {
  const input = await within(canvasElement).findByRole('textbox');
  await expect(input).toBeTruthy();
  await expect(input).toBeInTheDocument();
  expect(input.tagName.toLowerCase()).toBe('input');
  expect(input).toBeInstanceOf(HTMLInputElement);
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('Input is not an HTMLInputElement');
  }

  return input;
};

/**
 *
 */
export const interactionFocusInput = async (
  canvasElement: HTMLElement,
): Promise<HTMLInputElement> => {
  const input = await getTextInput(canvasElement);
  const user = await act(() => userEvent.setup());

  await act(async () => user.click(input));

  await waitFor(async () => {
    expect(input).toHaveFocus();
  });

  return input;
};

/**
 *
 */
export const interactionKeyInInput = async (
  canvasElement: HTMLElement,
  value: string,
) => {
  const inputElement = await interactionFocusInput(canvasElement);

  await act(async () => userEvent.keyboard(value));
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
  selectionStart: number,
  selectionEnd: number,
) => {
  await act(async () => {
    const inputElement = await interactionFocusInput(canvasElement);

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
