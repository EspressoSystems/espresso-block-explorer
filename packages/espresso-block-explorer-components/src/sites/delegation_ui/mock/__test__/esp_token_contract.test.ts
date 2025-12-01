import { describe, it } from 'vitest';
import {
  MockESPTokenContractImpl,
  MockESPTokenContractState,
} from '../esp_token_contract';
import { L1Transaction, MockL1MethodsImpl, MockL1State } from '../l1_methods';

const ACCOUNT1: `0x${string}` = '0x1111111111111111111111111111111111111111';
const ACCOUNT2: `0x${string}` = '0x2222222222222222222222222222222222222222';

function createInitialL1MethodsState(): Omit<MockL1State, 'hashToBlockName'> {
  const blockZero = {
    hash: '0x0000000000000000000000000000000000000000',
    parentHash: '0x',
    height: 0n,
    timestamp: 0n,
    transactions: [] as L1Transaction[],
  } as const;

  return {
    balances: new Map(),
    transactions: new Map(),
    accountAddress: null,
    pendingBlockHeight: 1n,
    pendingTransactions: [],
    transactionToBlockMap: new Map(),
    blocks: [blockZero],
    hashToBlockMap: new Map([[blockZero.hash, blockZero]]),

    contractStorage: new Map(),
  };
}

function createInitialMockESPTokenContractState(): Omit<
  MockESPTokenContractState,
  'applyTransaction'
