import { assertNotNull } from '@/assert/assert';
import { CardNoPadding } from '@/block_explorer/components/layout/card/card';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { BlockNumberContext } from '@/block_explorer/components/page_sections/block_detail_content/block_detail_content_loader';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { EnvironmentContext } from '@/components/config/environment';
import { default as PromiseResolver } from '@/components/data/async_data/promise_resolver';
import { default as ByteSizeText } from '@/components/text/byte_size_text';
import { default as DateTimeText } from '@/components/text/date_time_text';
import { default as FullHexText } from '@/components/text/full_hex_text';
import { default as FullTaggedBase64Text } from '@/components/text/full_tagged_base64_text';
import { default as FullWalletAddressText } from '@/components/text/full_wallet_address';
import { MoneyTextFull } from '@/components/text/money_text_full';
import { default as NumberText } from '@/components/text/number_text';
import { default as RelativeTimeSinceDateText } from '@/components/text/relative_time_since_date_text';
import { default as Text } from '@/components/text/text';
import { DataContext } from '@/contexts/data_provider';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { bigintCodec } from '@/convert/codec/bigint';
import { foldRIterable } from '@/functional/functional';
import { default as MonetaryValue } from '@/models/block_explorer/monetary_value';
import { Environment } from '@/models/config/environment/environment';
import { default as WalletAddress } from '@/models/wallet_address/wallet_address';
import { computeEpochByBlockAndBlocksPerEpoch } from '@/service/espresso_staking_api_service/common/epoch_and_block';
import { AvailabilityAPIBlock } from '@/service/hotshot_query_service/availability/block';
import { AvailabilityAPIHeader } from '@/service/hotshot_query_service/availability/block_header';
import { AvailabilityAPIV0HeaderFields } from '@/service/hotshot_query_service/availability/block_header_v0';
import { AvailabilityAPIV2HeaderFields } from '@/service/hotshot_query_service/availability/block_header_v2';
import { AvailabilityAPIV4HeaderFields } from '@/service/hotshot_query_service/availability/block_header_v4';
import { isPayloadV0 } from '@/service/hotshot_query_service/availability/payload_v0';
import { isPayloadV1 } from '@/service/hotshot_query_service/availability/payload_v1';
import { default as React } from 'react';
import { default as CopyButton } from '../../hid/buttons/copy_button/copy_button';
import { TableLabeledValue } from '../../layout/table_labeled_value';
import { InternalLink } from '../../links/link/link';
import { default as CopyWalletAddress } from '../../text/copy_wallet_address';
import RollUpSimple from '../roll_up/roll_up_simple/roll_up_simple';
import { HexDumpAndCopyButtons } from '../transaction_detail_content/copy_as';

const EdgeMarginCard = WithEdgeMargin(CardNoPadding);

export const AvailabilityBlockLoader: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const service = React.useContext(HotShotQueryServiceAPIContext);
  const blockID = React.useContext(BlockNumberContext);

  const promise = React.useMemo(
    () => service.availability.getBlockFromHeight(blockID),
    [service, blockID],
  );

  return (
    <PromiseResolver promise={promise}>
      <AvailabilityBlockResolver>{children}</AvailabilityBlockResolver>
    </PromiseResolver>
  );
};

export const AvailabilityAPIBlockContext =
  React.createContext<null | AvailabilityAPIBlock>(null);

const AvailabilityBlockResolver: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | AvailabilityAPIBlock;

  return (
    <AvailabilityAPIBlockContext.Provider value={data}>
      {children}
    </AvailabilityAPIBlockContext.Provider>
  );
};

const BlockHeightField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Block Height" />
      <NumberText number={data.header.fields.height} />
    </TableLabeledValue>
  );
};

function estimateBlocksPerEpochForEnvironment(environment: Environment) {
  switch (environment) {
    case Environment.mainnet:
      return 40000;

    case Environment.decaf:
      return 3000;

    default:
      return null;
  }
}

