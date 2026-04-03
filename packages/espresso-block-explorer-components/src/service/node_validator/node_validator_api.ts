import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';
import { NodeValidatorAPI } from './types';

export interface CappuccinoNodeValidatorAPI extends NodeValidatorAPI<
  CappuccinoNodeValidatorRequest,
  CappuccinoNodeValidatorResponse
> {}
