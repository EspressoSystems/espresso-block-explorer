import { PathResolverContext } from '@/contexts/PathResolverProvider';
import { urlEncoding } from '@/convert/base64/base64';
import { encodeNumberIterableToHexits } from '@/convert/hex/hex';
import TableLabeledValue from '@/layout/table_labeled_value/TableLabeledValue';
import SkeletonContent from '@/loading/SkeletonContent';
import ByteSizeText from '@/text/ByteSizeText';
import CopyTaggedBase64 from '@/text/CopyTaggedBase64';
import DateTimeText from '@/text/DateTimeText';
import FullTaggedBase64Text from '@/text/FullTaggedBase64Text';
import NumberText from '@/text/NumberText';
import Text from '@/text/Text';
import { WithUiSmall } from '@/typography/typography';
import React from 'react';
import LabeledButton from '../../hid/buttons/labeled_button/LabeledButton';
import Link from '../../links/link/Link';
import { BlockNumberContext } from '../block_detail_content/BlockDetailContentLoader';
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

/**
 * TransactionDetailsContentPlaceholder is a placeholder for the Transaction
 * Details content.
 */
export const TransactionDetailsContentPlaceholder: React.FC<
  TransactionDetailsContentProps
> = () => {
  return (
    <>
      <TableLabeledValue>
        <Text text="Block" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Transaction index in block" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Transaction Size" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Espresso Sequencer Hash" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Time" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Sender" />
        <SkeletonContent />
      </TableLabeledValue>
    </>
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
        <CopyTaggedBase64 value={details.hash}>
          <FullTaggedBase64Text value={details.hash} />
        </CopyTaggedBase64>
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Time" />
        <DateTimeText date={details.time} />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Sender" />
        <CopyTaggedBase64 value={details.sender}>
          <FullTaggedBase64Text value={details.sender} />
        </CopyTaggedBase64>
      </TableLabeledValue>
    </>
  );
};

export const TransactionDataContentsPlaceholder: React.FC = () => {
  return (
    <>
      <TableLabeledValue>
        <Text text="Rollup" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue>
        <Text text="Transaction data" />
        <SkeletonContent />
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
