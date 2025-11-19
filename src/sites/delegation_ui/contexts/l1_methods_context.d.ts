import { L1Methods } from '../../../contracts/l1/l1_interface';
import { default as React } from 'react';
import { Config } from 'wagmi';
/**
 * L1MethodsContext is a React context that provides
 * the L1Methods instance.
 */
export declare const L1MethodsContext: React.Context<L1Methods<Config, number> | null>;
/**
 * ProvideL1Methods is a React component that provides
 * the L1Methods via L1MethodsContext.
 */
export declare const ProvideL1Methods: React.FC<React.PropsWithChildren>;
