/**
 * useViewScroll sets the scroll position when the Delegation UI switches
 * between the validator list and a validator's page. Both are rendered by
 * the same component, so without it the new view would open wherever the
 * previous one was scrolled to.
 *
 * Opening a view starts at the top, as a separate page load would. Coming
 * back to the list with the browser's Back (or Forward) button returns to
 * where the list was left, so the user doesn't lose their place.
 */
export declare function useViewScroll(showValidator: boolean, validatorAddress: undefined | null | string): void;
