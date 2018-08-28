# Getting started

This is a guide to get started with the example app provided.
Follow these steps and you'll be up an running on your own agent and
backend service for local development!

## Dialogflow

First, you need to create an account on Dialogflow and set up a new
project.

Create a Dialogflow account using this guide:
[here](https://dialogflow.com/docs/getting-started/create-account). Note
that you need a Google account for this.

### Create an agent

Follow the guide in previous step and create an agent. Select `en` as
primary language.

### Restore

To get the example app on your agent:

1. Create a `.zip` file of the `dialogflow-agent-export` directory
1. In the Dialogflow Console for your agent, navigate to Settings (click
   the cogwheel in the top-right corner of the left-hand sidebar.
1. Select the "Export and Import" tab
1. Click "Restore From Zip" and upload your `.zip` file.

### Attach local server

Follow the steps in the [README](README.md) file to start your server.

1. In the Dialogflow Console for your agent, select **Fulfillment** and
  change the **Webhook URL** to the ngrok URL pointing to your local
server.
1. Click `Save`.

### Try it out in the Actions on Google Simulator

*Note: To use Dialogflow with Actions on Google you will need a Google
Cloud project attached to your Dialogflow agent. You can provide this as
part of the agent creation process, or in the Settings pane of your
Dialogflow agent.*

In the right-hand sidebar in the Dialogflow Console there should be "See
how it works in Google Assistant" link. Clicking that will take you to
the Simulator in the Actions on Google Console.
