import { filterIterable, lastIterable } from '@/functional/functional';
import { walletAddressCodec } from '@/models/wallet_address';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import ethereumBlockiesBase64 from 'ethereum-blockies-base64';
import React from 'react';
import { NodeAddressContext } from '../../contexts/node_address_context';
import { ValidatorNodeContext } from '../../contexts/validator_node_context';
import './validator_image.css';

function imageURLsFromValidator(validator: NodeSetEntry): (null | string)[] {
  const smallRatio1 =
    validator.metadata?.content?.icon?.small?.ratio1?.toString() ?? null;
  const smallRatio2 =
    validator.metadata?.content?.icon?.small?.ratio2?.toString() ?? null;
  const smallRatio3 =
    validator.metadata?.content?.icon?.small?.ratio3?.toString() ?? null;
  const largeRatio1 =
    validator.metadata?.content?.icon?.large?.ratio1?.toString() ?? null;
  const largeRatio2 =
    validator.metadata?.content?.icon?.large?.ratio2?.toString() ?? null;
  const largeRatio3 =
    validator.metadata?.content?.icon?.large?.ratio3?.toString() ?? null;

  return [
    smallRatio1,
    smallRatio2,
    smallRatio3,
    largeRatio1,
    largeRatio2,
    largeRatio3,
  ];
}

/**
 * FallbackImageSource tries to find any image URL from the validator
 * metadata, and uses the last one it finds as a fallback image source, as
 * it would be the largest quality available.
 */
const FallbackImageSource: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const validatorImages = imageURLsFromValidator(validator);

  const urls = React.useMemo(
    () => filterIterable(validatorImages, (url) => url !== null),
    [validatorImages],
  );

  try {
    const url = lastIterable(urls);
    return <source src={url} />;
  } catch {
    return null;
  }
};

/**
 * ValidatorSources14x14 specifies the source element source set for the
 * 14x14 validator images, if they are available.
 */
const ValidatorSources14x14: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const smallRatio1 = validator.metadata?.content?.icon?.small?.ratio1 ?? null;
  const smallRatio2 = validator.metadata?.content?.icon?.small?.ratio2 ?? null;
  const smallRatio3 = validator.metadata?.content?.icon?.small?.ratio3 ?? null;

  const sources = [
    smallRatio1 && `${smallRatio1} 1x`,
    smallRatio2 && `${smallRatio2} 2x`,
    smallRatio3 && `${smallRatio3} 3x`,
  ];

  const filteredSources = Array.from(
    filterIterable(sources, (s) => s !== null),
  );

  if (filteredSources.length < 0) {
    return null;
  }

  return <source srcSet={filteredSources.join(', ')} />;
};

/**
 * ValidatorSources24x24 specifies the source element source set for the
 * 24x24 validator images, if they are available.
 */
const ValidatorSources24x24: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const largeRatio1 = validator.metadata?.content?.icon?.large?.ratio1 ?? null;
  const largeRatio2 = validator.metadata?.content?.icon?.large?.ratio2 ?? null;
  const largeRatio3 = validator.metadata?.content?.icon?.large?.ratio3 ?? null;

  const sources = [
    largeRatio1 && `${largeRatio1} 1x`,
    largeRatio2 && `${largeRatio2} 2x`,
    largeRatio3 && `${largeRatio3} 3x`,
  ];

  const filteredSources = Array.from(
    filterIterable(sources, (s) => s !== null),
  );

  if (filteredSources.length < 0) {
    return null;
  }

  return <source srcSet={filteredSources.join(', ')} />;
};

/**
 * ValidatorImage14x14 displays a 14x14 image for a validator node, using
 * the available image sources from the validator metadata, or falling back
 * to a blockies image if none are available.
 */
export const ValidatorImage14x14: React.FC = () => {
  return (
    <picture className="validator-image i14x14">
      <ValidatorSources14x14 />
      <FallbackImageSource />

      <FallbackBlockiesImage width="14" height="14" />
    </picture>
  );
};

/**
 * ValidatorImage24x24 displays a 24x24 image for a validator node, using
 * the available image sources from the validator metadata, or falling back
 * to a blockies image if none are available.
 */
export const ValidatorImage24x24: React.FC = () => {
  return (
    <picture className="validator-image i24x24">
      <ValidatorSources24x24 />
      <FallbackImageSource />
      <FallbackBlockiesImage width="24" height="24" />
    </picture>
  );
};

const BlockiesCacheContext = React.createContext<Map<`0x${string}`, string>>(
  new Map<`0x${string}`, string>(),
);

/**
 * FallbackBlockiesImage displays a blockies image as a fallback for
 * the validator image.
 */
const FallbackBlockiesImage: React.FC<
  Omit<React.HTMLProps<HTMLImageElement>, 'src' | 'alt' | 'loading'>
> = (props) => {
  const cache = React.useContext(BlockiesCacheContext);
  const addressText = React.useContext(NodeAddressContext);
  const lCaseAddressText = addressText.toLowerCase() as `0x${string}`;

  const dataURL = React.useMemo(() => {
    if (!lCaseAddressText) {
      return null;
    }

    if (!cache.has(lCaseAddressText)) {
      cache.set(lCaseAddressText, ethereumBlockiesBase64(lCaseAddressText));
    }

    return cache.get(lCaseAddressText) ?? null;
  }, [lCaseAddressText, cache]);

  if (!dataURL) {
    return null;
  }

  return (
    <img
      src={dataURL}
      alt={walletAddressCodec.decode(addressText).toString()}
      loading="lazy"
      {...props}
    />
  );
};
