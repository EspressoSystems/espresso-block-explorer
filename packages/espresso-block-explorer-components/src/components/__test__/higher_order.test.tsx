import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  addClassNameToComponent,
  addClassToClassName,
  appendClassNameComponent,
} from '../higher_order';
import Text from '../text/Text';

describe('Higher Order Components', () => {
  describe('addClassToClassName', () => {
    it('should combine classNames correctly', () => {
      expect(addClassToClassName(undefined, 'test1')).toEqual('test1');
      expect(addClassToClassName('test1', 'test2')).toEqual('test1 test2');
    });
  });

  describe('addClassNameToComponent', () => {
    it('should have the appropriate className', () => {
      const Comp1 = addClassNameToComponent('div', 'test');
      render(
        <Comp1 data-testid="1">
          <Text text="test" />
        </Comp1>,
      );
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('test');
      expect(element).toHaveClass('test');
    });
  });

  describe('appendClassNameComponent', () => {
    it('should contain the appropriate className', () => {
      const addClassName = appendClassNameComponent('div');
      const Comp1 = addClassName('foo');
      const Comp2 = addClassName('bar');

      render(
        <div>
          <Comp1 data-testid="1">
            <Text text="1" />
          </Comp1>
          <Comp2 data-testid="2">
            <Text text="2" />
          </Comp2>
        </div>,
      );

      const element1 = screen.getByTestId('1');
      const element2 = screen.getByTestId('2');

      expect(element1).toBeInTheDocument();
      expect(element2).toBeInTheDocument();
      expect(element1).toHaveTextContent('1');
      expect(element2).toHaveTextContent('2');
      expect(element1).toHaveClass('foo');
      expect(element1).not.toHaveClass('bar');
      expect(element2).not.toHaveClass('foo');
      expect(element2).toHaveClass('bar');
    });
  });
});
