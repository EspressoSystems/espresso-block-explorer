import { L1Methods } from '../../../contracts/l1/l1_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
export declare const L1MethodsContext: React.Context<L1Methods<Config, number> | null>;
export declare const ProvideL1Methods: React.FC<React.PropsWithChildren>;
