import { topic, api, collection } from "@nitric/sdk"

// Collections
export const msgs = collection("msg").for("writing", "reading")

// API
export const mainApi = api("main")

// Topics
export const messagePub = topic("messagesTopic").for("publishing")

export const messageSub = topic("messagesTopic")
