/**
 * getHistogram is a helper function that will return the histogram svg element
 * from the canvasElement provided.
 */
export declare const getHistogram: (canvasElement: HTMLElement) => Promise<SVGSVGElement>;
export declare const interactionHoverOverIthBar: (canvasElement: HTMLElement, i: number) => Promise<void>;
export declare const interactionUnhoverAll: (canavasElement: HTMLElement) => Promise<void>;
