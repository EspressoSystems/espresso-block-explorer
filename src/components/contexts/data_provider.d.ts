import { default as React } from 'react';
declare const DataContext: React.Context<unknown>;
export { DataContext };
export interface SetDataProps<Data> {
    data: Data;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * SetData is a Components whose sole purpose is to populate a DataContext
 * with the provided data.  At such a level we are unable to make any
 * type assertion about the data being provided.
 */
export declare const SetData: React.FC<SetDataProps<unknown>>;
