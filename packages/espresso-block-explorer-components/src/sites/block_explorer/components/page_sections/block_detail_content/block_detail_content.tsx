import { Label } from '@/block_explorer/components/layout/label/label';
import { default as TableLabeledValue } from '@/block_explorer/components/layout/table_labeled_value/table_labeled_value';
import { default as CopyHex } from '@/block_explorer/components/text/copy_hex';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { SkeletonContent } from '@/components/loading';
import {
  ByteSizeText,
  DateTimeText,
  FullHexText,
  NumberText,
  RelativeTimeSinceDateText,
  Text,
} from '@/components/text';
import { ExplorerBlockDetailContext } from '@/contexts/explorer_api_contexts';
import { ArrowLeft, ArrowRight } from '@/visual/icons';
import { default as React } from 'react';
import { IconAnchorButton } from '../../hid/buttons';
import { InternalLink } from '../../links/link/link';
import './block_detail_content.css';
import { BlockNumberContext } from './block_detail_content_loader';

/**
 * BackABlock creates a navigation item that will point to the preceding
 * block for navigation.
 *
 * If the current block is 0, then this button will be disabled, as we
 * cannot navigated to negative blocks.
 */
const BackABlock: React.FC = () => {
  const currentBlockID = React.useContext(BlockNumberContext);
  const pathResolver = React.useContext(PathResolverContext);

  if (currentBlockID <= 0) {
    return (
      <IconAnchorButton disabled>
        <ArrowLeft />
      </IconAnchorButton>
    );
  }

  return (
    <IconAnchorButton
      href={pathResolver.block(currentBlockID - 1)}
      title="Previous Block"
    >
      <ArrowLeft />
    </IconAnchorButton>
  );
};

/**
 * ForwardABlock creates a navigation item that will point to the next
 * block for navigation.
 */
const ForwardABlock: React.FC = () => {
  const currentBlockID = React.useContext(BlockNumberContext);
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <IconAnchorButton
      href={pathResolver.block(currentBlockID + 1)}
      title="Next Block"
    >
      <ArrowRight />
    </IconAnchorButton>
  );
};

/**
 * BlockNavigation is a component that displays the current BlockID
 * and provides the corresponding Previous and Next block navigation
 * components.
 */
export const BlockNavigation: React.FC = () => {
  const blockID = React.useContext(BlockNumberContext);

  return (
    <nav className="nav--block">
      <Label>
        # <NumberText number={blockID} />
      </Label>
      <BackABlock />
      <ForwardABlock />
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
  const pathResolver = React.useContext(PathResolverContext);

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
        <>
          <RelativeTimeSinceDateText date={details.time} /> (
          <DateTimeText date={details.time} />)
        </>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Transactions" />
        <InternalLink href={pathResolver.transactionsForBlock(details.height)}>
          <NumberText number={details.numTransactions} />
        </InternalLink>
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
        {details.proposerID.map((recipient, index) => (
          <div key={index}>
            <CopyHex value={recipient}>
              <FullHexText value={recipient} />
            </CopyHex>
          </div>
        ))}
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Size" />
        <ByteSizeText bytes={details.size} />
      </TableLabeledValue>
    </>
  );
};
