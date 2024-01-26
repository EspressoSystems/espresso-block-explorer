import { RetrieverContext } from '../components/page_sections/transaction_summary_data_table/TransactionSummaryDataTable';
import { TransactionSummary } from '../types/data_source/transaction_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import {
  dropAsyncIterable,
  expandAsyncIterator,
  foldRAsyncIterator,
  reverseAsyncIterable,
  reverseAsyncIterator,
  takeAsyncIterable,
} from '../types/functional_async';

async function* getAllBlocks(): AsyncGenerator<TransactionSummary> {
  for await (const transaction of expandAsyncIterator(
    reverseAsyncIterator(generateAllBlocks()),
    (block) => reverseAsyncIterable(block.transactions),
  )) {
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
            dropAsyncIterable(getAllBlocks(), key.page * key.resultsPerPage),
            key.resultsPerPage,
          );

          const data = await foldRAsyncIterator(
            (acc, next) => {
              acc.push(next);
              return Promise.resolve(acc);
            },
            Promise.resolve([] as TransactionSummary[]),
            iterable,
          );
          console.log('<<< HERE data.length', data.length);

          return data;
        },
      }}
    />
  );
};

export default ProvideFakeTransactionsSummaryDataSource;
