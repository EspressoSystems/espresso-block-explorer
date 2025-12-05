import { Label } from '@/components/layout/label/label';
import { PathResolverContext } from '@/contexts/path_resolver_provider';
import TableLabeledValue from '@/layout/table_labeled_value/table_labeled_value';
import SkeletonContent from '@/loading/skeleton_content';
import ByteSizeText from '@/text/byte_size_text';
import CopyTaggedBase64 from '@/text/copy_tagged_base64';
import DateTimeText from '@/text/date_time_text';
import FullTaggedBase64Text from '@/text/full_tagged_base64_text';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import React from 'react';
import { InternalLink } from '../../links/link/link';
import { BlockNumberContext } from '../block_detail_content/block_detail_content_loader';
import RollUpSimple from '../roll_up/roll_up_simple/roll_up_simple';
import { HexDumpAndCopyButtons } from './copy_as';
import { InfiniteGardenDisplay } from './infinite_garden_display';
import { NitroBatchDetectAndDisplay } from './nitro_batch_display';
import { OptimismBatchDecodeAndDisplay } from './optimism_batch_display';
import './transaction_detail_content.css';
import {
  TransactionDetailContext,
  TransactionOffsetContext,
} from './transaction_detail_loader';

/**
 * TransactionSubHeading represents a sub heading for the Transaction Detail
 * Header.
 */
export const TransactionSubHeading: React.FC = () => {
  // const hash = React.useContext(TransactionCommitContext);
  const height = React.useContext(BlockNumberContext);
  const offset = React.useContext(TransactionOffsetContext);

  return (
    <Label className="sub-heading">
      {/* <FullHexText value={hash} /> */}
      <NumberText number={height} /> - <NumberText number={offset} />
    </Label>
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
        <Text text="Transaction hash" />
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
        <InternalLink href={pathResolver.block(details.block)}>
          <NumberText number={details.block} />
        </InternalLink>
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
        <Text text="Transaction hash" />
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

/**
 * TransactionDataContents is a component that displays details for the
 * individual rollup data for a Transaction
 */
export const TransactionDataContents: React.FC = () => {
  const details = React.useContext(TransactionDetailContext);

  const data = details.tree;
  return (
    <>
      <TableLabeledValue className="card--padding">
        <Text text="Rollup" />
        <>
          <RollUpSimple namespace={data.namespace} />
          <br />
          <NumberText number={data.namespace} />
        </>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction data" />
        <HexDumpAndCopyButtons data={data.data} />
      </TableLabeledValue>
      <NitroBatchDetectAndDisplay />
      <OptimismBatchDecodeAndDisplay />
      <InfiniteGardenDisplay />
    </>
  );
};
