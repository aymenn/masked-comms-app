import type { Request } from "express";
import { ConversationListInstanceCreateOptions } from "twilio/lib/rest/conversations/v1/conversation";

export interface SessionPostBody extends ConversationListInstanceCreateOptions {
  addresses: Array<string>;
}
  
export interface ConversationsPostEventBody {
  AccountSid: string;
  Attributes: string;
  ChatServiceSid: string;
  ConversationSid: string;
  DateCreated: string;
  DateUpdated: string;
  EventType: string;
  MessagingServiceSid: string;
  RetryCount: string;
  Source: string;
  State: string;
}

export interface ActiveProxyAddresses {
  [key: string]: Array<String>;
}

export interface ProxyBindings {
  [key: string]: Array<string>;
}

export interface ConversationParticipant {
  'messagingBinding.address': string;
  'messagingBinding.proxyAddress': string;
}

export interface JoinConferenceParams extends Request {
  params: {
    conferenceName: string
  }
}

export interface ParticipantsToDial[] {
  messagingBinding: {
    address: string
    proxyAddress: string
  }
}