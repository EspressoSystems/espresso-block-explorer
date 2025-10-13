import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';
import CheckCircleFilled from '../CheckCircleFilled';
import ChevronDown from '../ChevronDown';
import ChevronUp from '../ChevronUp';
import DiscordIcon from '../DiscordIcon';
import EspressoLogo from '../EspressoLogo';
import EspressoLogoAndTitle from '../EspressoLogoAndTitle';
import InfoCircle from '../InfoCircle';
import MediumIcon from '../MediumIcon';
import Menu from '../Menu';
import SearchGlass from '../SearchGlass';
import TwitterIcon from '../TwitterIcon';

describe('Icons Test', () => {
  describe('ArrowLeft', () => {
    it('should be in the document', () => {
      render(<ArrowLeft data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('ArrowRight', () => {
    it('should be in the document', () => {
      render(<ArrowRight data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('ArrowRight', () => {
    it('should be in the document', () => {
      render(<ArrowRight data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('CheckCircle', () => {
    it('should be in the document', () => {
      render(<CheckCircleFilled data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('ChevronDown', () => {
    it('should be in the document', () => {
      render(<ChevronDown data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('ChevronUp', () => {
    it('should be in the document', () => {
      render(<ChevronUp data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('DiscordIcon', () => {
    it('should be in the document', () => {
      render(<DiscordIcon data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('EspressoLogo', () => {
    it('should be in the document', () => {
      render(<EspressoLogo data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('EspressoLogoAndTitle', () => {
    it('should be in the document', () => {
      render(<EspressoLogoAndTitle data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('InfoCircle', () => {
    it('should be in the document', () => {
      render(<InfoCircle data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('MediumIcon', () => {
    it('should be in the document', () => {
      render(<MediumIcon data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('Menu', () => {
    it('should be in the document', () => {
      render(<Menu data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('SearchGlass', () => {
    it('should be in the document', () => {
      render(<SearchGlass data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
  describe('TwitterIcon', () => {
    it('should be in the document', () => {
      render(<TwitterIcon data-testid="1" />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
    });
  });
});
