import { L1Methods } from '@/contracts/l1/l1_interface';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { nodeList } from '@/data_source/fake_data_source';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  appendIterables,
  compareArrayBuffer,
  dropIterable,
  filterIterable,
  firstWhereIterable,
  mapIterable,
  singletonIterable,
} from '@/functional/functional';
import { Delegation } from '@/service/espresso_l1_validator_service/common/delegation';
import { EpochAndBlock } from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/common/l1_block_info';
import { PendingWithdrawal } from '@/service/espresso_l1_validator_service/common/pending_withdrawal';
import { L1BlockAPI } from '@/service/espresso_l1_validator_service/l1_block/l1_block_api';
import { L1ValidatorService } from '@/service/espresso_l1_validator_service/l1_validator_service_api';
import { ValidatorsActiveAPI } from '@/service/espresso_l1_validator_service/validators_active/validators_active_api';
import { ValidatorsAllAPI } from '@/service/espresso_l1_validator_service/validators_all/validators_all_api';
import { WalletAPI } from '@/service/espresso_l1_validator_service/wallet/wallet_api';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { WalletUpdate } from '@/service/espresso_l1_validator_service/wallet/wallet_update';
import React from 'react';
import { Config } from 'wagmi';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { L1ValidatorServiceContext } from '../contexts/l1_validator_api_context';
import {
  L1TransactionCallback,
  MockL1MethodsImpl,
  UnderlyingTransaction,
} from './l1_methods';
import { MockAddress } from './rainbow_kit';
import {
  ClaimWithdrawal,
  Delegate,
  StakeTableStateActions,
  Undelegate,
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

  return (
    <L1ValidatorServiceContext.Provider
      value={determineService(service, l1Methods)}
    >
      {children}
    </L1ValidatorServiceContext.Provider>
  );
};

function determineService(
  service: L1ValidatorService,
  l1Methods: null | L1Methods<Config, number>,
) {
  if (l1Methods instanceof MockL1MethodsImpl) {
    const newService = new MockValidatorService(service);
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

const zeroEpochAndBlock = new EpochAndBlock(0n, 0n, new Date(0));

class MockStatefulWalletAPI implements WalletAPI, L1TransactionCallback {
  constructor(
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
                    zeroEpochAndBlock,
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

  async snapshot(address: ArrayBuffer): Promise<WalletSnapshot> {
    const hexAddress = hexArrayBufferCodec.encode(address);
    return this.state.snapshots.get(hexAddress) ?? zeroSnapshot;
  }

  async updates(): Promise<WalletUpdate> {
    throw new UnimplementedError();
  }

  l1Transaction(action: UnderlyingTransaction): void {
    if (action instanceof StakeTableStateActions) {
      this.reportStakeTableAction(action);
      return;
    }
  }

  reportStakeTableAction(action: StakeTableStateActions): void {
    this.state = processActionOnState(this.state, action);
  }
}

class MockValidatorService implements L1ValidatorService {
  public readonly wallet = new MockStatefulWalletAPI();
  constructor(private service: L1ValidatorService) {}

  get l1Block(): L1BlockAPI {
    return this.service.l1Block;
  }

  get validatorsAll(): ValidatorsAllAPI {
    return this.service.validatorsAll;
  }

  get validatorsActive(): ValidatorsActiveAPI {
    return this.service.validatorsActive;
  }

  setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

function determineWalletAddressFromAction(
  action: StakeTableStateActions,
): `0x${string}` | null {
  if (action instanceof Delegate || action instanceof Undelegate) {
    return action.delegator;
  }

  if (action instanceof ClaimWithdrawal) {
    return action.delegator;
  }

  return null;
}

function processActionOnState(
  state: MockStatefulWalletState,
  action: StakeTableStateActions,
): MockStatefulWalletState {
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
      mapIterable(it, (entry) => processActionOnSnapshotEntry(entry, action)),
    ),
  };
}

function processActionOnSnapshotEntry(
  state: [`0x${string}`, WalletSnapshot],
  action: StakeTableStateActions,
): [`0x${string}`, WalletSnapshot] {
  const [delegator, snapshot] = state;
  return [
    delegator,
    processActionOnWalletSnapshot(
      hexArrayBufferCodec.decode(delegator),
      snapshot,
      action,
    ),
  ];
}

function processActionOnWalletSnapshot(
  delegator: ArrayBuffer,
  snapshot: WalletSnapshot,
  action: StakeTableStateActions,
): WalletSnapshot {
  return new WalletSnapshot(
    processActionOnNodes(delegator, snapshot.nodes, action),
    processActionOnPendingUndelegations(
      delegator,
      snapshot.pendingUndelegations,
      action,
    ),
    processActionOnPendingExits(delegator, snapshot.pendingExits, action),
    processActionOnClaimedRewards(delegator, snapshot.claimedRewards, action),
    processActionOnL1Block(delegator, snapshot.l1Block, action),
  );
}

function processActionOnNodes(
  delegator: ArrayBuffer,
  delegations: Delegation[],
  action: StakeTableStateActions,
): Delegation[] {
  // Does this delegations entry have an entry for the validator in the action?;
  if (!(action instanceof Delegate || action instanceof Undelegate)) {
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
      singletonIterable(new Delegation(delegator, node, 0n, zeroEpochAndBlock)),
    );
  }

  return Array.from(
    filterIterable(
      mapIterable(iterable, (delegation) =>
        processActionOnDelegation(delegator, node, delegation, action),
      ),
      (delegation) => delegation.amount > 0n,
    ),
  );
}

function processActionOnDelegation(
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
    return new Delegation(
      delegator,
      node,
      delegation.amount + action.amount,
      zeroEpochAndBlock,
    );
  }

  if (action instanceof Undelegate) {
    return new Delegation(
      delegator,
      node,
      delegation.amount - action.amount,
      zeroEpochAndBlock,
    );
  }

  return delegation;
}

function processActionOnPendingUndelegations(
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
        processActionPendingUndelegation(
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

function processActionPendingUndelegation(
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

function processActionOnPendingExits(
  _delegator: ArrayBuffer,
  pendingExits: PendingWithdrawal[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: StakeTableStateActions,
): PendingWithdrawal[] {
  return pendingExits;
}

function processActionOnClaimedRewards(
  _delegator: ArrayBuffer,
  claimedRewards: bigint,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: StakeTableStateActions,
): bigint {
  return claimedRewards;
}

function processActionOnL1Block(
  _delegator: ArrayBuffer,
  l1Block: L1BlockInfo,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: StakeTableStateActions,
): L1BlockInfo {
  return l1Block;
}
