import { RetrieverContext } from '../components/page_sections/block_summary_data_table/BlockSummaryDataTable';
import { BlockSummaryEntry } from '../types/data_source/block_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import {
  dropWhileAsyncIterable,
  foldRAsyncIterator,
  reverseAsyncIterator,
  takeAsyncIterable,
} from '../types/functional_async';

async function* getAllBlocks(): AsyncGenerator<BlockSummaryEntry> {
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
          const iterable = takeAsyncIterable(
            dropWhileAsyncIterable(
              getAllBlocks(),
              (block) =>
                key.startAtBlock !== undefined &&
                block.height > key.startAtBlock,
            ),
            key.blocksPerPage,
          );

          const results = await foldRAsyncIterator(
            (acc, next) => {
              acc.push(next);
              return Promise.resolve(acc);
            },
            Promise.resolve([] as BlockSummaryEntry[]),
            iterable,
          );

          return results;
        },
      }}
    />
  );
};

export default ProvideFakeBlocksSummaryDataSource;
