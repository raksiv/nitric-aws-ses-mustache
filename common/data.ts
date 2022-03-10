import { faas } from "@nitric/sdk";

export function marshalHTTPData<T>(ctx: faas.HttpContext): T {
  return _utf8ArrayToJson(ctx.req.data as Uint8Array);
}

export function marshalEventData<T>(ctx: faas.EventContext): T {
  return _utf8ArrayToJson(ctx.req.payload as Uint8Array);
}

export function _utf8ArrayToJson(array: Uint8Array) {
  if (_hasNoValue(array) || array.length === 0) {
    return {};
  } else {
    return JSON.parse(new TextDecoder("utf-8").decode(array));
  }
}

export function marshalQueueData<T>(body: any): T {
  return _hasNoValue(body) ? {} : JSON.parse(body);
}

function _hasNoValue(val: any) {
  return val === null || val === undefined || val === "";
}

export interface EventData {
  value: {
    id: string;
    recipient: string[];
    subject: string;
    template: string;
    message: string;
    data: string;
    timestamp: string;
  };
}
