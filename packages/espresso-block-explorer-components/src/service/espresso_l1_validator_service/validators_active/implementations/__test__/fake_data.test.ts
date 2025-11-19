import UnimplementedError from '@/errors/UnimplementedError';
import { describe, expect, it } from 'vitest';
import { ValidatorsActiveAPI } from '../../validators_active_api';
import { FakeDataValidatorsActiveAPI } from '../fake_data';

describe('FakeDataValidatorsActiveAPI', () => {
  const service: ValidatorsActiveAPI = new FakeDataValidatorsActiveAPI();
  it('should resolve', async () => {
    await expect(service.active()).resolves.not.toBeNull();
  });

  it('should resolve', async () => {
    await expect(service.activeFor(5n)).resolves.not.toBeNull();
  });

  it('should throw UnimplementedError', async () => {
    await expect(service.updatesSince(5n)).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
