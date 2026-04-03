import NodeValidatorRequest from './requests/node_validator_request';
import NodeValidatorResponse from './responses/node_validator_response';
import { NodeValidatorAPI as INodeValidatorAPI } from './types';

export interface NodeValidatorAPI extends INodeValidatorAPI<
  NodeValidatorRequest,
  NodeValidatorResponse
> {}
