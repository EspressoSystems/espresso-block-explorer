/**
 * getPieChart is a helper function that will return the pie chart svg element
 * from the canvasElement provided.
 */
export declare const getPieChart: (canvasElement: HTMLElement) => Promise<SVGSVGElement>;
export declare const hoverOverIthSlice: (canvasElement: HTMLElement, item: number) => Promise<void>;
export declare const exitHoverAll: (canvasElement: HTMLElement) => Promise<void>;
