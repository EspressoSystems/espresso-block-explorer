import { sleep } from '@/async/sleep';
import { ValidatorStatus } from '@/contracts/stake_table/stake_table_interface';
import { StakeTableV2Contract } from '@/contracts/stake_table_v2/stake_table_v2_interface';
import { hexArrayBufferCodec } from '@/convert/codec';
import { nodeList } from '@/data_source/fake_data_source';
import { mapIterable } from '@/functional/functional';
import { describe, it } from 'vitest';
import {
  MockESPTokenContractImpl,
  MockESPTokenContractState,
} from '../esp_token_contract';
import {
  MockStakeTableV2ContractImpl,
  StakeTableState,
} from '../stake_table_v2_contract';

const ACCOUNT1: `0x${string}` = '0x1111111111111111111111111111111111111111';
const ACCOUNT2: `0x${string}` = '0x2222222222222222222222222222222222222222';

const INITIAL_TOKEN_CONTRACT_STATE: MockESPTokenContractState = {
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
  actions: [],
  actionMap: new Map(),
  lastUpdate: new Date(),
};

const INITIAL_STAKE_TABLE_CONTRACT_STATE: StakeTableState = {
  contractAddress: '0x0000000000000000000000000000000000000001',
  espToken: setupInitialESPTokenContractState()[1],
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
  actions: [],
  actionMap: new Map(),
  lastUpdate: new Date(),
};

function setupInitialESPTokenContractState(
  address: null | `0x${string}` = null,
  state: MockESPTokenContractState = INITIAL_TOKEN_CONTRACT_STATE,
) {
  return [
    state,
    new MockESPTokenContractImpl(state, () => {}, address),
  ] as const;
}

function setupInitialContractState(
  address: null | `0x${string}` = null,
  state: StakeTableState = INITIAL_STAKE_TABLE_CONTRACT_STATE,
): [StakeTableState, StakeTableV2Contract] {
  return [
    state,
    new MockStakeTableV2ContractImpl(state, () => {}, address),
  ] as const;
}

