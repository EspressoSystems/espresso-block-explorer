export type PartialLocationHref = Pick<Location, 'href'>;
/**
 * getTextEditing is a helper function that will return the input element
 * from the canvasElement provided.
 */
export declare const getTextInput: (canvasElement: HTMLElement) => Promise<HTMLInputElement>;
/**
 *
 */
export declare const interactionFocusInput: (canvasElement: HTMLElement) => Promise<HTMLInputElement>;
/**
 *
 */
export declare const interactionKeyInInput: (canvasElement: HTMLElement, value: string) => Promise<HTMLInputElement>;
/**
 *
 */
export declare const selectTextInInput: (canvasElement: HTMLElement, selectionStart: number, selectionEnd: number) => Promise<void>;
/**
 *
 */
export declare const interactionReplaceText: (inputElement: HTMLInputElement, textToInsert: string) => Promise<HTMLInputElement>;
