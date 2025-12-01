import { nodeList } from '@/data_source/fake_data_source/espresso/nodes';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { getStartingSeed } from '@/data_source/fake_data_source/seed';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import { Delegation } from '@/service/espresso_l1_validator_service/common/delegation';
import { EpochAndBlock } from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/common/l1_block_info';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import { PendingWithdrawal } from '@/service/espresso_l1_validator_service/common/pending_withdrawal';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import { ActiveNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { GetTransactionReceiptReturnType } from 'wagmi/actions';

const sampleNodeData = nodeList.map(
  (node) =>
    new NodeSetEntry(
      node.address,
      node.pubkey,
      node.stake,
      Ratio.floatingPoint(node.commission / 10_000),
    ),
);

const top100Nodes = sampleNodeData
  .toSorted((a, b) => Number(b.stake - a.stake))
  .slice(0, 100);

const prng = new PseudoRandomNumberGenerator(getStartingSeed());

const walletAddress = prng.fillBytes(20);

const activeNodes = top100Nodes.map(
  (node) =>
    new ActiveNodeSetEntry(
      node.address,
      Ratio.floatingPoint(prng.nextFloat()),
      Ratio.floatingPoint(prng.nextFloat()),
    ),
);

export const fullValidatorSet = new FullNodeSetSnapshot(
  new L1BlockInfo(0n, new ArrayBuffer(), new Date(0)),
  sampleNodeData,
);

export const activeValidatorSet = new ActiveNodeSetSnapshot(
  new EpochAndBlock(EpochAndBlock.determineEpoch(0n, 100n), 0n, new Date(0)),
  activeNodes,
);

export const INDEX_STAKED = 6;
export const INDEX_UNDELEGATE = 7;
export const INDEX_EXIT = 8;

export const walletSnapshot = new WalletSnapshot(
  [
    new Delegation(
      walletAddress,
      nodeList[INDEX_STAKED].address,
      1_000_000_000_000_000_000n,
    ),
  ],
  [
    new PendingWithdrawal(
      walletAddress,
      nodeList[INDEX_UNDELEGATE].address,
      500_000_000_000_000_000n,
      new Date(0),
    ),
  ],
  [
    new PendingWithdrawal(
      walletAddress,
      nodeList[INDEX_EXIT].address,
      500_000_000_000_000_000n,
      new Date(0),
    ),
  ],
  0n,
  new L1BlockInfo(0n, new ArrayBuffer(), new Date(0)),
);

export const FAKE_TRANSACTION_HASH =
  '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';

export const FAKE_RECEIPT: GetTransactionReceiptReturnType = {
  blockHash: '0x',
  blockNumber: 0n,
  contractAddress: undefined,
  cumulativeGasUsed: 0n,
  effectiveGasPrice: 0n,
  from: '0x',
  gasUsed: 0n,
  logs: [],
  logsBloom: '0x',
  status: 'success',
  to: null,
  transactionHash: '0x',
  transactionIndex: 0,
  type: 'legacy',
  chainId: 0,
};
