import { WebWorkerNodeValidatorAPI } from '../../../../../../../../../src/service/node_validator/cappuccino/web_worker_proxy_api';
import { default as React } from '../../../../node_modules/react';

export declare const CappuccinoNodeValidatorServiceAPIContext: React.Context<WebWorkerNodeValidatorAPI>;
interface ProvideCappuccinoNodeValidatorServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const ProvideCappuccinoNodeValidatorServiceAPIContext: React.FC<ProvideCappuccinoNodeValidatorServiceAPIContextProps>;
export {};
