import React from 'react';

/**
 * IntentCompletedCallbackContext is a React context that provides a callback
 * function to be called when an intent is completed.
 *
 * This is a place where specific code can run to help clean up the source of
 * an intent, in order to ensure that it is not re-triggered on page refresh.
 */
export const IntentCompletedCallbackContext = React.createContext<() => void>(
  () => {},
);
