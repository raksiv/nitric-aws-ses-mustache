import { faas, topic } from "@nitric/sdk";

import { marshalEventData, EventData } from "../common/data";
import { sendEmail, createEmailRequest } from "../common/email";
import * as resources from "../common/resources";
import * as Mustache from "mustache";
import * as dotenv from "dotenv";

topic(resources.messagesTopic).subscribe(notify);

// Notify user handler
async function notify(ctx: faas.EventContext): Promise<faas.EventContext> {
  dotenv.config();
  const ed: EventData = marshalEventData(ctx);

  // Send the email notification
  sendEmail(
    createEmailRequest({
      sender: process.env.SENDER_EMAIL,
      recipient: ed.value.recipient,
      body: "",
      html: Mustache.render(ed.value.template, ed.value.data),
      subject: Mustache.render(ed.value.subject, ed.value.data),
    })
  );
  return ctx;
}
