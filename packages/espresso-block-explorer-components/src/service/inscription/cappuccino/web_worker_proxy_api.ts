import UnimplementedError from '@/errors/UnimplementedError';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import { InscriptionAPI } from '../types';

/**
 * WebWorkerInscriptionAPI is an interface that represents interactions with
 * the Inscription API via a proxy Web Worker. This interface allows for various
 * implementations of the Inscriptions API.
 *
 * This can allow for the ability to send Requests to some consumer, and receive
 * a stream of Responses from some producer.
 */
export interface WebWorkerInscriptionAPI
  extends InscriptionAPI<WebWorkerProxyRequest, WebWorkerProxyResponse> {}

/**
 * kInscriptionMessageToSign is a constant string that represents the message
 * that should be signed by the Inscription API.
 */
export const kInscriptionMessageToSign = 'An Infinite Garden has no walls';

/**
 * UnimplementedWebWorkerInscriptionAPI is a class that represents an
 * implementation of the WebWorkerInscriptionAPI whose methods and members
 * throw an UnimplementedError. This class is meant to be used as a placeholder
 * for the Inscription API, and should be replaced with a real implementation.
 */
export class UnimplementedWebWorkerInscriptionAPI
  implements WebWorkerInscriptionAPI
{
  get stream(): AsyncIterable<WebWorkerProxyResponse> {
    throw new UnimplementedError();
  }

  async send() {
    throw new UnimplementedError();
  }
}
