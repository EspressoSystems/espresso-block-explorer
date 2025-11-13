import { sleep } from '@/async/sleep';
import { ESPTokenContract } from '@/contracts/esp_token/esp_token_interface';
import { ValidatorStatus } from '@/contracts/stake_table/stake_table_interface';
import { hexArrayBufferCodec } from '@/convert/codec';
import { nodeList } from '@/data_source/fake_data_source';
import { mapIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import {
  MockESPTokenContractImpl,
  MockESPTokenContractState,
} from '../esp_token_contract';
import { MockL1MethodsImpl, MockL1State } from '../l1_methods';
import {
  MockStakeTableV2ContractImpl,
  StakeTableState,
} from '../stake_table_v2_contract';

const ACCOUNT1: `0x${string}` = '0x1111111111111111111111111111111111111111';
const ACCOUNT2: `0x${string}` = '0x2222222222222222222222222222222222222222';

function createInitialL1MethodsState(): MockL1State {
  return {
    balances: new Map(),
    transactions: new Map(),
    accountAddress: null,
    pendingBlockHeight: 1n,
    pendingTransactions: [],
    transactionToBlockMap: new Map(),
    blocks: [
      {
        hash: `0x0000000000000000000000000000000000000000`,
        height: 0n,
        timestamp: 0n,
        transactions: [],
      },
    ],

    contractStorage: new Map(),
  };
}

function createInitialMockESPTokenContractState(): MockESPTokenContractState {
  return {
    contractAddress: '0x0000000000000000000000000000000000000000',
    version: [1, 0, 0],
    name: 'ESP Token',
    symbol: 'ESP',
    decimals: 18,
    totalSupply: 1_000_000_000_000_000_000_000_000_000n,
    balances: new Map([
      [ACCOUNT1, 500_000_000_000_000_000_000_000_000n],
      [ACCOUNT2, 300_000_000_000_000_000_000_000_000n],
    ] as const),
    allowances: new Map(),
    lastUpdate: new Date(),
  };
}

function createInitialStakeTableContractState(): StakeTableState {
  return {
    contractAddress: '0x0000000000000000000000000000000000000001',
    validators: new Map(
      mapIterable(
        nodeList,
        (node) =>
          [
            hexArrayBufferCodec.encode(node.address),
            [node.stake, ValidatorStatus.active],
          ] as const,
      ),
    ),
    blsKeys: new Set(),
    validatorExits: new Map(),
    delegations: new Map(
      mapIterable(
        nodeList,
        (node) =>
          [
            hexArrayBufferCodec.encode(node.address),
            new Map([[hexArrayBufferCodec.encode(node.address), node.stake]]),
          ] as const,
      ),
    ),
    undelegations: new Map(),
    exitEscrowPeriod: 200n,
    pauserRole: '0x0000000000000000000000000000000000000000',
    minCommissionIncreaseInterval: 1000n * 60n * 60n * 24n,
    maxCommissionIncrease: 0,
    commissionTracking: new Map(),
    schnorrKeys: new Set(),
    lastUpdate: new Date(),
  };
}

function setupInitialL1Methods(
  state: MockL1State = createInitialL1MethodsState(),
) {
  return new MockL1MethodsImpl(state);
}

function setupInitialESPTokenContractState(
  l1Methods: MockL1MethodsImpl,
  state: MockESPTokenContractState = createInitialMockESPTokenContractState(),
) {
  return new MockESPTokenContractImpl(l1Methods, state, null);
}

function setupInitialContractState(
  l1Methods: MockL1MethodsImpl = setupInitialL1Methods(),
  espToken: ESPTokenContract = setupInitialESPTokenContractState(l1Methods),
  state: StakeTableState = createInitialStakeTableContractState(),
) {
  return new MockStakeTableV2ContractImpl(l1Methods, espToken, state, null);
}

describe('MockStakeTableV2ContractImpl', () => {
  describe('read', () => {
    it('should have the correct contract address', async () => {
      const contract = setupInitialContractState();
      expect(contract.address).toBe(
        createInitialStakeTableContractState().contractAddress,
      );
    });

    it('should return the correct ESP token contract address', async () => {
      const contract = setupInitialContractState();
      const espTokenContract = await contract.token();
      expect(espTokenContract).toBe(
        createInitialMockESPTokenContractState().contractAddress,
      );
    });

    it('should return the correct validator stake and status', async () => {
      const contract = setupInitialContractState();
      for (const [
        address,
        [stake, status],
      ] of createInitialStakeTableContractState().validators) {
        const validator = await contract.validator(address);
        expect(validator.stake).toBe(stake);
        expect(validator.status).toBe(status);
      }
    });

    it('should return the correct delegation amount', async () => {
      const contract = setupInitialContractState();
      for (const [
        validatorAddress,
        delegatorsMap,
      ] of createInitialStakeTableContractState().delegations) {
        for (const [delegatorAddress, amount] of delegatorsMap) {
          const retrievedAmount = await contract.delegation(
            delegatorAddress,
            validatorAddress,
          );
          expect(retrievedAmount).toBe(amount);
        }
      }
    });

    it('should return the correct contract version', async () => {
      const contract = setupInitialContractState();
      const version = await contract.getVersion();
      expect(version).toEqual([2, 0, 0]);
    });

    it('should return the correct pauser role', async () => {
      const contract = setupInitialContractState();
      const pauserRole = await contract.PAUSER_ROLE();
      expect(pauserRole).toBe(
        createInitialStakeTableContractState().pauserRole,
      );
    });

    it('should return the correct min commission increase interval', async () => {
      const contract = setupInitialContractState();
      const interval = await contract.minCommissionIncreaseInterval();
      expect(interval).toBe(
        createInitialStakeTableContractState().minCommissionIncreaseInterval,
      );
    });

    it('should return the correct max commission increase', async () => {
      const contract = setupInitialContractState();
      const maxIncrease = await contract.maxCommissionIncrease();
      expect(maxIncrease).toBe(
        createInitialStakeTableContractState().maxCommissionIncrease,
      );
    });

    it('should return the correct active stake', async () => {
      const contract = setupInitialContractState();
      const activeStake = await contract.activeStake();
      const expectedActiveStake = Array.from(
        createInitialStakeTableContractState().validators.values(),
      ).reduce(
        (acc, [stake, status]) =>
          status === ValidatorStatus.active ? acc + stake : acc,
        0n,
      );
      expect(activeStake).toBe(expectedActiveStake);
    });

    it('should return the correct commission tracking data', async () => {
      const contract = setupInitialContractState();
      for (const [
        validatorAddress,
        trackingData,
      ] of createInitialStakeTableContractState().commissionTracking) {
        const retrievedTrackingData =
          await contract.commissionTracking(validatorAddress);
        expect(retrievedTrackingData).toEqual(trackingData);
      }
    });

    // it('should return false for unknown BLS keys', async () => {
    //   const contract = setupInitialContractState();
    //   const blsKeyHash: `0x${string}` =
    //     '0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    //   const exists = await contract.blsKey(blsKeyHash);
    //   expect(exists).toBe(false);
    // });

    it('should return 0 for non-exited validators', async () => {
      const contract = setupInitialContractState();
      const nonExitedValidator: `0x${string}` =
        '0xBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
      const exitEpoch = await contract.validatorExit(nonExitedValidator);
      expect(exitEpoch).toBe(0n);
    });

    it('should return [0, 0] for non-existent undelegations', async () => {
      const contract = setupInitialContractState();
      const nonExistentValidator: `0x${string}` =
        '0xCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC';
      const nonExistentDelegator: `0x${string}` =
        '0xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
      const undelegation = await contract.undelegation(
        nonExistentValidator,
        nonExistentDelegator,
      );
      expect(undelegation.amount).toEqual(0n);
      expect(undelegation.timestamp).toEqual(0n);
    });

    it('should return the correct exit escrow period', async () => {
      const contract = setupInitialContractState();
      const exitEscrowPeriod = await contract.exitEscrowPeriod();
      expect(exitEscrowPeriod).toBe(
        createInitialStakeTableContractState().exitEscrowPeriod,
      );
    });
  });

  describe('write', () => {
    describe('delegate', () => {
      it('should throw an error if a negative amount is supplied', async () => {
        const contract = setupInitialContractState(
          undefined,
          undefined,
        ).replaceAccountAddress(ACCOUNT1);
        const validatorAddress = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[0];
        await expect(
          contract.delegate(validatorAddress, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if no active account address is set', async () => {
        const contract = setupInitialContractState();
        const validatorAddress = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[0];
        await expect(
          contract.delegate(validatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the validator does not exist', async () => {
        const contract =
          setupInitialContractState().replaceAccountAddress(ACCOUNT1);
        const invalidValidatorAddress: `0x${string}` =
          '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
        await expect(
          contract.delegate(invalidValidatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the validator is not active', async () => {
        // Set a validator to inactive
        const inactiveValidatorAddress = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[50];

        const contract =
          setupInitialContractState().replaceAccountAddress(ACCOUNT1);
        await expect(
          contract.delegate(inactiveValidatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the delegator has insufficient balance', async () => {
        const contract =
          setupInitialContractState().replaceAccountAddress(ACCOUNT2);
        const validatorAddress = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[0];
        await expect(
          contract.delegate(
            validatorAddress,
            400_000_000_000_000_000_000_000_000n,
          ),
        ).rejects.toThrowError();
      });

      it('should throw an error if the delegator has not approved enough tokens', async () => {
        const contract =
          setupInitialContractState().replaceAccountAddress(ACCOUNT1);
        const validatorAddress = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[0];
        await expect(
          contract.delegate(
            validatorAddress,
            200_000_000_000_000_000_000_000_000n,
          ),
        ).rejects.toThrowError();
      });

      it('should successfully test the full flows', async () => {
        // Approve the contract to spend tokens on behalf of ACCOUNT1
        const l1Methods = setupInitialL1Methods();
        const espTokenContract =
          setupInitialESPTokenContractState(l1Methods).replaceAccountAddress(
            ACCOUNT1,
          );
        const contract = setupInitialContractState(
          l1Methods,
          espTokenContract,
        ).replaceAccountAddress(ACCOUNT1);

        const initialAccount1Balance =
          await espTokenContract.balanceOf(ACCOUNT1);
        // const initialContractBalance = await espTokenContract.balanceOf(
        //   contract.address,
        // );

        const delegationAmount = 100_000_000_000_000_000_000_000_000n;
        await expect(
          espTokenContract.approve(
            contract.address,
            0xffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffffn,
          ),
        ).resolves.not.toThrowError();

        // update the contract state
        const validatorAddress0 = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[0];
        const validatorAddress1 = Array.from(
          createInitialStakeTableContractState().validators.keys(),
        )[1];

        await expect(
          contract.delegate(validatorAddress0, delegationAmount),
        ).resolves.not.toThrowError();

        // Verify that the delegation was recorded
        await expect(
          contract.delegation(validatorAddress0, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Verify that the ESP token balance was updated
        await expect(espTokenContract.balanceOf(ACCOUNT1)).resolves.toBe(
          initialAccount1Balance - delegationAmount,
        );

        await expect(
          espTokenContract.balanceOf(contract.address),
        ).resolves.toBe(delegationAmount);

        // Undelegate the tokens
        await expect(
          contract.undelegate(validatorAddress0, delegationAmount),
        ).resolves.not.toThrowError();

        // Verify that the undelegation was recorded
        const undelegation = await contract.undelegation(
          validatorAddress0,
          ACCOUNT1,
        );
        expect(undelegation.amount).toBe(delegationAmount);

        // Wait for the exit escrow period to pass
        await sleep(500);

        // Withdraw the undelegated tokens

        await expect(
          contract.claimWithdrawal(validatorAddress0),
        ).resolves.not.toThrowError();

        // Verify that the undelegation record has been cleared
        const finalUndelegation = await contract.undelegation(
          validatorAddress0,
          ACCOUNT1,
        );
        expect(finalUndelegation.amount).toBe(0n);

        // Verify that the ESP token balance was updated after withdrawal
        await expect(espTokenContract.balanceOf(ACCOUNT1)).resolves.toBe(
          initialAccount1Balance,
        );

        await expect(
          contract.delegate(validatorAddress1, delegationAmount),
        ).resolves.not.toThrowError();

        // Verify that the delegation was recorded
        await expect(
          contract.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Perform a Validator Exit
        const validatorContract =
          contract.replaceAccountAddress(validatorAddress1);

        await expect(
          validatorContract.deregisterValidator(),
        ).resolves.not.toThrowError();

        const expectedExit = BigInt(Date.now());
        await expect(
          contract.validatorExit(validatorAddress1),
        ).resolves.toBeGreaterThanOrEqual(expectedExit);
        await expect(
          contract.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Wait for the exit escrow period to pass
        await sleep(500);

        // Claim the Validator Exit
        await expect(
          contract.claimValidatorExit(validatorAddress1),
        ).resolves.not.toThrowError();

        await expect(
          contract.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(0n);
        await expect(espTokenContract.balanceOf(ACCOUNT1)).resolves.toBe(
          initialAccount1Balance,
        );
      });
    });
  });
});
