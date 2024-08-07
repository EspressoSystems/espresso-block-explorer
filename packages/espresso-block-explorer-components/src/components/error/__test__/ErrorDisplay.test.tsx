import { ErrorContext } from '@/components/contexts/ErrorProvider';
import BufferFullError from '@/errors/BufferFullError';
import FetchError from '@/errors/FetchError';
import UnimplementedError from '@/errors/UnimplementedError';
import WebSocketError from '@/errors/WebSocketError';
import WebWorkerErrorResponse from '@/errors/WebWorkerErrorResponse';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorDisplay } from '../ErrorDisplay';

describe('ErrorDisplay Component', () => {
  it('should not display anything without an active error', async () => {
    render(
      <ErrorContext.Provider value={null}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(0);
  });

  it('should display an error when an error is present', () => {
    render(
      <ErrorContext.Provider value={new Error('help')}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
  });

  it('should start with text "Unimplemented Error" on unimplemented error', () => {
    render(
      <ErrorContext.Provider value={new UnimplementedError()}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(/^Unimplemented Error/);
  });

  it('should start with text "Fetch Error" on fetch error', () => {
    render(
      <ErrorContext.Provider value={new FetchError({}, 'fetch error')}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(/^Fetch Error/);
  });

  it('should start with text "WebSocket Error" on WebSocket error', () => {
    render(
      <ErrorContext.Provider value={new WebSocketError({}, 'websocket error')}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(/^WebSocket Error/);
  });

  it('should start with text "Native JavaScript Error" on native error', () => {
    render(
      <ErrorContext.Provider value={new TypeError('type')}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(
      /^Native JavaScript Error/,
    );
  });

  it('should start with text "Unhandled Error" on developer error', () => {
    render(
      <ErrorContext.Provider value={new BufferFullError()}>
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(/^Unhandled Error/);
  });

  it('should automatically unwrap proxy response error', () => {
    render(
      <ErrorContext.Provider
        value={new WebWorkerErrorResponse(new FetchError({}, 'fetch error'))}
      >
        <div data-testid="1">
          <ErrorDisplay />
        </div>
      </ErrorContext.Provider>,
    );

    expect(screen.getByTestId('1').children).toHaveLength(1);
    expect(screen.getByTestId('1')).toHaveTextContent(/^Fetch Error/);
  });
});
