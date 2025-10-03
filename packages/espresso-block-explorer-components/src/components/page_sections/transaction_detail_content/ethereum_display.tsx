import { TableLabeledValue } from '@/components/layout';
import { CopyHex, DateTimeText, HexText, MoneyText } from '@/components/text';
import NumberText from '@/components/text/NumberText';
import Text from '@/components/text/Text';
import { EthHeader } from '@/service/ethereum/header';
import { EthTransaction } from '@/service/ethereum/transaction';
import React from 'react';

/**
 * EthHeaderContext provides a React context for an Ethereum block header.
 */
export const EthHeaderContext = React.createContext<null | EthHeader>(null);

/**
 * EthHeaderDisplay provides a React component to display an Ethereum block
 * header.
 */
export const EthHeaderDisplay: React.FC = () => {
  const ethHeader = React.useContext(EthHeaderContext);
  if (!ethHeader) {
    return <></>;
  }

  return (
    <TableLabeledValue>
      <Text text="Ethereum Header" />
      <>
        <TableLabeledValue>
          <Text text="Parent Hash" />
          <CopyHex value={ethHeader.parentHash}>
            <HexText value={ethHeader.parentHash} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="State Root" />
          <CopyHex value={ethHeader.stateRoot}>
            <HexText value={ethHeader.stateRoot} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Transactions Root" />
          <CopyHex value={ethHeader.transactionsRoot}>
            <HexText value={ethHeader.transactionsRoot} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Receipts Root" />
          <CopyHex value={ethHeader.receiptsRoot}>
            <HexText value={ethHeader.receiptsRoot} />
          </CopyHex>
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Number" />
          <NumberText number={ethHeader.number} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Gas Limit" />
          <MoneyText money={ethHeader.gasLimit} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Gas Used" />
          <MoneyText money={ethHeader.gasUsed} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Timestamp" />
          <DateTimeText date={new Date(Number(ethHeader.timestamp) * 1000)} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Nonce" />
          <NumberText number={ethHeader.nonce} />
        </TableLabeledValue>
      </>
    </TableLabeledValue>
  );
};

/**
 * EthTransactionContext provides a React context for an Ethereum transaction.
 */
export const EthTransactionContext = React.createContext<null | EthTransaction>(
  null,
);

/**
 * EthTransactionExtensionComponentContext provides a React context for an
 * Ethereum transaction extension component.
 *
 * This allows for extended Transactions to provide their own display logic
 * to be used within `EthTransactionDisplay`.
 */
export const EthTransactionExtensionComponentContext =
  React.createContext<React.FC>(() => <></>);

/**
 * EthTransactionDisplay provides a React component to display an Ethereum
 * transaction, utilizing an extension component if necessary.
 */
export const EthTransactionDisplay: React.FC = () => {
  const ethTransaction = React.useContext(EthTransactionContext);
  const Component = React.useContext(EthTransactionExtensionComponentContext);
  if (!ethTransaction) {
    return <></>;
  }

  return <Component />;
};
