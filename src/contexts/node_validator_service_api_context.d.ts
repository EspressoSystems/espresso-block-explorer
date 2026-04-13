import { WebWorkerNodeValidatorAPI } from '../../../../../../../../../src/service/node_validator/web_worker_proxy_api';
import { default as React } from 'react';
export declare const NodeValidatorServiceAPIContext: React.Context<WebWorkerNodeValidatorAPI>;
interface ProvideNodeValidatorServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideNodeValidatorServiceAPIContext is a component that provides
 * a Node Validator Service API using a default implementation that
 * is dependent on the environment that the code is being run within.
 */
export declare const ProvideNodeValidatorServiceAPIContext: React.FC<ProvideNodeValidatorServiceAPIContextProps>;
export {};
