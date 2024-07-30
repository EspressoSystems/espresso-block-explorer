import { CappuccinoHotShotQueryService } from '../../../../../../../../../src/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { default as React } from '../../../../node_modules/react';

export declare const CappuccinoHotShotQueryServiceAPIContext: React.Context<CappuccinoHotShotQueryService>;
export interface ProviderCappuccinoLiveServiceProps {
    url: URL;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoLiveService is a component that provides a Cappuccino
 * HotShot Query Service API targeting the given URL.
 */
export declare const ProvideCappuccinoLiveService: React.FC<ProviderCappuccinoLiveServiceProps>;
