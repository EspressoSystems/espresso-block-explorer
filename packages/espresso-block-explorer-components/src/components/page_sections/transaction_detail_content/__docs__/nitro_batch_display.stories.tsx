// 0x0000000000000041063b6c5d2fb1529f87a84a77315a8b0b7cd22b0c9892c90efed142787121945c3a4d391d52f577b0db72c4187b4f7138395fde98db621c55425ceba967ce598500000000000003d4fa000000000000009cf89af895e10394a4b000000000000000000073657175656e636572838e539b8468de90c7c080b87104f86e6d8407270e00831e8480948edb00816de3a251448253464a3f1ca25c546bc1888ac7230489e800008082a6dea01f2ccc4f0eaf88a2dcc25b62e659a5fe6593ae319904b721f52959c04a47d137a00b9b7becf1823a71725cf9545a1e276568e1e621f00ce2e361cf76a337227bf9820257

import { stdBase64ArrayBufferCodec } from '@/convert/codec';
import { parseHexString } from '@/convert/hex';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Text from '../../../text/text';
import { HexDumpAndCopyButtons } from '../copy_as';
import {
  extractNitroBatch,
  NitroBatchContext,
  NitroBatchDisplay as NitroBatchDisplayComponent,
} from '../nitro_batch_display';

interface ExampleProps {
  hexString: string;
  base64String: string;
}

const NitroBatchDecoderTool: React.FC<ExampleProps> = (props) => {
  const { hexString, base64String } = props;
  let rawData: null | Uint8Array = null;
  if (hexString) {
    // Try to decode the hex string
    let rawBuffer: ArrayBuffer;
    try {
      rawBuffer = parseHexString(hexString);
    } catch (e) {
      return (
        <Text text={`Error parsing hex string: ${(e as Error).message}`} />
      );
    }

    rawData = new Uint8Array(rawBuffer);
  } else if (base64String) {
    let rawBuffer: ArrayBuffer;
    try {
      rawBuffer = stdBase64ArrayBufferCodec.decode(base64String);
    } catch (e) {
      return (
        <Text text={`Error parsing base64 string: ${(e as Error).message}`} />
      );
    }

    rawData = new Uint8Array(rawBuffer);
  }

  if (rawData) {
    const nitroBatch = extractNitroBatch(rawData);

    if (!nitroBatch) {
      return <Text text="Error: Unable to decode Nitro Batch from input" />;
    }

    return (
      <>
        <HexDumpAndCopyButtons data={rawData.buffer} />
        <br />
        <NitroBatchContext.Provider value={nitroBatch}>
          <NitroBatchDisplayComponent />
        </NitroBatchContext.Provider>
      </>
    );
  }

  return <Text text="No input provided" />;
};

const meta: Meta<typeof NitroBatchDecoderTool> = {
  title: 'Components/Page Sections/Rollups/Nitro Batch Display',
  component: NitroBatchDecoderTool,
};

export default meta;
type Story = StoryObj<typeof NitroBatchDecoderTool>;

export const NitroBatchDisplay: Story = {
  args: {
    hexString:
      '0x0000000000000041063b6c5d2fb1529f87a84a77315a8b0b7cd22b0c9892c90efed142787121945c3a4d391d52f577b0db72c4187b4f7138395fde98db621c55425ceba967ce598500000000000003d4fa000000000000009cf89af895e10394a4b000000000000000000073657175656e636572838e539b8468de90c7c080b87104f86e6d8407270e00831e8480948edb00816de3a251448253464a3f1ca25c546bc1888ac7230489e800008082a6dea01f2ccc4f0eaf88a2dcc25b62e659a5fe6593ae319904b721f52959c04a47d137a00b9b7becf1823a71725cf9545a1e276568e1e621f00ce2e361cf76a337227bf9820257',
    base64String: '',
  },
  argTypes: {
    hexString: {
      control: { type: 'text' },
      description: 'Hex-encoded Nitro Batch data',
    },
    base64String: {
      control: { type: 'text' },
      description: 'Base64-encoded Nitro Batch data',
    },
  },
};
