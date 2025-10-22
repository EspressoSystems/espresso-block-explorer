import { act } from '@testing-library/react';
import { expect, userEvent, within } from 'storybook/test';

export type PartialLocationHref = Pick<Location, 'href'>;

/**
 * getDialogElement is a helper function that will return the dialog element from
 * the canvasElement provided.
 */
export const getDialogElement = async (canvasElement: HTMLElement) => {
  const searchBar = await within(canvasElement).findByRole('dialog');
  await expect(searchBar).toBeTruthy();
  await expect(searchBar).toBeInTheDocument();
  return searchBar;
};

/**
 * getStakeButton is a helper function that will return the Stake button from
 * the dialog element within the canvasElement provided.
 */
export const getStakeButton = async (canvasElement: HTMLElement) => {
  const dialog = await getDialogElement(canvasElement);
  const stakeButton = await within(dialog).findByTitle('Stake');
  await expect(stakeButton).toBeTruthy();
  await expect(stakeButton).toBeInTheDocument();
  return stakeButton;
};

/**
 * getStakeButtonEnabled is a helper function that will return the Stake
 * button from the dialog element within the canvasElement provided, and
 * assert that it is enabled.
 */
export const getStakeButtonEnabled = async (canvasElement: HTMLElement) => {
  const stakeButton = await getStakeButton(canvasElement);
  await expect(stakeButton).toBeEnabled();
  return stakeButton;
};

/**
 * clickButton is a helper function that will click the provided button element.
 */
export const clickButton = async (buttonElement: HTMLElement) => {
  const user = await userEvent.setup();
  await act(async () => user.click(buttonElement));
};