describe('MockStakeTableV2ContractImpl', () => {
  describe('read', () => {
    it('should have the correct contract address', async () => {
      const [state, contract] = setupInitialContractState();
      expect(contract.address).toBe(state.contractAddress);
    });

    it('should return the correct ESP token contract address', async () => {
      const [state, contract] = setupInitialContractState();
      const espTokenContract = await contract.token();
      expect(espTokenContract).toBe(state.espToken.address);
    });

    it('should return the correct validator stake and status', async () => {
      const [state, contract] = setupInitialContractState();
      for (const [address, [stake, status]] of state.validators) {
        const [retrievedStake, retrievedStatus] =
          await contract.validator(address);
        expect(retrievedStake).toBe(stake);
        expect(retrievedStatus).toBe(status);
      }
    });

    it('should return the correct delegation amount', async () => {
      const [state, contract] = setupInitialContractState();
      for (const [validatorAddress, delegatorsMap] of state.delegations) {
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
      const [, contract] = setupInitialContractState();
      const version = await contract.getVersion();
      expect(version).toEqual([2, 0, 0]);
    });

    it('should return the correct pauser role', async () => {
      const [state, contract] = setupInitialContractState();
      const pauserRole = await contract.PAUSER_ROLE();
      expect(pauserRole).toBe(state.pauserRole);
    });

    it('should return the correct min commission increase interval', async () => {
      const [state, contract] = setupInitialContractState();
      const interval = await contract.minCommissionIncreaseInterval();
      expect(interval).toBe(state.minCommissionIncreaseInterval);
    });

    it('should return the correct max commission increase', async () => {
      const [state, contract] = setupInitialContractState();
      const maxIncrease = await contract.maxCommissionIncrease();
      expect(maxIncrease).toBe(state.maxCommissionIncrease);
    });

    it('should return the correct active stake', async () => {
      const [state, contract] = setupInitialContractState();
      const activeStake = await contract.activeStake();
      const expectedActiveStake = Array.from(state.validators.values()).reduce(
        (acc, [stake, status]) =>
          status === ValidatorStatus.active ? acc + stake : acc,
        0n,
      );
      expect(activeStake).toBe(expectedActiveStake);
    });

    it('should return the correct commission tracking data', async () => {
      const [state, contract] = setupInitialContractState();
      for (const [validatorAddress, trackingData] of state.commissionTracking) {
        const retrievedTrackingData =
          await contract.commissionTracking(validatorAddress);
        expect(retrievedTrackingData).toEqual(trackingData);
      }
    });

    // it('should return false for unknown BLS keys', async () => {
    //   const [, contract] = setupInitialContractState();
    //   const blsKeyHash: `0x${string}` =
    //     '0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    //   const exists = await contract.blsKey(blsKeyHash);
    //   expect(exists).toBe(false);
    // });

    it('should return 0 for non-exited validators', async () => {
      const [, contract] = setupInitialContractState();
      const nonExitedValidator: `0x${string}` =
        '0xBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';
      const exitEpoch = await contract.validatorExit(nonExitedValidator);
      expect(exitEpoch).toBe(0n);
    });

    it('should return [0, 0] for non-existent undelegations', async () => {
      const [, contract] = setupInitialContractState();
      const nonExistentValidator: `0x${string}` =
        '0xCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC';
      const nonExistentDelegator: `0x${string}` =
        '0xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD';
      const undelegation = await contract.undelegation(
        nonExistentValidator,
        nonExistentDelegator,
      );
      expect(undelegation).toEqual([0n, 0n]);
    });

    it('should return the correct exit escrow period', async () => {
      const [state, contract] = setupInitialContractState();
      const exitEscrowPeriod = await contract.exitEscrowPeriod();
      expect(exitEscrowPeriod).toBe(state.exitEscrowPeriod);
    });
  });

  describe('write', () => {
    let tokenState: MockESPTokenContractState = {
      ...INITIAL_TOKEN_CONTRACT_STATE,
    };
    const mutateToken: React.Dispatch<
      React.SetStateAction<MockESPTokenContractState>
    > = (newStateOrFn) => {
      if (typeof newStateOrFn === 'function') {
        tokenState = newStateOrFn(tokenState);
        return;
      }
      tokenState = newStateOrFn;
    };
    let state: StakeTableState = {
      ...INITIAL_STAKE_TABLE_CONTRACT_STATE,
      espToken: new MockESPTokenContractImpl(
        tokenState,
        mutateToken,
        INITIAL_STAKE_TABLE_CONTRACT_STATE.contractAddress,
      ),
    };

    const mutate: React.Dispatch<React.SetStateAction<StakeTableState>> = (
      newStateOrFn,
    ) => {
      const nextEspToken = new MockESPTokenContractImpl(
        tokenState,
        mutateToken,
        state.contractAddress,
      );
      if (typeof newStateOrFn === 'function') {
        state = newStateOrFn({
          ...state,
          espToken: nextEspToken,
        });
        return;
      }
      state = {
        ...newStateOrFn,
        espToken: nextEspToken,
      };
    };

    describe('delegate', () => {
      it('should throw an error if a negative amount is supplied', async () => {
        const contract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );
        const validatorAddress = Array.from(state.validators.keys())[0];
        await expect(
          contract.delegate(validatorAddress, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if no active account address is set', async () => {
        const contract = new MockStakeTableV2ContractImpl(state, mutate, null);
        const validatorAddress = Array.from(state.validators.keys())[0];
        await expect(
          contract.delegate(validatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the validator does not exist', async () => {
        const contract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );
        const invalidValidatorAddress: `0x${string}` =
          '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
        await expect(
          contract.delegate(invalidValidatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the validator is not active', async () => {
        // Set a validator to inactive
        const inactiveValidatorAddress = Array.from(
          state.validators.keys(),
        )[50];

        mutate((prevState) => ({
          ...prevState,
          validators: new Map(prevState.validators).set(
            inactiveValidatorAddress,
            [
              prevState.validators.get(inactiveValidatorAddress)![0],
              ValidatorStatus.exited,
            ],
          ),
        }));

        const contract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );
        await expect(
          contract.delegate(inactiveValidatorAddress, 1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the delegator has insufficient balance', async () => {
        const contract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT2,
        );
        const validatorAddress = Array.from(state.validators.keys())[0];
        await expect(
          contract.delegate(
            validatorAddress,
            400_000_000_000_000_000_000_000_000n,
          ),
        ).rejects.toThrowError();
      });

      it('should throw an error if the delegator has not approved enough tokens', async () => {
        const contract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );
        const validatorAddress = Array.from(state.validators.keys())[0];
        await expect(
          contract.delegate(
            validatorAddress,
            200_000_000_000_000_000_000_000_000n,
          ),
        ).rejects.toThrowError();
      });

      it('should successfully test the full flows', async () => {
        // Approve the contract to spend tokens on behalf of ACCOUNT1
        const espTokenContract = new MockESPTokenContractImpl(
          tokenState,
          mutateToken,
          ACCOUNT1,
        );

        const delegationAmount = 100_000_000_000_000_000_000_000_000n;
        await expect(
          espTokenContract.approve(
            state.contractAddress,
            0xffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffff_ffffn,
          ),
        ).resolves.not.toThrowError();
        state = {
          ...state,
          espToken: new MockESPTokenContractImpl(
            tokenState,
            mutateToken,
            state.contractAddress,
          ),
        };

        // update the contract state
        const contract0 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );
        const validatorAddress0 = Array.from(state.validators.keys())[0];
        const validatorAddress1 = Array.from(state.validators.keys())[1];

        await expect(
          contract0.delegate(validatorAddress0, delegationAmount),
        ).resolves.not.toThrowError();

        const contract1 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        // Verify that the delegation was recorded
        await expect(
          contract1.delegation(validatorAddress0, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Verify that the ESP token balance was updated
        await expect(state.espToken.balanceOf(ACCOUNT1)).resolves.toBe(
          (await espTokenContract.balanceOf(ACCOUNT1)) - delegationAmount,
        );

        await expect(
          state.espToken.balanceOf(state.contractAddress),
        ).resolves.toBe(delegationAmount);

        // Undelegate the tokens
        await expect(
          contract1.undelegate(validatorAddress0, delegationAmount),
        ).resolves.not.toThrowError();

        const contract2 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        // Verify that the undelegation was recorded
        const [undelegatedAmount] = await contract2.undelegation(
          validatorAddress0,
          ACCOUNT1,
        );
        expect(undelegatedAmount).toBe(delegationAmount);

        // Wait for the exit escrow period to pass
        await sleep(500);

        // Withdraw the undelegated tokens

        await expect(
          contract2.claimWithdrawal(validatorAddress0),
        ).resolves.not.toThrowError();

        const contract3 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        // Verify that the undelegation record has been cleared
        const [finalUndelegatedAmount] = await contract3.undelegation(
          validatorAddress0,
          ACCOUNT1,
        );
        expect(finalUndelegatedAmount).toBe(0n);

        // Verify that the ESP token balance was updated after withdrawal
        await expect(state.espToken.balanceOf(ACCOUNT1)).resolves.toBe(
          await espTokenContract.balanceOf(ACCOUNT1),
        );

        await expect(
          contract3.delegate(validatorAddress1, delegationAmount),
        ).resolves.not.toThrowError();

        const contract4 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        // Verify that the delegation was recorded
        await expect(
          contract4.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Perform a Validator Exit
        const validatorContract = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          validatorAddress1,
        );

        await expect(
          validatorContract.deregisterValidator(),
        ).resolves.not.toThrowError();

        const contract5 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        const expectedExit = BigInt(Date.now());
        await expect(
          contract5.validatorExit(validatorAddress1),
        ).resolves.toBeGreaterThanOrEqual(expectedExit);
        await expect(
          contract5.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(delegationAmount);

        // Wait for the exit escrow period to pass
        await sleep(500);

        // Claim the Validator Exit
        await expect(
          contract5.claimValidatorExit(validatorAddress1),
        ).resolves.not.toThrowError();

        const contract6 = new MockStakeTableV2ContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        await expect(
          contract6.delegation(validatorAddress1, ACCOUNT1),
        ).resolves.toBe(0n);
        await expect(state.espToken.balanceOf(ACCOUNT1)).resolves.toBe(
          await espTokenContract.balanceOf(ACCOUNT1),
        );
      });
    });
  });
});
