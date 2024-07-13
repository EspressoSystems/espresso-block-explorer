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
import {
  dropIterator,
  firstIterator,
  mapIterator,
  takeIterator,
} from '@/functional/functional';
import { expect, waitFor, within } from '@storybook/test';

async function expectToolTipVisibility(tooltip: Element, visible: boolean) {
  const temp = tooltip;
  if ('computedStyleMap' in temp) {
    // We're in a browser context.
    const computedStyles = temp.computedStyleMap();
    const opacityValue = computedStyles.get('opacity');
    if (opacityValue === undefined) {
      await expect(true).toEqual(visible);
      return;
    }

    // if (opacityValue instanceof CSSNumericValue) {
    //   opacityValue.value;
    // }

    if (visible) {
      await expect(opacityValue.toString()).toEqual('1');
      await expect(tooltip).toBeVisible();
      // await expect(Number(opacityValue.toString())).toBeGreaterThan(0);
      return;
    }

    await expect(opacityValue.toString()).toEqual('0');
    await expect(tooltip).not.toBeVisible();
    // await expect(Number(opacityValue.toString())).toEqual(0);
    return;
  }

  // Does this tooltip have the data-hover attribute?
  if (tooltip.hasAttribute('data-hover')) {
    await expect(tooltip.hasAttribute('data-hover')).toEqual(visible);
    return;
  }

  // Otherwise, perhaps it's previous sibling element does, IE the hitbox
  const previousSibling = tooltip.previousElementSibling;
  if (!previousSibling) {
    await expect(false).toEqual(visible);
    return;
  }

  await expect(previousSibling.hasAttribute('data-hover')).toEqual(visible);
}

/**
 * getPieChart is a helper function that will return the pie chart svg element
 * from the canvasElement provided.
 */
export const getPieChart = async (canvasElement: HTMLElement) => {
  const chart = await within(canvasElement).findByRole('graphics-datachart');
  await expect(chart).toBeTruthy();
  await expect(chart).toBeInTheDocument();
  return chart as Element as SVGSVGElement;
};

async function exitHoverAllElementsFromCanvas(canvasElement: Element) {
  const hoveredElements = canvasElement.querySelectorAll('[data-hover]');
  const tooltips = getToolTips(canvasElement as SVGSVGElement);

  for (const element of hoveredElements) {
    element.removeAttribute('data-hover');
  }

  await waitFor(
    async () => {
      for (const element of tooltips) {
        await expectToolTipVisibility(element, false);
      }
    },
    { timeout: 2000 },
  );

  for (const tooltip of tooltips) {
    await expectToolTipVisibility(tooltip, false);
    // expect(tooltip).not.toBeVisible();
  }
}

async function hoverElementFromCanvas(canvasElement: Element, ele: Element) {
  await exitHoverAllElementsFromCanvas(canvasElement);
  // Fake the hover event
  ele.setAttribute('data-hover', '');
  // return userEvent.hover(ele);
}

const getSliceHitBoxes = (chart: SVGSVGElement) => {
  const boundingBoxElements = chart.querySelectorAll(
    '.pie-chart-section-hitbox',
  );

  const it = boundingBoxElements[Symbol.iterator]();

  return mapIterator(
    it,
    (element) => element as Element as SVGPathElement | SVGCircleElement,
  );
};

const getToolTips = (chart: SVGSVGElement) => {
  const boundingBoxElements = chart.querySelectorAll('.tooltip');

  const it = boundingBoxElements[Symbol.iterator]();

  return mapIterator(
    it,
    (element): SVGGElement => element as Element as SVGGElement,
  );
};

export const hoverOverIthSlice = async (
  canvasElement: HTMLElement,
  item: number,
) => {
  const chart = await getPieChart(canvasElement);
  await waitFor(
    async () => {
      const chart = await getPieChart(canvasElement);
      await expect(chart).toBeInTheDocument();
    },
    { timeout: 2000 },
  );

  const hitboxes = getSliceHitBoxes(chart);
  const tooltips = getToolTips(chart);
  const firstHitbox = firstIterator(dropIterator(hitboxes, item));
  const firstToolTip = firstIterator(dropIterator(tooltips, item));

  await hoverElementFromCanvas(canvasElement, firstHitbox);
  await waitFor(
    async () => {
      // await expect(firstToolTip).toBeVisible();
      await expectToolTipVisibility(firstToolTip, true);
    },
    { timeout: 2000 },
  );

  // No Other tooltip should be visible
  const it = getToolTips(chart)[Symbol.iterator]();
  for (const tooltip of takeIterator(it, item)) {
    await expect(tooltip).not.toEqual(firstToolTip);
    await expectToolTipVisibility(tooltip, false);
    // expect(tooltip).not.toBeVisible();
  }

  // This tooltip should be our tool tip, and it should be visible
  expect(it.next().value).toEqual(firstToolTip);
  await expectToolTipVisibility(firstToolTip, true);
  // expect(firstToolTip).toBeVisible();

  // No Other tooltip should be visible
  for (const tooltip of it) {
    await expect(tooltip).not.toEqual(firstToolTip);
    // expect(tooltip).not.toBeVisible();
    await expectToolTipVisibility(tooltip, false);
  }
};

export const exitHoverAll = async (canvasElement: HTMLElement) => {
  await exitHoverAllElementsFromCanvas(canvasElement);
  const chart = await getPieChart(canvasElement);

  const tooltips = getToolTips(chart);
  for (const tooltip of tooltips) {
    // expect(tooltip).not.toBeVisible();

    await expectToolTipVisibility(tooltip, false);
  }
};
