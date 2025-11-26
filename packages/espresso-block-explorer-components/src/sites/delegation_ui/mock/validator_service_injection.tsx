import { L1Methods } from '@/contracts/l1/l1_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { nodeList } from '@/data_source/fake_data_source';
import BadResponseClientError from '@/errors/BadResponseClientError';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  appendIterables,
  compareArrayBuffer,
  dropIterable,
  expandIterable,
  filterIterable,
  firstWhereIterable,
  mapIterable,
  singletonIterable,
} from '@/functional/functional';
import { Delegation } from '@/service/espresso_l1_validator_service/common/delegation';
import { EpochAndBlock } from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { L1BlockID } from '@/service/espresso_l1_validator_service/common/l1_block_id';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/common/l1_block_info';
import { PendingWithdrawal } from '@/service/espresso_l1_validator_service/common/pending_withdrawal';
import { Withdrawal } from '@/service/espresso_l1_validator_service/common/withdrawal';
import { L1BlockAPI } from '@/service/espresso_l1_validator_service/l1_block/l1_block_api';
import { L1ValidatorService } from '@/service/espresso_l1_validator_service/l1_validator_service_api';
import { ActiveNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import { ActiveNodeSetUpdate } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_update';
import { ValidatorsActiveAPI } from '@/service/espresso_l1_validator_service/validators_active/validators_active_api';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { FullNodeSetUpdate } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_update';
import { ValidatorsAllAPI } from '@/service/espresso_l1_validator_service/validators_all/validators_all_api';
import { WalletAPI } from '@/service/espresso_l1_validator_service/wallet/wallet_api';
import { WalletDiffClaimedRewards } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/claimed_rewards';
import { WalletDiffDelegatedToNode } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/delegated_to_node';
import { WalletDiffNodeExitWithdrawal } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/node_exit_withdrawal';
import { WalletDiffUndelegatedFromNode } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/undelegated_from_node';
import { WalletDiffUndelegationWithdrawal } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/undelegation_withdrawal';
import { WalletDiff } from '@/service/espresso_l1_validator_service/wallet/wallet_diff/wallet_diff';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { WalletUpdate } from '@/service/espresso_l1_validator_service/wallet/wallet_update';
import { CappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { Config } from 'wagmi';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { L1ValidatorServiceContext } from '../contexts/l1_validator_api_context';
import { ESPTokenContractStateAction } from './esp_token_contract';
import {
  L1TransactionCallback,
  MockL1MethodsImpl,
  UnderlyingTransaction,
} from './l1_methods';
import { MockAddress } from './rainbow_kit';
import {
  ClaimRewardAction,
  RewardClaimStateAction,
} from './reward_claim_contract';
import {
  ClaimValidatorExit,
  ClaimWithdrawal,
  Delegate,
  StakeTableStateActions,
  Undelegate,
  ValidatorExit,
} from './stake_table_v2_contract';

// This file aims to provide a mock injection for the L1 Validator Service
// in order to provide updates for the L1 Validator Service wallet endpoint
// in a way that can actually be retrieved and reflected in the UI.
// This is a connection piece which may seem odd initially, but is valuable
// for testing and development purposes.

export const L1ValidatorServiceMockInjection: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const l1Methods = React.useContext(L1MethodsContext);
  const service = React.useContext(L1ValidatorServiceContext);
  const hotShotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );

  return (
    <L1ValidatorServiceContext.Provider
      value={determineService(service, l1Methods, hotShotQueryService)}
    >
      {children}
    </L1ValidatorServiceContext.Provider>
  );
};

function determineService(
  service: L1ValidatorService,
  l1Methods: null | L1Methods<Config, number>,
  hotShotQueryService: CappuccinoHotShotQueryService,
) {
  if (l1Methods instanceof MockL1MethodsImpl) {
    const newService = new MockValidatorService(
      l1Methods,
      service,
      hotShotQueryService,
    );
    l1Methods.setTransactionCallback(newService.wallet);
    return newService;
  }

  return service;
}

