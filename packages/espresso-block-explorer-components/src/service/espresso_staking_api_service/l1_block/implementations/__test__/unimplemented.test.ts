import UnimplementedError from '@/errors/unimplemented_error';
import { describe, expect, it } from 'vitest';
import { L1BlockAPI } from '../../l1_block_api';
import { UnimplementedL1BlockAPI } from '../unimplemented';

describe('UnimplementedL1BlockAPI', () => {
  const service: L1BlockAPI = new UnimplementedL1BlockAPI();
  it('should throw UnimplementedError', async () => {
    await expect(service.getBlockForHeight(5)).rejects.toThrowError(
      UnimplementedError,
    );
  });
});
