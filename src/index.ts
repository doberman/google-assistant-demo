import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { dialogflow } from 'actions-on-google';

// import intent handlers
import { defaultWelcome, defaultFallback } from './intent-handlers';

const dialogflowApp = dialogflow();

// configure handlers for Dialogflow intents
dialogflowApp.intent('Default Welcome Intent', defaultWelcome);
dialogflowApp.intent('Default Fallback Intent', defaultFallback);

const expressApp = express();
const httpServer = http.createServer(expressApp);
expressApp.use(bodyParser.json(), dialogflowApp);

if (process.env.NODE_ENV !== 'production') {
  process.env.DEBUG = '*';
}

const port = process.env.PORT || 8080;
httpServer.listen(port);
console.log(`Listening on port ${port}`);
