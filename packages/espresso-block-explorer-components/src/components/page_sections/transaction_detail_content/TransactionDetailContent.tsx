import React from 'react';
import { urlEncoding } from '../../../types/base64';
import { encodeNumberIterableToHexits } from '../../../types/hex';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import LabeledButton from '../../hid/buttons/labeled_button/LabeledButton';
import TableLabeledValue from '../../layout/table_labeled_value/TabledLabeledValue';
import Link from '../../links/link/Link';
import ByteSizeText from '../../text/ByteSizeText';
import DateTimeText from '../../text/DateTimeText';
import HexText from '../../text/HexText';
import NumberText from '../../text/NumberText';
import TaggedBase64Text from '../../text/TaggedBase64Text';
import Text from '../../text/Text';
import { WithUiSmall } from '../../typography/typography';
import { BlockNumberContext } from '../block_detail_content/BlockDetailContent';
import HexDump from '../hex_dump/HexDump';
import RollUpSimple from '../roll_up/roll_up_simple/RollUpSimple';
import {
  TransactionDetailContext,
  TransactionOffsetContext,
} from './TransactionDetailLoader';
import './transaction_detail_content.css';

const LabelUiSmall = WithUiSmall('label');

/**
 * TransactionSubHeading represents a sub heading for the Transaction Detail
 * Header.
 */
export const TransactionSubHeading: React.FC = () => {
  // const hash = React.useContext(TransactionCommitContext);
  const height = React.useContext(BlockNumberContext);
  const offset = React.useContext(TransactionOffsetContext);

  return (
    <LabelUiSmall className="sub-heading">
      {/* <FullHexText value={hash} /> */}
      <NumberText number={height} /> - <NumberText number={offset} />
    </LabelUiSmall>
  );
};

interface TransactionDetailsContentProps {}

/**
 * TransactionDetailsContent represents the Tabular data of the
 * Transaction Details itself.
 */
export const TransactionDetailsContent: React.FC<
  TransactionDetailsContentProps
> = () => {
  const details = React.useContext(TransactionDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <>
      <TableLabeledValue>
        <Text text="Block" />
        <Link href={pathResolver.block(details.block)}>
          <NumberText number={details.block} />
        </Link>
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Transaction index in block" />
        <Text
          text={`index ${details.index} out of ${details.total} transactions`}
        />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Transaction Size" />
        <ByteSizeText bytes={details.size} />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Espresso Sequencer Hash" />
        <HexText value={details.hash.data} />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Time" />
        <DateTimeText date={details.time} />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Sender" />
        <TaggedBase64Text value={details.sender} />
      </TableLabeledValue>
    </>
  );
};

/**
 * TransactionDataContents is a component that displays details for the
 * individual rollup data for a Transaction
 */
export const TransactionDataContents: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

  const data = details.tree;
  return (
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
        <>
          <HexDump value={data.data} />
          <br />
          <LabeledButton
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();

              if (
                typeof window === 'undefined' ||
                !navigator ||
                !navigator.clipboard
              ) {
                return;
              }

              navigator.clipboard.writeText(
                Array.from(
                  encodeNumberIterableToHexits(new Uint8Array(data.data)),
                ).join(''),
              );
            }}
          >
            <Text text="Copy as Hex" />
          </LabeledButton>
          &nbsp;
          <LabeledButton
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();

              if (
                typeof window === 'undefined' ||
                !navigator ||
                !navigator.clipboard
              ) {
                return;
              }

              navigator.clipboard.writeText(
                urlEncoding.encodeToString(data.data),
              );
            }}
          >
            <Text text="Copy as Base64" />
          </LabeledButton>
        </>
      </TableLabeledValue>
    </>
  );
};
