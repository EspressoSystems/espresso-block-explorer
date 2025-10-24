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
import { act } from '@testing-library/react';
import { expect, userEvent, within } from 'storybook/test';

export type PartialLocationHref = Pick<Location, 'href'>;

/**
 * getDataTable is a helper function that will return the table element for
 * a DataTable from the canvasElement provided.
 */
export const getDataTable = async (
  canvasElement: HTMLElement,
): Promise<HTMLElement> => {
  const element = await within(canvasElement).findByRole('table');
  await expect(element).toBeTruthy();
  await expect(element).toBeInTheDocument();

  return element;
};

export const findTableHeaderCells = async (
  canvasElement: HTMLElement,
): Promise<HTMLTableCellElement[]> => {
  const table = await getDataTable(canvasElement);
  const tableHeaderCells = Array.from(table.querySelectorAll('thead th'));
  return tableHeaderCells as HTMLTableCellElement[];
};

export const selectAllTableHeaderCellsTwice = async (
  canvasElement: HTMLElement,
): Promise<void> => {
  await act(async () => userEvent.setup());

  const tableHeaderCells = await findTableHeaderCells(canvasElement);
  for (const cell of tableHeaderCells) {
    await act(async () => userEvent.click(cell));
    await act(async () => userEvent.click(cell));
  }
};
