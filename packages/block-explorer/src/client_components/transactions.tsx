'use client';

import {
  ProvideCappuccinoBlockDetailDataSource,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoTransactionsForBlockSummaryDataSource,
  ProvideCappuccinoTransactionsSummaryDataSource,
  TransactionsForBlockPage,
  TransactionsPage,
} from 'espresso-block-explorer-components';

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
      <ProvideCappuccinoHotShotQueryServiceAPIContext>
        <ProvideCappuccinoTransactionsForBlockSummaryDataSource>
          <ProvideCappuccinoBlockDetailDataSource>
            <TransactionsForBlockPage block={block} offset={offset} />
          </ProvideCappuccinoBlockDetailDataSource>
        </ProvideCappuccinoTransactionsForBlockSummaryDataSource>
      </ProvideCappuccinoHotShotQueryServiceAPIContext>
    );
  }

  return (
    <ProvideCappuccinoHotShotQueryServiceAPIContext>
      <ProvideCappuccinoTransactionsSummaryDataSource>
        <TransactionsPage startAtBlock={startAtBlock} offset={offset} />
      </ProvideCappuccinoTransactionsSummaryDataSource>
    </ProvideCappuccinoHotShotQueryServiceAPIContext>
  );
}
