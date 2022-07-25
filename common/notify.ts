import { faas } from "@nitric/sdk";

import { EventData } from "./data";
import { sendEmail, createEmailRequest } from "./email";
import * as Mustache from "mustache";

// Notify user handler
export async function notify(ctx: faas.EventContext): Promise<faas.EventContext> {
  const ed = ctx.req.json() as EventData

  // Send the email notification
  sendEmail(
    createEmailRequest({
      sender: process.env.SENDER_EMAIL as string,
      recipient: ed.value.recipient,
      body: "",
      html: ed.value.template,
      subject: ed.value.subject,
    })
  );
  return ctx;
}
