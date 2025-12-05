import { Divider } from '@/components/layout/divider/divider';
import Text from '@/text/text';
import {
  WithParagraphBase,
  WithParagraphSmall,
  WithParagraphText100,
  WithParagraphText300,
  WithParagraphText500,
  WithParagraphText600,
  WithUiBase,
  WithUiButton,
  WithUiSmall,
  WithUiText100,
  WithUiText300,
  WithUiText500,
  WithUiText600,
} from '@/typography';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const ParagraphBase = WithParagraphBase('div');
const ParagraphSmall = WithParagraphSmall('div');
const ParagraphText100 = WithParagraphText100('div');
const ParagraphText300 = WithParagraphText300('div');
const ParagraphText500 = WithParagraphText500('div');
const ParagraphText600 = WithParagraphText600('div');
const UiBase = WithUiBase('div');
const UiButton = WithUiButton('div');
const UiSmall = WithUiSmall('div');
const UiText100 = WithUiText100('div');
const UiText300 = WithUiText300('div');
const UiText500 = WithUiText500('div');
const UiText600 = WithUiText600('div');

const Example: React.FC = () => (
  <UiText300>
    <div style={{ display: 'flex', gap: '8px' }}>
      <div>
        <Text text="Paragraph" />
        <Divider />
        <ParagraphText100>
          <Text text="Text 100" />
        </ParagraphText100>
        <ParagraphText300>
          <Text text="Text 300" />
        </ParagraphText300>
        <ParagraphText500>
          <Text text="Text 500" />
        </ParagraphText500>
        <ParagraphText600>
          <Text text="Text 600" />
        </ParagraphText600>
        <ParagraphBase>
          <Text text="Base" />
        </ParagraphBase>
        <ParagraphSmall>
          <Text text="Small" />
        </ParagraphSmall>
      </div>
      <div>
        <Text text="UI" />
        <Divider />
        <UiText100>
          <Text text="Text 100" />
        </UiText100>
        <UiText300>
          <Text text="Text 300" />
        </UiText300>
        <UiText500>
          <Text text="Text 500" />
        </UiText500>
        <UiText600>
          <Text text="Text 600" />
        </UiText600>
        <UiBase>
          <Text text="Base" />
        </UiBase>
        <UiSmall>
          <Text text="Small" />
        </UiSmall>
        <UiButton>
          <Text text="Button" />
        </UiButton>
      </div>
    </div>
  </UiText300>
);

const meta: Meta<typeof Example> = {
  title: 'Style Guide/Typography',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Typography: Story = {
  args: {},
};
