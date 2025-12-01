import { HeightAndAddress } from './cappuccino/reward_state/height_and_address';
export interface Leaf {
}
export interface HotShotQueryServiceAvailabilityAPI<Leaf, Block, Transaction> {
    getLeafFromHeight(height: number): Promise<Leaf>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<Transaction>;
    getBlockFromHeight(height: number): Promise<Block>;
}
export type BlockHeightResponse = number;
export interface HotShotQueryServiceStatusAPI {
    blockHeight(): Promise<BlockHeightResponse>;
}
export interface HotShotQueryServiceExplorerAPI<GetBlockDetailRequest, GetBlockDetailResponse, GetBlockSummariesRequest, GetBlockSummariesResponse, GetTransactionDetailRequest, GetTransactionDetailResponse, GetTransactionSummariesRequest, GetTransactionSummariesResponse, GetExplorerOverviewRequest, GetExplorerOverviewResponse, GetSearchResultRequest, GetSearchResultResponse> {
    getBlockDetail(request: GetBlockDetailRequest): Promise<GetBlockDetailResponse>;
    getBlockSummaries(request: GetBlockSummariesRequest): Promise<GetBlockSummariesResponse>;
    getTransactionDetail(request: GetTransactionDetailRequest): Promise<GetTransactionDetailResponse>;
    getTransactionSummaries(request: GetTransactionSummariesRequest): Promise<GetTransactionSummariesResponse>;
    getExplorerOverview(request: GetExplorerOverviewRequest): Promise<GetExplorerOverviewResponse>;
    getSearchResult(request: GetSearchResultRequest): Promise<GetSearchResultResponse>;
}
export interface HotShotQueryServiceAvailabilityStreamsAPI<Leaf, Block, Header> {
    streamLeaves(height: number): AsyncIterator<Leaf>;
    streamBlocks(height: number): AsyncIterator<Block>;
    streamHeaders(height: number): AsyncIterator<Header>;
}
export interface HotShotQueryServiceRewardStateAPI<RewardsClaimInput> {
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<null | RewardsClaimInput>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<null | RewardsClaimInput>;
}
export interface HotShotQueryServiceNodeAPI<StakeTable, Validators> {
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<Validators>;
}
