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
} from '@/functional/functional';
import { act } from '@testing-library/react';
import { expect, userEvent, waitFor, within } from 'storybook/test';

/**
 * getHistogram is a helper function that will return the histogram svg element
 * from the canvasElement provided.
 */
export const getHistogram = async (canvasElement: HTMLElement) => {
  const histogram =
    await within(canvasElement).findByRole('graphics-datachart');
  await expect(histogram).toBeTruthy();
  await expect(histogram).toBeInTheDocument();
  return histogram as Element as SVGSVGElement;
};

function interactionUnhoverAllElementsFromCanvas(canvasElement: Element) {
  return act(async () => {
    canvasElement.querySelectorAll('[data-hover="true"]').forEach((el) => {
      el.removeAttribute('data-hover');
    });
  });
}

async function interactionHoverElementFromCanvas(
  canvasElement: Element,
  ele: Element,
) {
  return act(async () => {
    await interactionUnhoverAllElementsFromCanvas(canvasElement);
    // Fake the hover event
    ele.setAttribute('data-hover', 'true');
    return userEvent.hover(ele);
  });
}

const getBarHitboxes = (histogram: SVGSVGElement) => {
  const boundingBoxElements = histogram.querySelectorAll('.bbox');

  const it = boundingBoxElements[Symbol.iterator]();

  return mapIterator(
    it,
    (element): SVGRectElement => element as Element as SVGRectElement,
  );
};

const getToolTips = (histogram: SVGSVGElement) => {
  const boundingBoxElements = histogram.querySelectorAll('.tooltip');

  const it = boundingBoxElements[Symbol.iterator]();

  return mapIterator(
    it,
    (element): SVGGElement => element as Element as SVGGElement,
  );
};

export const interactionHoverOverIthBar = async (
  canvasElement: HTMLElement,
  i: number,
) => {
  return act(async () => {
    const histogram = await getHistogram(canvasElement);
    await waitFor(
      async () => {
        const histogram = await getHistogram(canvasElement);
        expect(histogram).toBeInTheDocument();
      },
      { timeout: 1000 },
    );

    const hitboxes = getBarHitboxes(histogram);
    const tooltips = getToolTips(histogram);
    const firstHitbox = firstIterator(dropIterator(hitboxes, i));
    const firstToolTip = firstIterator(dropIterator(tooltips, i));

    await interactionHoverElementFromCanvas(canvasElement, firstHitbox);
    await waitFor(async () => {
      expect(firstToolTip).toBeVisible();
    });

    expect(firstToolTip).toBeVisible();
  });
};

export const interactionUnhoverAll = async (canavasElement: HTMLElement) => {
  return act(async () =>
    interactionUnhoverAllElementsFromCanvas(canavasElement),
  );
};
