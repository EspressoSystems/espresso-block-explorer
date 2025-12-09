import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { filterIterable, lastIterable } from '@/functional/functional';
import { NodeSetEntry } from '@/service/espresso_l1_validator_service/common/node_set_entry';
import blockies from 'ethereum-blockies';
import React from 'react';
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
    <picture>
      <ValidatorSources14x14 />
      <FallbackImageSource />

      <ProvideValidatorAddress>
        <FallbackBlockiesImage14x14 />
      </ProvideValidatorAddress>
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
    <picture>
      <ValidatorSources24x24 />
      <FallbackImageSource />
      <ProvideValidatorAddress>
        <FallbackBlockiesImage24x24 />
      </ProvideValidatorAddress>
    </picture>
  );
};

const Blockies14x14CacheContext = React.createContext<
  Map<`0x${string}`, string>
>(new Map<`0x${string}`, string>());

const Blockies24x24CacheContext = React.createContext<
  Map<`0x${string}`, string>
>(new Map<`0x${string}`, string>());

const ValidatorAddressContext = React.createContext<`0x${string}`>('0x');

const ProvideValidatorAddress: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const validator = React.useContext(ValidatorNodeContext);
  const addressText = hexArrayBufferCodec.encode(validator.address);

  return (
    <ValidatorAddressContext.Provider value={addressText}>
      {children}
    </ValidatorAddressContext.Provider>
  );
};

/**
 * FallbackBlockiesImage14x14 displays a blockies image as a fallback for
 * the 14x14 validator image.
 */
const FallbackBlockiesImage14x14: React.FC = () => {
  const cache = React.useContext(Blockies14x14CacheContext);
  const addressText = React.useContext(ValidatorAddressContext);

  const dataURL = React.useMemo(() => {
    if (!cache.has(addressText)) {
      cache.set(
        addressText,
        blockies
          .create({
            seed: addressText,
            size: 14,
            scale: window.devicePixelRatio,
          })
          .toDataURL(),
      );
    }

    return cache.get(addressText)!;
  }, [addressText, cache]);

  return (
    <img
      className="validator-image i14x14"
      src={dataURL}
      alt={addressText}
      loading="lazy"
    />
  );
};

/**
 * FallbackBlockiesImage24x24 displays a blockies image as a fallback for
 * the 24x24 validator image.
 */
const FallbackBlockiesImage24x24: React.FC = () => {
  const cache = React.useContext(Blockies24x24CacheContext);
  const addressText = React.useContext(ValidatorAddressContext);

  const dataURL = React.useMemo(() => {
    if (!cache.has(addressText)) {
      cache.set(
        addressText,
        blockies
          .create({
            seed: addressText,
            size: 24,
            scale: window.devicePixelRatio,
          })
          .toDataURL(),
      );
    }

    return cache.get(addressText)!;
  }, [addressText, cache]);

  return (
    <img
      className="validator-image i24x24"
      src={dataURL}
      alt={addressText}
      loading="lazy"
    />
  );
};
