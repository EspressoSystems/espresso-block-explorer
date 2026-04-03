'use client';

import { ProvideHotShotQueryServiceAPIContext } from 'espresso-block-explorer-components';
import {
  BlockNumberContext,
  ProvideTransactionDetailDataSource,
  TransactionOffsetContext,
  TransactionPage,
} from 'espresso-block-explorer-components/block-explorer';

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
        <ProvideHotShotQueryServiceAPIContext>
          <ProvideTransactionDetailDataSource>
            <TransactionPage />
          </ProvideTransactionDetailDataSource>
        </ProvideHotShotQueryServiceAPIContext>
      </TransactionOffsetContext.Provider>
    </BlockNumberContext.Provider>
  );
}
