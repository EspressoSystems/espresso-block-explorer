export default abstract class NodeValidatorRequest {
    abstract valueOf(): string;
}
export declare const kSubscribeNodeIdentityValue: "SubscribeNodeIdentity";
/**
 * SubscribeNodeIdentity is a request to subscribe to the node identity
 * real time updates from the data source.
 */
export declare class SubscribeNodeIdentity extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeLatestBockValue: "SubscribeLatestBlock";
/**
 * SubscribeLatestBlock is a request to subscribe to the latest block
 * real time updates from the data source.
 */
export declare class SubscribeLatestBlock extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeVotersValue: "SubscribeVoters";
/**
 * SubscribeVoters is a request to subscribe to the voters real time updates
 * from the data source.
 */
export declare class SubscribeVoters extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeValidatorsValue: "SubscribeValidators";
/**
 * SubscribeValidators is a request to subscribe to the Validators real time updates
 * from the data source.
 */
export declare class SubscribeValidators extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeStakeTablesValue: "SubscribeStakeTables";
/**
 * SubscribeStakeTables is a request to subscribe to the StakeTables real time updates
 * from the data source.
 */
export declare class SubscribeStakeTables extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestNodeIdentitySnapshotValue: "RequestNodeIdentitySnapshot";
/**
 * RequestNodeIdentitySnapshot is a request to get the node identity snapshot
 * from the data source.
 */
export declare class RequestNodeIdentitySnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestBlocksSnapshotValue: "RequestBlocksSnapshot";
/**
 * RequestBlocksSnapshot is a request to get the blocks snapshot
 * from the data source.
 */
export declare class RequestBlocksSnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestHistogramSnapshotValue: "RequestHistogramSnapshot";
/**
 * RequestHistogramSnapshot is a request to get the histogram snapshot
 * from the data source.
 */
export declare class RequestHistogramSnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestVotersSnapshotValue: "RequestVotersSnapshot";
/**
 * RequestVotersSnapshot is a request to get the voters snapshot
 * from the data source.
 */
export declare class RequestVotersSnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestValidatorsSnapshotValue: "RequestValidatorsSnapshot";
/**
 * RequestValidatorsSnapshot is a request to get the Validators snapshot
 * from the data source.
 */
export declare class RequestValidatorsSnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestStakeTableSnapshotValue: "RequestStakeTableSnapshot";
/**
 * RequestStakeTableSnapshot is a request to get the StakeTable snapshot
 * from the data source.
 */
export declare class RequestStakeTableSnapshot extends NodeValidatorRequest {
    valueOf(): string;
}
