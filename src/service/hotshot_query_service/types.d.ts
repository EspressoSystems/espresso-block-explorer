import { HeightAndAddress } from './reward_state/height_and_address';
export interface Leaf {
}
export interface IHotShotQueryServiceAvailabilityAPI<Leaf, Header, Block, Transaction> {
    getLeafFromHeight(height: number): Promise<Leaf>;
    getTransactionFromHeightAndOffset(height: number, index: number): Promise<Transaction>;
    getBlockFromHeight(height: number): Promise<Block>;
    getHeader(height: number): Promise<Header>;
}
export type BlockHeightResponse = number;
export interface IHotShotQueryServiceStatusAPI {
    blockHeight(): Promise<BlockHeightResponse>;
}
export interface IHotShotQueryServiceExplorerAPI<GetBlockDetailRequest, GetBlockDetailResponse, GetBlockSummariesRequest, GetBlockSummariesResponse, GetTransactionDetailRequest, GetTransactionDetailResponse, GetTransactionSummariesRequest, GetTransactionSummariesResponse, GetExplorerOverviewRequest, GetExplorerOverviewResponse, GetSearchResultRequest, GetSearchResultResponse> {
    getBlockDetail(request: GetBlockDetailRequest): Promise<GetBlockDetailResponse>;
    getBlockSummaries(request: GetBlockSummariesRequest): Promise<GetBlockSummariesResponse>;
    getTransactionDetail(request: GetTransactionDetailRequest): Promise<GetTransactionDetailResponse>;
    getTransactionSummaries(request: GetTransactionSummariesRequest): Promise<GetTransactionSummariesResponse>;
    getExplorerOverview(request: GetExplorerOverviewRequest): Promise<GetExplorerOverviewResponse>;
    getSearchResult(request: GetSearchResultRequest): Promise<GetSearchResultResponse>;
}
export interface IHotShotQueryServiceAvailabilityStreamsAPI<Leaf, Block, Header> {
    streamLeaves(height: number): AsyncIterator<Leaf>;
    streamBlocks(height: number): AsyncIterator<Block>;
    streamHeaders(height: number): AsyncIterator<Header>;
}
export interface IHotShotQueryServiceRewardStateAPI<RewardsClaimInput> {
    getLatestRewardBalance(address: string): Promise<null | bigint>;
    getLatestRewardClaimInput(address: string): Promise<null | RewardsClaimInput>;
    getRewardBalance(request: HeightAndAddress): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<null | RewardsClaimInput>;
}
export interface IHotShotQueryServiceNodeAPI<StakeTable, Validators> {
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<Validators>;
}
