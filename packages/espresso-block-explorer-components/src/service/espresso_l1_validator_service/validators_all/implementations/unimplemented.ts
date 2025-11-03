import UnimplementedError from '@/errors/UnimplementedError';
import { FullNodeSetSnapshot } from '../full_node_set_snapshot';
import { FullNodeSetUpdate } from '../full_node_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * UnimplementedValidatorAllAPI is a stub implementation of the
 * ValidatorsAllAPI interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedValidatorAllAPI implements ValidatorsAllAPI {
  async snapshot(): Promise<FullNodeSetSnapshot> {
    throw new UnimplementedError();
  }

  async updatesSince(): Promise<FullNodeSetUpdate> {
    throw new UnimplementedError();
  }
}
