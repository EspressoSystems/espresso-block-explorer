import { RetrieverContext } from '../components/page_sections/transaction_detail_content/TransactionDetailContent';
import { TransactionDetailEntry } from '../types/data_source/transaction_detail/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import { compareArrayBuffer } from '../types/functional';
import {
  expandAsyncIterator,
  firstWhereAsyncIterable,
  mapAsyncIterable,
} from '../types/functional_async';

async function* getAllBlocks(): AsyncGenerator<TransactionDetailEntry> {
  for await (const transaction of expandAsyncIterator(
    generateAllBlocks(),
    (block) =>
      mapAsyncIterable(
        block.transactions,
        (transaction): Promise<TransactionDetailEntry> =>
          Promise.resolve({
            block: transaction.block,
            index: transaction.index,
            total: block.numTransactions,
            size: transaction.size,
            hash: transaction.hash,
            time: transaction.time,
            sender: transaction.sender,

            tree: transaction.tree,
          }),
      ),
  )) {
    yield transaction;
  }
}

export interface ProvideFakeTransactionDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideFakeTransactionDetailDataSource: React.FC<
  ProvideFakeTransactionDetailDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const transaction = await firstWhereAsyncIterable(
            getAllBlocks(),
            (entry) => compareArrayBuffer(entry.hash, key) === 0,
          );

          if (!transaction) {
            throw new Error('Not Found');
          }

          return transaction;
        },
      }}
    />
  );
};

export default ProvideFakeTransactionDetailDataSource;
