import { default as React } from '../../../../../node_modules/react';

declare const LoadingContext: React.Context<boolean>;
export { LoadingContext };
export interface SetLoadingProps {
    loading: boolean;
    children: React.ReactNode | React.ReactNode[];
}
export declare const SetLoading: React.FC<SetLoadingProps>;
