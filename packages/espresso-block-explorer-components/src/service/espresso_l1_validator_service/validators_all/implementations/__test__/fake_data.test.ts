import UnimplementedError from '@/errors/UnimplementedError';
import { describe, expect, it } from 'vitest';
import { ValidatorsAllAPI } from '../../validators_all_api';
import { FakeDataValidatorsAllAPI } from '../fake_data';

describe('FakeDataValidatorsAllAPI', () => {
  const service: ValidatorsAllAPI = new FakeDataValidatorsAllAPI();
  it('should resolve', async () => {
    await expect(service.snapshot()).resolves.not.toBeNull();
  });

  it('should throw UnimplementedError', async () => {
    await expect(service.updatesSince(new ArrayBuffer(0))).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
