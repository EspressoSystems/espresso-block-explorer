import { Label } from '@/block_explorer/components/layout/label/label';
import { default as TableLabeledValue } from '@/block_explorer/components/layout/table_labeled_value/table_labeled_value';
import { default as CopyTaggedBase64 } from '@/block_explorer/components/text/copy_tagged_base64';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { SkeletonContent } from '@/components/loading';
import {
  ByteSizeText,
  DateTimeText,
  FullTaggedBase64Text,
  NumberText,
  Text,
} from '@/components/text';
import {
  ExplorerTransactionDetailDataContext,
  ExplorerTransactionDetailsContext,
} from '@/contexts/explorer_api_contexts';
import { default as React } from 'react';
import { InternalLink } from '../../links/link/link';
import { BlockNumberContext } from '../block_detail_content/block_detail_content_loader';
import { default as RollUpSimple } from '../roll_up/roll_up_simple/roll_up_simple';
import { HexDumpAndCopyButtons } from './copy_as';
import { InfiniteGardenDisplay } from './infinite_garden_display';
import { NitroBatchDetectAndDisplay } from './nitro_batch_display';
import { OptimismBatchDecodeAndDisplay } from './optimism_batch_display';
import './transaction_detail_content.css';
import { TransactionOffsetContext } from './transaction_detail_loader';

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
export const TransactionDetailsContentPlaceholder: React.FC = () => {
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

/**
 * TransactionDetailsContent represents the Tabular data of the
 * Transaction Details itself.
 */
export const TransactionDetailsContent: React.FC = () => {
  const data = React.useContext(ExplorerTransactionDetailsContext);
  const pathResolver = React.useContext(PathResolverContext);

  if (!data) {
    return null;
  }

  const details = data.details;

  return (
    <>
      <TableLabeledValue className="card--padding">
        <Text text="Block" />
        <InternalLink href={pathResolver.block(details.height)}>
          <NumberText number={details.height} />
        </InternalLink>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction index in block" />
        <Text
          text={`index ${details.offset} out of ${details.numTransactions} transactions`}
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
  const details = React.useContext(ExplorerTransactionDetailDataContext);

  if (!details) {
    return null;
  }

  return (
    <>
      <TableLabeledValue className="card--padding">
        <Text text="Rollup" />
        <>
          <RollUpSimple namespace={details.namespace} />
          <br />
          <NumberText number={details.namespace} />
        </>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transaction data" />
        <HexDumpAndCopyButtons data={details.payload} />
      </TableLabeledValue>
      <NitroBatchDetectAndDisplay />
      <OptimismBatchDecodeAndDisplay />
      <InfiniteGardenDisplay />
    </>
  );
};
