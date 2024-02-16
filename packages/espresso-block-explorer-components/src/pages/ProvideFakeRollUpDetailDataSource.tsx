import { RetrieverContext } from '../components/page_sections/rollup_detail_data_table/RollUpDetailDataTable';
import { RollUpDetailEntry } from '../types/data_source/rollup_detail/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import { firstWhereIterable } from '../types/functional';
import {
  dropAsyncIterable,
  expandAsyncIterator,
  filterAsyncIterable,
  foldRAsyncIterator,
  reverseAsyncIterable,
  reverseAsyncIterator,
  takeAsyncIterable,
} from '../types/functional_async';

async function* getAllTransactions(
  namespace: number,
): AsyncGenerator<RollUpDetailEntry> {
  const iterable = filterAsyncIterable(
    expandAsyncIterator(reverseAsyncIterator(generateAllBlocks()), (block) =>
      reverseAsyncIterable(block.transactions),
    ),
    (entry) =>
      firstWhereIterable(entry.tree, (mk) => mk.namespace === namespace) !==
      undefined,
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

const ProvideFakeRollUpDetailDataSource: React.FC<
  ProvideFakeTransactionsSummaryDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const iterable = takeAsyncIterable(
            dropAsyncIterable(
              getAllTransactions(key.namespace),
              key.page * key.resultsPerPage,
            ),
            key.resultsPerPage,
          );

          const data = await foldRAsyncIterator(
            (acc, next) => {
              acc.push(next);
              return Promise.resolve(acc);
            },
            Promise.resolve([] as RollUpDetailEntry[]),
            iterable,
          );

          return data;
        },
      }}
    />
  );
};

export default ProvideFakeRollUpDetailDataSource;
