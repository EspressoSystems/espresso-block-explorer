import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  OverridePathResolver,
  PathResolver,
  PathResolverContext,
} from '../PathResolverProvider';

let localPathResolver: null | PathResolver = null;
const ConsumePagePathProvider: React.FC = () => {
  localPathResolver = React.useContext(PathResolverContext);
  return <div />;
};

beforeEach(() => {
  localPathResolver = null;
});

describe('Path Resolver Provider Context', () => {
  describe('No Provider', () => {
    it('should provide something', () => {
      expect(localPathResolver).toEqual(null);
      render(<ConsumePagePathProvider />);
      expect(localPathResolver).not.toBeNull();

      if (localPathResolver != null) {
        expect(localPathResolver.explorer()).equals('/');
        expect(localPathResolver.blocks()).equals('/blocks');
        expect(localPathResolver.block(0)).equals('/block/0');
        expect(localPathResolver.transactions()).equals('/transactions');
        expect(localPathResolver.transaction(10, 2)).equals(
          '/transaction/10-2',
        );
        expect(localPathResolver.rollUps()).equals('/rollups');
        expect(localPathResolver.rollUp(1234)).equals('/rollup/1234');
      }
    });
  });

  describe('Override Page Path Provider', () => {
    it('should change every second', async () => {
      expect(localPathResolver).toEqual(null);
      render(
        <OverridePathResolver
          pathResolver={{
            explorer(): string {
              return '/';
            },
            blocks(): string {
              return '/bs';
            },
            block(height: number): string {
              return `/b/${height}`;
            },
            transactions(): string {
              return '/ts';
            },
            transaction(height: number, offset: number): string {
              return `/t/${height}-${offset}`;
            },
            transactionsForBlock(height: number): string {
              return `/tb/${height}`;
            },
            rollUps(): string {
              return '/rs';
            },
            rollUp(namespace: number): string {
              return `/r/${namespace}`;
            },
          }}
        >
          <ConsumePagePathProvider />
        </OverridePathResolver>,
      );
      const pathResolver = localPathResolver;
      expect(pathResolver).not.toBeNull();
      if (pathResolver) {
        expect(pathResolver.blocks()).equals('/bs');
      }
    });
  });
});
