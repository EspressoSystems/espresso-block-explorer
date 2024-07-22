import { Channel } from '@/async/channel';
import { sleep } from '@/async/sleep';
import { expandIterable, filterIterable } from '@/functional/functional';
import { CappuccinoNodeValidatorAPI } from '../node_validator_api';
import CappuccinoNodeValidatorRequest, {
  Close,
  Connect,
  RequestBlocksSnapshot,
  RequestHistogramSnapshot,
  RequestNodeIdentitySnapshot,
  RequestVotersSnapshot,
  SubscribeLatestBlock,
  SubscribeNodeIdentity,
  SubscribeVoters,
} from '../requests/node_validator_request';
import { CappuccinoConnectionClosed } from '../responses/connection_closed';
import { CappuccinoConnectionConnecting } from '../responses/connection_connecting';
import { CappuccinoConnectionOpened } from '../responses/connection_opened';
import CappuccinoNodeValidatorResponse from '../responses/node_validator_response';
import { cappuccinoNodeValidatorResponseCodec } from '../responses/node_validator_response_codec';

export interface HARFormat {
  log: HARLog;
}

export interface HARLog {
  version: string;
  creator: {
    name: string;
    version: string;
  };
  pages: HARPage[];
  entries: HARLogEntry[];
}

export interface HARPage {
  startedDateTime: string;
  id: string;
  title: string;
  pageTimings: {
    onContentLoad: number;
    onLoad: number;
  };
}

export interface HARLogEntryBase {
  _initiator: {
    type: string;
  };
  _priority: string | null;
  _resourceType: string;
  cache: Record<string, unknown>;
  connection: string;
  pagref: string;
  request: HARRequest;
  response: HARResponse;
  serverIPAddress: string;
  startedDateTime: string;
  time: number;
  timings: Record<
    | 'blocked'
    | 'dns'
    | 'ssl'
    | 'connect'
    | 'send'
    | 'wait'
    | 'receive'
    | '_blocked_queueing',
    number
  >;
}

export interface HARLogEntryWebSocket extends HARLogEntryBase {
  _resourceType: 'websocket';
  _webSocketMessages: HARWebSocketMessage[];
}

export type HARLogEntry = HARLogEntryWebSocket | HARLogEntryBase;

export interface HARRequest {
  method: string;
  url: string;
  httpVersion: string;
  headers: HARHeader[];
  queryString: HARQueryString[];
  cookies: HARCookie[];
  headersSize: number;
  bodySize: number;
}

export interface HARResponse {
  status: number;
  statusText: string;
  httpVersion: string;
  headers: HARHeader[];
  cookies: HARCookie[];
  content: {
    size: number;
    mimeType: string;
    compression: number;
    text: string;
  };
  redirectURL: string;
  headersSize: number;
  bodySize: number;
  _transferSize: number;
  _error: string | null;
}

export interface HARHeader {
  name: string;
  value: string;
}

export interface HARQueryString {
  name: string;
  value: string;
}

export interface HARCookie {
  name: string;
  value: string;
}

export interface HARWebSocketMessage {
  type: 'send' | 'receive';
  time: number;
  opcode: number;
  data: string;
}

// URL expected to be replay:<url>
// Examples:
//   replay:https://example.com/captured.har
//   replay:/node-validator-recording-1.har

export default class ReplayDataCappuccinoNodeValidatorAPI
  implements CappuccinoNodeValidatorAPI
{
  readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;
  readonly requestStream: Channel<CappuccinoNodeValidatorRequest>;
  readonly capturedHAR: HARFormat;

  constructor(
    requestStream: Channel<CappuccinoNodeValidatorRequest>,
    responseStream: Channel<CappuccinoNodeValidatorResponse>,
    capturedHAR: HARFormat,
  ) {
    this.requestStream = requestStream;
    this.responseStream = responseStream;
    this.capturedHAR = capturedHAR;
  }

  get stream(): AsyncIterable<CappuccinoNodeValidatorResponse> {
    return this.responseStream;
  }

  async send(request: CappuccinoNodeValidatorRequest): Promise<void> {
    await this.requestStream.publish(request);
  }

  async startProcessing() {
    this.handleRequests();
  }

  async handleRequests() {
    for await (const request of this.requestStream) {
      await this.handleRequest(request);
    }
  }

  private async handleRequest(request: CappuccinoNodeValidatorRequest) {
    if (request instanceof Connect) {
      await this.handleConnect();
      return;
    }

    if (request instanceof Close) {
      await this.handleClose();
      return;
    }

    if (request instanceof SubscribeLatestBlock) {
      await this.handleSubscribeLatestBlock();
      return;
    }

    if (request instanceof SubscribeNodeIdentity) {
      await this.handleSubscribeNodeIdentity();
      return;
    }

    if (request instanceof SubscribeVoters) {
      await this.handleSubscribeVoters();
      return;
    }

    if (request instanceof RequestBlocksSnapshot) {
      await this.handleRequestBlocksSnapshot();
      return;
    }

    if (request instanceof RequestHistogramSnapshot) {
      await this.handleRequestHistogramSnapshot();
      return;
    }

    if (request instanceof RequestNodeIdentitySnapshot) {
      await this.handleRequestNodeIdentitySnapshot();
      return;
    }

    if (request instanceof RequestVotersSnapshot) {
      await this.handleRequestVotersSnapshot();
      return;
    }
  }

  private async handleConnect() {
    this.responseStream.publish(new CappuccinoConnectionConnecting());
    this.responseStream.publish(new CappuccinoConnectionOpened());
    // Let's start the message replay here.
    const webSocketMessages = expandIterable(
      this.capturedHAR.log.entries,
      (entry) => {
        if (!('_webSocketMessages' in entry)) {
          return [];
        }

        return entry._webSocketMessages;
      },
    );

    const webSocketReceiveMessages = filterIterable(
      webSocketMessages,
      (message) => message.type === 'receive',
    );

    let lastTime: number = 0;
    for (const message of webSocketReceiveMessages) {
      if (lastTime > 0) {
        // Let's sleep and wait for the difference in the message times
        const sleepTime = message.time * 1000 - lastTime * 1000;
        await sleep(sleepTime);
      }
      lastTime = message.time;

      // Alright, let's decode the response and send it to the response stream
      try {
        const response = cappuccinoNodeValidatorResponseCodec.decode(
          JSON.parse(message.data),
        );

        this.responseStream.publish(response);
      } catch (error) {
        console.error(`Failed to decode message: ${message.data}`);
        continue;
      }
    }

    this.responseStream.publish(new CappuccinoConnectionClosed());
  }

  private async handleClose() {}

  private async handleSubscribeLatestBlock() {}

  private async handleSubscribeNodeIdentity() {}

  private async handleSubscribeVoters() {}

  private async handleRequestBlocksSnapshot() {}

  private async handleRequestHistogramSnapshot() {}

  private async handleRequestNodeIdentitySnapshot() {}

  private async handleRequestVotersSnapshot() {}
}
