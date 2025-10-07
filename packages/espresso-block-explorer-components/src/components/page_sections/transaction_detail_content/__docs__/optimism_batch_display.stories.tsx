import { stdBase64ArrayBufferCodec } from '@/convert/codec';
import { parseHexString } from '@/convert/hex';
import Text from '@/text/Text';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { HexDumpAndCopyButtons } from '../copy_as';
import {
  extractOptimismBatch,
  OptimismBatchContext,
  OptimismBatchDisplay as OptimismBatchDisplayComponent,
} from '../optimism_batch_display';

interface ExampleProps {
  hexString: string;
  base64String: string;
}

const OptimismBatchDecoderTool: React.FC<ExampleProps> = (props) => {
  const { hexString, base64String } = props;
  let rawData: null | Uint8Array = null;
  if (hexString) {
    // Try to decode the hex string
    let rawBuffer: ArrayBuffer;
    try {
      rawBuffer = parseHexString(hexString);
    } catch (e) {
      return <Text text={`Error parsing hex string: ${e!.toString()}`} />;
    }

    rawData = new Uint8Array(rawBuffer);
  } else if (base64String) {
    let rawBuffer: ArrayBuffer;
    try {
      rawBuffer = stdBase64ArrayBufferCodec.decode(base64String);
    } catch (e) {
      return <Text text={`Error parsing base64 string: ${e!.toString()}`} />;
    }

    rawData = new Uint8Array(rawBuffer);
  }

  if (rawData) {
    const optimismBatch = extractOptimismBatch(rawData);

    if (!optimismBatch) {
      return <Text text="Error: Unable to decode Nitro Batch from input" />;
    }

    return (
      <>
        <HexDumpAndCopyButtons data={rawData.buffer} />
        <br />
        <OptimismBatchContext.Provider value={optimismBatch}>
          <OptimismBatchDisplayComponent />
        </OptimismBatchContext.Provider>
      </>
    );
  }

  return <Text text="No input provided" />;
};

const meta: Meta<typeof OptimismBatchDecoderTool> = {
  title: 'Components/Page Sections/Rollups/Optimism Batch Display',
  component: OptimismBatchDecoderTool,
};

export default meta;
type Story = StoryObj<typeof OptimismBatchDecoderTool>;

export const OptimismBatchDisplay: Story = {
  args: {
    hexString: '',
    base64String:
      'ouKsRTBW9da5vF7CTNlrvUNsCWLJl3+g/XseoIoYjyMuuzpxAAUhE5biYSZzb3uSAxqVhAScuayp2zwYmDlfMAD5A8P5Amqg4nLsgMAdr2+bz/VIRQTBn0D/GRh2OQ4BBpqAnDyk4iigHcxN6N7HXXqrhbVntszUGtMSRRuUinQT8KFC/UDUk0eUQgAAAAAAAAAAAAAAAAAAAAAAABGgOw6eQ+zQNjgQozCtXyM40y5i3lcddb6c3+bPwCgpfO+gcL6ULPCATb2hL3CfCLmSeSNu299LLVIz0cM+OgvjiZGgwFBBRwZ3fugQq8OIrmqaZ3IytGm6F/E++d3D9gCU4We5AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHqEA5OHAILKUIRo3uHbiQAAAAD6AAAABqAqoF4PWBBHANEnjpWvKZJBeeFKJnHu7L+xKNaaYZIym4gAAAAAAAAAAIQko/DQoI7Uuq46knvj3qVJlrTViZ+MAedZS/ULF9wedBOIzj0SgICg2Zf7Ljg7QLF9Cd//5Lf/jcN/AvTj5i8vPM775JkCyJig47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFX4SaDicuyAwB2vb5vP9UhFBMGfQP8ZGHY5DgEGmoCcPKTiKCugOBGaHACuJGNVx8esMKXCApR5Jw+gR11XG8wOLdWne2qEaN7h28C5AQh++QEEoOht+rab3ZyDwuVllr16xDcya6uXG2x384w1eZRDTpQAlN6t3q3erd6t3q3erd6t3q3erQABlEIAAAAAAAAAAAAAAAAAAAAAAAAVgICDD0JAgLiwCYmZvgAABVgADF/FAAAAAAAAAAAAAAAAaN7hZgAAAAAAAAArAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAw9n4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATgRmhwAriRjVcfHrDClwgKUeScPoEddVxvMDi3Vp3tqAAAAAAAAAAAAAAAA85/W5RqtiPb0zmq4gnJ5z/+5ImYAAAAAAAAAAAAAAAA=',
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
