import type { NodeValidatorAPI } from '../types';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';

/**
 * CappuccinoNodeValidatorService is a formalized definition of the Cappuccino
 * version of the NodeValidatorService API.
 */
export interface CappuccinoNodeValidatorService extends NodeValidatorAPI<
  CappuccinoNodeValidatorRequest,
  CappuccinoNodeValidatorResponse
> {}
