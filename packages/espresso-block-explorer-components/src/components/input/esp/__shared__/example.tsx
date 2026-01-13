import { Meta } from '@storybook/react-vite';
import { MoneyTextFull } from '@/components/text/money_text_full';
import { bigintCodec } from '@/convert/codec/bigint';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ESPInput } from '../esp_input';

export interface ExampleProps {
  initialValue?: null | string;
}

export const Example: React.FC<ExampleProps> = (props) => {
  const { initialValue = null } = props;
  const [state, setState] = React.useState(
    !initialValue ? null : MonetaryValue.ESP(bigintCodec.decode(initialValue)),
  );
  return (
    <>
      <div>
        <style>
          {`
        .esp-input-container {
          display: grid;
          grid-template-columns: auto 1fr;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 32px;
          align-items: center;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }
        .esp-input-container .currency-code{
          position: unset !important;
          padding: 8px;
        }
        .esp-input-container.currency-prefix {
          grid-template-columns: auto 1fr;
        }
        .esp-input-container.currency-suffix {
          grid-template-columns: 1fr auto;
        }
        .esp-input-container input {
          font-size: inherit;
          border: 0;
          border-radius: 8px;
          box-sizing: border-box;
        }
        `}
        </style>
        <ESPInput
          id="stake-amount"
          value={state}
          onChange={(_, value) => {
            setState(value);
          }}
        />
      </div>
      <br />
      <div title={(state ?? MonetaryValue.ESP(0n)).toString()}>
        <MoneyTextFull money={state ?? MonetaryValue.ESP(0n)} />
      </div>
    </>
  );
};

export const exampleMeta: Meta<typeof Example> = {
  component: Example,
  args: {
  },
  argTypes: {
    initialValue: {
      type: 'string',
    },
  },
};

