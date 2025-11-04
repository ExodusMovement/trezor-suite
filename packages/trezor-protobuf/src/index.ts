export { parseConfigure, decodeMessage, encodeMessage, loadDefinitions, protobuf } from './index-static';

export * as Messages from './messages';

// Re-export the MessageResponse type for compatibility
export type { MessageResponse, MessageResponseUnion } from './messages';
