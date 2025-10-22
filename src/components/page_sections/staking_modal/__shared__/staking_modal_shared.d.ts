export type PartialLocationHref = Pick<Location, 'href'>;
/**
 * getDialogElement is a helper function that will return the dialog element from
 * the canvasElement provided.
 */
export declare const getDialogElement: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * getStakeButton is a helper function that will return the Stake button from
 * the dialog element within the canvasElement provided.
 */
export declare const getStakeButton: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * getStakeButtonEnabled is a helper function that will return the Stake
 * button from the dialog element within the canvasElement provided, and
 * assert that it is enabled.
 */
export declare const getStakeButtonEnabled: (canvasElement: HTMLElement) => Promise<HTMLElement>;
/**
 * clickButton is a helper function that will click the provided button element.
 */
export declare const clickButton: (buttonElement: HTMLElement) => Promise<void>;
