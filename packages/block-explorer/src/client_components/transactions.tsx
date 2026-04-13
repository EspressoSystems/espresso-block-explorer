'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  ProvideBlockDetailDataSource,
  ProvideTransactionsForBlockSummaryDataSource,
  ProvideTransactionsSummaryDataSource,
  TransactionsForBlockPage,
  TransactionsPage,
} from 'espresso-block-explorer-components/block-explorer';

export interface TransactionsClientComponentProps {
  startAtBlock?: number;
  offset?: number;
  block?: number;
}

export default function TransactionsClientComponent({
  startAtBlock,
  offset,
  block,
}: TransactionsClientComponentProps) {
  if (block !== undefined) {
    return (
      <ProvideHotShotQueryServiceAPIContext>
        <ProvideTransactionsForBlockSummaryDataSource>
          <ProvideBlockDetailDataSource>
            <TransactionsForBlockPage block={block} offset={offset} />
          </ProvideBlockDetailDataSource>
        </ProvideTransactionsForBlockSummaryDataSource>
      </ProvideHotShotQueryServiceAPIContext>
    );
  }

  return (
    <ProvideHotShotQueryServiceAPIContext>
      <ProvideTransactionsSummaryDataSource>
        <TransactionsPage startAtBlock={startAtBlock} offset={offset} />
      </ProvideTransactionsSummaryDataSource>
    </ProvideHotShotQueryServiceAPIContext>
  );
}
