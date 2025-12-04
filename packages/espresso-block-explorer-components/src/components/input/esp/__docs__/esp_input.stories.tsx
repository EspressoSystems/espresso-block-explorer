import { MoneyTextFull } from '@/components/text/money_text_full';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { InputContainer } from '../../container/container';
import { ESPInput as ESPInputComponent } from '../esp_input';

interface ExampleProps {
  initialValue?: null | MonetaryValue;
}

const Example: React.FC<ExampleProps> = (props) => {
  const { initialValue = null } = props;
  const [state, setState] = React.useState(initialValue);
  return (
    <>
      <InputContainer>
        <ESPInputComponent
          id="stake-amount"
          value={state}
          onChange={(_, value) => {
            setState(value);
          }}
        />
      </InputContainer>
      <br />
      <MoneyTextFull money={state ?? MonetaryValue.ESP(0n)} />
    </>
  );
};

const meta: Meta<typeof Example> = {
  title: 'Components/HID/Inputs/ESPInput',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ESPInput: Story = {
  args: {},
};

export const EdgeCase: Story = {
  args: {
    initialValue: MonetaryValue.ESP(100000000000000000000000n),
  },
};
