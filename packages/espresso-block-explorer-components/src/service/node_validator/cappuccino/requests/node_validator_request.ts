export default abstract class CappuccinoNodeValidatorRequest {
  abstract valueOf(): string;
}

// MARK: Cappuccino Node Validator Requests.
export const kSubscribeNodeIdentityValue = 'SubscribeNodeIdentity' as const;

/**
 * SubscribeNodeIdentity is a request to subscribe to the node identity
 * real time updates from the data source.
 */
export class SubscribeNodeIdentity extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kSubscribeNodeIdentityValue;
  }
}

export const kSubscribeLatestBockValue = 'SubscribeLatestBlock' as const;

/**
 * SubscribeLatestBlock is a request to subscribe to the latest block
 * real time updates from the data source.
 */
export class SubscribeLatestBlock extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kSubscribeLatestBockValue;
  }
}

export const kSubscribeVotersValue = 'SubscribeVoters' as const;

/**
 * SubscribeVoters is a request to subscribe to the voters real time updates
 * from the data source.
 */
export class SubscribeVoters extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kSubscribeVotersValue;
  }
}

export const kRequestNodeIdentitySnapshotValue =
  'RequestNodeIdentitySnapshot' as const;

/**
 * RequestNodeIdentitySnapshot is a request to get the node identity snapshot
 * from the data source.
 */
export class RequestNodeIdentitySnapshot extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kRequestNodeIdentitySnapshotValue;
  }
}

export const kRequestBlocksSnapshotValue = 'RequestBlocksSnapshot' as const;

/**
 * RequestBlocksSnapshot is a request to get the blocks snapshot
 * from the data source.
 */
export class RequestBlocksSnapshot extends CappuccinoNodeValidatorRequest {
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
export class RequestHistogramSnapshot extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kRequestHistogramSnapshotValue;
  }
}

export const kRequestVotersSnapshotValue = 'RequestVotersSnapshot' as const;

/**
 * RequestVotersSnapshot is a request to get the voters snapshot
 * from the data source.
 */
export class RequestVotersSnapshot extends CappuccinoNodeValidatorRequest {
  valueOf(): string {
    return kRequestVotersSnapshotValue;
  }
}
