export default abstract class CappuccinoNodeValidatorRequest {
    abstract valueOf(): string;
}
export declare const kSubscribeNodeIdentityValue: "SubscribeNodeIdentity";
/**
 * SubscribeNodeIdentity is a request to subscribe to the node identity
 * real time updates from the data source.
 */
export declare class SubscribeNodeIdentity extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeLatestBockValue: "SubscribeLatestBlock";
/**
 * SubscribeLatestBlock is a request to subscribe to the latest block
 * real time updates from the data source.
 */
export declare class SubscribeLatestBlock extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeVotersValue: "SubscribeVoters";
/**
 * SubscribeVoters is a request to subscribe to the voters real time updates
 * from the data source.
 */
export declare class SubscribeVoters extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeValidatorsValue: "SubscribeValidators";
/**
 * SubscribeValidators is a request to subscribe to the Validators real time updates
 * from the data source.
 */
export declare class SubscribeValidators extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kSubscribeStakeTablesValue: "SubscribeStakeTables";
/**
 * SubscribeStakeTables is a request to subscribe to the StakeTables real time updates
 * from the data source.
 */
export declare class SubscribeStakeTables extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestNodeIdentitySnapshotValue: "RequestNodeIdentitySnapshot";
/**
 * RequestNodeIdentitySnapshot is a request to get the node identity snapshot
 * from the data source.
 */
export declare class RequestNodeIdentitySnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestBlocksSnapshotValue: "RequestBlocksSnapshot";
/**
 * RequestBlocksSnapshot is a request to get the blocks snapshot
 * from the data source.
 */
export declare class RequestBlocksSnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestHistogramSnapshotValue: "RequestHistogramSnapshot";
/**
 * RequestHistogramSnapshot is a request to get the histogram snapshot
 * from the data source.
 */
export declare class RequestHistogramSnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestVotersSnapshotValue: "RequestVotersSnapshot";
/**
 * RequestVotersSnapshot is a request to get the voters snapshot
 * from the data source.
 */
export declare class RequestVotersSnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestValidatorsSnapshotValue: "RequestValidatorsSnapshot";
/**
 * RequestValidatorsSnapshot is a request to get the Validators snapshot
 * from the data source.
 */
export declare class RequestValidatorsSnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
export declare const kRequestStakeTableSnapshotValue: "RequestStakeTableSnapshot";
/**
 * RequestStakeTableSnapshot is a request to get the StakeTable snapshot
 * from the data source.
 */
export declare class RequestStakeTableSnapshot extends CappuccinoNodeValidatorRequest {
    valueOf(): string;
}