const EpochField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  const environment = React.useContext(EnvironmentContext);
  assertNotNull(data);

  const blocksPerEpoch = estimateBlocksPerEpochForEnvironment(environment);
  if (!blocksPerEpoch) {
    return null;
  }
  const epoch = computeEpochByBlockAndBlocksPerEpoch(
    BigInt(data.header.fields.height),
    BigInt(blocksPerEpoch),
  );

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Epoch" />
      <NumberText number={epoch} />
    </TableLabeledValue>
  );
};

const TimestampField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  if (
    isAvailabilityV4Header(data.header) &&
    data.header.fields.timestamp_millis
  ) {
    // We have milliseconds available.
    const date = new Date(data.header.fields.timestamp_millis);

    return (
      <TableLabeledValue className="card--padding">
        <Text text="Timestamp" />
        <>
          <RelativeTimeSinceDateText date={date} />
          &nbsp;(
          <DateTimeText date={date} />)
        </>
      </TableLabeledValue>
    );
  }

  const timestampInSecondsSinceEpoch0 = data.header.fields.timestamp;
  const date = new Date(timestampInSecondsSinceEpoch0 * 1000);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Timestamp" />
      <>
        <RelativeTimeSinceDateText date={date} />
        &nbsp;(
        <DateTimeText date={date} />)
      </>
    </TableLabeledValue>
  );
};

const L1HeadField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="L1 Head" />
      <NumberText number={data.header.fields.l1_head} />
    </TableLabeledValue>
  );
};

const L1FinalizedField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const l1Finalized = data.header.fields.l1_finalized;
  if (!l1Finalized) {
    return null;
  }

  const hash = hexArrayBufferCodec.decode(l1Finalized.hash);
  const secondsSinceEpoch0 = bigintCodec.decode(l1Finalized.timestamp);
  const date = new Date(Number(secondsSinceEpoch0) * 1000);
  return (
    <TableLabeledValue className="card--padding">
      <Text text="L1 Finalized" />
      <>
        <NumberText number={l1Finalized.number} />
        <br />
        <span className="inline">
          <FullHexText value={hash} />
          <CopyButton content={l1Finalized.hash} />
        </span>
        <br />
        <RelativeTimeSinceDateText date={date} />
        &nbsp;(
        <DateTimeText date={date} />)
      </>
    </TableLabeledValue>
  );
};

const PayloadCommitmentField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Payload Commitment" />
      <>
        <FullTaggedBase64Text value={data.header.fields.payload_commitment} />
        &nbsp;
        <CopyButton
          content={data.header.fields.payload_commitment.toString()}
        />
      </>
    </TableLabeledValue>
  );
};

const BuilderCommitmentField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Builder Commitment" />
      <>
        <FullTaggedBase64Text value={data.header.fields.builder_commitment} />
        &nbsp;
        <CopyButton
          content={data.header.fields.builder_commitment.toString()}
        />
      </>
    </TableLabeledValue>
  );
};

const NamespaceTableField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const nsTable = data.header.fields.ns_table;
  const nsTableBytes = nsTable.bytes;

  const namespaces: number[] = [];
  const l = nsTable.len();
  for (let i = 0; i < l; i++) {
    const ns = nsTable.getNamespaceForIndex(i);
    if (!ns) {
      continue;
    }
    namespaces.push(ns);
  }

  {
    const payloads: Uint8Array[] = [];
    const payload = data.payload;
    if (isPayloadV0(payload)) {
      // Stuff;
    } else if (isPayloadV1(payload)) {
      const l = payload.getNumberOfPayloadEntries();

      const lengths: number[] = [];

      for (let i = 0; i < l; i++) {
        const l = payload.getPayloadLengthForIndex(i);
        lengths.push(l);
        const p = payload.getPayloadSliceForIndex(i);
        if (!p) {
          continue;
        }
        payloads.push(new Uint8Array(p));
      }

      console.info(
        '<<<< HERE',
        'ns offset',
        nsTable.getOffsetForIndex(0),
        'lengths',
        lengths,
        'payloads',
        payloads,
      );
    }
  }

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Namespace Table" />
      <>
        <HexDumpAndCopyButtons data={nsTableBytes} />
        {namespaces.map((namespace, index) => {
          return (
            <div key={index}>
              <RollUpSimple namespace={namespace} />
            </div>
          );
        })}
      </>
    </TableLabeledValue>
  );
};

