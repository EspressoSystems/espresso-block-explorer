import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import {
  BlockDetailAsyncRetriever,
  BlockDetailEntry,
} from '../../../types/data_source/block_detail/types';
import UnimplementedError from '../../../types/errors/UnimplementedError';
import { DataContext } from '../../contexts/DataProvider';
import { ErrorContext } from '../../contexts/ErrorProvider';
import { LoadingContext } from '../../contexts/LoadingProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import PromiseResolver from '../../data/async_data/PromiseResolver';
import { IconAnchorButton } from '../../hid/buttons';
import { Card } from '../../layout/card';
import ParagraphTextSmall from '../../layout/paragraph/ParagraphTextSmall';
import TableLabeledValue from '../../layout/table_labeled_value/TabledLabeledValue';
import { CircularProgressIndicator } from '../../loading/Loading';
import ByteSizeText from '../../text/ByteSizeText';
import DateTimeText from '../../text/DateTimeText';
import NumberText from '../../text/NumberText';
import RelativeTimeText from '../../text/RelativeTimeText';
import TaggedBase64Text from '../../text/TaggedBase64Text';
import Text from '../../text/Text';
import { WithUiSmall } from '../../typography/typography';
import ArrowLeft from '../../visual/icons/ArrowLeft';
import ArrowRight from '../../visual/icons/ArrowRight';
import './block_detail_content.css';

export const BlockNumberContext = React.createContext(0);

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
      <IconAnchorButton>
        <ArrowLeft />
      </IconAnchorButton>
    );
  }

  return (
    <IconAnchorButton href={pathResolver.block(currentBlockID - 1)}>
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
    <IconAnchorButton href={pathResolver.block(currentBlockID + 1)}>
      <ArrowRight />
    </IconAnchorButton>
  );
};

const LabelUiSmall = WithUiSmall('label');

/**
 * BlockNavigation is a component that displays the current BlockID
 * and provides the corresponding Previous and Next block navigation
 * components.
 */
export const BlockNavigation: React.FC = () => {
  const blockID = React.useContext(BlockNumberContext);

  return (
    <nav className="nav--block">
      <LabelUiSmall>
        # <NumberText number={blockID} />
      </LabelUiSmall>
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
    height: 0,
    time: new Date(),
    transactions: 0,
    proposer: new TaggedBase64('PUBKEY', new ArrayBuffer(0)),
    size: 0,
  },
);

/**
 * RetrieverContext is a React Context for retrieving a BlockDetail from a
 * BlockDetailAsyncRetriever.
 */
export const BlockDetailAsyncRetrieverContext =
  React.createContext<BlockDetailAsyncRetriever>({
    async retrieve() {
      throw new UnimplementedError();
    },
  });

interface BlockDetailsContentProps {}

/**
 * BlockDetailsContext represents the component that displays all of the
 * information about the Block Detail.
 */
const BlockDetailsContent: React.FC<BlockDetailsContentProps> = (props) => {
  const details = React.useContext(BlockDetailContext);

  return React.createElement(
    Card,
    props,
    <TableLabeledValue>
      <Text text="Block Height" />
      <NumberText number={details.height} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Timestamp" />
      <>
        <RelativeTimeText date={details.time} /> (
        <DateTimeText date={details.time} />)
      </>
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Transactions" />
      <NumberText number={details.transactions} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Proposer" />
      <TaggedBase64Text value={details.proposer} />
    </TableLabeledValue>,
    <TableLabeledValue>
      <Text text="Size" />
      <ByteSizeText bytes={details.size} />
    </TableLabeledValue>,
  );
};

interface ProvideBlockDetailsProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideBlockDetails consumes the DataContext in order to provide the
 * BlockDetailContext.  If no data is found, it will indicate as such.
 */
const ProvideBlockDetails: React.FC<ProvideBlockDetailsProps> = (props) => {
  const loading = React.useContext(LoadingContext);
  const error = React.useContext(ErrorContext);
  const data = React.useContext(DataContext) as undefined | BlockDetailEntry;

  if (error) {
    return (
      <>
        <Text text="Encountered Error" />
        <br />
        <Text text={error.toString()} />
      </>
    );
  }

  if (loading) {
    return <CircularProgressIndicator />;
  }

  if (!data) {
    // Missing Data
    return (
      <ParagraphTextSmall>
        <Text text="No Data Found" />
      </ParagraphTextSmall>
    );
  }

  return (
    <BlockDetailContext.Provider value={data}>
      {props.children}
    </BlockDetailContext.Provider>
  );
};

export interface BlockDetailsProp {}

/**
 * BlockDetails kicks off the retrieval of the details for the individual
 * Block, and ensures that the data is available for BlockDetailsContent
 */
const BlockDetails: React.FC<BlockDetailsProp> = (props) => {
  const blockID = React.useContext(BlockNumberContext);
  const retriever = React.useContext(BlockDetailAsyncRetrieverContext);

  return (
    <PromiseResolver promise={retriever.retrieve(blockID)}>
      <ProvideBlockDetails>
        {React.createElement(BlockDetailsContent, props)}
      </ProvideBlockDetails>
    </PromiseResolver>
  );
};

export default BlockDetails;
