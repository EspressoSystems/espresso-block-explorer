import { NodeValidatorAPI } from '../types';
import CappuccinoNodeValidatorRequest from './requests/node_validator_request';
import CappuccinoNodeValidatorResponse from './responses/node_validator_response';

export interface CappuccinoNodeValidatorAPI
  extends NodeValidatorAPI<
    CappuccinoNodeValidatorRequest,
    CappuccinoNodeValidatorResponse
  > {}