const BlockMerkleTreeRootField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Block Merkle Tree Root" />
      <>
        <FullTaggedBase64Text
          value={data.header.fields.block_merkle_tree_root}
        />
        &nbsp;
        <CopyButton
          content={data.header.fields.block_merkle_tree_root.toString()}
        />
      </>
    </TableLabeledValue>
  );
};

const FeeMerkleTreeRootField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Fee Merkle Tree Root" />
      <>
        <FullTaggedBase64Text value={data.header.fields.fee_merkle_tree_root} />
        &nbsp;
        <CopyButton
          content={data.header.fields.fee_merkle_tree_root.toString()}
        />
      </>
    </TableLabeledValue>
  );
};

const FeeInfoField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const feeInfo = data.header.fields.fee_info;
  const walletAddress = new WalletAddress(feeInfo.account);
  return (
    <TableLabeledValue className="card--padding">
      <Text text="Fee Info" />
      <>
        <CopyWalletAddress value={walletAddress}>
          <FullWalletAddressText value={walletAddress} />
        </CopyWalletAddress>
        <br />
        <MoneyTextFull money={MonetaryValue.ESP(feeInfo.amount)} />
      </>
    </TableLabeledValue>
  );
};

const BuilderSignatureField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const builderSignature = data.header.fields.builder_signature;
  if (!builderSignature) {
    return null;
  }

  const ab = new ArrayBuffer(
    builderSignature.r.byteLength + builderSignature.s.byteLength + 1,
  );
  const arr = new Uint8Array(ab);
  arr.set(new Uint8Array(builderSignature.r), 0);
  arr.set(new Uint8Array(builderSignature.s), builderSignature.r.byteLength);
  arr.set(
    [builderSignature.v],
    builderSignature.r.byteLength + builderSignature.s.byteLength,
  );

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Builder Signature" />
      <HexDumpAndCopyButtons data={ab} />
    </TableLabeledValue>
  );
};

const RewardMerkleTreeRootField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  if (!isAvailabilityV4Header(data.header)) {
    return null;
  }

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Reward Merkle Tree Root" />
      <span className="inline">
        <FullTaggedBase64Text
          value={data.header.fields.reward_merkle_tree_root}
        />
        &nbsp;
        <CopyButton
          content={data.header.fields.reward_merkle_tree_root.toString()}
        />
      </span>
    </TableLabeledValue>
  );
};

const TotalRewardDistributedField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  if (!isAvailabilityV4Header(data.header)) {
    return null;
  }

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Total Reward Distributed" />
      <MoneyTextFull
        money={MonetaryValue.ESP(data.header.fields.total_reward_distributed)}
      />
    </TableLabeledValue>
  );
};

const NextStakeTableHashField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  if (
    !isAvailabilityV4Header(data.header) ||
    !data.header.fields.next_stake_table_hash
  ) {
    return null;
  }

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Next Stake Table Hash" />
      <span className="inline">
        <FullTaggedBase64Text
          value={data.header.fields.next_stake_table_hash}
        />
        &nbsp;
        <CopyButton
          content={data.header.fields.next_stake_table_hash.toString()}
        />
      </span>
    </TableLabeledValue>
  );
};

const NumTransactionsField: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Transactions" />
      <InternalLink
        href={pathResolver.transactionsForBlock(data.header.fields.height)}
      >
        <NumberText number={data.numTransactions} />
      </InternalLink>
    </TableLabeledValue>
  );
};

const BlockSizeField: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const payload = data.payload;
  if (isPayloadV0(payload)) {
    const size = foldRIterable(
      (acc, next) => acc + next.payload.length,
      0,
      payload.transaction_nmt,
    );

    return (
      <TableLabeledValue className="card--padding">
        <Text text="Size" />
        <ByteSizeText bytes={size} />
      </TableLabeledValue>
    );
  }

  if (isPayloadV1(payload)) {
    return (
      <TableLabeledValue className="card--padding">
        <Text text="Size" />
        <ByteSizeText bytes={payload.raw_payload.byteLength} />
      </TableLabeledValue>
    );
  }

  return null;
};

