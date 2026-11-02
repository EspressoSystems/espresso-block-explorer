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
 * validatorDetailsPageHref is the link to the validator details page,
 * relative to the Delegation UI's base path.
 */
export function validatorDetailsPageHref(address: `0x${string}`): string {
  return `validator?address=${address}`;
}

/**
 * ValidatorHistoryURLContext is the base URL of the validator history files,
 * or null when none is configured, in which case sample history is shown.
 */
export const ValidatorHistoryURLContext = React.createContext<null | string>(
  null,
);
