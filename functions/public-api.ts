import { uuid } from "uuidv4";
import { faas } from "@nitric/sdk";
import { mainApi, messagePub} from "../common/resources";
import { fetchEventHistory } from "../common/event-history";

mainApi.get("/events", fetchEventHistory);
mainApi.get("/welcome/:name", publishMessageEvent);

// Publish the message on the messages Topic
async function publishMessageEvent(
  ctx: faas.HttpContext
): Promise<faas.HttpContext> {

  const { name } = ctx.req.params
  const welcomeMsg = `Glad you're here developing with us - ${name}.`;
  const subject = `Welcome to Nitric!`;

  const template = `<!DOCTYPE html PUBLIC>
  <html lang="en">
      <title>Welcome to Nitric!</title>
      </head>
      <body>
          Hey {{ name }}!,<br><br>
          Team Nitric would like to thank you for trying this example.<br>                 
          We’d love to hear what you think of our framework and if there is anything we can improve!<br><br>
          Have a great day!<br>
          The Nitric Team.</p>
      </body>
  </html>`;

 await messagePub.publish({
    payload: {
      value: {
        id: uuid(),
        timestamp: Date.now().toString(),
        recipient: [process.env.SYS_ADMIN_EMAIL],
        subject: subject,
        template: template,
        message: welcomeMsg,
        data: {
          name: name,
        },
      },
    },
  });

  // Return the message in the response
  ctx.res.json({
    message: welcomeMsg,
  });
  return ctx;
}
