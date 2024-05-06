import { numberCodec } from '@/convert/codec/number';
import { describe, expect, it } from 'vitest';
import { validateAndExpandResponse } from '../response_validators';

describe('Response Validators', () => {
  const encoded = JSON.stringify(numberCodec.encode(42));

  it('should not throw any error', () => {
    const response = new Response(encoded, {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });

    expect(
      validateAndExpandResponse(numberCodec.decoder)(response),
    ).resolves.not.toThrow();
  });

  it('should throw a BadResponseServerError', () => {
    const response = new Response(encoded, {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });

    expect(
      validateAndExpandResponse(numberCodec.decoder)(response),
    ).rejects.toThrow();
  });

  it('should throw a BadResponseClientError', () => {
    const response = new Response(encoded, {
      status: 400,
      headers: {
        'content-type': 'application/json',
      },
    });

    expect(
      validateAndExpandResponse(numberCodec.decoder)(response),
    ).rejects.toThrow();
  });

  it('should throw a BadResponseError', () => {
    const response = new Response(encoded, {
      status: 300,
      headers: {
        'content-type': 'application/json',
      },
    });

    expect(
      validateAndExpandResponse(numberCodec.decoder)(response),
    ).rejects.toThrow();
  });

  it('should throw a ResponseContentTypeIsNotApplicationJSONError', () => {
    const response = new Response('hello there', {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    });

    expect(
      validateAndExpandResponse(numberCodec.decoder)(response),
    ).rejects.toThrow();
  });
});
