import UnimplementedError from '@/errors/UnimplementedError';
import { describe, expect, it } from 'vitest';
import { L1BlockAPI } from '../../l1_block_api';
import { FakeDataL1BlockAPI } from '../fake_data';

describe('FakeDataL1BlockAPI', () => {
  const service: L1BlockAPI = new FakeDataL1BlockAPI();
  it('should throw UnimplementedError', async () => {
    await expect(service.getBlockForHeight(5)).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
