import UnimplementedError from '@/errors/UnimplementedError';
import { describe, expect, it } from 'vitest';
import { ValidatorsAllAPI } from '../../validators_all_api';
import { UnimplementedValidatorAllAPI } from '../unimplemented';

describe('UnimplementedValidatorAllAPI', () => {
  const service: ValidatorsAllAPI = new UnimplementedValidatorAllAPI();

  it('should throw UnimplementedError', async () => {
    await expect(service.snapshot()).rejects.toThrowError(UnimplementedError);
    await expect(service.updatesSince(new ArrayBuffer(0))).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
