import { WebWorkerInscriptionAPI } from '../../../../../../../../../src/service/inscription/cappuccino/web_worker_proxy_api';
import { default as React } from '../../../../node_modules/react';

export declare const CappuccinoInscriptionServiceAPIContext: React.Context<WebWorkerInscriptionAPI>;
export interface ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideWebWorkerCappuccinoInscriptionServiceAPIContext is a component that
 * provides a Cappuccino Inscription Service API using a default implementation
 * that is dependent on the environment that the code is being run within.
 */
export declare const ProvideWebWorkerCappuccinoInscriptionServiceAPIContext: React.FC<ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps>;
