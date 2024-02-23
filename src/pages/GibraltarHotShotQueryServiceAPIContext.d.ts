import React from 'react';
import { FakeDataGibraltarHotShotQueryService } from '../types/data_source/hotshot_query_service/gibraltar/fake_data_derived';
export declare const GibraltarHotShotQueryServiceAPIContext: React.Context<FakeDataGibraltarHotShotQueryService>;
export interface ProviderGibraltarLiveServiceProps {
    url: URL;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideGibraltarLiveService is a component that provides a Gibraltar
 * HotShot Query Service API targeting the given URL.
 */
export declare const ProvideGibraltarLiveService: React.FC<ProviderGibraltarLiveServiceProps>;
