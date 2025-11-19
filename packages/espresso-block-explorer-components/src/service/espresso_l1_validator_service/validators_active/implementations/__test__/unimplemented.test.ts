import UnimplementedError from '@/errors/UnimplementedError';
import { describe, expect, it } from 'vitest';
import { ValidatorsActiveAPI } from '../../validators_active_api';
import { UnimplementedActiveValidatorsAPI } from '../unimplemented';

describe('UnimplementedActiveValidatorsAPI', () => {
  const service: ValidatorsActiveAPI = new UnimplementedActiveValidatorsAPI();
  it('should throw UnimplementedError', async () => {
    await expect(service.active()).rejects.toThrowError(UnimplementedError);

    await expect(service.activeFor(5n)).rejects.toThrowError(
      UnimplementedError,
    );

    await expect(service.updatesSince(5n)).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