interface MockStatefulWalletState {
  snapshots: Map<`0x${string}`, WalletSnapshot>;
}

const zeroSnapshot = new WalletSnapshot(
  [],
  [],
  [],
  0n,
  new L1BlockInfo(0n, new ArrayBuffer(), new Date(0)),
);

class MockL1BlockAPI implements L1BlockAPI {
  constructor(private l1Methods: MockL1MethodsImpl) {}

  async getBlockForHeight(number: bigint): Promise<L1BlockID> {
    const block = this.l1Methods.mockBlockByHeight(number);
    if (!block) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    return new L1BlockID(
      block.height,
      hexArrayBufferCodec.decode(block.hash),
      hexArrayBufferCodec.decode(block.parentHash),
    );
  }

  async getLatestBlock(): Promise<L1BlockID> {
    const block = this.l1Methods.mockLatestBlock();
    if (!block) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    return new L1BlockID(
      block.height,
      hexArrayBufferCodec.decode(block.hash),
      hexArrayBufferCodec.decode(block.parentHash),
    );
  }
}

class MockStatefulWalletAPI implements WalletAPI, L1TransactionCallback {
  constructor(
    private l1Methods: MockL1MethodsImpl,
    private state: MockStatefulWalletState = {
      snapshots: new Map([
        [
          MockAddress,
          new WalletSnapshot(
            Array.from(
              mapIterable(
                dropIterable(nodeList, nodeList.length - 2),
                (node) =>
                  new Delegation(
                    hexArrayBufferCodec.decode(MockAddress),
                    node.address,
                    node.stake / 10n,
                  ),
              ),
            ),
            [],
            Array.from(
              mapIterable(
                dropIterable(nodeList, nodeList.length - 2),
                (node) =>
                  new PendingWithdrawal(
                    hexArrayBufferCodec.decode(MockAddress),
                    node.address,
                    node.stake / 10n,
                    new Date(0),
                  ),
              ),
            ),
            0n,
            zeroSnapshot.l1Block,
          ),
        ],
      ]),
    },
  ) {}

  async snapshot(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletSnapshot> {
    // Block needs to exist first
    if (!this.l1Methods.mockBlockByHash(hexArrayBufferCodec.encode(hash))) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    const hexAddress = hexArrayBufferCodec.encode(address);
    return this.state.snapshots.get(hexAddress) ?? zeroSnapshot;
  }

  async updates(
    address: ArrayBuffer,
    hash: ArrayBuffer,
  ): Promise<WalletUpdate> {
    const hashStr = hexArrayBufferCodec.encode(hash);
    const addressString = hexArrayBufferCodec.encode(address);
    // Block needs to exist first
    if (!this.l1Methods.mockBlockByHash(hashStr)) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    // Grab transactions for the block
    const transactions = mapIterable(
      this.l1Methods.mockTransactionsForBlockHash(hashStr) ?? [],
      (tx) => tx.transaction,
    );

    // Let's inspect these actions to see if any of them generate
    // wallet updates.
    const updates = expandIterable(transactions, (tx): Iterable<WalletDiff> => {
      if (tx instanceof StakeTableStateActions) {
        if (tx instanceof Delegate && tx.delegator === addressString) {
          return [
            new WalletDiffDelegatedToNode(
              new Delegation(
                address,
                hexArrayBufferCodec.decode(tx.validator),
                tx.amount,
              ),
            ),
          ];
        }

        if (tx instanceof Undelegate && tx.delegator === addressString) {
          return [
            new WalletDiffUndelegatedFromNode(
              new PendingWithdrawal(
                address,
                hexArrayBufferCodec.decode(tx.validator),
                tx.amount,
                new Date(Date.now() + Number(tx.exitEscrowPeriod)),
              ),
            ),
          ];
        }

        if (tx instanceof ValidatorExit) {
          //
        }

        if (
          tx instanceof ClaimValidatorExit &&
          tx.delegator === addressString
        ) {
          return [
            new WalletDiffNodeExitWithdrawal(
              new Withdrawal(
                address,
                hexArrayBufferCodec.decode(tx.validator),
                tx.amount,
              ),
            ),
          ];
        }

        if (tx instanceof ClaimWithdrawal && tx.delegator === addressString) {
          return [
            new WalletDiffUndelegationWithdrawal(
              new Withdrawal(
                address,
                hexArrayBufferCodec.decode(tx.validator),
                tx.amount,
              ),
            ),
          ];
        }
      }

      if (tx instanceof ESPTokenContractStateAction) {
        //
      }

      if (tx instanceof RewardClaimStateAction) {
        if (tx instanceof ClaimRewardAction && tx.delegator === addressString) {
          return [new WalletDiffClaimedRewards(tx.lifetimeRewards)];
        }
      }

      return [];
    });

    return new WalletUpdate(zeroSnapshot.l1Block, Array.from(updates));
  }

  l1Transaction(action: UnderlyingTransaction): void {
    if (action instanceof StakeTableStateActions) {
      this.reportStakeTableAction(action);
      return;
    }

    if (action instanceof RewardClaimStateAction) {
      this.reportRewardClaimAction(action);
      return;
    }
  }

  reportStakeTableAction(action: StakeTableStateActions): void {
    this.state = processStakeTableActionOnState(this.state, action);
  }

  reportRewardClaimAction(action: RewardClaimStateAction): void {
    this.state = processRewardClaimActionOnState(this.state, action);
  }
}

class MockStatefulValidatorsAllAPI implements ValidatorsAllAPI {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    private readonly service: ValidatorsAllAPI,
  ) {}

