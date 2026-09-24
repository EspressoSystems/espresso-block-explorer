import { default as TableLabeledValue } from '@/block_explorer/components/layout/table_labeled_value/table_labeled_value';
import { default as CompactByteSizeText } from '@/block_explorer/components/text/compact_byte_size_text';
import { default as CopyHex } from '@/block_explorer/components/text/copy_hex';
import { default as RelativeAndAbsoluteDateTimeText } from '@/block_explorer/components/text/relative_and_absolute_date_time_text';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { SkeletonContent } from '@/components/loading';
import { FullHexText, NumberText, Text } from '@/components/text';
import { ExplorerBlockDetailContext } from '@/contexts/explorer_api_contexts';
import { addClassToClassName } from '@/higher_order';
import { default as React } from 'react';
import { default as LabeledAnchorButton } from '../../hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { useNewestBlockHeight } from '../newest_block_height';
import '../table_navigation.css';
import { BlockNumberContext } from './block_detail_content_loader';

/**
 * BlockNavigation leads from the block being shown to its neighbours and to
 * the newest block, with the same controls the Blocks page pages with, named
 * for where they lead: "Newer" is the block after this one, "Older" the block
 * before it.
 *
 * "Older" cannot go below the first block, and "Newer" cannot go past the
 * newest one once its height is known -- until then it is left enabled, as a
 * failed or slow answer should not strand the reader on this block. "Latest"
 * needs that height to lead anywhere, so it waits for it, and has nowhere to
 * go from the newest block itself.
 */
export interface BlockNavigationProps {
  className?: string;
}

export const BlockNavigation: React.FC<BlockNavigationProps> = (props) => {
  const blockID = React.useContext(BlockNumberContext);
  const pathResolver = React.useContext(PathResolverContext);
  const newest = useNewestBlockHeight();
  const isNewest = newest !== null && blockID >= newest;

  return (
    <nav className={addClassToClassName(props.className, 'block-navigation')}>
      <LabeledAnchorButton
        href={newest === null ? undefined : pathResolver.block(newest)}
        disabled={newest === null || isNewest}
      >
        <Text text="Latest" />
      </LabeledAnchorButton>
      <LabeledAnchorButton
        href={pathResolver.block(blockID + 1)}
        disabled={isNewest}
      >
        <Text text="Newer" />
      </LabeledAnchorButton>
      <LabeledAnchorButton
        href={pathResolver.block(blockID - 1)}
        disabled={blockID <= 0}
      >
        <Text text="Older" />
      </LabeledAnchorButton>
    </nav>
  );
};

export const BlockDetailsContentPlaceholder: React.FC<
  BlockDetailsContentProps
> = () => {
  return (
    <>
      <TableLabeledValue className="card--padding">
        <Text text="Block Height" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Timestamp" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transactions" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Builders" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Fee Recipients" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Size" />
        <SkeletonContent />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Block Reward" />
        <SkeletonContent />
      </TableLabeledValue>
    </>
  );
};

interface BlockDetailsContentProps {}

/**
 * BlockDetailsContext represents the component that displays all of the
 * information about the Block Detail.
 */
export const BlockDetailsContent: React.FC<BlockDetailsContentProps> = () => {
  const details = React.useContext(ExplorerBlockDetailContext);

  if (!details) {
    return null;
  }

  return (
    <>
      <TableLabeledValue className="card--padding">
        <Text text="Block Height" />
        <NumberText number={details.height} />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Timestamp" />
        <RelativeAndAbsoluteDateTimeText date={details.time} />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transactions" />
        <NumberText number={details.numTransactions} />
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Builders" />
        {details.proposerID.map((proposer, index) => (
          <div key={index}>
            <CopyHex value={proposer}>
              <FullHexText value={proposer} />
            </CopyHex>
          </div>
        ))}
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Fee Recipients" />
        {details.feeRecipient.map((recipient, index) => (
          <div key={index}>
            <CopyHex value={recipient}>
              <FullHexText value={recipient} />
            </CopyHex>
          </div>
        ))}
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Size" />
        <CompactByteSizeText bytes={details.size} withExact />
      </TableLabeledValue>
    </>
  );
};
