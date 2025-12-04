import { Label } from '@/components/layout/label/label';
import RelativeTimeSinceDateText from '@/components/text/relative_time_since_date_text';
import { DataContext } from '@/contexts/data_provider';
import { PathResolverContext } from '@/contexts/path_resolver_provider';
import TableLabeledValue from '@/layout/table_labeled_value/table_labeled_value';
import SkeletonContent from '@/loading/skeleton_content';
import { BlockDetailEntry } from '@/models/block_explorer/block_detail';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import ByteSizeText from '@/text/byte_size_text';
import CopyHex from '@/text/copy_hex';
import DateTimeText from '@/text/date_time_text';
import FullHexText from '@/text/full_hex_text';
import NumberText from '@/text/number_text';
import Text from '@/text/text';
import ArrowLeft from '@/visual/icons/arrow_left';
import ArrowRight from '@/visual/icons/arrow_right';
import React from 'react';
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

/**
 * BlockDetailContext is a React Context for holding the current BlockDetail.
 * It is useful for making BlockDetail information available to descendent
 * components.
 */
const BlockDetailContext: React.Context<BlockDetailEntry> = React.createContext(
  {
    hash: new TaggedBase64('BLOCK', new ArrayBuffer(0)),
    height: 0,
    time: new Date(),
    transactions: 0,
    proposer: [new ArrayBuffer(0)],
    recipient: [new ArrayBuffer(0)],
    size: 0,
    rewards: new Array<MonetaryValue>(0),
  },
);

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
  const details = React.useContext(BlockDetailContext);
  const pathResolver = React.useContext(PathResolverContext);

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
          <NumberText number={details.transactions} />
        </InternalLink>
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Builders" />
        {details.proposer.map((proposer, index) => (
          <div key={index}>
            <CopyHex value={proposer}>
              <FullHexText value={proposer} />
            </CopyHex>
          </div>
        ))}
      </TableLabeledValue>
      <TableLabeledValue className="card--padding">
        <Text text="Fee Recipients" />
        {details.proposer.map((recipient, index) => (
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

interface ProvideBlockDetailsProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideBlockDetails consumes the DataContext in order to provide the
 * BlockDetailContext.  If no data is found, it will indicate as such.
 */
export const ProvideBlockDetails: React.FC<ProvideBlockDetailsProps> = (
  props,
) => {
  const data = React.useContext(DataContext) as BlockDetailEntry;

  return (
    <BlockDetailContext.Provider value={data}>
      {props.children}
    </BlockDetailContext.Provider>
  );
};
