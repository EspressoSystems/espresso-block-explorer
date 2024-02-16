import { RetrieverContext } from '../components/page_sections/block_detail_content/BlockDetailContent';
import { BlockSummaryEntry } from '../types/data_source/block_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import { firstWhereIterable } from '../types/functional';
let allBlocks: null | Promise<Iterable<BlockSummaryEntry>> = null;

function ensureAllBlocksArePopulated() {
  if (allBlocks === null) {
    allBlocks = getAllBlocks();
  }

  return allBlocks;
}

async function getAllBlocks(): Promise<Iterable<BlockSummaryEntry>> {
  const results: BlockSummaryEntry[] = [];
  for await (const block of generateAllBlocks()) {
    results.push({
      height: block.height,
      proposer: block.proposer,
      transactions: block.numTransactions,
      size: block.size,
      time: block.time,
    });
  }

  return results;
}

export interface ProvideFakeBlockDetailDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideFakeBlockDetailDataSource: React.FC<
  ProvideFakeBlockDetailDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve(key) {
          const data = Array.from(await ensureAllBlocksArePopulated());
          const block = firstWhereIterable(
            data,
            (block) => block.height === key,
          );

          if (!block) {
            throw new Error('Not Found');
          }

          return block;
        },
      }}
    />
  );
};

export default ProvideFakeBlockDetailDataSource;
