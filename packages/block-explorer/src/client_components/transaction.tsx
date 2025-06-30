'use client';

import {
  BlockNumberContext,
  ProvideCappuccinoHotShotQueryServiceAPIContext,
  ProvideCappuccinoTransactionDetailDataSource,
  TransactionOffsetContext,
  TransactionPage,
} from 'espresso-block-explorer-components';

export interface TransactionClientComponentProps {
  height: number;
  offset: number;
}

export default function TransactionClientComponent(
  props: TransactionClientComponentProps,
) {
  return (
    <BlockNumberContext.Provider value={props.height}>
      <TransactionOffsetContext.Provider value={props.offset}>
        <ProvideCappuccinoHotShotQueryServiceAPIContext>
          <ProvideCappuccinoTransactionDetailDataSource>
            <TransactionPage />
          </ProvideCappuccinoTransactionDetailDataSource>
        </ProvideCappuccinoHotShotQueryServiceAPIContext>
      </TransactionOffsetContext.Provider>
    </BlockNumberContext.Provider>
  );
}
