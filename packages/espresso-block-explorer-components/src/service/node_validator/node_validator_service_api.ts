import NodeValidatorRequest from './requests/node_validator_request';
import NodeValidatorResponse from './responses/node_validator_response';
import type { NodeValidatorAPI } from './types';

/**
 * NodeValidatorService is a formalized definition of the
 * NodeValidatorService API.
 */
export interface NodeValidatorService extends NodeValidatorAPI<
  NodeValidatorRequest,
  NodeValidatorResponse
> {}
