import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { InputContainer } from '../../container/container';
import {
  getTextInput,
  interactionFocusInput,
  interactionKeyInInput,
  interactionReplaceText,
  performInputChecks,
  selectTextInInput,
} from '../__shared__/text_editing_shared';
import { TextEditing } from '../text';
import { TextEditingValue } from '../types';

interface ExampleProps {
  startingText?: string;
}

const Example: React.FC<ExampleProps> = (props) => {
  const { startingText, ...rest } = props;
  const [value, setValue] = React.useState(
    new TextEditingValue(startingText ?? ''),
  );
  return (
    <InputContainer>
      <TextEditing
        {...rest}
        value={value}
        onChange={(_event, value) => setValue(value)}
      />
    </InputContainer>
  );
};

const meta: Meta<typeof Example> = {
  title: 'components/HID/Inputs/Text Editing',
  component: Example,
  args: {
    startingText: '',
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const SelectTextInput: Story = {
  args: {},

  play: async ({ step }) => {
    await step(
      'Wait for the Text Input to be present',
      async ({ canvasElement }) => {
        const input = await getTextInput(canvasElement);
        performInputChecks(input);
      },
    );

    await step(
      'Select the Text Input',
      async ({ canvasElement, userEvent }) => {
        await interactionFocusInput(canvasElement, userEvent);
      },
    );

    await step('Type some values', async ({ canvasElement, userEvent }) => {
      await interactionKeyInInput(canvasElement, userEvent, 'Hello, World!');
    });

    await step('Select Text', async ({ canvasElement, userEvent }) => {
      await selectTextInInput(canvasElement, userEvent, 1, 10);
    });

    await step(
      'Replace selected text with new text',
      async ({ canvasElement }) => {
        const inputElement = await getTextInput(canvasElement);
        await interactionReplaceText(inputElement, 'drlow');
      },
    );
  },
};
