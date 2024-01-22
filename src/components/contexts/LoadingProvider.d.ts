import React from 'react';
declare const LoadingContext: React.Context<boolean>;
export { LoadingContext };
export interface SetLoadingProps {
    loading: boolean;
    children: React.ReactNode | React.ReactNode[];
}
export declare const SetLoading: React.FC<SetLoadingProps>;
