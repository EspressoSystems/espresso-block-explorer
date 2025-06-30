import { WebWorkerNodeValidatorAPI } from '../../../../../../../../../src/service/node_validator/cappuccino/web_worker_proxy_api';
import { default as React } from 'react';
export declare const CappuccinoNodeValidatorServiceAPIContext: React.Context<WebWorkerNodeValidatorAPI>;
interface ProvideCappuccinoNodeValidatorServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoNodeValidatorServiceAPIContext is a component that provides
 * a Cappuccino Node Validator Service API using a default implementation that
 * is dependent on the environment that the code is being run within.
 */
export declare const ProvideCappuccinoNodeValidatorServiceAPIContext: React.FC<ProvideCappuccinoNodeValidatorServiceAPIContextProps>;
export {};