const AvailabilityBlockHeaderDisplay: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);

  if (!data) {
    return null;
  }
  return (
    <>
      <h2 className="edge-margin">
        <Text text="Basic Details" />
      </h2>
      <br />
      <EdgeMarginCard>
        <BlockHeightField />
        <EpochField />
        <TimestampField />
        <NumTransactionsField />
        <BlockSizeField />
      </EdgeMarginCard>
      <br />
      <h2 className="edge-margin">
        <Text text="Header" />
      </h2>
      <br />
      <EdgeMarginCard>
        <VersionDisplay />
        <Version4HeaderFieldsDisplayGuard />
        <Version2HeaderFieldsDisplayGuard />
        <Version0HeaderFieldsDisplayGuard />
      </EdgeMarginCard>
    </>
  );
};

const Version4HeaderFieldsDisplayGuard: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  if (data == null || !isAvailabilityV4Header(data.header)) {
    return null;
  }

  return <Version4HeaderFieldsDisplay />;
};
const Version4HeaderFieldsDisplay: React.FC = () => {
  return (
    <>
      <Version2HeaderFieldsDisplay />
      <RewardMerkleTreeRootField />
      <TotalRewardDistributedField />
      <NextStakeTableHashField />
    </>
  );
};

const Version2HeaderFieldsDisplayGuard: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  if (data == null || !isAvailabilityV2Header(data.header)) {
    return null;
  }

  return <Version2HeaderFieldsDisplay />;
};

const Version2HeaderFieldsDisplay: React.FC = () => {
  return <Version0HeaderFieldsDisplay />;
};

const Version0HeaderFieldsDisplayGuard: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);

  if (
    data == null ||
    isAvailabilityV4Header(data.header) ||
    isAvailabilityV2Header(data.header)
  ) {
    return null;
  }

  return <Version0HeaderFieldsDisplay />;
};

const Version0HeaderFieldsDisplay: React.FC = () => {
  return (
    <>
      <BlockHeightField />
      <TimestampField />
      <L1HeadField />
      <L1FinalizedField />
      <PayloadCommitmentField />
      <BuilderCommitmentField />
      <NamespaceTableField />
      <BlockMerkleTreeRootField />
      <FeeMerkleTreeRootField />
      <FeeInfoField />
      <BuilderSignatureField />
    </>
  );
};
function isAvailabilityV2Header(
  input: AvailabilityAPIHeader<AvailabilityAPIV0HeaderFields>,
): input is AvailabilityAPIHeader<AvailabilityAPIV2HeaderFields> {
  return input.version.version.major === 0 && input.version.version.minor === 2;
}

function isAvailabilityV4Header(
  input: AvailabilityAPIHeader<AvailabilityAPIV0HeaderFields>,
): input is AvailabilityAPIHeader<AvailabilityAPIV4HeaderFields> {
  return input.version.version.major === 0 && input.version.version.minor === 4;
}

function isAvailabilityHeaderDirectlySupported(
  input: AvailabilityAPIHeader<AvailabilityAPIV0HeaderFields>,
) {
  return (
    (input.version.version.major === 0 && input.version.version.minor === 0) ||
    isAvailabilityV2Header(input) ||
    isAvailabilityV4Header(input)
  );
}

const UnsupportedWarning: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  if (isAvailabilityHeaderDirectlySupported(data.header)) {
    return null;
  }

  return (
    <>
      &nbsp;
      <Text text="Block Explorer doesn't directly support this version" />
    </>
  );
};

const VersionDisplay: React.FC = () => {
  const data = React.useContext(AvailabilityAPIBlockContext);
  assertNotNull(data);

  const version = data.header.version.version;

  return (
    <TableLabeledValue className="card--padding">
      <Text text="Version" />
      <>
        <Text text={`${version.major}.${version.minor}`} />
        <UnsupportedWarning />
      </>
    </TableLabeledValue>
  );
};

export const AvailabilityBlockContent: React.FC = () => {
  return <AvailabilityBlockHeaderDisplay />;
};
