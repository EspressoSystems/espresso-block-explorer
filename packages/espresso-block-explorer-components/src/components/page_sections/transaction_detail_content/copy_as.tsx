import { Now } from '@/components/contexts/NowProvider';
import {
  hexArrayBufferCodec,
  stdBase64ArrayBufferCodec,
} from '@/convert/codec/array_buffer';
import { Converter } from '@/convert/codec/convert';
import Text from '@/text/Text';
import React from 'react';
import LabeledButton from '../../hid/buttons/labeled_button/LabeledButton';
import HexDump from '../hex_dump/HexDump';
import './transaction_detail_content.css';

/**
 * CopyAsProps represents the properties for the CopyAs component.
 */
interface CopyAsProps {
  data: ArrayBufferLike;
  encoder: Converter<ArrayBuffer, string>;
  children?: React.ReactNode | React.ReactNode[];
  copiedChildren?: React.ReactNode | React.ReactNode[];
}

/**
 * SHOW_THRESHOLD_MS is the threshold in milliseconds to show the "Copied"
 * message after clicking the button.
 */
const SHOW_THRESHOLD_MS = 1000;

/**
 * CopyAs is a helper component that provides a button to help copy data
 * to the user's clipboard in a specific format.
 *
 * It uses the provided encoder to convert the data into a string format
 * and handles the click event to copy the converted data to the clipboard.
 * If the button is clicked within the SHOW_THRESHOLD_MS, it shows the
 * "Copied" message instead of the original button text.
 */
const CopyAs: React.FC<CopyAsProps> = ({
  data,
  encoder,
  children,
  copiedChildren,
}) => {
  const now = React.useContext(Now);
  const [lastClicked, setLastClicked] = React.useState<Date>(new Date(0));

  if (now.valueOf() - lastClicked.valueOf() < SHOW_THRESHOLD_MS) {
    return <LabeledButton>{copiedChildren ?? children}</LabeledButton>;
  }

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

        setLastClicked(new Date());

        navigator.clipboard.writeText(encoder.convert(data as ArrayBuffer));
      }}
    >
      {children}
    </LabeledButton>
  );
};

/**
 * CopyAsHex is a convenience component that provides a button to copy
 * data as a Hex string.
 */
export const CopyAsHex: React.FC<{ data: ArrayBufferLike }> = ({ data }) => {
  return (
    <CopyAs
      data={data}
      encoder={hexArrayBufferCodec.encoder}
      copiedChildren={<Text text="Copied" />}
    >
      <Text text="Copy as Hex" />
    </CopyAs>
  );
};

/**
 * CopyAsBase64 is a convenience component that provides a button to copy
 * data as a Base64 string.
 */
export const CopyAsBase64: React.FC<{ data: ArrayBufferLike }> = ({ data }) => {
  return (
    <CopyAs
      data={data}
      encoder={stdBase64ArrayBufferCodec.encoder}
      copiedChildren={<Text text="Copied" />}
    >
      <Text text="Copy as Base64" />
    </CopyAs>
  );
};

/**
 * HexDumpAndCopyButtons is a convenience component that provides aHexDump
 * and CopyAsHex and CopyAsBase64 buttons for the provided data.
 */
export const HexDumpAndCopyButtons: React.FC<{ data: ArrayBufferLike }> = ({
  data,
}) => {
  return (
    <>
      <>
        <HexDump value={data} />
        <br />
        <CopyAsHex data={data} />
        &nbsp;
        <CopyAsBase64 data={data} />
      </>
    </>
  );
};
