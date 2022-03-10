import { topic, faas, api, events, collection } from "@nitric/sdk";
import { EventData, marshalEventData } from "../common/data";
import * as resources from "../common/resources";

// Subscribers
topic(resources.messagesTopic).subscribe(addToHistory);

// Fetch the events history handler
export async function fetchEventHistory(
  ctx: faas.HttpContext
): Promise<faas.HttpContext> {
  ctx.res.json({
    output: await resources.msgs.query().fetch(),
  });
  return ctx;
}

// Add event to history handler
async function addToHistory(
  ctx: faas.EventContext
): Promise<faas.EventContext> {
  const ed: EventData = marshalEventData(ctx);
  console.log(`Adding message to event history - ${ed.value.message}.`);
  await resources.msgs.doc(ed.value.id).set({
    message: ed.value.message,
    id: ed.value.id,
    timestamp: ed.value.timestamp,
  });
  return ctx;
}
