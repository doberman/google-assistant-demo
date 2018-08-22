# Getting started

This is a guide to get started with the example app provided.
Follow this steps and you'll be up an running on your own agent and backend service!

## Dialogflow

First, you need to create an account on Dialogflow and set up a new project. 
Sign up and follow the guide [here](https://dialogflow.com/docs/getting-started/create-account). You need a Google account first. 

### Create an agent

Follow the guide in previous step and create an agent. Select `en` as language.

### Restore

To get the example app on your agent:

- create a `.zip` file of the `dialogflow-agent-export` directory
- in the [dialogflow console](https://console.dialogflow.com/api-client), navigate **settings** next to the agent name, and then click the `Export and Import` tab
- click **restore** and upload your `.zip` file

### Attach local server

Follow the steps in the readme file to start your server.

- in the dialogflow console, click **Fulfillments** and change the **webhook url** to your local server.
- click `save`

### Try it out in the Actions on Google simulator

Use the link in the right section of the dialogflow console to try it out in the [Actions on Google simulator](https://console.dialogflow.com/api-client/#/assistant_preview)
