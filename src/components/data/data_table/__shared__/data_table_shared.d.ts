export type PartialLocationHref = Pick<Location, 'href'>;
/**
 * getDataTable is a helper function that will return the table element for
 * a DataTable from the canvasElement provided.
 */
export declare const getDataTable: (canvasElement: HTMLElement) => Promise<HTMLElement>;
export declare const findTableHeaderCells: (canvasElement: HTMLElement) => Promise<HTMLTableCellElement[]>;
export declare const selectAllTableHeaderCellsTwice: (canvasElement: HTMLElement) => Promise<void>;
