import { DataContext } from '@/contexts/data_provider';
import { ErrorContext } from '@/contexts/error_provider';
import { LoadingContext } from '@/contexts/loading_provider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { default as React } from 'react';
import { describe, expect, it } from 'vitest';
import { KeepWhileLoading } from '../keep_while_loading';

const PageContext = React.createContext<unknown>(null);
const kContexts = [DataContext, PageContext] as React.Context<unknown>[];

const Shown: React.FC = () => {
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);
  const page = React.useContext(PageContext);
  return (
    <div data-testid="shown">
      {`${loading ? 'loading' : 'ready'} ${String(data)} ${String(page)}`}
    </div>
  );
};

interface State {
  loading: boolean;
  error?: unknown;
  data: unknown;
  page: unknown;
}

function tree(state: State, child: React.ReactNode = <Shown />) {
  return (
    <LoadingContext.Provider value={state.loading}>
      <ErrorContext.Provider value={state.error ?? null}>
        <DataContext.Provider value={state.data}>
          <PageContext.Provider value={state.page}>
            <KeepWhileLoading contexts={kContexts}>{child}</KeepWhileLoading>
          </PageContext.Provider>
        </DataContext.Provider>
      </ErrorContext.Provider>
    </LoadingContext.Provider>
  );
}

const shown = () => screen.getByTestId('shown').textContent;

describe('KeepWhileLoading', () => {
  it('should pass the first load through as it is', () => {
    render(tree({ loading: true, data: null, page: 1 }));
    expect(shown()).toBe('loading null 1');
  });

  it('should keep the last page while the next one loads', () => {
    const { rerender } = render(tree({ loading: false, data: 'a', page: 1 }));
    rerender(tree({ loading: true, data: null, page: 2 }));
    expect(shown()).toBe('ready a 1');

    rerender(tree({ loading: false, data: 'b', page: 2 }));
    expect(shown()).toBe('ready b 2');
  });

  it('should not pair a new page with the old data', () => {
    // A loader can report its old data for a render before it starts loading.
    const { rerender } = render(tree({ loading: false, data: 'a', page: 1 }));
    rerender(tree({ loading: false, data: 'a', page: 2 }));
    expect(shown()).toBe('ready a 1');
  });

  it('should show an error rather than the old page', () => {
    const { rerender } = render(tree({ loading: false, data: 'a', page: 1 }));
    rerender(tree({ loading: false, error: 'boom', data: null, page: 2 }));
    expect(shown()).toBe('ready null 2');
  });

  it('should keep its children mounted while holding on', () => {
    let mounts = 0;
    const Counted: React.FC = () => {
      React.useEffect(() => {
        mounts++;
      }, []);
      return null;
    };

    const { rerender } = render(
      tree({ loading: false, data: 'a', page: 1 }, <Counted />),
    );
    rerender(tree({ loading: true, data: null, page: 2 }, <Counted />));
    rerender(tree({ loading: false, data: 'b', page: 2 }, <Counted />));
    expect(mounts).toBe(1);
  });
});
