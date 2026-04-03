import { Sink } from '@/async/sink';
import NodeValidatorResponse from '../responses/node_validator_response';
import { nodeValidatorResponseCodec } from '../responses/node_validator_response_codec';

export class WebSocketMessageHandler implements EventListenerObject {
  private readonly nodeValidatorResponseSink: Sink<NodeValidatorResponse>;

  constructor(nodeValidatorResponseSink: Sink<NodeValidatorResponse>) {
    this.nodeValidatorResponseSink = nodeValidatorResponseSink;
  }

  private decodeMessage(event: MessageEvent) {
    return nodeValidatorResponseCodec.decode(JSON.parse(event.data as string));
  }

  private async relayMessage(message: NodeValidatorResponse) {
    try {
      await this.nodeValidatorResponseSink.send(message);
    } catch (error) {
      console.error(
        'attempt to publish message to response stream failed',
        error,
      );
    }
  }

  async handleEvent(event: MessageEvent) {
    // This is assumed to be a Text type

    try {
      const message = this.decodeMessage(event);
      this.relayMessage(message);
    } catch (error) {
      console.error('Failed to decode server message from web socket', error);
      return;
    }
  }
}