> {
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

function setupInitialContractState(
  l1Methods: MockL1MethodsImpl = new MockL1MethodsImpl(
    createInitialL1MethodsState(),
  ),
  state: Partial<
    Omit<MockESPTokenContractState, 'applyTransaction'>
  > = createInitialMockESPTokenContractState(),
) {
  const defaultState = createInitialMockESPTokenContractState();
  return new MockESPTokenContractImpl(
    l1Methods,
    new MockESPTokenContractState(
      state.contractAddress ?? defaultState.contractAddress,
      state.version ?? defaultState.version,
      state.name ?? defaultState.name,
      state.symbol ?? defaultState.symbol,
      state.decimals ?? defaultState.decimals,
      state.totalSupply ?? defaultState.totalSupply,
      state.balances ?? defaultState.balances,
      state.allowances ?? defaultState.allowances,
      state.lastUpdate ?? defaultState.lastUpdate,
    ),
    null,
  );
}

describe('MockESPTokenContractImpl', () => {
  describe('read', () => {
    it('should return the correct contract address', async () => {
      const contract = setupInitialContractState();
      expect(contract.address).toBe(
        createInitialMockESPTokenContractState().contractAddress,
      );
    });

    it('should return the correct name', async () => {
      const contract = setupInitialContractState();
      expect(await contract.name()).toBe(
        createInitialMockESPTokenContractState().name,
      );
    });

    it('should return the correct symbol', async () => {
      const contract = setupInitialContractState();
      expect(await contract.symbol()).toBe(
        createInitialMockESPTokenContractState().symbol,
      );
    });

    it('should return the correct decimals', async () => {
      const contract = setupInitialContractState();
      expect(await contract.decimals()).toBe(
        createInitialMockESPTokenContractState().decimals,
      );
    });

    it('should return the correct total supply', async () => {
      const contract = setupInitialContractState();
      expect(await contract.totalSupply()).toBe(
        createInitialMockESPTokenContractState().totalSupply,
      );
    });

    it('should return the correct balance for an address', async () => {
      const contract = setupInitialContractState();
      for (const [
        address,
        balance,
      ] of createInitialMockESPTokenContractState().balances.entries()) {
        expect(await contract.balanceOf(address)).toBe(balance);
      }
    });

    it('should return zero balance for an address with no balance', async () => {
      const contract = setupInitialContractState();
      const unknownAddress: `0x${string}` =
        '0x3333333333333333333333333333333333333333';
      expect(await contract.balanceOf(unknownAddress)).toBe(0n);
    });

    it('should return the correct allowance for an owner and spender', async () => {
      // Set up an allowance in the state for testing
      const owner: `0x${string}` = ACCOUNT1;
      const spender: `0x${string}` = ACCOUNT2;
      const allowanceValue = 100_000_000_000_000_000_000n;

      const contract = setupInitialContractState(undefined, {
        ...createInitialMockESPTokenContractState(),
        allowances: new Map([[owner, new Map([[spender, allowanceValue]])]]),
      });

      expect(await contract.allowance(owner, spender)).toBe(allowanceValue);
    });

    it('should return zero allowance for an owner and spender with no allowance', async () => {
      const contract = setupInitialContractState();
      const owner: `0x${string}` = ACCOUNT1;
      const spender: `0x${string}` = ACCOUNT2;
      expect(await contract.allowance(owner, spender)).toBe(0n);
    });
  });

  describe('write', () => {
    describe('transfer', () => {
      it('should throw an error if no active account address is set', async () => {
        const contract = setupInitialContractState();
        await expect(contract.transfer(ACCOUNT2, 1000n)).rejects.toThrowError();
      });

      it('should throw an error if the transfer value is negative', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract =
          setupInitialContractState().replaceAccountAddress(ACTIVE_ACCOUNT);

        await expect(
          contract.transfer(ACCOUNT2, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if the sender has insufficient balance', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const contract =
          setupInitialContractState().replaceAccountAddress(ACTIVE_ACCOUNT);

        const senderBalance = await contract.balanceOf(ACTIVE_ACCOUNT);
        const transferAmount = senderBalance + 1n;

        await expect(
          contract.transfer(ACCOUNT2, transferAmount),
        ).rejects.toThrowError();
      });

      it('should transfer tokens correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const l1Methods = new MockL1MethodsImpl(createInitialL1MethodsState());
        const contract =
          setupInitialContractState(l1Methods).replaceAccountAddress(
            ACTIVE_ACCOUNT,
          );

        const transferAmount = 200_000_000_000_000_000_000n;
        const initialSenderBalance = await contract.balanceOf(ACTIVE_ACCOUNT);
        const initialRecipientBalance = await contract.balanceOf(ACCOUNT2);

        await contract.transfer(ACCOUNT2, transferAmount);

        // The State has been mutated, but the contract state inside the
        // contract is not mutated.
        l1Methods.mockAdvanceBlock();

        const finalSenderBalance = await contract.balanceOf(ACTIVE_ACCOUNT);
        const finalRecipientBalance = await contract.balanceOf(ACCOUNT2);

        expect(finalSenderBalance).toBe(initialSenderBalance - transferAmount);
        expect(finalRecipientBalance).toBe(
          initialRecipientBalance + transferAmount,
        );
      });
    });

    describe('approve', () => {
      it('should throw an error if no active account address is set', async () => {
        const contractWithNoAccount = setupInitialContractState();

        await expect(
          contractWithNoAccount.approve(ACCOUNT2, 1000n),
        ).rejects.toThrowError();
      });

      it('should set the allowance correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const l1Methods = new MockL1MethodsImpl(createInitialL1MethodsState());
        const contract =
          setupInitialContractState(l1Methods).replaceAccountAddress(
            ACTIVE_ACCOUNT,
          );

        const approveAmount = 150_000_000_000_000_000_000n;

        await contract.approve(ACCOUNT2, approveAmount);
        l1Methods.mockAdvanceBlock();

        const allowance = await contract.allowance(ACTIVE_ACCOUNT, ACCOUNT2);
        expect(allowance).toBe(approveAmount);
      });

      it('should overwrite an existing allowance', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const l1Methods = new MockL1MethodsImpl(createInitialL1MethodsState());
        const contract =
          setupInitialContractState(l1Methods).replaceAccountAddress(
            ACTIVE_ACCOUNT,
          );

        const initialApproveAmount = 100_000_000_000_000_000_000n;
        await contract.approve(ACCOUNT2, initialApproveAmount);
        l1Methods.mockAdvanceBlock();

        const newApproveAmount = 250_000_000_000_000_000_000n;
        await contract.approve(ACCOUNT2, newApproveAmount);
        l1Methods.mockAdvanceBlock();

        const allowance = await contract.allowance(ACTIVE_ACCOUNT, ACCOUNT2);
        expect(allowance).toBe(newApproveAmount);
      });
    });

    describe('transferFrom', () => {
      it('should throw an error if the transfer value is negative', async () => {
        const contract = setupInitialContractState();

        await expect(
          contract.transferFrom(ACCOUNT1, ACCOUNT2, -1000n),
        ).rejects.toThrowError();
      });

      it('should throw an error if there is insufficient allowance', async () => {
        const contract = setupInitialContractState();

        await expect(
          contract.transferFrom(ACCOUNT1, ACCOUNT2, 1_000_000_000_000n),
        ).rejects.toThrowError();
      });

      it('should transfer tokens correctly', async () => {
        const ACTIVE_ACCOUNT: `0x${string}` = ACCOUNT1;
        const l1Methods = new MockL1MethodsImpl(createInitialL1MethodsState());
        const contract =
          setupInitialContractState(l1Methods).replaceAccountAddress(
            ACTIVE_ACCOUNT,
          );

        const approveAmount = 200_000_000_000_000_000_000n;
        await contract.approve(ACCOUNT2, approveAmount);
        l1Methods.mockAdvanceBlock();
        const contractAccount2 = contract.replaceAccountAddress(ACCOUNT2);

        const transferAmount = 150_000_000_000_000_000_000n;
        const initialSenderBalance = await contractAccount2.balanceOf(ACCOUNT1);
        const initialRecipientBalance =
          await contractAccount2.balanceOf(ACCOUNT2);

        await contractAccount2.transferFrom(ACCOUNT1, ACCOUNT2, transferAmount);
        l1Methods.mockAdvanceBlock();

        const finalSenderBalance = await contractAccount2.balanceOf(ACCOUNT1);
        const finalRecipientBalance =
          await contractAccount2.balanceOf(ACCOUNT2);
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
