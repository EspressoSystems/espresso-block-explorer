import { NodeValidatorAPI } from '../types';
import { default as CappuccinoNodeValidatorRequest } from './requests/node_validator_request';
import { default as CappuccinoNodeValidatorResponse } from './responses/node_validator_response';
export interface CappuccinoNodeValidatorAPI extends NodeValidatorAPI<CappuccinoNodeValidatorRequest, CappuccinoNodeValidatorResponse> {
}
