import { faas } from "@nitric/sdk";
import { EventData } from "./data";
import { msgs } from "./resources";

// Fetch the events history handler
export async function fetchEventHistory(
  ctx: faas.HttpContext
): Promise<faas.HttpContext> {
  ctx.res.json({
    output: await msgs.query().fetch(),
  });
  return ctx;
}

// Add event to history handler
export async function addToHistory(
  ctx: faas.EventContext
): Promise<faas.EventContext> {
  const ed = ctx.req.json() as EventData

  console.log(`Adding message to event history - ${ed.value.message}.`);
  await msgs.doc(ed.value.id).set({
    message: ed.value.message,
    id: ed.value.id,
    timestamp: ed.value.timestamp,
  });
  return ctx;
}
