import { default as React } from 'react';

export interface ValidatorDetailsModalControls {
  open: (address: `0x${string}`) => void;
  close: () => void;
}

/**
 * ValidatorDetailsModalContext provides the controls for the validator
 * details modal. It is null where no validator details modal is available.
 */
export const ValidatorDetailsModalContext =
  React.createContext<null | ValidatorDetailsModalControls>(null);

/**
 * ValidatorDetailsLinksContext is true within the parts of the page where
 * validator names should link to the validator details page.
 */
export const ValidatorDetailsLinksContext = React.createContext(false);

/**
 * DelegationUIBaseHrefContext is the href of the Delegation UI's validator
 * list, which the links between its views are built from. It ends in a
 * slash. The default is relative to the current page, which only works
 * while the page's own path has no trailing slash; hosts that know their
 * path should provide it.
 */
export const DelegationUIBaseHrefContext = React.createContext('./');

/**
 * validatorDetailsPageHref is the link to the validator details page, under
 * the Delegation UI's base href.
 */
export function validatorDetailsPageHref(
  baseHref: string,
  address: `0x${string}`,
): string {
  return `${baseHref}validator?address=${address}`;
}

/**
 * ValidatorHistoryURLContext is the base URL of the validator history files,
 * or null when none is configured, in which case validator history is shown
 * as unavailable.
 */
export const ValidatorHistoryURLContext = React.createContext<null | string>(
  null,
);

/**
 * SampleValidatorHistoryContext turns on generated sample history for
 * validators without a history source. It is for Storybook and local
 * development only; a deployed site must leave it off, so made-up numbers
 * are never shown as a validator's history.
 */
export const SampleValidatorHistoryContext = React.createContext(false);
