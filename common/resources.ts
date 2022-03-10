import { topic, faas, api, events, collection } from "@nitric/sdk";

// Collections
export const msgs = collection("msg").for("writing", "reading");

// API
export const mainApi = api("main");

// Topics
export const messagesTopic: string = "messagesTopic";
