import { AsyncSnapshot } from '@/components/data';
import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import {
  RainbowKitAccountAddressContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit/contexts/contexts';
import Text from '@/text/Text';
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  Transaction,
  TransactionReceipt,
  WriteContractAsync,
  WriteContractAsyncComponentIdleContext,
  WriteContractAsyncState,
} from '../write_contract';

const FAKE_FROM_ADDRESS: `0x${string}` =
  '0x1234567890abcdef1234567890abcdef12345678';

const FAKE_TO_ADDRESS: `0x${string}` =
  '0xabcdef1234567890abcdef1234567890abcdef12';

const FAKE_BLOCK_HASH: `0x${string}` =
  '0x5e1b5f3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e';

const FAKE_TXN_HASH: `0x${string}` =
  '0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd';

const FAKE_RECEIPT: TransactionReceipt = {
  chainId: 31337,
  to: FAKE_TO_ADDRESS,
  from: FAKE_FROM_ADDRESS,
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: 21000n,
  logsBloom:
    '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash:
    '0x5e1b5f3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e5e6c3c3e',
  transactionHash: FAKE_TXN_HASH,
  logs: [],
  blockNumber: 123456n,
  cumulativeGasUsed: 21000n,
  effectiveGasPrice: 1000000000n,
  status: 'success',
  type: 'legacy',
};

const FAKE_TRANSACTION: Transaction = {
  type: 'legacy',
  chainId: 31337,
  blockHash: FAKE_BLOCK_HASH,
  blockNumber: 123456n,
  from: FAKE_FROM_ADDRESS,
  gas: 21000n,
  hash: FAKE_TXN_HASH,
  input: '0x',
  nonce: 0,
  r: '0x',
  s: '0x',
  to: FAKE_TO_ADDRESS,
  transactionIndex: 1,
  typeHex: '0x0',
  v: 1n,
  value: 0n,

  // Access List and stuff

  // Legacy Fee Values
  gasPrice: 1000000000n,
};

interface ExampleProps {
  initialState?: WriteContractAsyncState;
  account?: `0x${string}`;
}

const Example: React.FC<ExampleProps> = (props) => {
  const {
    initialState = WriteContractAsyncState.withNothing(),
    account = '0x1234567890abcdef1234567890abcdef12345678',
  } = props;
  return (
    <RainbowKitMountedContext.Provider value={true}>
      <RainbowKitAccountAddressContext.Provider value={account}>
        <WriteContractAsyncComponentIdleContext.Provider
          value={() => <Text text="Do you want something?" />}
        >
          <WriteContractAsync initialState={initialState} />
        </WriteContractAsyncComponentIdleContext.Provider>
      </RainbowKitAccountAddressContext.Provider>
    </RainbowKitMountedContext.Provider>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/Page Sections/Write Contract Progress/States',
  component: Example,
  argTypes: {
    initialState: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Idle: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing(),
  },
};

export const Submitted: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(
      AsyncSnapshot.waiting(),
    ),
  },
};

export const SubmissionFailure: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(
      AsyncSnapshot.withError(AsyncState.done, new Error('Submission failed')),
    ),
  },
};

export const SubmissionSuccess: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing().withTransactionHash(
      AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
    ),
  },
};

export const RetrievingReceipt: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(AsyncSnapshot.waiting()),
  },
};

export const RetrieveReceiptFailure: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(
        AsyncSnapshot.withError(AsyncState.done, new Error('Receipt failed')),
      ),
  },
};

export const RetrieveReceiptSuccess: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(
        AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT),
      ),
  },
};

export const RetrievingTransaction: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(
        AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT),
      )
      .withTransaction(AsyncSnapshot.waiting()),
  },
};

export const RetrieveTransactionFailure: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(
        AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT),
      )
      .withTransaction(
        AsyncSnapshot.withError(
          AsyncState.done,
          new Error('Transaction failed'),
        ),
      ),
  },
};

export const RetrieveTransactionSuccess: Story = {
  args: {
    initialState: WriteContractAsyncState.withNothing()
      .withTransactionHash(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TXN_HASH),
      )
      .withTransactionReceipt(
        AsyncSnapshot.withData(AsyncState.done, FAKE_RECEIPT),
      )
      .withTransaction(
        AsyncSnapshot.withData(AsyncState.done, FAKE_TRANSACTION),
      ),
  },
};
