import { InscriptionAPI } from '../types';
import CappuccinoInscriptionRequest from './requests/inscription_request';
import CappuccinoInscriptionResponse from './responses/inscription_response';

/**
 * CappuccinoInscriptionAPI is an interface that represents the Inscription API.
 * This is a simplified interface that represents the ability to send Requests
 * to some consumer, and receive a stream of Responses from some producer.
 */
export interface CappuccinoInscriptionAPI
  extends InscriptionAPI<
    CappuccinoInscriptionRequest,
    CappuccinoInscriptionResponse
  > {}
