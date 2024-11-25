import { WebWorkerInscriptionAPI } from '../../../../../../../../../src/service/inscription/cappuccino/web_worker_proxy_api';
import { default as React } from '../../../../node_modules/react';

export declare const CappuccinoInscriptionServiceAPIContext: React.Context<WebWorkerInscriptionAPI>;
export interface ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ProvideWebWorkerCappuccinoInscriptionServiceAPIContext: React.FC<ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps>;
