export default abstract class NodeValidatorRequest {
  abstract valueOf(): string;
}

// MARK: Espresso Node Validator Requests.
export const kSubscribeNodeIdentityValue = 'SubscribeNodeIdentity' as const;

/**
 * SubscribeNodeIdentity is a request to subscribe to the node identity
 * real time updates from the data source.
 */
export class SubscribeNodeIdentity extends NodeValidatorRequest {
  valueOf(): string {
    return kSubscribeNodeIdentityValue;
  }
}

export const kSubscribeLatestBockValue = 'SubscribeLatestBlock' as const;

/**
 * SubscribeLatestBlock is a request to subscribe to the latest block
 * real time updates from the data source.
 */
export class SubscribeLatestBlock extends NodeValidatorRequest {
  valueOf(): string {
    return kSubscribeLatestBockValue;
  }
}

export const kSubscribeVotersValue = 'SubscribeVoters' as const;

/**
 * SubscribeVoters is a request to subscribe to the voters real time updates
 * from the data source.
 */
export class SubscribeVoters extends NodeValidatorRequest {
  valueOf(): string {
    return kSubscribeVotersValue;
  }
}

export const kSubscribeValidatorsValue = 'SubscribeValidators' as const;

/**
 * SubscribeValidators is a request to subscribe to the Validators real time updates
 * from the data source.
 */
export class SubscribeValidators extends NodeValidatorRequest {
  valueOf(): string {
    return kSubscribeValidatorsValue;
  }
}

export const kSubscribeStakeTablesValue = 'SubscribeStakeTables' as const;

/**
 * SubscribeStakeTables is a request to subscribe to the StakeTables real time updates
 * from the data source.
 */
export class SubscribeStakeTables extends NodeValidatorRequest {
  valueOf(): string {
    return kSubscribeStakeTablesValue;
  }
}

export const kRequestNodeIdentitySnapshotValue =
  'RequestNodeIdentitySnapshot' as const;

/**
 * RequestNodeIdentitySnapshot is a request to get the node identity snapshot
 * from the data source.
 */
export class RequestNodeIdentitySnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestNodeIdentitySnapshotValue;
  }
}

export const kRequestBlocksSnapshotValue = 'RequestBlocksSnapshot' as const;

/**
 * RequestBlocksSnapshot is a request to get the blocks snapshot
 * from the data source.
 */
export class RequestBlocksSnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestBlocksSnapshotValue;
  }
}

export const kRequestHistogramSnapshotValue =
  'RequestHistogramSnapshot' as const;

/**
 * RequestHistogramSnapshot is a request to get the histogram snapshot
 * from the data source.
 */
export class RequestHistogramSnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestHistogramSnapshotValue;
  }
}

export const kRequestVotersSnapshotValue = 'RequestVotersSnapshot' as const;

/**
 * RequestVotersSnapshot is a request to get the voters snapshot
 * from the data source.
 */
export class RequestVotersSnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestVotersSnapshotValue;
  }
}

export const kRequestValidatorsSnapshotValue =
  'RequestValidatorsSnapshot' as const;

/**
 * RequestValidatorsSnapshot is a request to get the Validators snapshot
 * from the data source.
 */
export class RequestValidatorsSnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestValidatorsSnapshotValue;
  }
}

export const kRequestStakeTableSnapshotValue =
  'RequestStakeTableSnapshot' as const;

/**
 * RequestStakeTableSnapshot is a request to get the StakeTable snapshot
 * from the data source.
 */
export class RequestStakeTableSnapshot extends NodeValidatorRequest {
  valueOf(): string {
    return kRequestStakeTableSnapshotValue;
  }
}
