import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { dialogflow } from 'actions-on-google';

// import intent handlers
import { defaultWelcome, defaultFallback, vacationGuide } from './intent-handlers';

const dialogflowApp = dialogflow();

// configure handlers for Dialogflow intents
dialogflowApp.intent('Default Welcome Intent', defaultWelcome);
dialogflowApp.intent('Default Fallback Intent', defaultFallback);
dialogflowApp.intent('Vacation Guide', vacationGuide);
dialogflowApp.intent('Vacation Guide – Month', vacationGuide);

const expressApp = express();
const httpServer = http.createServer(expressApp);
expressApp.use(bodyParser.json(), dialogflowApp);

if (process.env.NODE_ENV !== 'production') {
  process.env.DEBUG = '*';
}

const port = process.env.PORT || 8080;
httpServer.listen(port);
console.log(`Listening on port ${port}`);
