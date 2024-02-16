import { RetrieverContext } from '../components/page_sections/rollups_summary_data_table/RollUpsSummaryDataTable';
import { RollUpSummaryEntry } from '../types/data_source/rollup_summary/types';
import { generateAllBlocks } from '../types/fake_data_source/generateFakeData';
import { mapIterable } from '../types/functional';
import { expandAsyncIterator } from '../types/functional_async';

async function getRollUpsSummary(): Promise<RollUpSummaryEntry[]> {
  const rollUpMap: Map<number, number> = new Map();

  for await (const transaction of expandAsyncIterator(
    generateAllBlocks(),
    (block) => block.transactions,
  )) {
    for (const mkEntry of transaction.tree) {
      const value = rollUpMap.get(mkEntry.namespace) ?? 0;
      rollUpMap.set(mkEntry.namespace, value + 1);
    }
  }

  return Array.from(
    mapIterable(rollUpMap.entries(), ([namespace, transactions]) => ({
      namespace,
      transactions,
    })),
  );
}

export interface ProvideFakeTransactionsSummaryDataSourceProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideFakeRollUpsSummaryDataSource: React.FC<
  ProvideFakeTransactionsSummaryDataSourceProps
> = (props) => {
  return (
    <RetrieverContext.Provider
      {...props}
      value={{
        async retrieve() {
          return await getRollUpsSummary();
        },
      }}
    />
  );
};

export default ProvideFakeRollUpsSummaryDataSource;
