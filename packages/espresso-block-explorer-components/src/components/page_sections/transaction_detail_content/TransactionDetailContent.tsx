import FullHexText from '@/components/text/FullHexText';
import { PathResolverContext } from '@/contexts/PathResolverProvider';
import {
  hexArrayBufferCodec,
  stdBase64ArrayBufferCodec,
} from '@/convert/codec/array_buffer';
import { Converter } from '@/convert/codec/convert';
import TableLabeledValue from '@/layout/table_labeled_value/TableLabeledValue';
import SkeletonContent from '@/loading/SkeletonContent';
import { kInfiniteGardenNamespace } from '@/models/block_explorer/rollup_entry/data';
import InscriptionAndSignature, {
  inscriptionAndSignatureBincodeCodec,
} from '@/service/inscription/cappuccino/inscription_and_signature';
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
      <TableLabeledValue className="card--padding">
        <Text text="Block" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction index in block" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction Size" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Espresso Sequencer Hash" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Time" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
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
      <TableLabeledValue className="card--padding">
        <Text text="Block" />
        <Link href={pathResolver.block(details.block)}>
          <NumberText number={details.block} />
        </Link>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction index in block" />
        <Text
          text={`index ${details.index} out of ${details.total} transactions`}
        />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction Size" />
        <ByteSizeText bytes={details.size} />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Espresso Sequencer Hash" />
        <CopyTaggedBase64 value={details.hash}>
          <FullTaggedBase64Text value={details.hash} />
        </CopyTaggedBase64>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Time" />
        <DateTimeText date={details.time} />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
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
      <TableLabeledValue className="card--padding">
        <Text text="Rollup" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction data" />
        <SkeletonContent />
      </TableLabeledValue>
    </>
  );
};

const InfiniteGardenDisplay: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);
  const data = details.tree;

  if (data.namespace !== kInfiniteGardenNamespace) {
    return <></>;
  }

  let inscriptionAndSignature: null | InscriptionAndSignature = null;
  try {
    inscriptionAndSignature = inscriptionAndSignatureBincodeCodec.decode(
      data.data,
    );
  } catch (err) {
    // All errors would be issues with Decoding
    console.error(
      'encountered error attempting to decode inscription and signature',
    );
  }

  if (inscriptionAndSignature === null) {
    return (
      <TableLabeledValue className="card--padding">
        <Text text="Inscription" />
        <Text text="Invalid Inscription Data" />
      </TableLabeledValue>
    );
  }

  return (
    <TableLabeledValue className="card--padding inscription--section">
      <Text text="Inscription" />
      <>
        <TableLabeledValue>
          <Text text="Address" />
          <FullHexText
            value={inscriptionAndSignature.inscription.address.address}
          />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Message" />
          <Text text={inscriptionAndSignature.inscription.message} />
        </TableLabeledValue>
        <TableLabeledValue>
          <Text text="Time" />
          <DateTimeText date={inscriptionAndSignature.inscription.time} />
        </TableLabeledValue>
      </>
    </TableLabeledValue>
  );
};

interface CopyAsProps {
  data: ArrayBuffer;
  encoder: Converter<ArrayBuffer, string>;
  children?: React.ReactNode | React.ReactNode[];
}

const CopyAs: React.FC<CopyAsProps> = ({ data, encoder, children }) => {
  return (
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

        navigator.clipboard.writeText(encoder.convert(data));
      }}
    >
      {children}
    </LabeledButton>
  );
};

const CopyAsHex: React.FC<{ data: ArrayBuffer }> = ({ data }) => {
  return (
    <CopyAs data={data} encoder={hexArrayBufferCodec.encoder}>
      <Text text="Copy as Hex" />
    </CopyAs>
  );
};

const CopyAsBase64: React.FC<{ data: ArrayBuffer }> = ({ data }) => {
  return (
    <CopyAs data={data} encoder={stdBase64ArrayBufferCodec.encoder}>
      <Text text="Copy as Base64" />
    </CopyAs>
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
      <TableLabeledValue className="card--padding">
        <Text text="Rollup" />
        <>
          <RollUpSimple namespace={data.namespace} />
          <br />
          <Link href={pathResolver.rollUp(data.namespace)}>
            <NumberText number={data.namespace} />
          </Link>
        </>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction data" />
        <>
          <HexDump value={data.data} />
          <br />
          <CopyAsHex data={data.data} />
          &nbsp;
          <CopyAsBase64 data={data.data} />
        </>
      </TableLabeledValue>
      <InfiniteGardenDisplay />
    </>
  );
};
