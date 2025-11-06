import React from 'react';
import { describe, it } from 'vitest';
import {
  MockESPTokenContractImpl,
  MockESPTokenContractState,
} from '../esp_token_contract';

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

function setupInitialContractState(
  address: null | `0x${string}` = null,
  state: MockESPTokenContractState = INITIAL_TOKEN_CONTRACT_STATE,
) {
  return [
    state,
    new MockESPTokenContractImpl(state, () => {}, address),
  ] as const;
}

describe('MockESPTokenContractImpl', () => {
  describe('read', () => {
    it('should return the correct contract address', async () => {
      const [state, contract] = setupInitialContractState();
      expect(contract.address).toBe(state.contractAddress);
    });

    it('should return the correct name', async () => {
      const [state, contract] = setupInitialContractState();
      expect(await contract.name()).toBe(state.name);
    });

    it('should return the correct symbol', async () => {
      const [state, contract] = setupInitialContractState();
      expect(await contract.symbol()).toBe(state.symbol);
    });

    it('should return the correct decimals', async () => {
      const [state, contract] = setupInitialContractState();
      expect(await contract.decimals()).toBe(state.decimals);
    });

    it('should return the correct total supply', async () => {
      const [state, contract] = setupInitialContractState();
      expect(await contract.totalSupply()).toBe(state.totalSupply);
    });

    it('should return the correct balance for an address', async () => {
      const [state, contract] = setupInitialContractState();
      for (const [address, balance] of state.balances.entries()) {
        expect(await contract.balanceOf(address)).toBe(balance);
      }
    });

    it('should return zero balance for an address with no balance', async () => {
      const [, contract] = setupInitialContractState();
      const unknownAddress: `0x${string}` =
        '0x3333333333333333333333333333333333333333';
      expect(await contract.balanceOf(unknownAddress)).toBe(0n);
    });

    it('should return the correct allowance for an owner and spender', async () => {
      const [state, contract] = setupInitialContractState(null, {
        ...INITIAL_TOKEN_CONTRACT_STATE,
        allowances: new Map(),
      });

      // Set up an allowance in the state for testing
      const owner: `0x${string}` = ACCOUNT1;
      const spender: `0x${string}` = ACCOUNT2;
      const allowanceValue = 100_000_000_000_000_000_000n;
      state.allowances.set(owner, new Map([[spender, allowanceValue]]));

      expect(await contract.allowance(owner, spender)).toBe(allowanceValue);
    });

    it('should return zero allowance for an owner and spender with no allowance', async () => {
      const [, contract] = setupInitialContractState();
      const owner: `0x${string}` = ACCOUNT1;
      const spender: `0x${string}` = ACCOUNT2;
      expect(await contract.allowance(owner, spender)).toBe(0n);
    });
  });

  describe('write', () => {
    describe('transfer', () => {
      let state = { ...INITIAL_TOKEN_CONTRACT_STATE };
      const mutate: React.Dispatch<
        React.SetStateAction<MockESPTokenContractState>
      > = (newStateOrFn) => {
        if (typeof newStateOrFn === 'function') {
          state = newStateOrFn(state);
          return;
        }
        state = newStateOrFn;
      };

      it('should throw an error if no active account address is set', async () => {
        const contract = new MockESPTokenContractImpl(state, mutate, null);
        await expect(contract.transfer(ACCOUNT2, 1000n)).rejects.toThrowError();
      });

      it('should throw an error if the transfer value is negative', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        await expect(
          contract.transfer(ACCOUNT2, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the sender has insufficient balance', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const senderBalance = await contract.balanceOf(ACTIVE_ACCOUNT);
        const transferAmount = senderBalance + 1n;

        await expect(
          contract.transfer(ACCOUNT2, transferAmount),
        ).rejects.toThrowError();
      });

      it('should transfer tokens correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const transferAmount = 200_000_000_000_000_000_000n;
        const initialSenderBalance = await contract.balanceOf(ACTIVE_ACCOUNT);
        const initialRecipientBalance = await contract.balanceOf(ACCOUNT2);

        await contract.transfer(ACCOUNT2, transferAmount);

        // The State has been mutated, but the contract state inside the
        // contract is not mutated.
        const newContract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const finalSenderBalance = await newContract.balanceOf(ACTIVE_ACCOUNT);
        const finalRecipientBalance = await newContract.balanceOf(ACCOUNT2);

        expect(finalSenderBalance).toBe(initialSenderBalance - transferAmount);
        expect(finalRecipientBalance).toBe(
          initialRecipientBalance + transferAmount,
        );
      });
    });

    describe('approve', () => {
      let state = { ...INITIAL_TOKEN_CONTRACT_STATE };
      const mutate: React.Dispatch<
        React.SetStateAction<MockESPTokenContractState>
      > = (newStateOrFn) => {
        if (typeof newStateOrFn === 'function') {
          state = newStateOrFn(state);
          return;
        }
        state = newStateOrFn;
      };

      it('should throw an error if no active account address is set', async () => {
        const contractWithNoAccount = new MockESPTokenContractImpl(
          state,
          mutate,
          null,
        );

        await expect(
          contractWithNoAccount.approve(ACCOUNT2, 1000n),
        ).rejects.toThrowError();
      });

      it('should set the allowance correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const approveAmount = 150_000_000_000_000_000_000n;

        await contract.approve(ACCOUNT2, approveAmount);

        // The State has been mutated, but the contract state inside the
        // contract is not mutated.
        const newContract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const allowance = await newContract.allowance(ACTIVE_ACCOUNT, ACCOUNT2);
        expect(allowance).toBe(approveAmount);
      });

      it('should overwrite an existing allowance', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract0 = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const initialApproveAmount = 100_000_000_000_000_000_000n;
        await contract0.approve(ACCOUNT2, initialApproveAmount);
        const contract1 = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const newApproveAmount = 250_000_000_000_000_000_000n;
        await contract1.approve(ACCOUNT2, newApproveAmount);

        // The State has been mutated, but the contract state inside the
        // contract is not mutated.
        const contract2 = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const allowance = await contract2.allowance(ACTIVE_ACCOUNT, ACCOUNT2);
        expect(allowance).toBe(newApproveAmount);
      });
    });

    describe('transferFrom', () => {
      let state = { ...INITIAL_TOKEN_CONTRACT_STATE };
      const mutate: React.Dispatch<
        React.SetStateAction<MockESPTokenContractState>
      > = (newStateOrFn) => {
        if (typeof newStateOrFn === 'function') {
          state = newStateOrFn(state);
          return;
        }
        state = newStateOrFn;
      };

      it('should throw an error if the transfer value is negative', async () => {
        const contract = new MockESPTokenContractImpl(state, mutate, null);

        await expect(
          contract.transferFrom(ACCOUNT1, ACCOUNT2, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if there is insufficient allowance', async () => {
        const contract = new MockESPTokenContractImpl(state, mutate, null);

        await expect(
          contract.transferFrom(ACCOUNT1, ACCOUNT2, 1_000_000_000_000n),
        ).rejects.toThrowError();
      });

      it('should transfer tokens correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT2;
        const contractApprove = new MockESPTokenContractImpl(
          state,
          mutate,
          ACCOUNT1,
        );

        const approveAmount = 200_000_000_000_000_000_000n;
        await contractApprove.approve(ACTIVE_ACCOUNT, approveAmount);

        const contractTransferFrom = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const transferAmount = 150_000_000_000_000_000_000n;
        const initialSenderBalance =
          await contractTransferFrom.balanceOf(ACCOUNT1);
        const initialRecipientBalance =
          await contractTransferFrom.balanceOf(ACCOUNT2);

        await contractTransferFrom.transferFrom(
          ACCOUNT1,
          ACCOUNT2,
          transferAmount,
        );

        // The State has been mutated, but the contract state inside the
        // contract is not mutated.
        const newContract = new MockESPTokenContractImpl(
          state,
          mutate,
          ACTIVE_ACCOUNT,
        );

        const finalSenderBalance = await newContract.balanceOf(ACCOUNT1);
        const finalRecipientBalance = await newContract.balanceOf(ACCOUNT2);
        // const finalAllowance = await newContract.allowance(ACCOUNT1, ACCOUNT2);

        expect(finalSenderBalance).toBe(initialSenderBalance - transferAmount);
        expect(finalRecipientBalance).toBe(
          initialRecipientBalance + transferAmount,
        );
        // expect(finalAllowance).toBe(approveAmount - transferAmount);
      });
    });
  });
});
