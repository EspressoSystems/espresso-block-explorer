import { RetrieverContext } from '../components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import { BlockSummary } from '../types/data_source/block_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import {
  dropAsyncIterable,
  foldRAsyncIterator,
  reverseAsyncIterator,
  takeAsyncIterable,
} from '../types/functional_async';

async function* getAllBlocks(): AsyncGenerator<BlockSummary> {
  for await (const block of reverseAsyncIterator(generateAllBlocks())) {
    yield {
      height: block.height,
      proposer: block.proposer,
      transactions: block.numTransactions,
      size: block.size,
      time: block.time,
    };
  }
}

export interface ProvideFakeBlocksSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideFakeBlocksSummaryDataSource: React.FC<
  ProvideFakeBlocksSummaryDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          console.log('<<< HERE FakeBlocksSummaryDataSource start', key);

          const iterable = takeAsyncIterable(
            dropAsyncIterable(getAllBlocks(), key.page * key.resultsPerPage),
            key.resultsPerPage,
          );

          const results = await foldRAsyncIterator(
            (acc, next) => {
              console.log('<<< HERE FakeBlocksSummaryDataSource fold', next);
              acc.push(next);
              return Promise.resolve(acc);
            },
            Promise.resolve([] as BlockSummary[]),
            iterable,
          );

          console.log('<<< HERE FakeBlocksSummaryDataSource', key, results);

          return results;
        },
      }}
    />
  );
};

export default ProvideFakeBlocksSummaryDataSource;
