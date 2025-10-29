import UnimplementedError from '@/errors/UnimplementedError';
import { ActiveValidatorSetSnapshot } from '../active_validator_set_snapshot';
import { ActiveValidatorSetUpdate } from '../active_validator_set_update';
import { ValidatorsActiveAPI } from '../validators_active_api';

/**
 * UnimplementedActiveValidatorsAPI is a stub implementation of the
 * ValidatorsActiveAPI interface that throws UnimplementedError for all methods.
 *
 * It is provided for convenience to serve as a default, and to allow partial
 * implementations to extend it without having to implement all methods.
 */
export class UnimplementedActiveValidatorsAPI implements ValidatorsActiveAPI {
  async active(): Promise<ActiveValidatorSetSnapshot> {
    throw new UnimplementedError();
  }

  async updatesSince(): Promise<ActiveValidatorSetUpdate> {
    throw new UnimplementedError();
  }
}