  async snapshot(hash: ArrayBuffer): Promise<FullNodeSetSnapshot> {
    return this.service.snapshot(hash);
  }

  async updatesSince(hash: ArrayBuffer): Promise<FullNodeSetUpdate> {
    const hashStr = hexArrayBufferCodec.encode(hash);
    const block = this.l1Methods.mockBlockByHash(hashStr);
    if (!block) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    return new FullNodeSetUpdate(
      new L1BlockInfo(
        block.height,
        hexArrayBufferCodec.decode(block.hash),
        new Date(Number(block.timestamp)),
      ),
      [],
    );
  }
}

class MockStatefulValidatorsActiveAPI implements ValidatorsActiveAPI {
  constructor(
    private readonly l1Methods: MockL1MethodsImpl,
    private readonly service: ValidatorsActiveAPI,
    private readonly hotShotQueryService: CappuccinoHotShotQueryService,
  ) {}

  async active(): Promise<ActiveNodeSetSnapshot> {
    return this.service.active();
  }

  async activeFor(number: bigint): Promise<ActiveNodeSetSnapshot> {
    return this.service.activeFor(number);
  }

  async updatesSince(number: bigint): Promise<ActiveNodeSetUpdate> {
    const latestBlock = await this.hotShotQueryService.status.blockHeight();
    if (number > BigInt(latestBlock)) {
      throw new BadResponseClientError(404, null, 'block not found');
    }

    const blocksPerEpoch = 100n;
    const epoch = EpochAndBlock.determineEpoch(number, blocksPerEpoch);

    return new ActiveNodeSetUpdate(
      new EpochAndBlock(epoch, number, new Date()),
      [],
    );
  }
}

class MockValidatorService implements L1ValidatorService {
  public readonly l1Block: MockL1BlockAPI;
  public readonly wallet: MockStatefulWalletAPI;
  public readonly validatorsAll: MockStatefulValidatorsAllAPI;
  public readonly validatorsActive: MockStatefulValidatorsActiveAPI;
  constructor(
    private l1Methods: MockL1MethodsImpl,
    private service: L1ValidatorService,
    private hotShotQueryService: CappuccinoHotShotQueryService,
  ) {
    this.l1Block = new MockL1BlockAPI(l1Methods);
    this.wallet = new MockStatefulWalletAPI(l1Methods);
    this.validatorsAll = new MockStatefulValidatorsAllAPI(
      l1Methods,
      service.validatorsAll,
    );
    this.validatorsActive = new MockStatefulValidatorsActiveAPI(
      l1Methods,
      service.validatorsActive,
      hotShotQueryService,
    );
  }

  setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

function determineWalletAddressFromAction(
  action: StakeTableStateActions,
): `0x${string}` | null {
  if (
    action instanceof Delegate ||
    action instanceof Undelegate ||
    action instanceof ClaimWithdrawal ||
    action instanceof ClaimValidatorExit
  ) {
    return action.delegator;
  }

  return null;
}

function processStakeTableActionOnState(
  state: MockStatefulWalletState,
  action: StakeTableStateActions,
): MockStatefulWalletState {
  if (action instanceof ValidatorExit) {
    // We handle validator exits separately, since they do not target
    // a specific delegator, but rather have implications for all
    // delegator currently delegated to the validator.

    return {
      snapshots: new Map(
        mapIterable(state.snapshots, (entry) =>
          processValidatorExitOnSnapshotEntry(entry, action),
        ),
      ),
    };
  }

  let it: Iterable<[`0x${string}`, WalletSnapshot]> = state.snapshots;
  const expectedWalletAddress = determineWalletAddressFromAction(action);

  if (!expectedWalletAddress) {
    return state;
  }

  if (!state.snapshots.has(expectedWalletAddress)) {
    it = appendIterables(
      state.snapshots,
      singletonIterable([expectedWalletAddress, zeroSnapshot]),
    );
  }

  // What's the expected wallet address?
  return {
    snapshots: new Map(
      mapIterable(it, (entry) =>
        processStakeTableActionOnSnapshotEntry(entry, action),
      ),
    ),
  };
}

function processStakeTableActionOnSnapshotEntry(
  state: [`0x${string}`, WalletSnapshot],
  action: StakeTableStateActions,
): [`0x${string}`, WalletSnapshot] {
  const [delegator, snapshot] = state;
  return [
    delegator,
    processStakeTableActionOnWalletSnapshot(
      hexArrayBufferCodec.decode(delegator),
      snapshot,
      action,
    ),
  ];
}

function processStakeTableActionOnWalletSnapshot(
  delegator: ArrayBuffer,
  snapshot: WalletSnapshot,
  action: StakeTableStateActions,
): WalletSnapshot {
  return new WalletSnapshot(
    processStakeTableActionOnNodes(delegator, snapshot.nodes, action),
    processStakeTableActionOnPendingUndelegations(
      delegator,
      snapshot.pendingUndelegations,
      action,
    ),
    processStakeTableActionOnPendingExits(
      delegator,
      snapshot.pendingExits,
      action,
    ),
    processStakeTableActionOnClaimedRewards(
      delegator,
      snapshot.claimedRewards,
      action,
    ),
    processStakeTableActionOnL1Block(delegator, snapshot.l1Block, action),
  );
}

function processStakeTableActionOnNodes(
  delegator: ArrayBuffer,
  delegations: Delegation[],
  action: StakeTableStateActions,
): Delegation[] {
  // Does this delegations entry have an entry for the validator in the action?;
  if (
    !(
      action instanceof Delegate ||
      action instanceof Undelegate ||
      action instanceof ClaimValidatorExit
    )
  ) {
    return delegations;
  }

  const nodeString = action.validator;
  const node = hexArrayBufferCodec.decode(nodeString);

  const existingDelegation = firstWhereIterable(
    delegations,
    (delegation) => compareArrayBuffer(delegation.node, node) === 0,
  );

  let iterable: Iterable<Delegation> = delegations;

  if (!existingDelegation) {
    iterable = appendIterables(
      delegations,
      singletonIterable(new Delegation(delegator, node, 0n)),
    );
  }

  return Array.from(
    filterIterable(
      mapIterable(iterable, (delegation) =>
        processStakeTableActionOnDelegation(
          delegator,
          node,
          delegation,
          action,
        ),
      ),
      (delegation) => delegation.amount > 0n,
    ),
  );
}

function processStakeTableActionOnDelegation(
  delegator: ArrayBuffer,
  node: ArrayBuffer,
  delegation: Delegation,
  action: StakeTableStateActions,
): Delegation {
  if (
    compareArrayBuffer(delegation.delegator, delegator) !== 0 ||
    compareArrayBuffer(delegation.node, node) !== 0
  ) {
    return delegation;
  }

  if (action instanceof Delegate) {
    return new Delegation(delegator, node, delegation.amount + action.value);
  }

  if (action instanceof Undelegate) {
    return new Delegation(delegator, node, delegation.amount - action.value);
  }

  if (action instanceof ClaimValidatorExit) {
    return new Delegation(delegator, node, 0n);
  }

  return delegation;
}

function processStakeTableActionOnPendingUndelegations(
  delegator: ArrayBuffer,
  pendingUndelegations: PendingWithdrawal[],
  action: StakeTableStateActions,
): PendingWithdrawal[] {
  if (!(action instanceof Undelegate || action instanceof ClaimWithdrawal)) {
    return pendingUndelegations;
  }
  const nodeString = action.validator;
  const node = hexArrayBufferCodec.decode(nodeString);

  // Do we have an entry for this?
  const existingDelegation = firstWhereIterable(
    pendingUndelegations,
    (pending) => compareArrayBuffer(pending.node, node) === 0,
  );

  let iterable: Iterable<PendingWithdrawal> = pendingUndelegations;

  if (!existingDelegation) {
    iterable = appendIterables(
      pendingUndelegations,
      singletonIterable(
        new PendingWithdrawal(delegator, node, 0n, new Date(0)),
      ),
    );
  }

  return Array.from(
    filterIterable(
      mapIterable(iterable, (pendingUndelegation) =>
        processStakeTableActionPendingUndelegation(
          delegator,
          node,
          pendingUndelegation,
          action,
        ),
      ),
      (withdrawal) => withdrawal.amount > 0n,
    ),
  );
}

function processStakeTableActionPendingUndelegation(
  delegator: ArrayBuffer,
  node: ArrayBuffer,
  pendingUndelegation: PendingWithdrawal,
  action: StakeTableStateActions,
): PendingWithdrawal {
  if (
    compareArrayBuffer(pendingUndelegation.delegator, delegator) !== 0 ||
    compareArrayBuffer(pendingUndelegation.node, node) !== 0
  ) {
    return pendingUndelegation;
  }

  if (action instanceof Undelegate) {
    return new PendingWithdrawal(
      delegator,
      node,
      action.value,
      new Date(action.ts.valueOf() + Number(action.exitEscrowPeriod)),
    );
  }

  if (action instanceof ClaimWithdrawal) {
    return new PendingWithdrawal(delegator, node, 0n, new Date(0));
  }

  return pendingUndelegation;
}

function processStakeTableActionOnPendingExits(
  delegator: ArrayBuffer,
  pendingExits: PendingWithdrawal[],
  action: StakeTableStateActions,
): PendingWithdrawal[] {
  if (
    !(action instanceof ValidatorExit || action instanceof ClaimValidatorExit)
  ) {
    return pendingExits;
  }

  let it: Iterable<PendingWithdrawal> = pendingExits;

  // Does the validator exit exist?
  const nodeString = action.validator;
  const node = hexArrayBufferCodec.decode(nodeString);

  if (
    firstWhereIterable(
      pendingExits,
      (pendingExit) => compareArrayBuffer(pendingExit.node, node) === 0,
    )
  ) {
    it = appendIterables(
      pendingExits,
      singletonIterable(
        new PendingWithdrawal(delegator, node, 0n, new Date(0)),
      ),
    );
  }

  return Array.from(
    filterIterable(
      mapIterable(it, (pendingExit) =>
        processStakeTableActionOnPendingExit(
          delegator,
          node,
          pendingExit,
          action,
        ),
      ),
      (pendingExits) => pendingExits.amount > 0n,
    ),
  );
}

function processStakeTableActionOnPendingExit(
  delegator: ArrayBuffer,
  node: ArrayBuffer,
  pendingExit: PendingWithdrawal,
  action: StakeTableStateActions,
): PendingWithdrawal {
  if (
    compareArrayBuffer(pendingExit.delegator, delegator) !== 0 ||
    compareArrayBuffer(pendingExit.node, node) !== 0
  ) {
    return pendingExit;
  }

  if (action instanceof ValidatorExit) {
    return new PendingWithdrawal(
      delegator,
      node,
      action.value,
      new Date(Number(action.exitTime)),
    );
  }

  if (action instanceof ClaimValidatorExit) {
    return new PendingWithdrawal(delegator, node, 0n, new Date(0));
  }

  return pendingExit;
}

function processStakeTableActionOnClaimedRewards(
  delegator: ArrayBuffer,
  claimedRewards: bigint,
  action: StakeTableStateActions,
): bigint;
function processStakeTableActionOnClaimedRewards(
  _delegator: ArrayBuffer,
  claimedRewards: bigint,
): bigint {
  return claimedRewards;
}

function processStakeTableActionOnL1Block(
  delegator: ArrayBuffer,
  l1Block: L1BlockInfo,
  action: StakeTableStateActions,
): L1BlockInfo;
function processStakeTableActionOnL1Block(
  _delegator: ArrayBuffer,
  l1Block: L1BlockInfo,
): L1BlockInfo {
  return l1Block;
}

function processValidatorExitOnSnapshotEntry(
  entry: [`0x${string}`, WalletSnapshot],
  action: ValidatorExit,
): [`0x${string}`, WalletSnapshot] {
  // We want to add entries to `pendingExits` based on the stakes in `nodes`.

  const validatorKey = action.validator;
  const validator = hexArrayBufferCodec.decode(validatorKey);
  const [delegatorKey, snapshot] = entry;
  const delegator = hexArrayBufferCodec.decode(delegatorKey);
  const existingNode = firstWhereIterable(
    snapshot.nodes,
    (node) => compareArrayBuffer(node.node, validator) === 0,
  );
  if (!existingNode) {
    return entry;
  }

  return [
    delegatorKey,
    new WalletSnapshot(
      snapshot.nodes,
      snapshot.pendingUndelegations,
      Array.from(
        appendIterables(
          snapshot.pendingExits,
          singletonIterable(
            new PendingWithdrawal(
              delegator,
              validator,
              existingNode.amount,
              new Date(Number(action.exitTime)),
            ),
          ),
        ),
      ),
      snapshot.claimedRewards,
      snapshot.l1Block,
    ),
  ];
}

function processRewardClaimActionOnState(
  state: MockStatefulWalletState,
  action: RewardClaimStateAction,
): MockStatefulWalletState {
  return {
    snapshots: new Map(
      mapIterable(state.snapshots, (entry) =>
        processRewardClaimActionOnSnapshot(entry, action),
      ),
    ),
  };
}

function processRewardClaimActionOnSnapshot(
  entry: [`0x${string}`, WalletSnapshot],
  action: RewardClaimStateAction,
): [`0x${string}`, WalletSnapshot] {
  if (!(action instanceof ClaimRewardAction)) {
    return entry;
  }

  const [delegatorKey, snapshot] = entry;
  if (delegatorKey !== action.delegator) {
    return entry;
  }

  // This reward applies to us
  return [
    delegatorKey,
    new WalletSnapshot(
      snapshot.nodes,
      snapshot.pendingUndelegations,
      snapshot.pendingExits,
      snapshot.claimedRewards + action.value,
      snapshot.l1Block,
    ),
  ];
}
