import { default as React } from '../../../../../node_modules/react';

declare const CurrentNavDrawerStateContext: React.Context<boolean>;
export { CurrentNavDrawerStateContext };
declare const CurrentSetNavDrawerStateContext: React.Context<(b: boolean) => void>;
export { CurrentSetNavDrawerStateContext };
export declare function useNavDrawerState(): readonly [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export interface ProvideCurrentNavDrawerStateProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ProvideCurrentNavDrawerState: React.FC<ProvideCurrentNavDrawerStateProps>;
