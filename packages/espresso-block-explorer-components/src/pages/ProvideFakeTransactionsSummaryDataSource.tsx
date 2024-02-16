import { compareArrayBuffer } from '..';
import { RetrieverContext } from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import { TransactionSummaryEntry } from '../types/data_source/transaction_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import {
  dropWhileAsyncIterable,
  expandAsyncIterator,
  foldRAsyncIterator,
  reverseAsyncIterable,
  reverseAsyncIterator,
  takeAsyncIterable,
} from '../types/functional_async';

async function* getAllBlocks(): AsyncGenerator<TransactionSummaryEntry> {
  const iterable = expandAsyncIterator(
    reverseAsyncIterator(generateAllBlocks()),
    (block) => reverseAsyncIterable(block.transactions),
  );

  for await (const transaction of iterable) {
    yield {
      hash: transaction.hash,
      block: transaction.block,
      namespaces: transaction.tree.map((entry) => entry.namespace),
      time: transaction.time,
    };
  }
}

export interface ProvideFakeTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideFakeTransactionsSummaryDataSource: React.FC<
  ProvideFakeTransactionsSummaryDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const iterable = takeAsyncIterable(
            dropWhileAsyncIterable(getAllBlocks(), (txn) =>
              Boolean(
                key.startAfterTransaction &&
                  compareArrayBuffer(txn.hash, key.startAfterTransaction) !== 0,
              ),
            ),
            key.transactionsPerPage,
          );

          const data = await foldRAsyncIterator(
            (acc, next) => {
              acc.push(next);
              return Promise.resolve(acc);
            },
            Promise.resolve([] as TransactionSummaryEntry[]),
            iterable,
          );

          return data;
        },
      }}
    />
  );
};

export default ProvideFakeTransactionsSummaryDataSource;
