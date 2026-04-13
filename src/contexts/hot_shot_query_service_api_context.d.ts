import { HotShotQueryService } from '../../../../../../../../../src/service/hotshot_query_service/hot_shot_query_service_api';
import { default as React } from 'react';
export declare const HotShotQueryServiceAPIContext: React.Context<HotShotQueryService>;
interface ProvideHotShotQueryServiceAPIContextProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideHotShotQueryServiceAPIContext is a component that provides a
 * HotShot Query Service API using a default implementation that is
 * dependent on the environment that the code is being run within.
 */
export declare const ProvideHotShotQueryServiceAPIContext: React.FC<ProvideHotShotQueryServiceAPIContextProps>;
export {};
