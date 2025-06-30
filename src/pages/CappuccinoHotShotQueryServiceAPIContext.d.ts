import { CappuccinoHotShotQueryService } from '../../../../../../../../../src/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { default as React } from 'react';
export declare const CappuccinoHotShotQueryServiceAPIContext: React.Context<CappuccinoHotShotQueryService>;
interface ProvideCappuccinoHotShotQueryServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoHotShotQueryServiceAPIContext is a component that provides a
 * Cappuccino HotShot Query Service API using a default implementation that is
 * dependent on the environment that the code is being run within.
 */
export declare const ProvideCappuccinoHotShotQueryServiceAPIContext: React.FC<ProvideCappuccinoHotShotQueryServiceAPIContextProps>;
export {};
