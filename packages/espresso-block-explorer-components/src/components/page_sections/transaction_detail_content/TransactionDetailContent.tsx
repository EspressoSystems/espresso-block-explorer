import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import {
  TransactionDetail,
  TransactionDetailAsyncRetriever,
  TransactionTreeData,
} from '../../../types/data_source/transaction_detail/types';
import { DataContext } from '../../contexts/DataProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import Card from '../../layout/card/Card';
import Heading2 from '../../layout/heading/Heading2';
import { WithEdgeMargin } from '../../layout/margin/margins';
import ParagraphTextSmall from '../../layout/paragraph/ParagraphTextSmall';
import TableLabeledValue from '../../layout/table_labeled_value/TabledLabeledValue';
import Link from '../../links/link/Link';
import ByteSizeText from '../../text/ByteSizeText';
import DateTimeText from '../../text/DateTimeText';
import FullHexText from '../../text/FullHexText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
import TaggedBase64Text from '../../text/TaggedBase64Text';
import Text from '../../text/Text';
import { WithUiSmall } from '../../typography/typography';
import HexDump from '../hex_dump/HexDump';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';
import './transaction_detail_content.css';

const EdgeMarginCard = WithEdgeMargin(Card);
const LabelUiSmall = WithUiSmall('label');

/**
 * TransactionCommitContext represents the current hash for a Transaction.
 */
export const TransactionCommitContext = React.createContext(new ArrayBuffer(0));

/**
 * TransactionSubHeading represents a sub heading for the Transaction Detail
 * Header.
 */
export const TransactionSubHeading: React.FC = () => {
  const hash = React.useContext(TransactionCommitContext);

  return (
    <LabelUiSmall className="sub-heading">
      <FullHexText value={hash} />
    </LabelUiSmall>
  );
};

/**
 * TransactionDetailContext is a context that indicates the current
 * TransactionDetail to make available to the descendants of the component
 * tree.
 */
const TransactionDetailContext: React.Context<TransactionDetail> =
  React.createContext({
    block: 0,
    index: 0,
    total: 0,
    size: 0,
    hash: new ArrayBuffer(0),
    time: new Date(),
    sender: new TaggedBase64('ERR', new ArrayBuffer(0)),

    tree: [] as TransactionTreeData[],
  });

/**
 * RetrieverContext is a context for retrieving the TransactionDetail
 * response.
 */
export const RetrieverContext =
  React.createContext<TransactionDetailAsyncRetriever>({
    async retrieve() {
      throw new Error('unimplemented');
    },
  });

interface TransactionDetailsContentProps {}

/**
 * TransactionDetailsContent represents the Tabular data of the
 * Transaction Details itself.
 */
const TransactionDetailsContent: React.FC<TransactionDetailsContentProps> = (
  props,
) => {
  const details = React.useContext(TransactionDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

  return React.createElement(
    EdgeMarginCard,
    props,
    <TableLabeledValue>
      <Text text="Block" />
      <Link href={pathResolver.block(details.block)}>
        <NumberText number={details.block} />
      </Link>
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Transaction index in block" />
      <Text
        text={`index ${details.index} out of ${details.total} transactions`}
      />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Transaction Size" />
      <ByteSizeText bytes={details.size} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Espresso Sequencer Hash" />
      <HexText value={details.hash} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Time" />
      <DateTimeText date={details.time} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Sender" />
      <TaggedBase64Text value={details.sender} />
    </TableLabeledValue>,
  );
};

interface ProvideTransactionDetailsProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideTransactionDetails ensures that the TransactionDetails data is
 * available for the children.
 */
const ProvideTransactionDetails: React.FC<ProvideTransactionDetailsProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as undefined | TransactionDetail;

  if (!data) {
    // Missing Data
    return (
      <ParagraphTextSmall>
        <Text text="No Data Found" />
      </ParagraphTextSmall>
    );
  }

  return (
    <TransactionDetailContext.Provider value={data}>
      {props.children}
    </TransactionDetailContext.Provider>
  );
};

const WithEdgeMarginHeading2 = WithEdgeMargin(Heading2);

/**
 * TransactionDataContents is a component that displays details for the
 * individual rollup data for a Transaction
 */
const TransactionDataContents: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

  const tree = details.tree;
  if (tree.length <= 0) {
    return null;
  }

  return (
    <>
      <WithEdgeMarginHeading2>
        <Text text="Data" />
      </WithEdgeMarginHeading2>

      {tree.map((data, idx) => (
        <EdgeMarginCard key={idx}>
          <>
            <TableLabeledValue>
              <Text text="Rollup" />
              <>
                <RollUpSimple namespace={data.namespace} />
                <br />
                <Link href={pathResolver.rollUp(data.namespace)}>
                  <NumberText number={data.namespace} />
                </Link>
              </>
            </TableLabeledValue>
            <TableLabeledValue>
              <Text text="Transaction data" />
              <HexDump value={data.data} />
            </TableLabeledValue>
          </>
        </EdgeMarginCard>
      ))}
    </>
  );
};

interface ConsumeTransactionDetailAsyncDataProps {}

const ConsumeTransactionDetailAsyncData: React.FC<
  ConsumeTransactionDetailAsyncDataProps
> = (props) => {
  return (
    <ProvideTransactionDetails>
      {React.createElement(TransactionDetailsContent, props)}
      <TransactionDataContents />
    </ProvideTransactionDetails>
  );
};

export interface TransactionDetailContentProps {}

/**
 * TransactionDetailContent uses the retriever from the RetrieverContext
 * to retrieve the data using the hash retrieved from the
 * TransactionCommitContext
 */
const TransactionDetailContent: React.FC<TransactionDetailContentProps> = (
  props,
) => {
  const hash = React.useContext(TransactionCommitContext);
  const retriever = React.useContext(RetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve(hash)}>
      {React.createElement(ConsumeTransactionDetailAsyncData, props)}
    </PromiseResolver>
  );
};

export default TransactionDetailContent;
