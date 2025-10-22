import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { InputContainer } from '../../container/Container';
import {
  getTextInput,
  interactionFocusInput,
  interactionKeyInInput,
  interactionReplaceText,
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

  play: async ({ canvasElement, step }) => {
    await step('Select the Text Input', async () => {
      await interactionFocusInput(canvasElement);
    });

    await step('Type some values', async () => {
      await interactionKeyInInput(canvasElement, 'Hello, World!');
    });

    const inputElement = await getTextInput(canvasElement);

    await step('Select Text', async () => {
      await selectTextInInput(inputElement, 1, 10);
    });

    await step('Replace selected text with new text', async () => {
      await interactionReplaceText(inputElement, 'drlow');
    });
  },
};
