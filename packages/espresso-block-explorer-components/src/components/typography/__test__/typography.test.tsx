import Text from '@/text/Text';
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
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

const ParagraphText100Div = WithParagraphText100('div');
const ParagraphText300Div = WithParagraphText300('div');
const ParagraphText500Div = WithParagraphText500('div');
const ParagraphText600Div = WithParagraphText600('div');
const ParagraphBaseDiv = WithParagraphBase('div');
const ParagraphSmallDiv = WithParagraphSmall('div');
const UiText100Div = WithUiText100('div');
const UiText300Div = WithUiText300('div');
const UiText500Div = WithUiText500('div');
const UiText600Div = WithUiText600('div');
const UiBaseDiv = WithUiBase('div');
const UiSmallDiv = WithUiSmall('div');
const UiButtonDiv = WithUiButton('div');

describe('Paragraph Text Styles', () => {
  describe('Text 100', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphText100Div data-testid="1">
          <Text text="Text 100" />
        </ParagraphText100Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 100');
      expect(text).toHaveClass('type--paragraph--text-100');
    });
  });

  describe('Text 300', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphText300Div data-testid="1">
          <Text text="Text 300" />
        </ParagraphText300Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 300');
      expect(text).toHaveClass('type--paragraph--text-300');
    });
  });

  describe('Text 500', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphText500Div data-testid="1">
          <Text text="Text 500" />
        </ParagraphText500Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 500');
      expect(text).toHaveClass('type--paragraph--text-500');
    });
  });

  describe('Text 600', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphText600Div data-testid="1">
          <Text text="Text 600" />
        </ParagraphText600Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 600');
      expect(text).toHaveClass('type--paragraph--text-600');
    });
  });

  describe('Base', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphBaseDiv data-testid="1">
          <Text text="Base" />
        </ParagraphBaseDiv>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Base');
      expect(text).toHaveClass('type--paragraph--base');
    });
  });

  describe('Small', () => {
    it('should have the appropriate class', () => {
      render(
        <ParagraphSmallDiv data-testid="1">
          <Text text="Small" />
        </ParagraphSmallDiv>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Small');
      expect(text).toHaveClass('type--paragraph--small');
    });
  });
});

describe('UI Text Styles', () => {
  describe('Text 100', () => {
    it('should have the appropriate class', () => {
      render(
        <UiText100Div data-testid="1">
          <Text text="Text 100" />
        </UiText100Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 100');
      expect(text).toHaveClass('type--ui--text-100');
    });
  });

  describe('Text 300', () => {
    it('should have the appropriate class', () => {
      render(
        <UiText300Div data-testid="1">
          <Text text="Text 300" />
        </UiText300Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 300');
      expect(text).toHaveClass('type--ui--text-300');
    });
  });

  describe('Text 500', () => {
    it('should have the appropriate class', () => {
      render(
        <UiText500Div data-testid="1">
          <Text text="Text 500" />
        </UiText500Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 500');
      expect(text).toHaveClass('type--ui--text-500');
    });
  });

  describe('Text 600', () => {
    it('should have the appropriate class', () => {
      render(
        <UiText600Div data-testid="1">
          <Text text="Text 600" />
        </UiText600Div>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Text 600');
      expect(text).toHaveClass('type--ui--text-600');
    });
  });

  describe('Base', () => {
    it('should have the appropriate class', () => {
      render(
        <UiBaseDiv data-testid="1">
          <Text text="Base" />
        </UiBaseDiv>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Base');
      expect(text).toHaveClass('type--ui--base');
    });
  });

  describe('Small', () => {
    it('should have the appropriate class', () => {
      render(
        <UiSmallDiv data-testid="1">
          <Text text="Small" />
        </UiSmallDiv>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Small');
      expect(text).toHaveClass('type--ui--small');
    });
  });

  describe('Button', () => {
    it('should have the appropriate class', () => {
      render(
        <UiButtonDiv data-testid="1">
          <Text text="Button" />
        </UiButtonDiv>,
      );
      const text = screen.getByTestId('1');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent('Button');
      expect(text).toHaveClass('type--ui--button');
    });
  });
});
