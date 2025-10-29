import UnimplementedError from '@/errors/UnimplementedError';
import { FullValidatorSetSnapshot } from '../full_validator_set_snapshot';
import { FullValidatorSetUpdate } from '../full_validator_set_update';
import { ValidatorsAllAPI } from '../validators_all_api';

/**
 * UnimplementedValidatorAllAPI is a stub implementation of the
 * ValidatorsAllAPI interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedValidatorAllAPI implements ValidatorsAllAPI {
  async snapshot(): Promise<FullValidatorSetSnapshot> {
    throw new UnimplementedError();
  }

  async updatesSince(): Promise<FullValidatorSetUpdate> {
    throw new UnimplementedError();
  }
}
